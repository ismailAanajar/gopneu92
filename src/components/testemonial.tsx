"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Import Image
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"; // Import Quote and Star icons
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  avatarUrl: string; // Added avatarUrl
  rating: number; // Added rating
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  interval?: number; // Auto-play interval in ms
}

export function TestimonialCarousel({
  testimonials,
  interval = 7000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, testimonials.length, interval]);

  const goToPrevious = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <Card className="relative p-8 md:p-12  bg-white rounded-2xl border border-gray-100 flex flex-col justify-between min-h-[320px] md:min-h-[360px]">
                <Quote className="absolute top-6 left-6 h-24 w-24 text-blue-700/10 -z-0" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Image
                    src={testimonial.avatarUrl || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4 border-2 border-blue-700"
                  />
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <CardContent className="p-0 text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6 flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </CardContent>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    - {testimonial.author}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-blue-700/80 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-blue-700/80 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              resetTimeout();
              setCurrentIndex(index);
            }}
            className={cn(
              "h-2.5 w-2.5 rounded-full bg-gray-400 transition-all duration-300",
              currentIndex === index ? "w-6 bg-blue-700" : "hover:bg-gray-500"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
