"use client";
import Image from "next/image";
import img from "@/public/images/hero0.jpg";
import img1 from "@/public/images/hero1.jpg";
import img2 from "@/public/images/hero2.jpg";
import img3 from "@/public/images/hero3.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const SliderArray = [
    {
      id: "01",
      heading: "One Stop Solution for all your Wall Painting",
      p: "Hire professional wall painter , get best quality at highly affordable rate ",
      img: img.src,
      dotThree: "Wall paint",
    },
    {
      id: "02",
      heading: "Ceiling Paint",
      p: "We will do ceiling painting service at your door step",
      dotThree: "Ceiling Paint",
      img: img1.src,
    },
    {
      id: "03",
      heading: "Wood Polishing",
      p: "We will furnish your furniture and other wood materials, closets etc.",
      dotThree: "Wood Polishing Service",
      img: img2.src,
    },
    {
      id: "04",
      heading: "Wall PVC Panel Installation",
      p: "Protect your wall with water resistant, long lasting with polyvinyl wall paintings",
      dotThree: "Wall PVC Panel Installation",
      img: img3.src,
    },
  ];

  const [itemIndex, setItemIndex] = useState(0);
  const handleRightArrow = () => {
    if (itemIndex < SliderArray.length - 1) {
      setItemIndex(itemIndex + 1);
    } else {
      setItemIndex(0); // Loop back to start
    }
  };
  const handleLeftArrow = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    } else {
      setItemIndex(SliderArray.length - 1); // Loop to end
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setItemIndex((prevIndex) => {
        if (prevIndex >= SliderArray.length - 1) {
          return 0; // Reset to first slide
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [itemIndex, SliderArray.length]);
  const SliderItem = ({
    item,
  }: {
    item: { id: string; heading: string; p: string; img: string; dotThree: string };
  }) => (
    <div className="hero-slider p-4 px-6 min-w-screen ">
      <div className="flex gap-2 px-14 ">
        <div className="text py-3 mx-2 ">
          <h1 className="text-4xl py-6 font-bold">
            {item.heading.includes("One") ? (
              <>
                One Stop Solution for all your{" "}
                <span className="text-yellow">Wall Painting</span>
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
            src={item.img}
            alt="services"
            height={500}
            width={500}
            className="rounded-3xl aspect-square"
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
            transform: `translateX(-${itemIndex * 100}vw)`,
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
            className={`button cursor-pointer flex items-center border-t-2  hover:border-t-amber-400  w-fit p-7 py-10 gap-6 flex-1 ${
              i === itemIndex ? "border-t-amber-400" : "border-t-white"
            } `}
          >
            <div className="number underline text-2xl font-thin">{item.id}</div>
            <div className="service text-2xl font-thin">{item?.dotThree}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
