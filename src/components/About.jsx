
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[900px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4'>About</p>
          </div>
          <div>

          </div>
        </div>
        <div className='max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I am Aliff, nice to meet you. Please feel free to look around.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, iure quisquam nostrum reprehenderit accusamus dolorum cum placeat labore aspernatur! Unde sunt vero accusantium voluptates reprehenderit corrupti deserunt. Optio, inventore itaque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About