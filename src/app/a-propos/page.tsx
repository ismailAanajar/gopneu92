import Image from "next/image";
import { ChevronRight, Award, Users, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-foreground font-sans">
      {/* Header (reused from app/page.tsx - not included here to avoid duplication) */}
      {/* You would typically include your Header component here */}

      <main className="flex-1">
        {/* About Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden pt-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/illustration-voiture .webp"
              alt="Car illustration"
              width={1000}
              height={500}
              className="absolute  right-0 bottom-0 h-full w-auto object-contain opacity-5"
            />
          </div>
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
              À Propos de Go Pneu 92
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Découvrez notre histoire, nos valeurs et notre engagement à vous
              offrir le meilleur service pneumatique à Meudon.
            </p>
          </div>
        </section>

        {/* Our Story/Mission Section */}
        <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Notre Histoire et Notre Mission
                <span className="block w-24 h-1 bg-blue-700 mt-4 rounded-full mx-auto lg:mx-0" />
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Fondée avec la passion de l&apos;automobile et l&apos;engagement
                envers la sécurité, Go Pneu 92 est devenue une référence en
                matière de pneumatiques à Meudon. Notre mission est simple :
                fournir des solutions de pneus fiables et de haute qualité,
                accompagnées d&apos;un service client exceptionnel. Nous croyons
                que chaque conducteur mérite de rouler en toute confiance, et
                c&apos;est pourquoi nous mettons tout en œuvre pour garantir la
                performance et la longévité de vos pneumatiques.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Nous sommes fiers de notre équipe d&apos;experts, de nos
                équipements de pointe et de notre approche personnalisée. Votre
                sécurité est notre priorité absolue.
              </p>
            </div>
            <div className="lg:order-2 relative p-4">
              <Image
                src="/photo de neuf--.webp"
                alt="Go Pneu 92 workshop"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-700 rounded-full mix-blend-multiply blur-2xl opacity-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply blur-2xl opacity-10" />
            </div>
          </div>
        </section>

        {/* Our Commitments Section */}
        <section className="w-full py-20 md:py-32 bg-gray-100">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
              Nos Engagements
              <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
                <Award className="h-16 w-16 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Qualité Supérieure
                </h3>
                <CardContent className="p-0 text-lg text-gray-700 leading-relaxed">
                  Nous sélectionnons rigoureusement nos pneus et utilisons des
                  équipements de pointe pour des prestations irréprochables.
                </CardContent>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
                <Users className="h-16 w-16 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Expertise et Conseil
                </h3>
                <CardContent className="p-0 text-lg text-gray-700 leading-relaxed">
                  Notre équipe de professionnels est là pour vous conseiller et
                  vous guider vers le meilleur choix pour votre véhicule.
                </CardContent>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
                <Handshake className="h-16 w-16 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Satisfaction Client
                </h3>
                <CardContent className="p-0 text-lg text-gray-700 leading-relaxed">
                  Votre satisfaction est au cœur de nos préoccupations. Nous
                  nous engageons à vous offrir un service personnalisé et
                  attentif.
                </CardContent>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.77869694573!2d2.2272148!3d48.7892673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b17a91942f5%3A0x138075eca68136d7!2sGO%20PNEU%2092!5e1!3m2!1sen!2sma!4v1754004991502!5m2!1sen!2sma"
            //   width="600"
            //   height="450"
            //   style="border:0;"
            className="w-full aspect-video rounded-xl shadow-lg"
            loading="lazy"
          ></iframe>
        </section>

        {/* Team Introduction Section (Placeholder) */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
              Rencontrez Notre Équipe
              <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Derrière chaque service de qualité se trouve une équipe dédiée et
              passionnée. Nos techniciens sont formés aux dernières techniques
              et sont toujours prêts à vous offrir le meilleur service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for team member cards */}
              <Card className="p-6 shadow-xl bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Team Member 1"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 aspect-square"
                />
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  Nom du Membre
                </CardTitle>
                <p className="text-lg text-blue-700 font-semibold mb-3">
                  Poste
                </p>
                <CardContent className="p-0 text-base text-gray-700">
                  Expert en pneumatiques avec plus de 10 ans d&apos;expérience.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-xl bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Team Member 2"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 aspect-square"
                />
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  Nom du Membre
                </CardTitle>
                <p className="text-lg text-blue-700 font-semibold mb-3">
                  Poste
                </p>
                <CardContent className="p-0 text-base text-gray-700">
                  Spécialiste du montage et de l&apos;équilibrage, garant de
                  votre sécurité.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-xl bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Team Member 3"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 aspect-square"
                />
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  Nom du Membre
                </CardTitle>
                <p className="text-lg text-blue-700 font-semibold mb-3">
                  Poste
                </p>
                <CardContent className="p-0 text-base text-gray-700">
                  Conseiller client dédié, toujours prêt à répondre à vos
                  questions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Call to Action Banner (reused from home page) */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/illustration-voiture.webp"
              alt="Car illustration"
              width={1000}
              height={500}
              className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-30 md:opacity-50"
            />
          </div>
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
              Assurez votre sécurité <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer (reused from app/page.tsx - not included here to avoid duplication) */}
      {/* You would typically include your Footer component here */}
    </div>
  );
}
