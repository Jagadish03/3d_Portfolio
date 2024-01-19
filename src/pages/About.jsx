import React from 'react'
import { skills } from '../constants'

function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello,I'm <span className='blue-gradient_text font-semibold drop-shadow'>
          Jagadish
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-50"> 
        <p>Motivated front-end developer with expertise in HTML, CSS, and JavaScript,
          complemented by a strong foundation in backend technologies including Express,
          Node.js, and MongoDB. Completed a specialized course in the MERN stack.
          Proven ability to create visually appealing, responsive interfaces, and contribute
          to full-stack development projects
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
