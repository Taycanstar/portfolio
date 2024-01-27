/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const Links = (props: Props) => {
  return (
<div className="flex flex-col justify-center items-center h-screen px-8 text-center lg:flex-row lg:justify-around lg:items-center lg:px-16 xl:px-64">
        <h1 className="text-4xl lg:text-8xl font-extralight mb-6 lg:mb-0">Links</h1>
        <div className="flex flex-col space-y-4"> 
            <a href="https://www.linkedin.com/in/diminunez/" target="_blank" rel="noopener noreferrer" className="text-lg font-extralight thin-underline">
                <span>Linkedin</span>
            </a>

            <a href="https://github.com/Taycanstar" target="_blank" rel="noopener noreferrer" className="text-lg font-extralight thin-underline">
                <span>Github</span>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-extralight thin-underline">
                <span>Resume</span>
            </a>

            <a href="https://apps.apple.com/us/app/maxticker/id6469399546" target="_blank" rel="noopener noreferrer" className="text-lg font-extralight thin-underline">
                <span>Maxticker</span>
            </a>

            <a href="https://linktr.ee/kweeble" target="_blank" rel="noopener noreferrer" className="text-lg font-extralight thin-underline">
                <span>Kweeble</span>
            </a>
        </div>
    </div>
  )
}

export default Links