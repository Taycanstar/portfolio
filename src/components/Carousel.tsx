// import React, { useState, useEffect, useCallback, useRef, CSSProperties } from 'react';
// import HomePage from '@/components/Home';
// import AboutPage from '@/components/About';
// import ProjectsPage from '@/components/Projects';
// import LinksPage from '@/components/Links';

// type CarouselProps = {
//     activeIndex: number;
//   }

//   const Carousel: React.FC<CarouselProps> = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [lastActiveIndex, setLastActiveIndex] = useState<number>(0);
//   const lastScrollTime = useRef<Date | null>(null);
//   const pages: JSX.Element[] = [
//     <HomePage key="home" />,
//     <AboutPage key="about" />,
//     <ProjectsPage key="project" />,
//     <LinksPage key="links" />
//   ];

//   const updateActiveIndexFromOutside = (index: number) => {
//     setActiveIndex(index);
//     // Add any other logic needed when the index changes
//   };

//   const handleScroll = useCallback(
//     (event: WheelEvent) => {
//       event.preventDefault();

//       const now = new Date();
//       if (!lastScrollTime.current || now.getTime() - lastScrollTime.current.getTime() > 1000) {
//         if (event.deltaY > 0 && activeIndex < pages.length - 1) {
//           setLastActiveIndex(activeIndex);
//           setActiveIndex(activeIndex + 1);
//         } else if (event.deltaY < 0 && activeIndex > 0) {
//           setLastActiveIndex(activeIndex);
//           setActiveIndex(activeIndex - 1);
//         }

//         lastScrollTime.current = now;
//       }
//     },
//     [activeIndex, pages.length]
//   );

//   useEffect(() => {
//     const wheelHandler = (e: WheelEvent) => handleScroll(e);
//     window.addEventListener('wheel', wheelHandler, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', wheelHandler);
//     };
//   }, [handleScroll]);

//   const carouselStyle: CSSProperties = {
//     position: 'relative',
//     overflow: 'hidden',
//     height: '100vh',
//     width: '100%'
//   };

//   const isMovingForward = activeIndex > lastActiveIndex;

//   const pageStyle = (index: number): CSSProperties => {
//     const isActive = index === activeIndex;
//     const isPrevious = index === activeIndex - 1;
//     const isNext = index === activeIndex + 1;

//     let zIndex, opacity, transform;

//     if (isActive) {
//       zIndex = 3; // Active page on top
//       opacity = 1; // Fully visible
//       transform = 'translateY(0%)'; // Normal position
//     } else if (isPrevious) {
//       zIndex = 2; // Previous page just below the active page
//       opacity = 0.5; // Partially visible
//       transform = isMovingForward ? 'translateY(-100%)' : 'translateY(100%)';
//     } else if (isNext) {
//       zIndex = 2; // Next page just below the active page
//       opacity = 0.5; // Partially visible
//       transform = 'translateY(100%)'; // Positioned below the view
//     } else {
//       zIndex = 1; // Other pages behind
//       opacity = 0; // Completely hidden
//       transform = 'translateY(100%)'; // Positioned off-screen
//     }

//     return {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       transition: 'opacity 0.3s ease-in-out, transform 0.9s ease-in-out',
//       opacity: opacity,
//       transform: transform,
//       zIndex: zIndex
//     };
//   };

//   return (
//     <div style={carouselStyle}>
//       {pages.map((Page, index) => (
//         <div key={index} style={pageStyle(index)}>
//           {Page}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle, CSSProperties } from 'react';
import HomePage from '@/components/Home';
import AboutPage from '@/components/About';
import ProjectsPage from '@/components/Projects';
import LinksPage from '@/components/Links';

export interface CarouselHandle {
  updateActiveIndex: (index: number) => void;
}

const Carousel = forwardRef<CarouselHandle>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number>(0);
  const lastScrollTime = useRef<Date | null>(null);
  const pages: JSX.Element[] = [
    <HomePage key="home" />,
    <AboutPage key="about" />,
    <ProjectsPage key="project" />,
    <LinksPage key="links" />
  ];

  useImperativeHandle(ref, () => ({
    updateActiveIndex: (index: number) => {
      setActiveIndex(index);
      // Additional logic if needed
    }
  }));

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    touchEndX.current = event.changedTouches[0].clientX;
    handleSwipe();
  }, []);

  const handleSwipe = useCallback(() => {
    if (touchEndX.current < touchStartX.current && activeIndex < pages.length - 1) {
      setLastActiveIndex(activeIndex);
      setActiveIndex(activeIndex + 1);
    } else if (touchEndX.current > touchStartX.current && activeIndex > 0) {
      setLastActiveIndex(activeIndex);
      setActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, pages.length]);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      const now = new Date();
      if (!lastScrollTime.current || now.getTime() - lastScrollTime.current.getTime() > 1000) {
        if (event.deltaY > 0 && activeIndex < pages.length - 1) {
          setLastActiveIndex(activeIndex);
          setActiveIndex(activeIndex + 1);
        } else if (event.deltaY < 0 && activeIndex > 0) {
          setLastActiveIndex(activeIndex);
          setActiveIndex(activeIndex - 1);
        }

        lastScrollTime.current = now;
      }
    },
    [activeIndex, pages.length]
  );

  useEffect(() => {
    // Existing wheel event listener
    const wheelHandler = (e: WheelEvent) => handleScroll(e);
    window.addEventListener('wheel', wheelHandler, { passive: false });

    // Touch event listeners
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', wheelHandler);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleScroll, handleTouchStart, handleTouchEnd]);


 

//   useEffect(() => {
//     const wheelHandler = (e: WheelEvent) => handleScroll(e);
//     window.addEventListener('wheel', wheelHandler, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', wheelHandler);
//     };
//   }, [handleScroll]);

  const carouselStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    width: '100%'
  };

  const isMovingForward = activeIndex > lastActiveIndex;

  const pageStyle = (index: number): CSSProperties => {
    const isActive = index === activeIndex;
    const isPrevious = index === activeIndex - 1;
    const isNext = index === activeIndex + 1;

    let zIndex, opacity, transform;

    if (isActive) {
      zIndex = 3; // Active page on top
      opacity = 1; // Fully visible
      transform = 'translateY(0%)'; // Normal position
    } else if (isPrevious) {
      zIndex = 2; // Previous page just below the active page
      opacity = 0.5; // Partially visible
      transform = isMovingForward ? 'translateY(-100%)' : 'translateY(100%)';
    } else if (isNext) {
      zIndex = 2; // Next page just below the active page
      opacity = 0.5; // Partially visible
      transform = 'translateY(100%)'; // Positioned below the view
    } else {
      zIndex = 1; // Other pages behind
      opacity = 0; // Completely hidden
      transform = 'translateY(100%)'; // Positioned off-screen
    }

    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transition: 'opacity 0.3s ease-in-out, transform 0.9s ease-in-out',
      opacity: opacity,
      transform: transform,
      zIndex: zIndex
    };
  };

  return (
    <div style={carouselStyle}>
      {pages.map((Page, index) => (
        <div key={index} style={pageStyle(index)}>
          {Page}
        </div>
      ))}
    </div>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
