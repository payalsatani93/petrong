import React from 'react'

export default function Servicescard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      {/* background box stays centered */}
      <div className="bg-blue-50 rounded-2xl p-8 md:p-12 w-full max-w-5xl relative">
        <div className="flex justify-center md:justify-end">
          {/* Grid shifted to right on md+, centered on small */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-md md:max-w-xl">
            
            {/* Top row cards floating outside on md+ */}
            <div className="bg-green-50 rounded-xl p-8 sm:p-10 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg  md:-mt-20">
              <p className="text-gray-400 mb-4">01</p>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Node.js</h2>
              <span className="text-xl">→</span>
            </div>

            <div className="bg-green-50 rounded-xl p-8 sm:p-10 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg  md:-mt-20">
              <p className="text-gray-400 mb-4">02</p>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Laravel</h2>
              <span className="text-xl">→</span>
            </div>

            {/* Bottom row cards inside background */}
            <div className="bg-green-50 rounded-xl p-8 sm:p-10 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-400 mb-4">03</p>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Vue.js</h2>
              <span className="text-xl">→</span>
            </div>

            <div className="bg-green-50 rounded-xl p-8 sm:p-10 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-400 mb-4">04</p>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">React.js</h2>
              <span className="text-xl">→</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
