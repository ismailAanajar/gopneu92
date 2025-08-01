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
} from "@/components/ui/sheet"; // Import Sheet components
import { TestimonialCarousel } from "@/components/testemonial";
import { title } from "process";

export default function HomePage() {
  const testimonials = [
    {
      quote:
        "Un service exceptionnel et des professionnels à l'écoute. Mes pneus ont été changés rapidement et avec une grande précision. Je recommande vivement Go Pneu 92 pour leur expertise et leur accueil chaleureux.",
      author: "Jean-Luc D.",
      avatarUrl: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "J'ai été impressionné par la rapidité et l'efficacité de l'équipe. Le rapport qualité-prix est excellent, et mes pneus d'occasion sont comme neufs. Une adresse à retenir à Meudon !",
      author: "Sophie L.",
      avatarUrl: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Toujours un plaisir de venir chez Go Pneu 92. Le personnel est très aimable et compétent. Ils prennent le temps d'expliquer les choses et le travail est toujours impeccable. Merci !",
      author: "Marc P.",
      avatarUrl: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
    {
      quote:
        "Service rapide et efficace. L'équipe est très professionnelle et les prix sont justes. Je suis très satisfait de mes nouveaux pneus.",
      author: "Pierre D.",
      avatarUrl: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "J'ai eu un problème de pneu en urgence, et Go Pneu 92 a été incroyablement réactif. Ils ont résolu mon problème en un rien de temps. Un grand merci !",
      author: "Nathalie R.",
      avatarUrl: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ];
  const heroSlides = [
    {
      imageUrl: "/home.jpg",
      title: "Service pneumatique à Meudon",
      description:
        "Découvrez Go Pneu 92, votre partenaire local pour tous vos besoins en pneumatiques. Nous proposons divers services allant de la vente de pneus neufs ou d'occasion au montage, démontage, gonflage et équilibrage de vos roues. Notre objectif est de garantir une conduite sécurisée grâce à un équipement de qualité et des prestations réalisées par nos experts.",
      buttonText: "Optimisez vos roues",
      buttonLink: "#services",
      icon: Wrench,
    },
    {
      imageUrl: "/Gonfler-pneus-entretien.jpeg",
      title: "Pneus Neufs et Occasion",
      description:
        "Explorez notre vaste sélection de pneus neufs et d'occasion de toutes marques. Trouvez la solution parfaite pour votre véhicule et votre budget, avec des conseils d'experts pour vous guider.",
      buttonText: "Voir nos pneus",
      buttonLink: "#services",
      icon: Car,
    },
    {
      imageUrl: "/monatge.jpg",
      title: "Expertise et Qualité Garanties",
      description:
        "Bénéficiez de l'expertise de nos techniciens qualifiés et d'un équipement de pointe pour un service irréprochable. Votre sécurité et votre satisfaction sont notre priority absolue.",
      buttonText: "Prendre rendez-vous",
      buttonLink: "#appointment",
      icon: Sparkles,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen  text-foreground font-sans">
      {/* Hero Slider Section */}
      <HeroSlider slides={heroSlides} />

      {/* Services Section */}
      <section id="services" className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Nos services principaux
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous mettons à votre disposition une gamme complète de services
                pneumatiques pour répondre à vos besoins spécifiques. Chaque
                prestation est réalisée avec soin et précision, garantissant
                ainsi votre satisfaction. Que vous ayez besoin de pneus neufs ou
                d’occasion, de montage ou d’un équilibrage, nous sommes là pour
                vous accompagner
              </p>
              <Button variant="outline" className="text-lg " asChild>
                <Link href={"/services"}>
                  Découvrez nos services
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  id: "vente",
                  title: "Vente de pneus",
                  img: "/Vente de pneus neufs.webp",
                },
                {
                  id: "montage",
                  title: "Montage & Équilibrage",
                  img: "/montage equilibrage-.webp",
                },
                {
                  id: "gonflage",
                  title: "Gonflage de pneus",
                  img: "/gonflage de pneu.webp",
                },
                {
                  id: "entretien",
                  title: "Entretien",
                  img: "/Gonfler-pneus-entretien.jpeg",
                },
              ].map((service, index) => (
                <Link
                  href={"/services#" + service.title}
                  key={index}
                  className="relative group overflow-hidden rounded-2xl aspect-square"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/50 bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <ArrowUpRight className="h-7 w-7 self-end text-white opacity-80 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <h3 className="text-2xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="w-full py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            Pourquoi choisir Go Pneu 92 ?
            <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md">
              <CheckCircle className="h-16 w-16 text-blue-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Qualité Garantie
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous n&apos;utilisons que des équipements de pointe et des pneus
                de marques reconnues pour votre sécurité.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md">
              <ShieldCheck className="h-16 w-16 text-blue-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Expertise Certifiée
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre équipe de techniciens qualifiés assure un service
                irréprochable et des conseils avisés.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md">
              <Users className="h-16 w-16 text-blue-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Service Client Dédié
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Votre satisfaction est notre priorité. Nous sommes à votre
                écoute pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 relative p-4">
            <Image
              src="/home.jpg"
              alt="À propos de Go Pneu 92"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full h-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-700 rounded-full mix-blend-multiply blur-2xl opacity-10" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply blur-2xl opacity-10" />
          </div>
          <div className="lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              À propos de Go Pneu 92
              <span className="block w-24 h-1 bg-blue-700 mt-4 rounded-full" />
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Go Pneu 92 est une entreprise spécialisée dans la vente et le
              service de pneumatiques. Notre mission est de fournir des
              solutions fiables et adaptées à tous types de véhicules,
              qu&apos;il s&apos;agisse de voitures, d&apos;utilitaires ou motos.
              Grâce à nos équipements modernes et à notre équipe expérimentée,
              nous assurons une conduite en toute sérénité.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white  text-lg "
            >
              <Link href={"/a-propos"}>
                En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hours & Appointment Section - New Redesign */}
      <section
        id="appointment"
        className="w-full py-20 md:py-32 relative overflow-hidden"
      >
        {/* <Image
          src="/horaire.webp"
          alt="Background image of a clock or calendar"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-15"
        /> */}
        <div className="absolute inset-0 bg-blue-950/80 z-0" />{" "}
        {/* Darker, more immersive overlay */}
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 drop-shadow-md">
            Facilitez votre visite
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
          </h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <Clock className="h-16 w-16 text-yellow-400 flex-shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Nos horaires</h3>
                <p className="text-xl leading-relaxed">
                  Du lundi au vendredi :{" "}
                  <span className="font-semibold">9 h à 18 h</span>
                </p>
                <p className="mt-2 text-xl leading-relaxed">
                  Samedi : <span className="font-semibold">9 h à 13 h</span>
                </p>
                <p className="mt-4 text-base text-gray-300">
                  Fermé le dimanche
                </p>
              </div>
            </div>

            <Separator className="my-10 bg-white/30" />

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <CalendarCheck className="h-16 w-16 text-yellow-400 flex-shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">
                  Prise de rendez-vous simplifiée
                </h3>
                <p className="text-xl leading-relaxed">
                  Nous facilitons votre accès à nos services grâce à un système
                  de prise de rendez-vous rapide et intuitif. Réservez en ligne
                  ou contactez-nous directement par téléphone pour planifier
                  votre visite selon vos disponibilités.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg  shadow-md"
            >
              <Link
                href={"https://calendly.com/omaranajar/new-meeting"}
                target="_blank"
              >
                Réserver en ligne <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Ce que nos clients disent
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Votre confiance est notre plus grande récompense. Voici quelques
              avis de nos clients satisfaits.
            </p>
            <div className="w-24 h-1.5 bg-blue-700 mx-auto mt-6 rounded-full" />
          </div>
          <TestimonialCarousel
            testimonials={[
              {
                quote:
                  "Service rapide et efficace ! J'ai fait changer mes pneus et je suis très satisfait du résultat. L'équipe est professionnelle et accueillante.",
                author: "Julien M.",
                avatarUrl: "/user1.jpg",
                rating: 5,
              },
              {
                quote:
                  "Très bon rapport qualité-prix. J'ai trouvé des pneus d'occasion en excellent état. Je recommande vivement Go Pneu 92.",
                author: "Sophie L.",
                avatarUrl: "/user2.jpg",
                rating: 5,
              },
              {
                quote:
                  "Accueil chaleureux et conseils avisés. On sent que l'équipe maîtrise son sujet. Je reviendrai sans hésiter pour l'entretien de mes pneus.",
                author: "Marc D.",
                avatarUrl: "/user3.jpg",
                rating: 4,
              },
            ]}
          />
        </div>
      </section>

      {/* Contact Banner */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pneus-neufs-et-d%E2%80%99occasion-%C3%A0-Meudon-Optimisez-vos-roues-UkU5WoaJWjfKJeHQMvW2nbX4SLqnVb.png"
            alt="Car illustration"
            width={1000}
            height={500}
            className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-30 md:opacity-50"
          />
        </div> */}
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
            Contactez-nous pour vos besoins en pneumatiques
            <span className="block w-24 h-1 bg-yellow-500 mt-4 rounded-full" />
          </h2>
          <p className="text-xl mb-10 max-w-3xl opacity-95 leading-relaxed">
            Prendre soin de vos pneus, c&apos;est garantir votre sécurité et
            celle de vos passagers. Go Pneu 92 est à votre service pour vous
            accompagner à chaque étape, de l&apos;achat à l&apos;installation.
            Contactez-nous pour planifier votre visite.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg px-10 py-4 text-xl rounded-full"
          >
            Roulez en sécurité <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
