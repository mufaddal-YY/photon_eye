"use client";
import { Compare } from "../ui/compare";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const HeroBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <>
      <main className="w-full bg-gray-50 bg-dot-black/[0.1] relative items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <section className="py-[50px]">
          <section className="container mx-auto">
            <article className="flex flex-col lg:flex-row mx-auto items-center">
              <article className="w-full lg:w-1/2">
                <div className="w-full mb-4 md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
                  <div className="p-2 mx-auto relative z-10 w-full lg:py-12 md:pt-0">
                    <h1 className="text-4xl md:text-6xl font-medium text-left py-3 bg-clip-text text-transparent bg-gradient-to-b from-[#000076] to-blue-800 bg-opacity-50">
                      Clear Vision for a <br className="hidden lg:block" />{" "}
                      Brighter Tomorrow
                    </h1>
                    <p className="mt-4 font-normal text-base lg:text-xl text-gray-700 max-w-2xl text-left">
                      Expert Eye Care Focused on Restoring Your Vision and
                      Helping You Live Life to the Fullest
                    </p>

                    <div className="my-6">
                      <Link href="/">
                        <Button className="bg-primary py-6 hover:bg-white hover:text-[#000076] border border-[#000076]">
                          Schedule Appointment
                        </Button>
                      </Link>
                    </div>

                    <Separator className="my-8 w-full lg:w-3/4 bg-gray-300" />

                    <div className=" flex items-center gap-6">
                      <div className="">
                        <span className="flex gap-2 text-xl mb-3 text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </span>
                        <h2 className="text-3xl lg:text-5xl text-gray-600">
                          4.9/5 <span className="text-sm">Rating</span>
                        </h2>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-20 bg-gray-400"
                      />

                      <div>
                        <p>From over 2k+ reviews.</p>
                        <div className="flex items-center">
                          <AnimatedTooltip items={people} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="w-full lg:w-1/2 mx-auto">
                <article className="p-0 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-0 md:px-4">
                  <Compare
                    firstImage="/eye-blur2.png"
                    secondImage="/eye-blur1.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassName="object-cover object-left-top"
                    className="h-[200px] w-[100%] md:h-[500px] md:w-[100%]"
                    slideMode="hover"
                  />
                </article>
              </article>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default HeroBanner;
// 