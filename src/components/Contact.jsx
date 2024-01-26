

const Contact = () => {
  return (
    <div name="contact" className='w-full h-[90%] bg-[#0a192f]'>
      <div className="flex justify-center items-center h-full p-4">
        <form method='POST' action="https://getform.io/f/bcabe04f-25c6-4e1f-9f1c-82464c977943" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-slate-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or send me an email - aliffzaifuddin97@gmail.com</p>
          </div>
          <input className='bg-slate-200 p-2' type='text' placeholder='Name' name="name" required></input>
          <input className='my-4 p-2 bg-slate-200' type='email' placeholder='Email' name="email" required></input>
          <textarea className='bg-slate-200 p-2' name='message' rows="10" placeholder='Message' required></textarea>
          <button className='text-white border-2 hover:bg-slate-300 hover:text-black rounded-md px-4 py-3 my-8 mx-auto flex items-center'>Let us Collaborate</button>
        </form>
      </div>
    </div>
  )
}

export default Contact