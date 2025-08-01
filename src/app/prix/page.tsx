import Image from "next/image";
import { ChevronRight, Check, Star, Euro, Wrench, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-foreground font-sans">
      <main className="flex-1">
        {/* Pricing Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden pt-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/illustration-voiture .webp"
              alt="Car illustration"
              width={1000}
              height={500}
              className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-10"
            />
          </div>
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
            <Euro className="h-20 w-20 mx-auto mb-6 text-yellow-400 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
              Nos Tarifs
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Découvrez nos prix transparents et compétitifs pour tous vos
              besoins en pneumatiques et services associés.
            </p>
          </div>
        </section>

        {/* Tire Pricing Section */}
        <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full h-16 md:h-20 lg:h-24 text-blue-700 transform rotate-180">
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
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tarifs des Pneumatiques
                <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prix indicatifs selon les dimensions et marques. Devis
                personnalisé sur demande.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* New Tires */}
              <Card className="p-8 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Pneus Neufs
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 px-3 py-1">
                      Garantie 2 ans
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-gray-600">
                    Pneumatiques neufs de grandes marques avec garantie
                    constructeur.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Tourisme (13"-16")
                        </h4>
                        <p className="text-sm text-gray-600">
                          Michelin, Continental, Bridgestone
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          80€ - 150€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          SUV/4x4 (17"-20")
                        </h4>
                        <p className="text-sm text-gray-600">
                          Toutes marques premium
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          120€ - 300€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Utilitaire
                        </h4>
                        <p className="text-sm text-gray-600">
                          Renforcés, haute résistance
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          90€ - 200€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">
                        Garantie constructeur 2 ans
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">
                        Montage et équilibrage inclus
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Used Tires */}
              <Card className="p-8 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Pneus d'Occasion
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                      Contrôlés
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-gray-600">
                    Pneumatiques d'occasion sélectionnés et contrôlés, excellent
                    rapport qualité-prix.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Tourisme (13"-16")
                        </h4>
                        <p className="text-sm text-gray-600">
                          Usure 50%, grandes marques
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          35€ - 80€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          SUV/4x4 (17"-20")
                        </h4>
                        <p className="text-sm text-gray-600">
                          Contrôlés et testés
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          60€ - 150€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Utilitaire
                        </h4>
                        <p className="text-sm text-gray-600">
                          Bon état général
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-700">
                          45€ - 100€
                        </p>
                        <p className="text-sm text-gray-500">par pneu</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">
                        Contrôle qualité systématique
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">
                        Montage et équilibrage inclus
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-24 text-gray-100">
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

        {/* Services Pricing Section */}
        <section className="w-full py-20 md:py-32 bg-gray-100 relative overflow-hidden">
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
                d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tarifs des Services
                <span className="block w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Services professionnels avec équipements de pointe et expertise
                reconnue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mounting Service */}
              <Card className="p-6 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-6">
                  <Wrench className="h-12 w-12 text-blue-700 mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Montage & Démontage
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Service professionnel avec équipement moderne
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Montage simple</span>
                      <span className="font-semibold text-blue-700">
                        15€/pneu
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        Montage + équilibrage
                      </span>
                      <span className="font-semibold text-blue-700">
                        25€/pneu
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Démontage</span>
                      <span className="font-semibold text-blue-700">
                        10€/pneu
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Contrôle de pression inclus</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Vérification visuelle</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Balancing Service */}
              <Card className="p-6 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-6">
                  <Shield className="h-12 w-12 text-blue-700 mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Équilibrage
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Équilibrage précis pour une conduite optimale
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Équilibrage simple</span>
                      <span className="font-semibold text-blue-700">
                        12€/roue
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        Équilibrage + contrôle
                      </span>
                      <span className="font-semibold text-blue-700">
                        18€/roue
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Rééquilibrage</span>
                      <span className="font-semibold text-blue-700">
                        8€/roue
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Machine de précision</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Contrôle final inclus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inflation Service */}
              <Card className="p-6 shadow-xl rounded-2xl border border-gray-100 bg-white">
                <CardHeader className="p-0 mb-6">
                  <Star className="h-12 w-12 text-blue-700 mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Gonflage & Contrôle
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Vérification et ajustement de pression
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gonflage simple</span>
                      <span className="font-semibold text-green-600">
                        Gratuit
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Contrôle complet</span>
                      <span className="font-semibold text-blue-700">5€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gonflage azote</span>
                      <span className="font-semibold text-blue-700">
                        3€/pneu
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Contrôle usure inclus</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Conseils personnalisés</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-24 text-blue-700">
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
        </section>

        {/* Special Offers Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full h-16 md:h-20 lg:h-24 text-gray-100 transform rotate-180">
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
          <div className="container mx-auto px-6 md:px-10 relative z-10 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
              Offres Spéciales
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Profitez de nos promotions et forfaits avantageux pour économiser
              sur vos pneumatiques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pack 4 Tires */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <CardHeader className="p-0 mb-6">
                  <Badge className="bg-yellow-500 text-gray-900 px-3 py-1 w-fit">
                    -15%
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-white mt-4">
                    Pack 4 Pneus
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Achetez 4 pneus et économisez
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>15% de réduction sur le 4ème pneu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>Montage et équilibrage offerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>Contrôle gratuit pendant 1 an</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Student Discount */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <CardHeader className="p-0 mb-6">
                  <Badge className="bg-green-500 text-white px-3 py-1 w-fit">
                    -10%
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-white mt-4">
                    Tarif Étudiant
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Réduction pour les étudiants
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-400" />
                      <span>10% sur tous les pneus neufs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-400" />
                      <span>Sur présentation carte étudiant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-400" />
                      <span>Paiement en 3 fois sans frais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loyalty Program */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <CardHeader className="p-0 mb-6">
                  <Badge className="bg-blue-500 text-white px-3 py-1 w-fit">
                    Fidélité
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-white mt-4">
                    Programme Fidélité
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Cumulez des points à chaque achat
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-400" />
                      <span>1€ dépensé = 1 point</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-400" />
                      <span>100 points = 10€ de réduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-400" />
                      <span>Offres exclusives membres</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg px-10 py-4 text-xl rounded-full"
              >
                Demander un Devis <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
