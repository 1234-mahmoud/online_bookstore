import React from 'react'

export default function Form() {
  return (
    <div className='Form'>
      <h1>Drop Us A Message</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever</p>
      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Enter Email'/>
        <textarea name="" id="" placeholder='Message'></textarea>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}
