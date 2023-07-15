import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="mt-[64px] rounded-2xl bg-[#f4ecff] h-[90vh]  py-4 px-8 ">
      <div className="grid  grid-cols-2 gap-4 h-full items-center">
        <div className="flex flex-col gap-2">
          <p className="font-normal">Ahead App</p>
          <h1 className="text-[5rem] font-semibold">
            Master your life by mastering emotions
          </h1>
          <div className="flex gap-7 items-center">
            <Image
              width={150}
              height={30}
              alt="Apple Play Store"
              src="/appleStoreIcon.svg"
              className="cursor-pointer"
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {[...Array(5)].map((val, index) => {
                  return (
                    <Image
                      alt="star"
                      src="/starIcon.svg"
                      width={16}
                      height={16}
                      key={index}
                    />
                  );
                })}
              </div>
              <p className="">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={"/bannerIcon.svg"}
            alt="banner icon"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
