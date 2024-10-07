import React from "react";
import PortableTextComponent from "@/components/ui/portableTextComponent";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const AboutDoctor = ({ homeData }) => {
  return (
    <main className="bg-blue-800 flex items-center">
      <section className="container py-[50px] flex flex-col items-center">
        {homeData.map((item) => {
          return (
            <article className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-2/3">
                <h4 className="my-2 text-2xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug">
                  {item.name}
                </h4>
                <Separator className="my-2" />
                <div className="py-4 text-md text-white">
                  <PortableTextComponent content={item.description} />
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="w-full max-w-[400px] bg-white rounded-2xl overflow-hidden">
                  <Image
                    className="w-full rounded-t-2xl"
                    src={item.drImage}
                    width={300}
                    height={300}
                    alt="About Image"
                    priority
                  />
                  <div className="p-4 flex flex-row justify-between border-t-2 border-blue-800">
                    <div>
                      <h6 className="text-md text-blue-800 font-semibold text-left">
                        {item.name}
                      </h6>
                      <p className="text-left text-blue-800 text-xs">
                        Ophthalmologist/ Eye Surgeon
                      </p>
                    </div>
                    <div>
                      <Link
                        href={
                          "https://www.practo.com/pune/doctor/dr-pranav-radkar-ophthalmologist-11"
                        }
                        target="_blank">
                        <Image
                          className="w-full rounded-full"
                          src="/practo.png"
                          width={35}
                          height={35}
                          alt="practo logo"
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default AboutDoctor;
