import React from "react";
import { FaHospital } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import { Separator } from "../ui/separator";
import Link from "next/link";

const locations = [
  {
    name: "Photon Eye center, Baner",
    address:
      "Flat no. 502, SHIVOM REGENCY, Main Road, above Jyoti Applainces, Baner, Pune, Maharashtra 411045",
    contact: "8095545999",
  },
  {
    name: "Lifepoint Hospital, Wakad",
    address:
      "No. 145, near Sayaji Hotel, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057",
    contact: "8095545999",
  },
  {
    name: "Kamalnath Netralaya",
    address:
      "DEHU, MAIN ROAD, beside Ratan medical stop, Dehu Road, Pimpri-Chinchwad, Maharashtra 411044",
    contact: "9309938546",
  },
];

const Cta = () => {
  return (
    <main className="bg-blue-800" id="contact">
      <section className="container py-[50px] mx-auto">
        <div className="mx-auto py-4">
          <h2 className="text-gray-100 text-4xl font-medium py-3 text-center">
            Need Consultation?
          </h2>
          <p className="text-md text-gray-200 w-full text-center lg:w-3/4 mx-auto">
            Take the first step toward clearer vision and exceptional eye care.
            Schedule your appointment today and experience personalized,
            high-quality eye care tailored just for you.
          </p>
        </div>{" "}
        <hr />
        <article className="flex flex-col lg:flex-row items-center mx-auto py-4">
          {locations.map((item) => (
            <div className="p-2 w-full lg:w-1/3">
              <div className="h-[250px] border-white rounded-xl bg-white p-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-[#000076]">
                    <FaHospital className="" />
                  </span>

                  <h4 className=" text-[#000076] font-medium text-lg flex gap-2 ">
                    {item.name}
                  </h4>
                </div>
                <Separator className="my-2" />

                <div className="flex gap-2 py-2">
                  <span className="text-lg text-[#000076]">
                    <FaLocationDot className="" />
                  </span>

                  <p className="-mt-1 text-gray-700 capitalize font-regular text-md flex gap-2 ">
                    {item.address}
                  </p>
                </div>

                <Separator className="my-2" />

                <div className="flex gap-2 py-2">
                  <span className="text-lg text-[#000076]">
                    <FaPhone className="" />
                  </span>

                  <Link href={`tel:${item.contact}`}>
                    <h4 className=" text-[#000076] capitalize font-semibold text-md flex items-center gap-2 ">
                      {item.contact}
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Cta;
