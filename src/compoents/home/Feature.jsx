import { FiCheck, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import FeatureCard from "../FeatureCard";
import ReusableCard from "../NoticeCard";
import Retail from "../Reatail";
import SegmentCard from "../SegmentCard";
import Btn from "../SmallBtn";
import StateCard from "../StateCard";
const Feature = () => {
  const cardsData = [
    {
      title: "Retail",
      amount: "< 100K CHF",
      badge: "Service Minimum",
      points: ["ETF Standard", "Conseil de base", "Plateforme numérique"],
      width: "w-full md:w-4xl",

      bgColor: "bg-[hsl(218.18deg_13.58%_15.88%)]",
    },
    {
      title: "Affluent",
      amount: "100K 1M CHF",
      badge: "Service Premium",
      points: [
        "ETF Avancé",
        "Conseil perlisé",
        "Plateforme digitale avancée",
      ],
      width: "w-full md:w-3xl",

      bgColor: "bg-[hsl(218.18deg_13.58%_15.88%)]",
    },
    
  ];
  const stateData = [
    { icon: <FiShield />, number: "16.0%", label: "ROI Moyen" },
    { icon: <FiUsers />, number: "100+", label: "Clients Satisfaits" },
    { icon: <FiTrendingUp />, number: "15+", label: "Années d'Expertise" },
  ];

  const features = ["Consultation gratuite", "Sans engagement", "Confidentiel"];

  const clientData = [
    { number: "16.0%", label: "ROI Moyen" },
    { number: "100+", label: "Clients Satisfaits" },
    { number: "15+", label: "Années d'Expertise" },
    { number: "15+", label: "Années d'Expertise" },
  ];

  return (
    <div className="bg-[hsl(220deg_13.04%_9.02%)] min-h-screen ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            La Réalité des Services Financiers Traditionnels
          </h2>
          <p className="text-lg mt-2 opacity-80 text-white">
            Plus votre patrimoine est élevé, meilleur est le service...
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-20 ">
          {cardsData?.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
        <div className="flex flex-col md:flex-col justify-center items-center gap-6 mt-15">
          <Retail
            title="Retail"
            amount="1M - 5M CHF"
            Service="Service"
            width="w-full md:w-2xl"
            bgColor="bg-cyan-400"
          />

          <Retail
            title="Retail"
            amount="1M - 5M CHF"
            Service="Service"
            width="w-full md:w-xl"
            bgColor="bg-cyan-300"
          />
        </div>

        <div className="mt-10 flex justify-center items-center">
          <ReusableCard title="Notre Différence" width="w-full md:w-xl">
            <p className="text-gray-300">
              <span className="font-semibold text-cyan-400">
                Service UHNWI pour tous
              </span> Nous span notre expertise haut de gamme à chaque client,
              quel que soit son patrimoine initial.
            </p>
          </ReusableCard>
        </div>

        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4 bg-[rgba(63,224,232,0.1)] text-[hsl(190_100%_60%)] border-[rgba(63,224,232,0.2)]">
            Comparaison des Services
          </div>
        </div>

        <div className="text-white text-center mt-4">
          <h5 className="text-white">
            Banques Traditionnelles vs{" "}
            <span className="text-cyan-400">Notre Approche</span>
          </h5>

          <p className="mt-1">
            Découvrez pourquoi nous révolutionnons la gestion de patrimoine en
            démocratisant l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-10 sm:mx-20">
          <SegmentCard
            title="Services Traditionnels"
            subtitle="Segmentation rigide par patrimoine"
            type="basic"
            features={[
              {
                title: "Conseil personnalisé",
                desc: "Limité aux HNWI+",
                available: false,
              },
              {
                title: "Stratégies investissement avancées",
                desc: "UHNWI uniquement",
                available: false,
              },
              {
                title: "Suivi régulier et proactif",
                desc: "Service minimum",
                available: false,
              },
              {
                title: "Accès aux investissements institutionnels",
                desc: "Réservé aux gros patrimoines",
                available: false,
              },
              {
                title: "Optimisation fiscale sophistiquée",
                desc: "HNWI / UHNWI",
                available: false,
              },
              {
                title: "Gestion des risques avancée",
                desc: "Basique pour retail",
                available: false,
              },
            ]}
          />

          <SegmentCard
            title="Notre Approche Révolutionnaire"
            subtitle="Expertise UHNWI accessible à tous"
            badge="Premium"
            type="premium"
            footer="Résultat : Performance UHNWI, frais démocratisés"
            features={[
              {
                title: "Conseil personnalisé",
                desc: "Pour tous les clients",
                available: true,
              },
              {
                title: "Stratégies dinvestissement avancées",
                desc: "Adaptées à chaque patrimoine",
                available: true,
              },
              {
                title: "Suivi régulier et proactif",
                desc: "Suivi rapproché",
                available: true,
              },
              {
                title: "Accès aux investissements institutionnels",
                desc: "Démocratisé via notre expertise",
                available: true,
              },
              {
                title: "Optimisation fiscale sophistiquée",
                desc: "Expertise UHNWI pour tous",
                available: true,
              },
              {
                title: "Gestion des risques avancée",
                desc: "Techniques institutionnelles",
                available: true,
              },
            ]}
          />
        </div>

        <div className="mt-10 flex justify-center items-center">
          <ReusableCard title="Notre Différence" width="w-full md:w-xl">
            <span className="font-semibold text-cyan-400">
              Service UHNWI pour tous
            </span>
            <span className="text-gray-300">
              Nous appliquons notre expertise haut de gamme à chaque client,
              quel que soit son patrimoine initial.
            </span>
          </ReusableCard>
        </div>

        <div className="min-h-screen flex items-center justify-center ">
          <div
            className="
          w-full max-w-4xl
          rounded-xl border
          bg-linear-to-r
          from-[hsl(190_100%_60%/0.2)]
          to-[rgb(43_46_50/0.9)]
          border-cyan-700/40
       mt-15 p-5 mb-30"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à <span className="text-cyan-400">Révolutionner</span>
                <br />
                Votre Approche ?
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto">
                Découvrez comment attirer et fidéliser vos clients retail et
                affluent en leur offrant un service de niveau UHNWI.
                <span className="text-cyan-400">
                  {" "}
                  Votre expertise devient votre avantage concurrentiel.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12 w-full">
              {stateData.map((item, index) => (
                <StateCard
                  key={index}
                  icon={item.icon}
                  number={item.number}
                  label={item.label}
                />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Btn className="bg-linear-to-r from-cyan-400 to-cyan-200 text-white hover:scale-105 transition-transform duration-300">
                Découvrir la Différence →
              </Btn>
            </div>

            <div className="flex flex-col sm:flex-row gap-6  mb-5 justify-center items-center text-xs text-[#A6A6A6]">
              {features.map((text, index) => (
                <p key={index} className="flex items-center gap-2">
                  <FiCheck />
                  {text}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 pb-5 text-center">
              {clientData.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {item.number}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
