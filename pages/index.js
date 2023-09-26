import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiOutlineAntDesign,
} from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ArrowRight } from "iconsax-react";
import alien from "../assets/images/alien.png";
import { useState } from "react";

const data = [
  {
    name: "Moriel's Oasis Foods",
    url: "https://www.morielsoasis.ca/",
    description:
      "One-stop-shop for African food products in Canada and the US, solving the problem of inaccessibility of these products and providing customers with an exciting and convenient shopping experience",
    tools: ["Nextjs", "ChakraUI", "React Query", "Tailwind CSS"],
  },

  {
    name: "Collate Africa",
    url: "https://www.collate.africa",
    description:
      "Collate Africa is a groundbreaking project aimed at empowering Nigerian citizens to actively participate in the electoral process by providing a seamless platform for submitting and accessing election results during the last conducted elections. ",
    tools: ["Nextjs", "ChakraUI", "React Query"],
  },

  {
    name: "Ozone Pro Financial",
    url: "https://ozoneprofinancial.com/",
    description:
      "Led the development of the website's frontend, seamlessly integrating backend API endpoints with a focus on crafting the UI design for both the landing and login pages.",
    tools: ["Nextjs", "ChakraUI", "React Query"],
  },

  {
    name: "Monster Rolodex",
    url: "https://cool-bubblegum-714092.netlify.app/",
    description:
      "Monster Rolodex is a lightweight web application designed to efficiently retrieve and display a list of monsters from the backend system. I focused on creating a streamlined user interface and implementing seamless communication between the frontend and backend through API requests.",
    tools: ["React", "SCSS"],
  },
];

const skills = [
  {
    logo: <AiFillHtml5 className=" text-4xl" />,
    title: "HTML",
  },
  {
    logo: <DiCss3Full className=" text-4xl" />,
    title: "CSS",
  },
  {
    logo: <FaSass className=" text-4xl" />,
    title: "SASS",
  },
  {
    logo: <SiJavascript className=" text-4xl" />,
    title: "Javascript",
  },
  {
    logo: <FaReact className=" text-4xl" />,
    title: "React",
  },
  {
    logo: <TbBrandNextjs className=" text-4xl" />,
    title: "Nextjs",
  },
  {
    logo: <SiRedux className=" text-4xl" />,
    title: "Redux",
  },
  {
    logo: <FaGitAlt className=" text-4xl" />,
    title: "Git",
  },
  {
    logo: <SiTailwindcss className=" text-4xl" />,
    title: "Tailwind",
  },
  {
    logo: <AiOutlineAntDesign className=" text-4xl" />,
    title: "Ant Design",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>seun_dev</title>
        <meta name="description" content="seun_dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-stone-200 px-5 md:px-20 lg:px-30 xl:px-60 2xl:px-60 dark:bg-gray-800 dark:text-stone-200">
        <section className="min-h-screen dark:text-stone-200">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-gray-800 dark:text-stone-200">
              <div className=" flex align-middle gap-2 ">
                <Image
                  src={alien}
                  alt={"an alien in form of an icon"}
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
                  className=" bg-gray-800 dark:bg-stone-200 dark:text-gray-800 text-stone-200 px-4 py-2 rounded-md ml-3 md:ml-8"
                  href="https://drive.google.com/file/d/1LazuQLQjs96UzEX0DYPyhk3YPPQS_Z9L/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 md:text-left ">
            <h2 className="text-4xl md:text-7xl py-2 text-gray-800 dark:text-stone-200 tracking-wide">
              Oluwaseun Olafisoye
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-800 dark:text-stone-200 font-medium tracking-wide">
              Frontend Engineer
            </h3>
            <div className="text-2xl flex justify-center gap-4 text-gray-700 dark:text-stone-200 md:justify-start pt-5">
              <Link href="https://twitter.com/fisoyeseun_">
                <a>
                  <AiFillTwitterCircle />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/oluwaseun-olafisoye-58223b167/">
                <a>
                  <AiFillLinkedin />
                </a>
              </Link>
              <Link href="https://github.com/olafisoyevince">
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
              <h3 className="w-56 text-3xl py-1 md:pr-10 text-gray-800 dark:text-stone-200">
                About Me
              </h3>
            </div>
            <div className="md:mr-8 lg:mr-48">
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-stone-200 tracking-wide">
                In my position as a frontend engineer, I like to bridge the gap
                between engineering and design by fusing my technical expertise
                with my strong sense of aesthetics to produce stunning products.
                My objective is to constantly create scalable, effective web
                apps that offer captivating, pixel-perfect user interfaces.
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-stone-200 tracking-wide">
                In my spare time, I mostly listen to music and watch anime.
              </p>

              <a
                href="https://drive.google.com/file/d/1LazuQLQjs96UzEX0DYPyhk3YPPQS_Z9L/view?usp=sharing"
                className="flex items-center font-bold text-gray-800 dark:text-stone-200 "
                target="_blank"
                rel="noreferrer"
              >
                View my Resume
                <ArrowRight
                  size="18"
                  className="ml-2 text-gray-800 dark:text-stone-200"
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="md:flex  mb-10">
            <div>
              <h3 className="w-56 text-3xl py-1 md:pr-10 text-gray-800 dark:text-stone-200">
                Skills
              </h3>
            </div>
            <div className=" flex gap-9 flex-wrap mt-4 text-gray-800 dark:text-stone-200 md:mr-8 lg:mr-48">
              {skills.map((data, i) => {
                const { logo, title } = data;
                return (
                  <div className=" flex flex-col items-center" key={i}>
                    <div>{logo}</div>
                    <p>{title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="md:flex">
            <div>
              <h3 className="w-56 text-3xl py-1 md:pr-10 text-gray-800 dark:text-stone-200">
                Projects
              </h3>
            </div>

            <div className="text-gray-800 dark:text-stone-200 mt-4 pb-4">
              {data.map((item, i) => {
                const { name, description, tools, url } = item;
                return (
                  <Link key={i} href={url} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <div className="mb-14 md:mr-8 lg:mr-48 cursor-pointer">
                        <div>
                          <a className="flex items-center pb-3 justify-between">
                            <p className=" font-bold text-gray-800 dark:text-stone-200">
                              {name}
                            </p>
                            <div className=" flex h-full align-middle">
                              <p className=" text-sm font-bold text-gray-800 dark:text-stone-200">
                                Live
                              </p>

                              <FiLink2
                                size="18"
                                className=" text-gray-800 mt-0.5 flex align-middle dark:text-stone-200 ml-2"
                              />
                            </div>
                          </a>
                        </div>

                        <p className="pb-3">{description}</p>

                        <div className="flex gap-3 flex-wrap">
                          {tools.map((tool, i) => {
                            return (
                              <p
                                key={i}
                                className=" border-2 border-gray-800 dark:border-stone-200 px-1 rounded"
                              >
                                {tool}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <p className="text-center pb-4 pt-6  text-gray-800 dark:text-stone-200">
            Made with ❤️ by Oluwaseun Olafisoye
          </p>
        </section>
      </main>
    </div>
  );
}
