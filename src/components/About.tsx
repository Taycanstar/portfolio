/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex  items-center h-screen justify-around px-64">
        <h1 className="text-8xl font-extralight">About</h1>
        <div className="flex flex-col ml-16"> {/* Added margin-left for spacing */}
            <h1 className="text-xl font-extralight">I'm a tech and space enthusiast, constantly exploring the ever-evolving world of AI, design, and engineering. My professional journey spans from creating intuitive UI/UX designs to delving into the complexities of data science, machine learning, and full-stack development. I love the challenge of turning innovative ideas into reality, regardless of the technical domain. Beyond the digital realm, I enjoy martial arts, playing the piano, strumming the guitar, and losing myself in the captivating storytelling of Christopher Nolan's films. </h1>
            
        </div>
    </div>
  )
}

export default About