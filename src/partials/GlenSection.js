import React from 'react';

function Glen() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-3 md:pt-40 md:pb-2">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              여기에 추가{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                해볼까
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                버튼도 많고
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-green-400 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                    href="#0"
                  >
                    봤던
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-400 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                    href="#0"
                  >
                    스프린트 중에
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-green-400 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                    href="#0"
                  >
                    제일
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-400 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                    href="#0"
                  >
                    재밌네
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-3 md:pt-5 md:pb-5 flex justify-center">
        <span className="text-2xl font-black ">
          근데 왜 시험날 이런걸 시키냐고
        </span>
      </div>
    </section>
  );
}

export default Glen;
