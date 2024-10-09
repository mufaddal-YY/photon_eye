"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";

const Testimonials = ({ data }) => {
  return (
    <main className="bg-gray-50">
      <section
        className="container mx-auto py-[50px] items-center"
        id="testimonials">
        <div className=" py-4">
          <h2 className="text-blue-900 text-4xl font-medium py-3 text-center">
            Testimonials
          </h2>
          <p className="text-md text-gray-600 w-full text-center mx-auto lg:w-3/4">
            Here's what our patients have to say about their experiences with
            us. Read how our expertise in cataract, retina, and glaucoma
            treatments has helped our patients regain clarity and comfort in
            their vision.
          </p>
        </div>{" "}
        <hr />
        <div className="rounded-md antialiased py-4 items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={data} direction="right" speed="slow" />
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
