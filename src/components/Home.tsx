import React, {useState, useEffect} from 'react'

type Props = {}

const customBlinkStyle = {
    animation: `blink 1s linear infinite`,
  };


const TypewriterEffect: React.FC = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [text, setText] = useState("");
    const phrases = ["Software Engineer", "Technologist", "AI Engineer", "UI/UX Designer", "Mobile Developer", "Data Scientist"];
    
  
    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
  
    useEffect(() => {
      const writeLoop = async () => {
        let sleepTime = 100;
        let curWord = phrases[phraseIndex];
  
        for (let i = 0; i < curWord.length; i++) {
          setText(curWord.substring(0, i + 1));
          await sleep(sleepTime);
        }
  
        await sleep(sleepTime * 10);
  
        for (let i = curWord.length; i > 0; i--) {
          setText(curWord.substring(0, i - 1));
          await sleep(sleepTime);
        }
  
        await sleep(sleepTime * 5);
  
        if (phraseIndex === phrases.length - 1) {
          setPhraseIndex(0);
        } else {
          setPhraseIndex(phraseIndex + 1);
        }
      };
  
      writeLoop();
    }, [phraseIndex]);
  
    // Get the longest phrase to use as a placeholder
    const longestPhrase = phrases.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );
  
    return (
      <span style={{position: 'relative',
        display: 'inline-block'}}>
        <span style={{visibility:'hidden'}}>{longestPhrase}</span>
        <span style={{position: 'absolute', left:0, top:0}}>
          {text}
            <span className="text-white" style={customBlinkStyle}>|</span>
        </span>
      </span>
    );
}
const Home = (props: Props) => {
    

    
  return (
    <div className="flex  items-center h-screen justify-around">
        <h1 className="text-8xl font-extralight">Dimi N.</h1>
        <div className="flex flex-col"> {/* Added margin-left for spacing */}
            <h1 className="text-6xl font-extralight">
                <TypewriterEffect/>
            </h1>
            
        </div>
    </div>
  )
}

export default Home