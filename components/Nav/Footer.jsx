import Link from "next/link";
import Image from "next/image";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from "@/public/logo.png";
import { getServicesData } from "@/sanity/fetchedData";

const Footer = async () => {
  const servicesData = await getServicesData();
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-[20px]">
        <div className="flex flex-wrap flex-col justify-between md:flex-row lg:flex-row">
          <div className=" flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/5 p-2">
            <div className="">
              <Link href={"/"} className="flex items-center">
                <Image
                  className="p-1"
                  src={Logo}
                  width={150}
                  height={80}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="py-2">
              <div className="flex flex-row justify-start gap-4">
                <div className="border-2 rounded-full p-2 hover:border-[#000076] hover:text-[#000076]">
                  <Link
                    href={"https://www.facebook.com/photoneyecenter/"}
                    target="_blank">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="border-2 rounded-full p-2 hover:border-[#000076] hover:text-[#000076]">
                  <Link
                    href={"https://www.youtube.com/@photoneyecenter9445"}
                    target="_blank">
                    <FaYoutube />
                  </Link>
                </div>
                <div className="border-2 rounded-full p-2 hover:border-[#000076] hover:text-[#000076]">
                  <Link
                    href={"/"}
                    target="_blank">
                    <FaWhatsapp />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-md uppercase md:text-md font-semibold mb-4">
                Services
              </h3>
            </div>
            <div className="py-2 text-gray-600">
              <ul className="flex flex-col gap-4 text-sm">
                {servicesData.map((item) => (
                  <li className="text-md capitalize">
                    <Link href={"/#services"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-md uppercase md:text-md font-semibold mb-4">
                About Photon
              </h3>
            </div>
            <div className="py-2 text-gray-600">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/#about"}>About Doctor</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/#whyPhoton"}>Why Photon</Link>
                </li>

                <li className="text-md capitalize">
                  <Link href={"/#testimonials"}>Testimonials</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-md uppercase font-semibold mb-4">
                For Appointments
              </h3>
            </div>
            <div className="py-2 text-gray-600">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={`tel:809555999`} className="flex gap-2">
                    <span className="text-xl text-[#000076]">
                      <MdCall />
                    </span>
                    +91-8095545999
                  </Link>
                </li>

                
                <li className="text-md capitalize">
                  <Link
                    target="_blank"
                    href={"https://maps.app.goo.gl/U8DA8iZoGw1HSkCT8"}
                    className="flex gap-2">
                    <span className="text-xl text-[#000076]">
                      <MdLocationOn />
                    </span>
                    Flat No. 502, SHIVOM REGENCY, Main Road, Above Jyoti Applainces, Baner, Pune, Maharashtra 411045
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-4 text-[#000076] text-center font-regular items-center text-md ">
          <span>© 2024 Photon Eye Center. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
