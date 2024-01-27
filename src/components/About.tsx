/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-8 lg:flex-row lg:justify-around lg:items-center lg:px-16 xl:px-64 text-center lg:text-left">
        <h1 className="text-4xl lg:text-8xl font-extralight mb-2 lg:mb-0">About</h1>
        <div className="text-lg lg:text-xl font-extralight lg:ml-16 mt-12 lg:mt-0"> {/* Added mt-12 for smaller devices */}
            <p>I'm a tech and space enthusiast, constantly exploring the ever-evolving world of AI, design, and engineering. My professional journey spans from creating intuitive UI/UX designs to delving into the complexities of data science, machine learning, and full-stack development. I love the challenge of turning innovative ideas into reality, regardless of the technical domain. Beyond the digital realm, I enjoy martial arts, playing the piano, strumming the guitar, and losing myself in the captivating storytelling of Christopher Nolan's films.</p>
        </div>
    </div>
      );
}

export default About