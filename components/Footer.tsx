import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useLanguage } from "@/lib/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  
  return (
    <footer className="w-full mb-[100px] pb-10 md:md-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar <span className="text-purple">tu</span> presencia
          digital al siguiente nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contáctame hoy y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="mailto:tomas@zabotec.com"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D44638] hover:bg-[#B23121] transition-colors duration-300 shadow-lg"
            aria-label="Envíame un correo electrónico"
          >
            <MdEmail className="text-white text-2xl" />
          </a>
          <a 
            href="https://wa.me/56949095966" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 shadow-lg"
            aria-label="Contáctame por WhatsApp"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Tomás. Todos los derechos reservados.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-colors duration-300"
              aria-label={info.id === 1 ? 'GitHub' : info.id === 2 ? 'Instagram' : 'LinkedIn'}
            >
              <Image 
                src={info.img} 
                alt={info.id === 1 ? 'GitHub' : info.id === 2 ? 'Instagram' : 'LinkedIn'} 
                width={20} 
                height={20} 
                loading="lazy" 
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
