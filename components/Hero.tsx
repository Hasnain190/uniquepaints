"use client";
import Image from "next/image";
import img from "@/public/images/hero-image.jpeg";
import {  useState } from "react";

export default function Hero() {
  const SliderArray = [
    {
      id: "01",
      heading: "One Stop Solution for all your Wall Painting",
      p: "Hire professional wall painter , get best quality at highly affordable rate ",
      dotThree: "Wall paint",
    },
    {
      id: "02",
      heading: "Ceiling Paint",
      p: "We will do ceiling painting service at your door step",
      dotThree: "Ceiling Paint",
    },
    {
      id: "03",
      heading: "Wood Polishing",
      p: "We will furnish your furniture and other wood materials, closets etc.",
      dotThree: "Wood Polishing Service",
    },
    {
      id: "04",
      heading: "Wall PVC Panel Installation",
      p: "Protect your wall with water resistant, long lasting with polyvinyl wall paintings",
      dotThree: "Wall PVC Panel Installation",
    },
  ];

  const [itemIndex, setItemIndex] = useState(0);
  const handleRightArrow = () => {
    if (itemIndex < SliderArray.length - 1) {
      setItemIndex(itemIndex + 1);
    }
  };
  const handleLeftArrow = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  };
  console.log(itemIndex);
  const SliderItem = ({
    item,
  }: {
    item: { id: string; heading: string; p: string };
  }) => (
    <div className="hero-slider p-4 px-6 min-w-screen ">
      <div className="flex gap-2 px-14 ">
        <div className="text py-3 mx-2 ">
          <h1 className="text-4xl py-6 font-bold">
            {item.heading.includes("One") ? (
              <>
                One Stop Solution for all your Home
                <span className="text-yellow"> Improvement</span> and{" "}
                <span className="text-yellow">Renovation</span> needs
              </>
            ) : (
              item.heading
            )}
          </h1>
          <p className="font-light py-4">{item.p}</p>
          <div className="button-container flex items-center gap-6  w-full ">
            <div className="button bg-cyan text-yellow w-fit px-6 py-2 rounded-full text-sm font-bold cursor-pointer">
              Contact Us
            </div>
            <div className="learn-more text-yellow font-bold cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="image sm:w-1/2 hidden sm:block">
          <Image
            src={img}
            alt="services"
            height={500}
            width={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0c1c36] font-manrope">
      <div className="carousal flex items-center  py-6 px-6 overflow-hidden relative">
        <div
          className="left-arrow bg-white/5 w-fit px-5 py-3 rounded-full text-2xl cursor-pointer hover:bg-white/10 z-30 absolute "
          onClick={handleLeftArrow}
        >
          {"<"}
        </div>

        <div
          className="slider-item-container  mx-auto  flex flex-row transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (itemIndex * 100) / SliderArray.length
            }%)`,
          }}
        >
          {SliderArray.map((item, i) => (
            <SliderItem key={i} item={item} />
          ))}
        </div>
        <div
          className="right-arrow bg-white/5 w-fit px-5 py-3 rounded-full text-2xl cursor-pointer hover:bg-white/10 z-30 absolute right-5"
          onClick={handleRightArrow}
        >
          {">"}
        </div>
      </div>

      <div className="bottom flex  gap-6  justify-center">
        {SliderArray.map((item, i) => (
          <div
            onClick={() => setItemIndex(i)}
            key={i}
            className="button cursor-pointer flex items-center border-t-2 border-t-white hover:border-t-amber-400  w-fit p-7 py-10 gap-6 flex-1"
          >
            <div className="number underline text-2xl font-thin">{item.id}</div>
            <div className="service text-2xl font-thin">{item?.dotThree}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
