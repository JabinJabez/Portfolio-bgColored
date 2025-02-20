import React from "react";
import BayTeach from '../assets/certificates/baytech.jpg'
import DevTown from '../assets/certificates/devtown.jpg'
import Guvi from '../assets/certificates/GuviCertification.png'
import ReverTech from '../assets/certificates/reverTech.jpeg'
import TechnoHacks from '../assets/certificates/technoHacks.png'

const certificates = [
  {
    title: "Python Programming, SQL",
    issuer: "BayTech",
    img: BayTeach,
    link: "https://drive.google.com/file/d/1XD46BZH9ljV2Afm_L_EHLwVXoRYSc76w/view?usp=drive_link",
  },
  {
    title: "Python Programming",
    issuer: "DevTown",
    img: DevTown,
    link: "https://drive.google.com/file/d/1FnCawSiskMCqXDTntQZNPV5YKBVCGzHG/view?usp=drive_link",
  },
  {
    title: "DevOps",
    issuer: "Guvi",
    img: Guvi,
    link: "https://drive.google.com/file/d/1VInlI_i3lhhgUYk8NW0wzEhHSsOqAmnD/view?usp=drive_link",
  },
  {
    title: "Python Programming",
    issuer: "Revertech",
    img: ReverTech,
    link: "https://drive.google.com/file/d/1F_1LRyaPqUoe69jqU_JS_kDBre5TzQJU/view?usp=drive_link",
  },
  {
    title: "Web Development",
    issuer: "TechnoHacks",
    img: TechnoHacks,
    link: "https://drive.google.com/file/d/1j7IogzwOGl-ew4z1lMha1svSSJbgnz41/view?usp=drive_link",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">My Certificates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img src={cert.img} alt={cert.title} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
                <a href={cert.link} target="_blank" className="text-blue-600 font-medium mt-2 block">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
