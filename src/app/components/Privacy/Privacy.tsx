import React from "react";

const Privacy = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="">We take privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-2xl font-normal">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br /> Odio optio assumenda earum quo odit corporis."
      </p>
      <p className="">
        With Love <span className="">Name....</span>
      </p>
      <div className="pt-6">
        <button className="rounded-3xl p-4 px-6 text-white bg-black">
          Start Test
        </button>
      </div>
      <div className="text-sm">Take only 5 minutes</div>
    </section>
  );
};

export default Privacy;
