"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill, GoVerified } from "react-icons/go";
import { BsTrophy } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const contactSchema = z.object({
  name: z.string().min(4, "Minimum 4 characters required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Minimum 5 characters required"),
  message: z.string().min(20, "Minimum 20 characters required"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
      <h1 className="font-semibold text-4xl text-center sm:text-3xl">
        Get In Touch With Us
      </h1>

      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
        For more information about our product & services, please feel free to
        drop us an email. Our staff will be there to help you out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
        <div className="flex flex-col space-y-8 px-6 sm:px-10">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] font-medium`}>
                Address
              </h2>
              <p className="text-black font-normal text-[14px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhone className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] font-medium`}>
                Phone
              </h2>
              <p className="text-black font-normal text-[14px]">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] font-medium`}>
                Working Time
              </h2>
              <p className="text-black font-normal text-[14px]">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 w-full sm:w-[635px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className={`${poppins.className} text-[16px] font-medium`}>
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Abc"
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>

            <div className="mb-4 mt-4">
              <label className={`${poppins.className} text-[16px] font-medium`}>
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Abc@def.com"
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>

            <div className="mb-4 mt-4">
              <label className={`${poppins.className} text-[16px] font-medium`}>
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                placeholder="This is optional"
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-2"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">
                  {errors.subject.message?.toString()}
                </p>
              )}
            </div>

            <div className="mb-4 mt-4">
              <label className={`${poppins.className} text-[16px] font-medium`}>
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Hi! I’d like to ask about..."
                className="w-full h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-2"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] rounded-[5px] text-white py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full max-w-screen-xl bg-[#F4F4F4] flex flex-wrap items-center justify-between px-8 py-6 mt-10">
        <div className="flex items-center space-x-4 mb-6 sm:mb-0">
          <BsTrophy className="w-[52.77px] h-[60px] text-black" />
          <div>
            <h2 className={`${poppins.className} font-semibold text-[20px]`}>
              High Quality
            </h2>
            <p
              className={`${poppins.className} font-medium text-[16px] text-[#898989]`}
            >
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6 sm:mb-0">
          <GoVerified className="w-[60px] h-[60px] text-black" />
          <div>
            <h2 className={`${poppins.className} font-semibold text-[20px]`}>
              Warranty Protection
            </h2>
            <p
              className={`${poppins.className} font-medium text-[16px] text-[#898989]`}
            >
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <MdSupportAgent className="w-[52.77px] h-[60px] text-black" />
          <div>
            <h2 className={`${poppins.className} font-semibold text-[20px]`}>
              24/7 Support
            </h2>
            <p
              className={`${poppins.className} font-medium text-[16px] text-[#898989]`}
            >
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
