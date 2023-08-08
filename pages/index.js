import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,1,300,2,601,600,401,501,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="px-12">
        <div className=" pt-8 pb-12 flex justify-between items-center">
          <h1 className="text-md">seun_dev</h1>

          <div className=" px-10 py-3 rounded-full border ">
            Available for work
          </div>

          <div className=" flex items-center gap-8">
            <ul>Projects</ul>

            <ul>About</ul>

            <button className=" bg-[#aeeeb2] px-10 py-3 rounded-full">
              Contact me
            </button>
          </div>
        </div>

        {/* <div className="  h-[70vh] p-12  bg-gradient-to-r from-[#aeeeb2] to-[#94bbe9] rounded-2xl">
          <h1 className=" text-7xl font-medium text-left mt-14">
            Creating Boundless <br /> Visual fantasies
          </h1>
          <p className=" w-3/4 pt-8">
            My name is Seun, a frontend developer skilled in crafting innovative
            solutions that captivates users, I am also passionate about creating
            user-centric and delightful human experiences.
          </p>

          <button className=" bg-amber-200 px-10 py-3 rounded-full mt-8">
            Resumé
          </button>
        </div> */}
      </section>
    </>
  );
}
