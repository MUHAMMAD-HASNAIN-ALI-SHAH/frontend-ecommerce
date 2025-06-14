"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactTeam from "./ContactTeam";
import ContactLinks from "./ContactLinks";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <div className="py-24 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />

        {/* Social Media Links */}
        <ContactLinks />

        {/* Team Members */}
        <ContactTeam />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
