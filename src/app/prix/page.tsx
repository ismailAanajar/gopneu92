import Image from "next/image";
import { ChevronRight, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

export default function PrixPage() {
  const pricingData = [
    { size: "13 pouces", price: "70 €", category: "standard" },
    { size: "14 pouces", price: "70 €", category: "standard" },
    { size: "15 pouces", price: "70 €", category: "standard" },
    { size: "16 pouces", price: "80 €", category: "premium" },
    { size: "17 pouces", price: "100 €", category: "premium" },
    { size: "18 pouces", price: "120 €", category: "sport" },
    { size: "19 pouces", price: "120 €", category: "sport" },
    { size: "20 pouces", price: "120 €", category: "sport" },
    { size: "Taille en C", price: "100 €", category: "commercial" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Modern Design */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-800/30 to-blue-950 relative overflow-hidden pt-32">
        <Image
          src="/banner.jpg"
          alt="Car illustration"
          layout="fill"
          objectFit="cover"
          className="absolute  right-0 bottom-0 h-full w-full object-cover opacity-10"
        />
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Tarifs transparents et compétitifs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Nos <span className="text-yellow-400">Tarifs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Découvrez nos prix clairs et sans surprise pour tous vos besoins
              en pneumatiques
            </p>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-50">
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

      {/* Main Pricing Cards */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* New Tires Card */}
            <div className="group">
              <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl transform transition-all duration-500 ">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                <CardHeader className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src="/pneus-neufs-icone.webp"
                      width={48}
                      height={48}
                      alt="Pneus neufs"
                      className="w-12 h-12"
                    />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-4">
                    Pneus Neufs
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-lg text-blue-100">À partir de</span>
                    <div className="text-6xl font-bold text-yellow-400 my-2">
                      70€
                    </div>
                    <span className="text-blue-100">
                      avec montage et équilibrage inclus
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                      <Shield className="w-5 h-5 text-yellow-400" />
                      <span>Garantie constructeur</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span>Grandes marques disponibles</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span>Installation rapide</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Used Tires Card */}
            <div className="group">
              <Card className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-700 border-0 shadow-2xl transform transition-all duration-500 ">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent"></div>
                <CardHeader className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src="/pneus-en-occasion-icone.webp"
                      width={48}
                      height={48}
                      alt="Pneus d'occasion"
                      className="w-12 h-12"
                    />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-4">
                    Pneus d'Occasion
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-lg text-green-100">À partir de</span>
                    <div className="text-6xl font-bold text-yellow-400 my-2">
                      50€
                    </div>
                    <span className="text-green-100">
                      avec montage et équilibrage inclus
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                      <Shield className="w-5 h-5 text-yellow-400" />
                      <span>Contrôlés et garantis</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span>Usure 50%</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span>Excellent rapport qualité-prix</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
              d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Detailed Pricing Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Grille Tarifaire Détaillée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prix pour 2 pneus montés et équilibrés - Service professionnel
              inclus
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingData.map((item, index) => {
                const getCategoryColor = (category: string) => {
                  switch (category) {
                    case "standard":
                      return "from-blue-500 to-blue-600";
                    case "premium":
                      return "from-purple-500 to-purple-600";
                    case "sport":
                      return "from-red-500 to-red-600";
                    case "commercial":
                      return "from-orange-500 to-orange-600";
                    default:
                      return "from-gray-500 to-gray-600";
                  }
                };

                const getCategoryBadge = (category: string) => {
                  switch (category) {
                    case "standard":
                      return "Standard";
                    case "premium":
                      return "Premium";
                    case "sport":
                      return "Sport";
                    case "commercial":
                      return "Utilitaire";
                    default:
                      return "";
                  }
                };

                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                        item.category
                      )} opacity-90`}
                    ></div>
                    <div className="relative z-10 p-6 text-white text-center">
                      {item.category !== "standard" && (
                        <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-3 font-medium">
                          {getCategoryBadge(item.category)}
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold mb-3">
                        {item.size}
                      </CardTitle>
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        {item.price}
                      </div>
                      <p className="text-sm opacity-90">pour 2 pneus</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-50">
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-48 text-gray-50 transform rotate-180">
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Pourquoi Choisir Go Pneu 92 ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Service Professionnel
              </h3>
              <p className="text-gray-600">
                Montage et équilibrage inclus dans tous nos tarifs par des
                experts certifiés
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Garantie Qualité
              </h3>
              <p className="text-gray-600">
                Tous nos services sont garantis et réalisés selon les standards
                les plus élevés
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Prix Compétitifs
              </h3>
              <p className="text-gray-600">
                Meilleur rapport qualité-prix du marché avec des tarifs
                transparents
              </p>
            </Card>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 text-blue-600">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-48 text-blue-600 transform rotate-180">
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
        <div className="absolute inset-0">
          <Image
            src="/illustration-voiture .webp"
            alt="Car illustration"
            width={1000}
            height={500}
            className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Équiper Votre Véhicule ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Contactez-nous dès maintenant pour un devis personnalisé et
              profitez de notre expertise en pneumatiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg px-8 py-4 text-lg rounded-full font-semibold"
              >
                Demander un Devis <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg rounded-full font-semibold"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
