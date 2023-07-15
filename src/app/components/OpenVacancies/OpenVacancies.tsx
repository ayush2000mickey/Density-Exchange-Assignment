"use client";
import React from "react";
import { motion } from "framer-motion";

const vacancies = [
  {
    jobTitle: "Senior Full Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Competitive Pay",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Competitive Pay",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Competitive Pay",
  },
];

const OpenVacancies = () => {
  return (
    <section className="mt-20 py-8">
      <h1 className="text-5xl font-bold">Open Vacancies</h1>
      <div className="mt-12 grid grid-cols-3 justify-between gap-8">
        {vacancies.map((vac, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                hidden: { opacity: 0, scale: 0.5 },
              }}
              key={index}
            >
              <div className="rounded-2xl bg-yellow-200 p-6 px-10">
                <h2 className="text-xl font-semibold">{vac.jobTitle}</h2>
                <ul className="mt-6  text-sm font-semibold list-disc pl-4">
                  <li className="">{vac.position}</li>
                  <li className="">{vac.location}</li>
                  <li className="">{vac.pay}</li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OpenVacancies;
