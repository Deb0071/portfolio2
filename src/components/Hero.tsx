'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { ScrollContext } from './Providers/ScrollProvider'
import { renderCanvas } from './renderCanvas';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Debojoyti Das, I&apos;m a software developer, and I love building cool interfaces for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-8 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                Debojoyti Das
              </h1>
              <h2 className="text-3xl font-medium opacity-70 sm:text-6xl md:text-6xl xl:text-5xl">
                Playing with the web.
              </h2>
              <div className='flex gap-4 pt-4 font-semibold '><Link
                href="https://deb0071.github.io/Amazon-Front-End-Clone/"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl text-gray-600"
              >
                Amazon Clone 
              </Link>
              <Link
                href="https://drive.google.com/file/d/1XazbPqU-cvGZ2EfYCXfMT31daLhGRv4E/view?usp=sharing"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl text-gray-600"
              >
                Resume
              </Link></div>
              
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {/* <div className=' rounded-full background-animate  h-10 w-10 bg-gradient-to-r from-red-400 to-orange-400'>

                </div> */}

              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
