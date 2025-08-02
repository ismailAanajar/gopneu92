"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  PhoneCallIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "./ui/separator";

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

export function HeroSlider({ slides, interval = 4000 }: HeroSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <section className="relative w-full  text-white overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: interval,
          }),
        ]}
      >
        <CarouselContent className="h-[600px] md:h-[700px] relative -ml-0">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              <CarouselItem
                key={`${index}-${current}`}
                className="relative h-full pl-0 basis-full"
              >
                <div className="relative w-full h-full">
                  {/* Animated Background Image */}
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover z-0 opacity-50"
                      priority={index === 0}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r to-blue-800/30 from-blue-950 z-10" />

                  {/* Animated Content */}
                  <div className="relative z-20 flex flex-col lg:px-20 justify-center h-full  w-full lg:w-[55%] p-6">
                    <motion.div
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-4xl"
                    >
                      {/* Animated Title */}
                      <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        className="text-3xl md:text-6xl font-bold leading-tight mb-4"
                      >
                        {slide.title}
                      </motion.h2>

                      {/* Animated Description */}
                      <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                        className="text-base md:text-lg max-w-2xl mb-8"
                      >
                        {slide.description}
                      </motion.p>

                      {/* Animated Button */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <Link href={slide.buttonLink} passHref>
                          <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-8 py-3 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                          >
                            {slide.buttonText}
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <CarouselPrevious className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white border-none h-12 w-12" />
        <CarouselNext className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white border-none h-12 w-12" />
        <div className="absolute hidden lg:block  top-1/2 -translate-y-1/2  right-20 w-fit ">
          <div
            className="relative max-w-md mx-auto py-6 px-8 bg-white/10 outline-blue-500 outline-4 outline-offset-4 rounded-3xl text-gray-800
                 shadow-[0_15px_40px_rgba(0,0,0,0.1),_0_6px_18px_rgba(0,0,0,0.05)]
                 border border-gray-100
                 transform transition-all duration-500 ease-out hover:scale-[1.008]
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),_0_8px_24px_rgba(0,0,0,0.08)]
                 group overflow-hidden"
          >
            {/* Subtle radial gradient background for depth */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-70 rounded-3xl -z-10"
              aria-hidden="true"
            ></div>

            <div className="flex items-center gap-6 pb-5 mb-6 border-b border-gray-100">
              <div
                className="relative p-2.5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-sm
                     transition-all duration-300 ease-in-out
                     group-hover:from-blue-100 group-hover:to-blue-200 group-hover:border-blue-300 group-hover:shadow-md"
              >
                <Clock
                  className="size-9 text-blue-700 flex-shrink-0 drop-shadow-sm
                       transition-transform duration-300 ease-in-out
                       group-hover:scale-105 group-hover:text-blue-800"
                />
                <span className="sr-only">Horaires</span>
                {/* Subtle glow effect on icon on hover */}
                <span
                  className="absolute inset-0 rounded-full bg-blue-300 opacity-0 group-hover:opacity-20 blur-sm
                       transition-opacity duration-300"
                  aria-hidden="true"
                ></span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Nos Horaires
              </h2>
            </div>

            <div className="space-y-4 text-base mb-6">
              <p className="flex justify-between items-center">
                <span className="text-gray-700">Lun - Ven :</span>{" "}
                <span className="font-bold text-gray-900">9h00 - 18h00</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="text-gray-700">Samedi :</span>{" "}
                <span className="font-bold text-gray-900">9h00 - 13h00</span>
              </p>
              <p className="text-xs text-gray-600 mt-4 text-center leading-relaxed">
                <span className="font-semibold">Note :</span> Fermé le dimanche
              </p>
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 rounded-lg
                   shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                   transform hover:-translate-y-0.5
                   relative overflow-hidden group/button focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Link
                href="tel:+33783955937"
                className="flex items-center justify-center gap-2 text-base font-semibold z-10 relative"
              >
                <PhoneCallIcon className="size-4 transition-transform duration-300 group-hover/button:scale-110" />
                <span>Prendre Rendez-vous</span>
                {/* Subtle shine effect on button hover */}
                <span
                  className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity duration-300 rounded-lg
                       group-hover/button:animate-shine"
                  aria-hidden="true"
                ></span>
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="absolute  top-[15%] left-1/2 -translate-x-1/2 lg:hidden w-[95%] container mx-auto py-2 px-3 bg-white/90 rounded-lg text-gray-800 backdrop-blur-sm
                 shadow-[0_6px_15px_rgba(0,0,0,0.08),_0_2px_5px_rgba(0,0,0,0.02)]
                 border border-white/20
                 flex items-center justify-between gap-2
                 transform transition-all duration-300 ease-out hover:scale-[1.005]
                 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1),_0_3px_8px_rgba(0,0,0,0.04)]
                 group overflow-hidden"
        >
          {/* Subtle radial gradient background for depth */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-70 rounded-lg -z-10"
            aria-hidden="true"
          ></div>

          {/* Left Section: Icon + Title */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div
              className="relative p-1 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-xs
                     transition-all duration-300 ease-in-out
                     group-hover:from-blue-100 group-hover:to-blue-200 group-hover:border-blue-300 group-hover:shadow-sm"
            >
              <Clock
                className="size-5 text-blue-700 flex-shrink-0 drop-shadow-sm
                       transition-all duration-300 ease-in-out
                       group-hover:scale-105 group-hover:text-blue-800 group-hover:rotate-3"
              />
              <span className="sr-only">Horaires</span>
              {/* Subtle glow effect on icon on hover */}
              <span
                className="absolute inset-0 rounded-full bg-blue-300 opacity-0 group-hover:opacity-30 blur-md
                       transition-opacity duration-300"
                aria-hidden="true"
              ></span>
            </div>
            <h2 className="text-sm font-bold text-gray-900 tracking-tight leading-tight whitespace-nowrap">
              Horaires
            </h2>
          </div>

          {/* Middle Section: Condensed Hours */}
          <div className="flex flex-col items-center text-xs text-gray-700 flex-grow min-w-0">
            <p className="font-semibold text-gray-900 whitespace-nowrap transition-colors duration-200 group-hover:text-gray-950">
              Lun-Ven: 9h-18h
            </p>
            <p className="whitespace-nowrap transition-colors duration-200 group-hover:text-gray-950">
              Sam: 9h-13h
            </p>
          </div>

          {/* Right Section: Compact Button */}
          <Button
            asChild
            size="sm" // Use shadcn's small size for compactness
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-7 px-2 rounded-md
                   shadow-xs hover:shadow-sm transition-all duration-300 ease-in-out
                   transform hover:-translate-y-0.5
                   relative overflow-hidden group/button focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-1 flex-shrink-0"
          >
            <Link
              href="tel:+33783955937"
              className="flex items-center justify-center gap-1 text-xs font-semibold z-10 relative"
            >
              <PhoneCallIcon className="size-3 transition-transform duration-300 group-hover/button:scale-110" />
              <span className="hidden sm:inline">Rendez-vous</span>{" "}
              {/* Hide text on very small screens */}
              <span className="sr-only sm:hidden">
                Prendre Rendez-vous
              </span>{" "}
              {/* SR-only for hidden text */}
              {/* Subtle shine effect on button hover */}
              <span
                className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity duration-300 rounded-md
                       group-hover/button:animate-shine"
                aria-hidden="true"
              ></span>
            </Link>
          </Button>
        </div>
      </Carousel>

      {/* Pagination Dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 w-3 rounded-full cursor-pointer bg-white transition-all duration-300",
              current === index + 1 ? "w-8 bg-[rgba(2,31,154,1)]" : "opacity-50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave SVG */}
      <div className="absolute -bottom-0  left-0 w-full h-24 md:h-32 lg:h-48 text-white">
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
