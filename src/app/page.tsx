"use client"

import Description from "@/components/Description";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])

  return (
    <main className="main" style={{ height: "300vh" }}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
