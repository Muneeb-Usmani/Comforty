import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="w-full h-[45px] bg-[#272343] py-[14px] flex justify-center">
        <div className="max-w-[1321px] w-full flex items-center justify-between px-4">
          <div className="text-white flex gap-2 items-center">
            <div>
              <Image src="/check1.svg" alt="check" height={16} width={16} />
            </div>
            <p className="leading-[14.3px] font-extralight">
              Free Shipping On All Orders Over $50
            </p>
          </div>
          <div className="flex text-white font-extralight gap-6">
            <div className="flex gap-[6px]">
              <p>Eng</p>
              <Image
                src="/dropdown.svg"
                alt="dropdown"
                height={12}
                width={12}
              />
            </div>
            <div>
              <Link href="/faq">
                <p>Faqs</p>
              </Link>
            </div>
            <div className="flex gap-[6px]">
              <Image
                src="/alert-circle1.svg"
                alt="dropdown"
                height={16}
                width={16}
              />
              <Link href="/contact">
                <p>Need Help</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
