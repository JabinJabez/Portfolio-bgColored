import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Contact Me</h2>
        
        {/* Contact Info Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-4">Feel free to reach out to me through any of the following ways.</p>
          
          <div className="space-y-4">
            <p className="flex items-center justify-center gap-3">
              <FaPhone className="text-blue-600" /> +91 9043790943
            </p>
            <p className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-blue-600" /> jabinjabez16@gmail.com
            </p>
            <p className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" /> Kanniyakumari, Tamil Nadu, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-6 space-x-4">
            <a target="_blank" href="https://www.instagram.com/unknown_k1d_04/" className="text-blue-600 text-2xl hover:text-blue-800"><FaInstagram /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jabinjabez/" className="text-blue-600 text-2xl hover:text-blue-800"><FaLinkedin /></a>
            <a target="_blank" href="https://x.com/JabinJabez" className="text-blue-600 text-2xl hover:text-blue-800"><FaTwitter /></a>
            <a target="_blank" href="https://github.com/JabinJabez" className="text-blue-600 text-2xl hover:text-blue-800"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
