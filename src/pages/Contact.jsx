import React, { useRef, useState } from 'react'

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''})
  //^ while sending request we need to have some loding so use useState
  const [isLoading, setIsLoading] = useState(false);

  //^ handleChange works for all of these inputs is it's taking the key press event based on that event it calls setForm fn where it spreads out all of the other properties and select a specific field to update
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});  //& it is going to all the properties from the from
  };
  
  //* whenever we click on input and start typing the 3d fox has to walk so it mush focus

  const handleFoucs =() => {};
  const handleBlur = () => {};
  //^ handelSubmit gets the final key press event
  const handleSubmit = (e) => {
    e.preventDefault();   //& to not load page
    setIsLoading(true);   //& initiate the loading process
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
          type='button'
          className='btn'
          disabled={isLoading}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact