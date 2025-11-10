// import CTAButton from "../components/CTAButton";
import Link from "next/link";
import Button from "./Button";
import { PHONE_NUMBER } from "@/constants";

export default function Footer() {
  const navLinks = [{ title: "Home", href: "/" }];
  const serviceLinks = [
    { title: "PVC Wall Painting" },
    { title: "Wood Polishing" },
    { title: "Wall Painting" },
    { title: "Ceiling Fan Paint" },
  ];
  const socialLinks = [
    {
      title: "Maps",
      href: "https://maps.app.goo.gl/MH6VFQja5jWPGezu8",
    },
    {
      title: "Whatsapp",
      href: `https://wa.me/${PHONE_NUMBER}`,
    },
  ];
  return (
    <section className="md:mx-10  mx-auto">
      <div className="footer-container rounded-t-[80px] bg-cyan ">
        <div className="cta p-14 md:px-20 flex flex-col md:flex-row items-center justify-between ">
          <div className="cta-title text-4xl italic font-playfair-display font-extrabold   flex-1 md:text-6xl ">
            Ready To Get Started ?
          </div>
          <div className="cta-button flex justify-center items-center ">
            <Button />
          </div>
        </div>
        <div className="horizontal-line h-0.5 bg-gray-700 mx-10"></div>
        <div className="footer py-8 px-10 flex flex-col sm:flex-row gap-10 justify-around">
          {/* Navigation */}
          <div className="footer-list-container">
            <div className="footer-list-title text-3xl font-bold">
              Navigation
            </div>
            <div className="footer-list-items flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="footer-list-item py-3 hover:text-blue-600 cursor-pointer transition-all duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Services */}
          <div className="footer-list-container">
            <div className="footer-list-title text-3xl font-bold">Services</div>
            <div className="footer-list-items flex flex-col">
              {serviceLinks.map((link) => (
                <div
                  key={link.title}
                  className="footer-list-item py-3 hover:text-yellow-300 cursor-pointer transition-all duration-300"
                >
                  {link.title}
                </div>
              ))}
            </div>
          </div>
          {/* Follow us */}
          <div className="footer-list-container">
            <div className="footer-list-title text-3xl font-bold">
              Follow us
            </div>
            <div className="footer-list-items flex flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  target="_blank"
                  href={link.href}
                  className="footer-list-item py-3 hover:text-yellow-300 cursor-pointer transition-all duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="copy-right text-center">
          Made with 💖 by{" "}
          <a target="_blank" href="realenlight.com">
            realenlight.com
          </a>
        </div>
      </div>
    </section>
  );
}
