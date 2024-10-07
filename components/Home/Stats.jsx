import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";

const data = [
  {
    title: "Patients Cured",
    stat: "5000",
    icon: <FaUserDoctor />,
  },
  {
    title: "Ratings on all platforms",
    stat: "4.9",
    icon: <MdReviews />,
  },
  {
    title: "Surgeries Completed",
    stat: "2000",
    icon: <FaHospitalUser />,
  },
  {
    title: "Awards Received",
    stat: "12",
    icon: <FaAward />,
  },
];

const Stats = () => {
  return (
    <main className="bg-white flex items-center">
      <section className="container py-[100px] flex flex-col items-center">
        <article className="flex flex-col lg:flex-row justify-between">
          <article className="w-full md:w-1/2 lg:w-1/2 flex justify-start">
            <div className="">
              <Image
                className="rounded-xl"
                src="/whyPhoton.jpeg"
                width={1080}
                height={1080}
              />
            </div>
          </article>
          <article className="w-full md:w-1/2 lg:w-1/2 p-4">
            <div className="p-4">
              <h2 className="text-4xl font-semibold text-blue-800">
                Why choose us?
              </h2>
              <p className="text-sm text-gray-600 py-2">
                We utilize advanced computerized eye examinations to provide
                precise diagnoses, ensuring you receive the most accurate
                treatment plan for your needs.{" "}
              </p>
            </div>

            <Separator className="my-2" />
            <div className="flex flex-wrap p-3">
              {data.map((item) => (
                <div className="w-full lg:w-1/2 py-2 lg:p-2">
                  <div className="rounded-xl bg-gray-50 border border-blue-700 hover:bg-blue-800 text-blue-800 hover:text-gray-100 duration-1000 h-[250px] p-8">
                    <h4 className="text-5xl font-semibold py-4">{item.icon}</h4>
                    <h4 className="text-4xl font-semibold">{item.stat}</h4>
                    <h6 className="text-lg font-regular">
                      {item.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Stats;
