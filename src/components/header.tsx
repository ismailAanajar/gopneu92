"use client"; // This page needs to be a client component to use the useScroll hook

import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Clock,
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ChevronRight,
  Car,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HeroSlider } from "@/components/hero-slider";
import { useScroll } from "@/hooks/use-scroll"; // Import the useScroll hook
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Header = () => {
  const scrolled = useScroll({ threshold: 50 }); // Use the hook for header scroll effect
  const pathanme = usePathname();

  return (
    <header
      className={cn(
        "w-full py-4   fixed top-0 left-0 right-0 z-30   transition-all duration-300 ",
        scrolled ? "shadow-xl py-3 bg-white" : ""
      )}
    >
      <div className="container flex items-center justify-between mx-auto px-2">
        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-800 tracking-tight"
        >
          <Image
            src={scrolled ? "/logo.png" : "/logo-white.png"}
            alt="logo"
            width={100}
            height={40}
            className=""
          />
        </Link>
        <nav className="ml-auto  relative hidden md:flex space-x-8">
          <Link
            href="/"
            className={cn(
              "text-base font-medium text-white hover:text-blue-500 transition-colors relative group",
              {
                "text-black": scrolled,
                "text-blue-500": pathanme === "/",
              }
            )}
          >
            ACCUEIL
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/a-propos"
            className={cn(
              "text-base font-medium text-white hover:text-blue-500 transition-colors relative group",
              {
                "text-black": scrolled,
                "text-blue-500": pathanme === "/a-propos",
              }
            )}
          >
            À PROPOS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-base font-medium text-white hover:text-blue-500 transition-colors relative group",
              {
                "text-black": scrolled,
                "text-blue-500": pathanme === "/services",
              }
            )}
          >
            NOS SERVICES
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-base font-medium text-white hover:text-blue-500 transition-colors relative group",
              {
                "text-black": scrolled,
              }
            )}
            prefetch={false}
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </nav>
        <a
          className="ml-auto mr-4 lg:block"
          href="whatsapp://send?text=Hello World!&phone=+212709446968"
        >
          <svg
            height="30"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                style={{ fill: "#EDEDED" }}
                d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
              ></path>{" "}
              <path
                style={{ fill: "#55CD6C" }}
                d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
              ></path>{" "}
              <path
                style={{ fill: "#FEFEFE" }}
                d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
              ></path>{" "}
            </g>
          </svg>
        </a>
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white m-0 z-[9999]"
              >
                <Menu className="h-10 w-10 " />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] z-[9999] bg-white p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="text-2xl font-extrabold text-blue-800 tracking-tight"
                  prefetch={false}
                >
                  <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={100}
                    height={40}
                    className=""
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-6 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={cn(
                      "text-base font-medium  hover:text-blue-500 transition-colors relative group",
                      {
                        "text-black": scrolled,
                        "text-blue-500": pathanme === "/",
                      }
                    )}
                  >
                    ACCUEIL
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/a-propos"
                    className={cn(
                      "text-base font-medium  hover:text-blue-500 transition-colors relative group",
                      {
                        "text-black": scrolled,
                        "text-blue-500": pathanme === "/a-propos",
                      }
                    )}
                  >
                    À Propos
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services"
                    className={cn(
                      "text-base font-medium  hover:text-blue-500 transition-colors relative group",
                      {
                        "text-black": scrolled,
                        "text-blue-500": pathanme === "/services",
                      }
                    )}
                  >
                    NOS SERVICES
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-base font-medium  hover:text-blue-500 transition-colors relative group",
                      {
                        "text-black": scrolled,
                        "text-blue-500": pathanme === "/contact",
                      }
                    )}
                  >
                    CONTACT
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </SheetClose>
              </nav>
              <div className=" pt-8">
                <div>
                  <Button
                    asChild
                    className=" md:inline-flex bg-blue-700 hover:bg-blue-800    shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link
                      href={"https://calendly.com/omaranajar/new-meeting"}
                      target="_blank"
                    >
                      Prendre Rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            asChild
            className="hidden md:inline-flex bg-blue-700 hover:bg-blue-800 text-white   shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link
              href={"https://calendly.com/omaranajar/new-meeting"}
              target="_blank"
            >
              Prendre Rendez-vous
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
