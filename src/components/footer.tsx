import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full py-12 bg-gray-950 text-gray-300 text-sm relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-20 lg:h-24 text-white transform rotate-180">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-12 pt-14">
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="#"
            className="text-3xl font-extrabold text-blue-700 mb-4 tracking-tight"
            prefetch={false}
          >
            <Image
              src="/logo-white.png"
              alt="Go Pneu 92"
              width={140}
              height={100}
            />
          </Link>
          <p className="text-center md:text-left text-base leading-relaxed">
            Votre expert en pneumatiques à Meudon, engagé pour votre sécurité et
            votre confort sur la route.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 mb-3 text-base">
            <Phone className="h-5 w-5 text-blue-700" />{" "}
            <a href="tel:+33783955937">+33 783955937</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 mb-3 text-base">
            <Mail className="h-5 w-5 text-blue-700" />{" "}
            <a href="mail:gopneu92@gmail.com">gopneu92@gmail.com</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-base">
            <MapPin className="h-5 w-5 text-blue-700" /> 8 Rue Saint-Exupéry,
            92360 Meudon, France.
          </p>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-white mb-5">Suivez-nous</h3>
          <div className="flex justify-center md:justify-end space-x-5 mb-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-700 transition-colors"
              prefetch={false}
            >
              <Facebook className="h-7 w-7" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-700 transition-colors"
              prefetch={false}
            >
              <Instagram className="h-7 w-7" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <nav className="flex flex-col md:items-end space-y-3 text-base">
            <Link
              href="#"
              className="hover:text-white transition-colors"
              prefetch={false}
            >
              Mentions Légales
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              prefetch={false}
            >
              Politique de Confidentialité
            </Link>
          </nav>
        </div>
      </div>
      <Separator className="my-12 bg-gray-800" />
      <div className="container mx-auto px-6 md:px-10 text-center text-gray-500 text-sm">
        <p>&copy; 8 Rue Saint-Exupéry, 92360 Meudon, France.</p>
      </div>
    </footer>
  );
};

export default Footer;
