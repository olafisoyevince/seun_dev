import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <Hero />
    </>
  );
}
