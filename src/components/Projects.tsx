/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col h-screen py-8 md:py-16 lg:py-32 px-4 md:px-16 lg:px-64">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6">Publicly Deployed Projects</h1>
    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8"> 
        <div className="flex flex-col">
            <a href="https://apps.apple.com/us/app/maxticker/id6469399546" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-extralight thin-underline">
                <span>Maxticker</span>
            </a>
            <p className="text-base md:text-lg font-extralight mt-2 md:mt-4">Time management mobile app. Supports multiple timers with personalized analytics and insights. Plus subscription available for a more immersive experience and in-app purchases. Led the entire creative process and engineered both the frontend and backend architecture.</p>
        </div>
        <div className="flex flex-col">
            <a href="https://linktr.ee/kweeble" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-extralight thin-underline">
                <span>Kweeble</span>
            </a>
            <p className="text-base md:text-lg font-extralight mt-2 md:mt-4">Events hub mobile app tailored for college students. Integrated with Google Maps for a seamless user experience. Customizable user profiles and authentication. Spearheaded entire software lifecycle and designed end to end user interface/experience.</p>
        </div>
    </div>
</div>
  )
}

export default Projects