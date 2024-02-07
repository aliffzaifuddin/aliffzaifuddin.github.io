import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'
import DataWebsite from '../assets/data-website.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full h-max md:h-[90%] text-gray-300 bg-[#0a192f] pt-20'>
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

          {/* Grid Items */}
          <div style={{backgroundImage: `url(${DataWebsite})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white p-2 text-center'>
                Vite + React JS Application 
              </p>
              <div className='pt-8 text-center'>
                <a href='https://datalytics-web.netlify.app/' target='blank' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/aliffzaifuddin/data-website' target='blank' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          {/* Grid Items */}
          <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          {/* Grid Items */}
          <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work