import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Treatments = ({ servicesData }) => {
  return (
    <main className="w-full bg-gray-100 relative items-center justify-center">
      <section className="py-[50px]">
        <section className="container mx-auto">
          <div className="mx-auto py-4">
            <h2 className="text-blue-900 text-4xl font-medium py-3 text-left w-1/2">
              Services we offer
            </h2>
            <p className="text-md text-gray-600 w-full lg:w-3/4">
              From advanced computerized eye examinations ensuring precise
              diagnoses to customized vision correction solutions like
              spectacles, contact lenses, and LASIK, we aim to deliver
              exceptional care.
            </p>
          </div>{" "}
          <hr />
          <article className="flex flex-wrap flex-row items-center">
            {servicesData.map((data) => (
              <div className="w-full md:w-1/2 lg:w-1/3 p-3 mb-2 rounded-lg ">
                <div className="mb-2 bg-white rounded-lg">
                  <div className="w-full overflow-hidden">
                    <div className="relative h-[250px] overflow-hidden rounded-t-lg">
                      <div className="relative w-full h-[250px] rounded-t-lg">
                        <Image
                          className="object-cover rounded-t-lg hover:scale-[1.1] duration-1000 "
                          src={data?.image}
                          alt={data?.title}
                          layout="fill"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <div className="pt-2">
                      <h4 className="font-medium text-blue-800 capitalize text-lg mb-2">
                        {data.title}
                      </h4>{" "}
                    </div>
                    <div className="py-2">
                      <p className="flex items-center">
                        <span className="font-regular text-sm text-gray-500">
                          {data.description}
                        </span>
                      </p>
                    </div>
                    <Separator className="my-2" />
                    <div className="">
                      <Link href={"/"}>
                        <Button
                          variant="link"
                          className="text-blue-800 -ml-4 flex gap-2">
                          Book Appointment <FaArrowRightLong />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Treatments;
