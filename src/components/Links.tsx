/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const Links = (props: Props) => {
  return (
    <div className="flex  items-center h-screen justify-around px-64">
        <h1 className="text-8xl font-extralight">Links</h1>
        <div className="flex flex-col"> {/* Added margin-left for spacing */}
        <div className="py-2">     
            <a href="https://www.linkedin.com/in/diminunez/"  target="_blank" rel="noopener noreferrer" className="text-md font-extralight thin-underline">
        <span>Linkedin</span>
        </a>
            </div>

            <div className="py-2">     
            <a href="https://github.com/Taycanstar"  target="_blank" rel="noopener noreferrer" className="text-md font-extralight thin-underline">
        <span>Github</span>
        </a>
            </div>
            
        <div className="py-2">     
            <a href="/resume.pdf"  target="_blank" rel="noopener noreferrer" className="text-md font-extralight thin-underline">
        <span>Resume</span>
        </a>
            </div>
            
            
            
            <div className="py-2">     
            <a href="https://apps.apple.com/us/app/maxticker/id6469399546"  target="_blank" rel="noopener noreferrer" className="text-md font-extralight thin-underline">
        <span>Maxticker</span>
        </a>
            </div>
            <div className="py-2">     
            <a href="https://linktr.ee/kweeble"  target="_blank" rel="noopener noreferrer" className="text-md font-extralight thin-underline">
        <span>Kweeble</span>
        </a>
            </div>
           
        </div>
    </div>
  )
}

export default Links