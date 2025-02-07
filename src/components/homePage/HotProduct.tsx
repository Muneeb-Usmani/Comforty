import Image from "next/image";

const GridLayout = () => {
  return (
    <div className="w-full max-w-full px-4 md:px-6 lg:max-w-[1920px] mx-auto">
      <div className="w-full lg:w-[1320px] mx-auto flex flex-col lg:flex-row lg:items-center">
        <div className="hidden lg:block relative items-center">
          <p
            className="text-[20px] md:text-[26px] lg:text-[34px] leading-tight uppercase tracking-normal whitespace-nowrap font-roboto"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              height: "100%",
              maxHeight: "648px",
            }}
          >
            Explore new and popular styles
          </p>
        </div>

        <div className="lg:hidden text-center mb-4">
          <h2 className="text-xl md:text-2xl uppercase font-roboto">
            Explore new and popular styles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full lg:h-[648px]">
          <div className="w-full lg:h-full order-1">
            <Image
              src="/item-category 1.png"
              alt="Large Image"
              width={648}
              height={648}
              className="w-full h-[300px] md:h-[400px] lg:h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 order-2 overflow-x-auto">
            <Image
              src="/01.png"
              alt="Small Image 1"
              width={312}
              height={312}
              className="w-full h-[150px] md:h-[200px] lg:h-[312px] object-cover"
            />
            <Image
              src="/20.png"
              alt="Small Image 2"
              width={312}
              height={312}
              className="w-full h-[150px] md:h-[200px] lg:h-[312px] object-cover"
            />
            <Image
              src="/02.png"
              alt="Small Image 3"
              width={312}
              height={312}
              className="w-full h-[150px] md:h-[200px] lg:h-[312px] object-cover"
            />
            <Image
              src="/20.png"
              alt="Small Image 4"
              width={312}
              height={312}
              className="w-full h-[150px] md:h-[200px] lg:h-[312px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
