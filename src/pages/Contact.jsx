import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader  from '../components/Loader';

import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';

import { socialLinks } from '../constants';

function Footer() {

}

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''})
  //^ while sending request we need to have some loding so use useState
  const [isLoading, setIsLoading] = useState(false);

  const[currentAnimation, setCurrentAnimation]= useState('idle')

  const{alert, showAlert, hideAlert} = useAlert();

  //^ handleChange works for all of these inputs is it's taking the key press event based on that event it calls setForm fn where it spreads out all of the other properties and select a specific field to update
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});  //& it is going to all the properties from the from
  };
  
  //* whenever we click on input and start typing the 3d fox has to walk so it mush focus

  const handleFoucs =() => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  //^ handelSubmit gets the final key press event
  const handleSubmit = (e) => {
    e.preventDefault();   //& to not load page
    setIsLoading(true);   //& initiate the loading process
    setCurrentAnimation('hit');

    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    emailjs.send(
        //^ SPECIFIC ENV VARIABLES
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name:form.name,
          to_name:"Jagadish",
          form_email:form.email,
          to_email:'jagadishmunavalli35@gmail.com',
          message:form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show:true, text: 'Message sent sucessfully!!', type:'success'})
      //* TODO:show success message
      //* TODO:Hide an alert

      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('idle')
        setForm({name:'', email:'', message:''});
      },[3000])

      
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show:true, text:"I did't receive your message", type:'danger'})
      //* show error message
    })
  };

  return (
    <>
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert{...alert}/>}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text marker:'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
          //^ to handel email from client
          omSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>Name
          <input 
          type="text"
          name='name'
          className='input'
          placeholder='Your Name'
          required
          value={form.name}     //& define a value by creating a new useState
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          /> 
          </label>
          <label className='text-black-500 font-semibold'>Email
          <input 
          type="email"
          name='email'
          className='input'
          placeholder='Your Email'
          required
          value={form.email}     //& define a value by creating a new useState
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          /> 
          </label>
          <label className='text-black-500 font-semibold'>Your Message
          <textarea
          name='message'
          rows={4}
          className='textarea'
          placeholder='Let me Know how i help you!'
          required
          value={form.message}     //& define a value by creating a new useState
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          /> 
          </label>
          <button
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas 
          camera={{
            postion:[0,0,5],
            fov:75,
            near:0.1,
            far:1000
          }}
        >
          <directionalLight intensity={2.5} postion={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
          //* suspence allows us to load fox nicely
          <Suspense fallback={<Loader/>}>
            //* Fox components
            <Fox 
              currentAnimation={currentAnimation}
              position={[0.5,0.35,0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
    {/* <footer className="flex justify-between items-center mt-10 bg-sky-blue">
      <div className="text-gray-500 ml-5 mb-2 mt-2">© 2024 Jagadish Munavalli - All rights reserved.
      <br/>
      📞: +91 9141078914 <br />
      ✉️: munavallijagadish@gmail.com
      </div>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
            <img src={link.iconUrl} alt={link.name} className="w-6 h-6 mb-1 mr-5" />
          </a>
        ))}
      </div>
    </footer> */}
    </>
  )
}

export default Contact