import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>
          Jagadish 
        </span>👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500"> 
        <p>Motivated front-end developer with expertise in HTML, CSS, and JavaScript,
          complemented by a strong foundation in backend technologies including Express,
          Node.js, and MongoDB. Completed a specialized course in the MERN stack.
          Proven ability to create visually appealing, responsive interfaces, and contribute
          to full-stack development projects
        </p>
      </div>

{/* //* about the Skills */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
{/* //* Experience */ }
      
      <div className='py-16'>
        <h3 className='subhead-text'> Experience And Education</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>I am a recent graduate from KLS, VISHWANATHRAO DESHPANDE INSTITUTE OF TECHNOLOGY, HALIYAL 
              with a degree in Computer Science and Engineering.
              Throughout my academic journey, I have gained valuable experience in web development, including 
              proficiency in front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js, Express.js, and database management systems like MongoDB. My coursework, projects, and internship experiences have equipped me with a holistic understanding of the software development life cycle.
            </p>
          </div>
{/* //* REACT vertical timeline npm */}
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experiences)=>(
                <VerticalTimelineElement
                 key={experiences.company_name}
                 date={experiences.date}
                 icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={experiences.icon} 
                  alt={experiences.company_name}
                  className='w-[60%] h-[60%] object-contain' />
                 </div>}
                 iconStyle={{background:experiences.iconBg}}
                 contentStyle={{
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:experiences.iconBg,
                  boxShadow:'none'
                 }}
                >
                  <div>
                    <h3 className='text-black txt-xl font-poppins font-semibold'>
                      {experiences.title}
                    </h3>
                    <p className='text-black font-medium font-base' style={{margin:0}}>
                      {experiences.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experiences.points.map((point, index)=>(
                      <li key={`experience-point-${index}`} 
                      className='text-black-500/50 font-normal pl-1
                      text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>


      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About
