import { FiCheck, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import Btn from "../SmallBtn";
import StateCard from "../StateCard";

const stateData = [
  { icon: <FiShield />, number: "16.0%", label: "ROI Moyen" },
  { icon: <FiUsers />, number: "100+", label: "Clients Satisfaits" },
  { icon: <FiTrendingUp />, number: "15+", label: "Années d'Expertise" },
];

const features = ["Consultation gratuite", "Sans engagement", "Confidentiel"];

const Hero = () => {
  return (
    <section className="relative min-h-screen p-6 bg-[#15171b] overflow-hidden">
      <div className="absolute top-16 left-10 w-52 h-52 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="flex items-center justify-center mb-6">
        <div className="bg-linear-to-r from-cyan-300 to-cyan-200 p-3 flex items-center justify-center rounded-2xl">
          <FiTrendingUp className="w-6 h-6 text-white" />
        </div>

        <h1 className="ml-3 text-2xl font-bold bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
          Asset-Clarity
        </h1>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        <span className="text-white">Service </span>
        <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-cyan-200 bg-clip-text text-transparent">
          UHNWI
        </span>
        <br />
        <span className="text-white">pour </span>
        <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-cyan-50 bg-clip-text text-transparent">
          tous
        </span>
      </h1>

      <p className="mx-auto text-lg max-w-3xl text-center mb-12 text-[#A6A6A6]">
        Pourquoi réserver l'excellence aux ultra-riches ? Découvrez comment
        notre expertise UHNWI transforme votre stratégie d'investissement, quel
        que soit votre patrimoine.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12 w-full ">
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
        <Btn className="bg-linear-to-r from-cyan-400 to-cyan-50 text-gray-900">
          Analyse Gratuite
        </Btn>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-xs text-[#A6A6A6]">
        {features.map((text, index) => (
          <p key={index} className="flex items-center gap-2">
            <FiCheck />
            {text}
          </p>
        ))}
      </div>

      <div className="absolute bottom-16 right-10 w-52 h-52 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
