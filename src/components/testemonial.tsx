"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating?: number;
};

export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto flex-col lg:flex-row flex gap-8 ">
        <div className="text-left mb-16 w-full lg:w-[35%]">
          <h2 className="text-sm font-medium text-gray-600 mb-4">
            Testimonial
          </h2>
          <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            23k+ Customers gave
            <br />
            their <span className="text-blue-600">Feedback</span>
          </h3>
          <Button
            size={"lg"}
            className="bg-blue-500 !pr-0 hover:bg-blue-800  text-white font-bold"
          >
            <Link
              href={"https://g.page/r/Cdc2gabsdYATEAE/review"}
              target="_blank"
              className="flex items-center gap-2"
            >
              Écrire un avis
              <svg
                version="1.1"
                id="Layer_1"
                width={50}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 460 460"
                fill="#000000"
                className="!w-10 !h-10"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      style={{ fill: "#1420b4" }}
                      d="M230.333,0C103.308,0,0,102.974,0,230c0,98.785,62.479,183.024,150.004,215.598l297.381-291.024 C416.25,64.595,330.94,0,230.333,0z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#1a48d5" }}
                      d="M460,230c0-26.416-4.467-51.784-12.663-75.41l-44.274-44.274l-345.46,201.7l50.785,50.785 l-10.785,30.515l52.366,52.367C174.895,454.935,202.187,460,230.332,460C357.358,460,460,357.026,460,230z"
                    ></path>{" "}
                    <polygon
                      style={{ fill: "#636ffe" }}
                      points="403.063,110.317 403.063,312.017 230.332,312.017 200.003,211.167 230.332,110.317 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#5764ff" }}
                      points="230.332,110.317 230.332,312.017 178.893,312.017 97.603,393.317 97.603,312.017 57.603,312.017 57.603,110.317 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#5764ff" }}
                      points="383.063,130.317 383.063,292.017 230.332,292.017 210.333,211.167 230.332,130.317 "
                    ></polygon>{" "}
                    <rect
                      x="77.603"
                      y="130.317"
                      style={{ fill: "#FFFFFF" }}
                      width="152.729"
                      height="161.7"
                    ></rect>{" "}
                    <polygon
                      style={{ fill: "#E0A300" }}
                      points="362.823,202.002 343.073,222.122 347.223,250.002 321.993,237.432 311.993,214.882 321.993,172.332 335.023,197.332 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#FFC61B" }}
                      points="321.993,172.332 321.993,237.432 296.753,250.002 300.913,222.122 281.163,202.002 308.963,197.332 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#E0A300" }}
                      points="271.162,202.002 251.412,222.122 255.562,250.002 230.332,237.432 220.332,214.882 230.332,172.332 243.362,197.332 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#FFC61B" }}
                      points="230.332,172.332 230.332,237.432 205.092,250.002 209.252,222.122 189.502,202.002 217.302,197.332 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#E0A300" }}
                      points="179.503,202.002 159.753,222.122 163.903,250.002 138.673,237.432 128.673,214.882 138.673,172.332 151.703,197.332 "
                    ></polygon>{" "}
                    <polygon
                      style={{ fill: "#FFC61B" }}
                      points="138.673,172.332 138.673,237.432 113.433,250.002 117.593,222.122 97.843,202.002 125.643,197.332 "
                    ></polygon>{" "}
                  </g>{" "}
                </g>
              </svg>
            </Link>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full lg:w-[55%] max-w-6xl grow mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 ">
                <Card className="h-full border-0  transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={testimonial.src}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex gap-2 mt-8">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" />
            <CarouselNext className="relative right-0 top-0 translate-y-0 h-12 w-12 border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
