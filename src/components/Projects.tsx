/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col  h-screen py-32 px-64">
        <h1 className="text-6xl font-extralight">Publicly Deployed Projects</h1>
        <div className="flex justify-between py-24"> 
        <div className="flex flex-col">
        <a href="https://apps.apple.com/us/app/maxticker/id6469399546"  target="_blank" rel="noopener noreferrer" className="text-xl font-extralight thin-underline">
        <span>Maxticker</span>
        </a>
        <h1 className="text-xl font-extralight">Time management mobile app. Supports multiple timers with personalized analytics and insights. Plus subscription available for a more immersive experience and in-app purchases. Led the entire creative process and engineered both the frontend and backend architecture. </h1>
        </div>
        <div className="flex flex-col px-8">
        <a href="https://linktr.ee/kweeble" target="_blank" rel="noopener noreferrer" className="text-xl font-extralight thin-underline"> <span>Kweeble</span></a>
        <h1 className="text-xl font-extralight">Events hub mobile app tailored for college students. Integrated with Google Maps for a seamless user experience. Customizable user profiles and authentication. Spearheaded entire software lifecycle and designed end to end user interface/experience. </h1>
        </div>
            
            
        </div>
    </div>
  )
}

export default Projects