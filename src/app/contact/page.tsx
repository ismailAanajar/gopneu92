"use client";
import Image from "next/image";
import { ChevronRight, Phone, Mail, MapPin, Clock, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
// import { MapLocation } from "@/components/map-location"; // Import the MapLocation component
const MapLocation = dynamic(() => import("@/components/map-location"), {
  ssr: false,
});

export default function ContactPage() {
  const mapLatitude = 48.7965; // Approximate latitude for 8 Rue Saint-Exupéry, Meudon
  const mapLongitude = 2.2365; // Approximate longitude for 8 Rue Saint-Exupéry, Meudon
  const mapAddress = "8 Rue Saint-Exupéry, 92360 MEUDON";
  const mapPhone = "+33 1 23 45 67 89";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-foreground font-sans">
      <main className="flex-1">
        {/* Contact Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-800/0 to-blue-950 relative overflow-hidden pt-32">
          <Image
            src="/banner.jpg"
            alt="Car illustration"
            layout="fill"
            objectFit="cover"
            className="absolute  right-0 bottom-0 h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-blue-950/60 z-0" />
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
            <Wrench className="h-20 w-20 mx-auto mb-6 text-yellow-400 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
              Contactez-nous
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              N&apos;hésitez pas à nous adresser vos demandes via notre
              formulaire de contact. Nous vous répondrons dans les plus brefs
              délais.
            </p>
          </div>
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-white">
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

        {/* Contact Form and Info Section */}
        <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <Card className="p-8 md:p-10 shadow-xl rounded-2xl border border-gray-100 bg-white">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous
                  recontacterons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-lg">
                      Votre nom
                    </Label>
                    <Input
                      id="name"
                      placeholder="Votre nom complet"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-lg">
                      Votre email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-lg">
                      Votre numéro de téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-lg">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Écrivez votre message ici..."
                      rows={6}
                      className="text-base"
                    />
                  </div>
                  {/* reCAPTCHA Placeholder */}
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 text-center text-gray-600 text-sm">
                    <p>reCAPTCHA v3 invisible integration would go here.</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Confidentialité - Conditions
                    </p>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-md"
                  >
                    Envoyer le message <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details and Map */}
            <div className="flex flex-col gap-10">
              <Card className="p-8 md:p-10 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
                    Nos coordonnées
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Retrouvez-nous ou contactez-nous directement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Adresse
                      </h4>
                      <p className="text-lg text-gray-700">{mapAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Téléphone
                      </h4>
                      <p className="text-lg text-gray-700">{mapPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Email
                      </h4>
                      <p className="text-lg text-gray-700">
                        contact@gopneu92.fr
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Horaires d&apos;ouverture
                      </h4>
                      <p className="text-lg text-gray-700">
                        Lundi - Vendredi: 9h - 18h
                      </p>
                      <p className="text-lg text-gray-700">Samedi: 9h - 13h</p>
                      <p className="text-lg text-gray-700">Dimanche: Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Leaflet Map Component */}
              <Card className="shadow-xl rounded-2xl border border-gray-100 overflow-hidden bg-white">
                <div className="relative w-full h-80">
                  <MapLocation
                    latitude={mapLatitude}
                    longitude={mapLongitude}
                    address={mapAddress}
                    phone={mapPhone}
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Information Section */}
        {/* <section className="w-full py-12 bg-gray-100 text-gray-700 text-sm">
          <div className="container mx-auto px-6 md:px-10 text-center max-w-4xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Informations Légales & RGPD
            </h3>
            <p className="mb-4 leading-relaxed">
              Pour traiter votre demande, local.fr utilisera et conservera vos
              données personnelles pendant 2 ans après notre dernier contact.
              Elles resteront confidentielles et ne seront pas partagées avec
              des tiers.
            </p>
            <p className="mb-4 leading-relaxed">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978
              modifiée, vous bénéficiez d&apos;un droit d&apos;accès et de
              rectification de vos données. Vous disposez également d&apos;un
              droit d&apos;opposition pour motifs légitimes, d&apos;un droit à
              l&apos;effacement des données. Vous disposez également d&apos;un
              droit à la récupération et à la portabilité des données dans
              certains cas spécifiquement prévus par la loi.
            </p>
            <p className="leading-relaxed">
              Pour l&apos;exercice de vos droits veuillez contacter :<br />
              local.fr, 231, av de Parme Inopolis - Bât C 01003 Bourg en Bresse
              cédex
              <br />
              contact@etre-visible.local.fr
            </p>
          </div>
        </section> */}
      </main>
    </div>
  );
}
