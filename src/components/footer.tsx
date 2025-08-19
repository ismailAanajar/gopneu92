import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full py-12  text-slate-800 text-sm relative overflow-hidden">
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
            <Image src="/logo2.png" alt="Go Pneu 92" width={200} height={100} />
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
            <a href="mailto:gopneu92@gmail.com">gopneu92@gmail.com</a>
          </p>
          <Link
            href={"https://maps.app.goo.gl/qAfgiw4q5pt5LmKQ7"}
            target="_blank"
            className="flex items-center justify-center md:justify-start gap-3 text-base"
          >
            <MapPin className="h-5 w-5 text-blue-700" /> 8 Rue Saint-Exupéry,
            92360 Meudon, France.
          </Link>
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
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-700 transition-colors"
              prefetch={false}
            >
              <svg
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.32296740998066475 -3.1283528999801873 42.68446958125966 42.128352899980186"
              >
                <g fill="none">
                  <path
                    d="M14 15.599v-1.486A13.1 13.1 0 0 0 12.337 14C5.535 14 0 19.18 0 25.547 0 29.452 2.086 32.91 5.267 35c-2.13-2.132-3.315-4.942-3.313-7.861 0-6.276 5.377-11.394 12.046-11.54"
                    fill="#00f2ea"
                  />
                  <path
                    d="M14.327 32c2.876 0 5.221-2.273 5.328-5.107l.01-25.292h4.65A8.72 8.72 0 0 1 24.164 0h-6.35l-.011 25.293c-.106 2.832-2.453 5.105-5.328 5.105a5.329 5.329 0 0 1-2.476-.61A5.34 5.34 0 0 0 14.327 32m18.672-21.814V8.78a8.818 8.818 0 0 1-4.81-1.421A8.85 8.85 0 0 0 33 10.186"
                    fill="#00f2ea"
                  />
                  <path
                    d="M28 7.718A8.63 8.63 0 0 1 25.832 2h-1.697A8.735 8.735 0 0 0 28 7.718M12.325 20.065c-2.94.004-5.322 2.361-5.325 5.27A5.267 5.267 0 0 0 9.854 30a5.2 5.2 0 0 1-1.008-3.073c.003-2.91 2.385-5.268 5.325-5.271.55 0 1.075.09 1.572.244v-6.4a11.72 11.72 0 0 0-1.572-.114c-.092 0-.183.006-.274.007v4.916a5.286 5.286 0 0 0-1.572-.244"
                    fill="#ff004f"
                  />
                  <path
                    d="M32.153 11v4.884a15.15 15.15 0 0 1-8.813-2.811V25.84c0 6.377-5.23 11.565-11.658 11.565-2.485 0-4.789-.778-6.682-2.097A11.67 11.67 0 0 0 13.528 39c6.429 0 11.659-5.188 11.659-11.564V14.668A15.15 15.15 0 0 0 34 17.478v-6.283A8.87 8.87 0 0 1 32.153 11"
                    fill="#ff004f"
                  />
                  <path
                    d="M23.979 25.42V12.632A15.741 15.741 0 0 0 33 15.448v-4.89a9.083 9.083 0 0 1-4.912-2.82C26.016 6.431 24.586 4.358 24.132 2h-4.747l-.01 25.215c-.11 2.824-2.505 5.09-5.44 5.09-1.754-.002-3.398-.822-4.42-2.204-1.794-.913-2.919-2.716-2.92-4.682.003-2.92 2.44-5.285 5.45-5.289.56 0 1.098.09 1.608.245v-4.933C7.202 15.589 2 20.722 2 27.016c0 3.045 1.219 5.816 3.205 7.885A12.115 12.115 0 0 0 12.045 37c6.58 0 11.934-5.195 11.934-11.58"
                    fill="#fff"
                  />
                </g>
              </svg>
              <span className="sr-only">TikTok</span>
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
