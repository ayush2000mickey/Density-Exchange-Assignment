"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DoesThisSoundsFamiliar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref: any = useRef();
  const boxContainerRef: any = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      });
    } else {
    }
  }, [isIntersecting]);
  return (
    <section className="overflow-x-hidden p-4 " ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, scale: 1, y: 0, x: 0 },
          hidden: { opacity: 0, scale: 0, x: "-50%" },
        }}
      >
        <h1 className="text-2xl font-bold px-4">Does this sound familiar...</h1>
      </motion.div>
      <div
        className=" p-10 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-auto"
        ref={boxContainerRef}
      >
        <div className=" ease-linear rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/angry.png" />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-blue-300 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/happy.png" />
          <h3 className="font-bold text-lg text-white">
            You get a prmotion at work
          </h3>
          <p className="text-gray-600">
            You question yourself and wonder when they eill realize that you are
            unqualified imposter instead of trusting yourself & your abilites
          </p>
        </div>

        <div className="rounded-xl bg-yellow-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/shocked.png" />
          <h3 className="font-bold text-lg ">You attend a class reunion</h3>
          <p className="text-gray-700">
            You compare yourelf with your peers' achievement instead of making
            your self judgement more indeoendent of others.
          </p>
        </div>

        <div className=" rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/wow.png" />
          <h3 className="font-bold text-lg ">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/sad.png" />
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>

        <div className="rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/angry.png" />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>
        <div className=" rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/wow.png" />
          <h3 className="font-bold text-lg ">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-200">
          <Image width={70} height={70} alt="" src="/sad.png" />
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoesThisSoundsFamiliar;
