import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Tailwind는 다시한번 해볼것</h2>
            <p className="text-xl text-gray-600">
              빠르게 작업하는데는 좋을수도 있겠다. 하지만 styled components 때도
              느꼈는데 그냥 분리되어 있는게 더 편한거같기도 하다.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-180 hover:bg-red-300">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                해야할건 너무 많은데
              </h4>
              <p className="text-gray-600 text-center">
                뭐하나 제대로 할 수 있는게 없어서 걱정이다
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-180 hover:bg-red-300">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                뭔가 만들어봐야해
              </h4>
              <p className="text-gray-600 text-center">
                개떡같은 결과물이라도 뭐라도 좀 만들어봐
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-180 hover:bg-red-300">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                만드는 과정에서 내가 필요한걸 찾게될거야
              </h4>
              <p className="text-gray-600 text-center">그러면 공부가 되겠지</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-180 hover:bg-red-300">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                넌 어차피 아무것도 모르고 시작한거야 못하는게 당연해
              </h4>
              <p className="text-gray-600 text-center">
                당연히 처음 만드는 결과물들도 개판일거고
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
