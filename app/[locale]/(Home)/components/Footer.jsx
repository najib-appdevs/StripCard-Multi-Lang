/* eslint-disable @next/next/no-img-element */
"use client";

import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Footer() {
  const t = useTranslations("Footer");

  const currentYear = new Date().getFullYear();
  const [captchaToken, setCaptchaToken] = useState(null);

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-500 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT – Logo & Description */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo-dark.png"
                alt={t("logoAlt")}
                className="h-10 w-auto"
              />
            </div>

            {/* Thank you text */}
            <p className="leading-relaxed max-w-xl text-slate-700 dark:text-slate-300 text-base">
              {t("thankYou")}
            </p>

            {/* Follow Us */}
            <div className="space-y-4">
              <p className="text-slate-900 dark:text-slate-100 font-semibold text-lg">
                {t("followUs.title")}
              </p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group w-11 h-11 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-200 dark:border-gray-700 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Facebook className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group w-11 h-11 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-200 dark:border-gray-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Instagram className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="group w-11 h-11 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-200 dark:border-gray-700 hover:bg-sky-600 hover:border-sky-600 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Twitter className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE – Useful Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {t("usefulLinks.title")}
            </h3>

            <nav className="flex flex-col gap-3">
              <Link
                href="/privacy-policy"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                {t("usefulLinks.privacyPolicy")}
              </Link>
            </nav>
          </div>

          {/* RIGHT – Subscribe */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t("subscribe.title")}
            </h3>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("subscribe.description")}
            </p>

            {/* Email Form */}
            <form className="space-y-4">
              {/* reCAPTCHA */}
              <div className="flex justify-start">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onCaptchaChange}
                  onExpired={onCaptchaExpired}
                  theme="light" // ← consider dynamic theme="dark" when we have theme context
                  size="normal"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                  <input
                    type="email"
                    placeholder={t("subscribe.placeholder")}
                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-800 border-2 border-slate-200 dark:border-gray-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-none focus:ring-blue-500/50 transition-all shadow-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  {t("subscribe.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative border-t border-slate-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-800 dark:text-slate-300">
          © {currentYear} {t("copyright.allRights")}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {t("copyright.company")}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
