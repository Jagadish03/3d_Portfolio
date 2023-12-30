import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''})

  const handleChange = () => {};
  //^ whenever we click on input and start typing the 3d fox has to walk so it mush focus
  const handleFoucs =() => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text marker:'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14'>
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
        </form>
      </div>
    </section>
  )
}

export default Contact