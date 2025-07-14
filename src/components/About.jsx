import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div
  className="flex flex-col lg:flex-row items-center justify-center container mx-auto p-10 lg:p-20 w-full overflow-hidden"
  id="About"
>
  {/* Image Section */}
  <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-4">
    <img
      src={assets.brand_img}
      alt="Brand"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4">About</h1>
    <span className="block text-lg font-semibold mb-4 text-gray-600">
      Our Brand
    </span>
    <div className="mb-4">
      <p className="text-xl font-bold">10+</p>
      <p className="text-gray-700">Years of Experience</p>
      <p className="text-xl font-bold mt-2">250+ Projects</p>
    </div>
    <p className="text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut
      delectus debitis, sunt aliquid nam facere inventore, earum nisi suscipit
      minima nesciunt qui beatae esse rerum repellendus aut repudiandae
      similique.
      <br />
      <br />
      Sit culpa soluta nesciunt quibusdam quisquam facilis accusantium nobis
      saepe, cupiditate quos provident id officia obcaecati dolor deserunt
      doloribus omnis? Quisquam nobis tenetur quidem repellat sit
      exercitationem, provident cupiditate perspiciatis.
      <br />
      <br />
      <button className='bg-blue-400 px-8 py-2 text-white cursor-pointer rounded-2xl'>Learn More</button>
    </p>
  </div>
</div>

  )
}

export default About