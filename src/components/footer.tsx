import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full py-12 bg-gray-950 text-gray-300 text-sm">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
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
            <Phone className="h-5 w-5 text-blue-700" /> +33 1 23 45 67 89
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 mb-3 text-base">
            <Mail className="h-5 w-5 text-blue-700" /> contact@gopneu92.fr
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-base">
            <MapPin className="h-5 w-5 text-blue-700" /> 123 Rue de la Pneu,
            92190 Meudon
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
        <p>&copy; 2025 GO PNEU 92. Tous droits réservés.</p>
        <p className="mt-2">Créé par ismailAnajar</p>
      </div>
    </footer>
  );
};

export default Footer;
