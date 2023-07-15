"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MeetAheadApp = () => {
  return (
    <section className="mt-10 mb-10  rounded-3xl h-[500px] bg-orange-50 px-8 py-20">
      <div className="mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 0, y: "100%", x: 0 },
          }}
        >
          <p className="font-semibold">Built out of frustation</p>
          <h1 className="text-[2.5rem] font-bold">Meet the ahead team</h1>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8">
        <div className="grid place-items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0, x: "-50%", y: 0 },
            }}
          >
            <Image src={"/teamAhead.svg"} alt="d" width={300} height={300} />
          </motion.div>
        </div>
        <div className="grid  place-items-center text-gray-600 font-semibold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0, x: "50%", y: 0 },
            }}
          >
            <p className="pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              distinctio repellendus eum excepturi totam iusto doloribus. Culpa
              dolorum eaque reiciendis.
            </p>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              molestias.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetAheadApp;
