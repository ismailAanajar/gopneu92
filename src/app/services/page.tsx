import Image from "next/image";
import {
  ChevronRight,
  DollarSign,
  Wrench,
  Car,
  Gauge,
  WrenchIcon,
  CheckCircle,
  ShieldCheck,
  Users,
} from "lucide-react"; // Added CheckCircle, ShieldCheck, Users

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-foreground font-sans">
      {/* Header (reused from app/page.tsx - not included here to avoid duplication) */}
      {/* You would typically include your Header component here */}

      <main className="flex-1">
        {/* Services Hero Section - Clean and impactful */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-800/30 to-blue-950 relative overflow-hidden pt-32">
          <Image
            src="/banner.jpg"
            alt="Car illustration"
            layout="fill"
            objectFit="cover"
            className="absolute  right-0 bottom-0 h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-blue-950/60 z-0" />
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
              Nos Services Complets
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Go Pneu 92 vous propose des services complets liés aux pneus neufs
              et d&apos;occasion pour tous types de véhicules, garantissant
              sécurité et performance sur la route.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg px-10 py-4 text-xl rounded-full"
            >
              Prendre rendez-vous <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
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

        {/* Why Choose Us for Services Section - New Section */}
        <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-48 text-white transform rotate-180">
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
          <div className="absolute inset-0 bg-[url('/images/trace-de-pneu.webp')] opacity-5 z-0" />
          <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
              Pourquoi choisir Go Pneu 92 pour vos pneus ?
              <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CheckCircle className="h-20 w-20 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Expertise Certifiée
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre équipe de techniciens qualifiés assure un service
                  irréprochable et des conseils avisés.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <ShieldCheck className="h-20 w-20 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Qualité Garantie
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous n&apos;utilisons que des équipements de pointe et des
                  pneus de marques reconnues pour votre sécurité.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Users className="h-20 w-20 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Satisfaction Client
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Votre satisfaction est notre priorité. Nous sommes à votre
                  écoute pour répondre à toutes vos questions.
                </p>
              </div>
            </div>
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
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-white">
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
        </section>

        {/* Service Deep Dive: Vente de pneus neufs et d'occasion */}
        <section
          id="Vente de pneus"
          className="w-full py-20 md:py-32 bg-gray-100 relative overflow-hidden"
        >
          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-48 text-white transform rotate-180">
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
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative p-4">
              <Image
                src="/Vente de pneus neufs.webp"
                alt="Vente de pneus neufs et d'occasion"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-700 rounded-full mix-blend-multiply blur-2xl opacity-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply blur-2xl opacity-10" />
            </div>
            <div className="text-center lg:text-left">
              {/* <Car className="h-16 w-16 mx-auto lg:mx-0 mb-6 text-blue-700" /> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Vente de pneus neufs et d&apos;occasion
                <span className="block w-24 h-1 bg-blue-700 mt-4 rounded-full mx-auto lg:mx-0" />
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Nous proposons une vaste gamme de pneus neufs et
                d&apos;occasion, adaptés à tous types de véhicules et à tous les
                budgets. Nos experts vous guident dans le choix idéal pour
                garantir votre sécurité et optimiser les performances de votre
                véhicule sur la route. Que vous recherchiez des pneus pour une
                voiture, un utilitaire ou une moto, nous avons les modèles
                qu&apos;il vous faut.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-md">
                Découvrir notre catalogue{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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

        {/* Service Deep Dive: Montage de pneus (Alternating layout) */}
        <section
          id="Montage & Équilibrage"
          className="w-full py-20 md:py-32 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 relative p-4">
              <Image
                src="/montage equilibrage.webp"
                alt="Montage de pneus"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-700 rounded-full mix-blend-multiply blur-2xl opacity-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply blur-2xl opacity-10" />
            </div>
            <div className="lg:order-1 text-center lg:text-left">
              {/* <WrenchIcon className="h-16 w-16 mx-auto lg:mx-0 mb-6 text-blue-700" /> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Montage et Démontage de pneus
                <span className="block w-24 h-1 bg-blue-700 mt-4 rounded-full mx-auto lg:mx-0" />
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Nous assurons le montage et le démontage de vos pneus avec le
                plus grand soin et une précision inégalée, grâce à nos
                équipements de pointe. Que ce soit pour l&apos;installation de
                pneus neufs ou le retrait de pneus usés, notre équipe garantit
                un ajustement parfait et une manipulation sans risque de
                détérioration.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-md">
                En savoir plus sur le montage{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-100">
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

        {/* Service Deep Dive: Gonflage et équilibrage (Alternating layout) */}
        <section
          id="Gonflage de pneus"
          className="w-full py-20 md:py-32 bg-gray-100 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative p-4">
              <Image
                src="/gonflage de pneu.webp"
                alt="Gonflage et équilibrage de vos pneus"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-700 rounded-full mix-blend-multiply blur-2xl opacity-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply blur-2xl opacity-10" />
            </div>
            <div className="text-center lg:text-left">
              {/* <Gauge className="h-16 w-16 mx-auto lg:mx-0 mb-6 text-blue-700" /> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Gonflage et équilibrage de vos pneus
                <span className="block w-24 h-1 bg-blue-700 mt-4 rounded-full mx-auto lg:mx-0" />
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Un gonflage précis et un équilibrage parfait sont cruciaux pour
                votre sécurité, le confort de conduite et la longévité de vos
                pneus. Nous ajustons la pression selon les spécifications du
                fabricant et effectuons un équilibrage minutieux pour éviter les
                vibrations et l&apos;usure irrégulière.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-md">
                Optimiser la performance{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-100">
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

        {/* Pricing Section - Enhanced Professional and Modern Design */}
        <section className="w-full py-20 md:py-52 bg-gradient-to-br from-blue-800 to-blue-950 relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-100 transform rotate-180">
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-[url('/images/trace-de-pneu.webp')] opacity-10 z-0" />
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 drop-shadow-md text-white">
              Nos tarifs
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h2>

            {/* Top two pricing summary blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mx-auto">
              {/* Pneus neufs summary */}
              <Card className=" backdrop-blur-sm rounded-2xl  border border-white/30 overflow-hidden flex flex-col items-center p-8  ">
                <CardHeader className="p-0 flex flex-col items-center w-full mb-4">
                  <Image
                    src={"/pneus-neufs-icone.webp"}
                    width={98}
                    height={98}
                    alt="pneus-neufs-icone"
                    className="h-28 w-28 text-yellow-400 mb-4 drop-shadow-lg"
                  />
                  <CardTitle className="text-4xl font-bold  mb-2">
                    Pneus neufs
                  </CardTitle>
                  <CardDescription className="text-2xl text-gray-600">
                    À partir de{" "}
                    <span className="text-yellow-400 font-extrabold text-5xl">
                      70 €
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-xl text-gray-600">
                  avec montage et équilibrage
                </CardContent>
              </Card>

              {/* Pneus d'occasion summary */}
              <Card className=" backdrop-blur-sm rounded-2xl  border border-white/30 overflow-hidden flex flex-col items-center p-8 ">
                <CardHeader className="p-0 flex flex-col items-center w-full mb-4">
                  <Image
                    src={"/pneus-en-occasion-icone.webp"}
                    width={98}
                    height={98}
                    alt="pneus-neufs-icone"
                    className="h-28 w-28 text-yellow-400 mb-4 drop-shadow-lg"
                  />
                  <CardTitle className="text-4xl font-bold  mb-2">
                    Pneus d&apos;occasion
                  </CardTitle>
                  <CardDescription className="text-2xl text-gray-600">
                    À partir de{" "}
                    <span className="text-yellow-400 font-extrabold text-5xl">
                      50 €
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-xl text-gray-600">
                  avec montage et équilibrage
                </CardContent>
              </Card>
            </div>

            {/* Third section: Detailed pricing grid for all sizes */}
            <div className="bg-white backdrop-blur-sm   border border-gray-300  rounded-2xl  overflow-hidden p-8    mx-auto">
              <Image
                src={"/pneus-montés.webp"}
                width={98}
                height={98}
                alt="pneus-neufs-icone"
                className="h-28 mx-auto w-28 text-yellow-400 mb-4 drop-shadow-lg"
              />
              <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400 drop-shadow-md">
                Prix pour 2 pneus montés et équilibrés
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3  gap-6">
                {[
                  { size: "13 pouces", price: "70 €" },
                  { size: "14 pouces", price: "70 €" },
                  { size: "15 pouces", price: "70 €" },
                  { size: "16 pouces", price: "80 €" },
                  { size: "17 pouces", price: "100 €" },
                  { size: "18 pouces", price: "120 €" },
                  { size: "19 pouces", price: "120 €" },
                  { size: "20 pouces", price: "120 €" },
                  { size: "Taille en C", price: "100 €" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-blue-800 text-white py-5 px-4 rounded-xl flex flex-col items-center justify-center text-lg font-semibold shadow-lg border border-white/20 transition-all duration-300 hover:bg-blue-950/60 hover:scale-[1.03] hover:shadow-xl"
                  >
                    <CardTitle className="text-lg font-medium text-gray-200">
                      {item.size}
                    </CardTitle>
                    <CardContent className="p-0 text-3xl font-bold text-yellow-400 mt-1">
                      {item.price}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-blue-700">
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

        {/* Final Call to Action Banner */}
        <section className="w-full py-20 md:py-32   bg-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/illustration-voiture .webp"
              alt="Car illustration"
              width={1000}
              height={500}
              className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-5"
            />
          </div>
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
              Faites appel à des professionnels pour vos besoins en pneus
              <span className="block w-24 h-1 bg-yellow-500 mt-4 rounded-full" />
            </h2>
            <p className="text-xl mb-10 max-w-3xl opacity-95 leading-relaxed">
              Go Pneu 92 met un point d&apos;honneur à proposer des services de
              qualité à des prix compétitifs. Experts en pneumatiques, nous
              sommes pour vous guider et vous conseiller. Nous assurons un
              service rapide et efficace, tout en garantissant la sécurité de
              votre véhicule.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg px-10 py-4 text-xl rounded-full"
            >
              Assurez votre sécurité <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
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
      </main>

      {/* Footer (reused from app/page.tsx - not included here to avoid duplication) */}
      {/* You would typically include your Footer component here */}
    </div>
  );
}
