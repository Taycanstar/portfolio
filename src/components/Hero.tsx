import React from 'react'

type Props = {
  children?: React.ReactNode; // This type allows you to pass in any valid React element or component.
}

const Hero = ({ children }:any) => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw'  }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
          pointerEvents: 'none',
         
        }}
        className="hero-video">
        <source src="/videos/pk.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  )
}

export default Hero;
