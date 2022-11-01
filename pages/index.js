import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
// import { FiArrowRight } from "react-icons/fi";

import { ArrowRight } from "iconsax-react";

import web1 from "../assets/images/web1.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web3.png";
import web4 from "../assets/images/web4.png";
import alien from "../assets/images/alien.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Seun Olafisoye</title>
        <meta name="description" content="seun_dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-stone-200 px-10 md:px-20 lg:px-30 xl:px-60 2xl:px-60 dark:bg-gray-800 dark:text-stone-200">
        <section className="min-h-screen dark:text-stone-200">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-gray-800 dark:text-stone-200">
              <div className=" flex align-middle gap-2 ">
                <Image
                  src={alien}
                  alt={"a picture of a project that I didn't do"}
                  height={"20px"}
                  width={"25px"}
                />
                seun_dev
              </div>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-gray-800 dark:text-stone-200"
                />
              </li>
              <li>
                <a
                  className=" bg-gray-800 dark:bg-stone-200 dark:text-gray-800 text-stone-200 px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 md:text-left ">
            <h2 className="text-5xl py-2 text-gray-800 font-medium dark:text-stone-200">
              Seun Olafisoye
            </h2>
            <h3 className="text-2xl text-gray-800 dark:text-stone-200">
              Frontend Engineer
            </h3>
            <p className=" w-80 mx-auto py-4 leading-8 text-gray-800 md:mx-0 dark:text-stone-200">
              I love building user interfaces and playing around with
              animations.
            </p>
            <div className="text-2xl flex justify-center gap-4 text-gray-700 dark:text-stone-200 md:justify-start">
              <Link href="#">
                <a>
                  <AiFillTwitterCircle />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <AiFillLinkedin />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <AiFillGithub />
                </a>
              </Link>
            </div>
          </div>

          <div className=""></div>
        </section>

        <section>
          <div className="md:flex mb-10">
            <div>
              <h3 className="w-56 text-3xl py-1 md:pr-10">Background</h3>
            </div>
            <div>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-stone-200">
                I currently work as a Frontend Engineer Intern at Zero & One
                Technologies.
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-stone-200">
                I enjoy bridging the gap between engineering and design in my
                role as a frontend engineer by fusing my technical expertise
                with my strong sense of aesthetics to produce stunning products.
                My objective is to constantly create scalable, effective
                programs that offer captivating, pixel-perfect user interfaces.
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-stone-200">
                I also recently received my Bachelor of Engineering in
                Electrical & Electronics Engineering from Bells University of
                Technology. And I&apos;m still seeking for ways to develop and
                broaden my expertise in frontend engineering.
              </p>

              <Link href="#">
                <a className="flex items-center ">
                  View my Resume
                  <ArrowRight size="18" className="ml-2" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="md:flex">
            <div>
              <h3 className="w-56 text-3xl py-1 md:pr-10">Projects</h3>
            </div>

            <div>
              <div className=" pb-44">
                <div className="flex items-center pb-3">
                  <p>KodeEvents</p>

                  <ArrowRight size="18" className="ml-2" />
                </div>

                <p className="pb-3">
                  A web app to help you foster meaningful relationships with
                  your community through events. Get people registered for your
                  events without any hassle
                </p>

                <div className="flex gap-3">
                  <p className=" border-2 border-gray-800 px-1 rounded">
                    React
                  </p>
                  <p className=" border-2 border-gray-800 px-1 rounded">
                    React
                  </p>
                  <p className=" border-2 border-gray-800 px-1 rounded">
                    React
                  </p>
                  <p className=" border-2 border-gray-800 px-1 rounded">
                    React
                  </p>
                  <p className=" border-2 border-gray-800 px-1 rounded">
                    React
                  </p>
                </div>
              </div>

              {/* <div>
                <Image
                  src={web2}
                  alt={"a picture of a project that I didn't do"}
                />
              </div>

              <div>
                <Image
                  src={web3}
                  alt={"a picture of a project that I didn't do"}
                />
              </div>

              <div>
                <Image
                  src={web4}
                  alt={"a picture of a project that I didn't do"}
                />
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
