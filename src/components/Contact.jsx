import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full pt-32 bg-primary-color text-[#F3EFE0]'>
        <form method='POST' action="https://getform.io/f/3166bb4f-f567-464b-a029-d27a33affb13" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-secondary-color text-[#F3EFE0]'>Contact</p>
                <p className='text-[#F3EFE0] py-4'>Submit the form below or shoot me an email - johntcripe@gmail.com</p>
            </div>
            <input className='bg-[#434242] placeholder:text-[#F3EFE0] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#434242] placeholder:text-[#F3EFE0]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#434242] placeholder:text-[#F3EFE0] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#F3EFE0] border-2 border-[#F3EFE0] hover:bg-secondary-color hover:border-secondary-color px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact