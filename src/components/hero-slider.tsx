"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  icon?: React.ElementType; // Optional icon for the slide
}

interface HeroSliderProps {
  slides: Slide[];
  interval?: number; // Auto-play interval in ms
}

export function HeroSlider({ slides, interval = 7000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] text-white ">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0  bg-gradient-to-r from-blue-800/40 to-blue-950 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex flex-col  lg:px-20  justify-center h-full  p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            {/* {(() => {
              const Icon = slides[currentSlide].icon;
              return (
                Icon && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Icon className="h-16 w-16  mb-5 text-white" />
                  </motion.div>
                )
              );
            })()} */}
            <h2 className="text-4xl md:text-6xl  font-bold leading-tight mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-md md:text-lg max-w-2xl  mb-8">
              {slides[currentSlide].description}
            </p>
            <Link href={slides[currentSlide].buttonLink} passHref>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-8 py-3 text-lg "
              >
                {slides[currentSlide].buttonText}
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className=" hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className=" hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-[99] flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 w-3 rounded-full cursor-pointer bg-white transition-all duration-300",
              currentSlide === index
                ? "w-8 bg-[rgba(2,31,154,1)]"
                : "opacity-50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute -bottom-0 z-50 left-0 w-full h-24 md:h-32 lg:h-48 text-white">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
