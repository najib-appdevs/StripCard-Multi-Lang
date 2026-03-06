/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronDown, HelpCircle, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("FAQ");

  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (index) => {
    setOpenLeft(openLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenRight(openRight === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      {/* <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg shadow-purple-500/10 dark:shadow-purple-500/5 border border-purple-100 dark:border-purple-800/50 mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm uppercase tracking-widest bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">
              {t("header.badge")}
            </span>
          </div>

          {/* Main heading */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 max-w-4xl mx-auto leading-tight">
            {t("header.title.main")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              {t("header.title.highlight")}
            </span>{" "}
            {t("header.title.suffix")}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
            {t("header.description")}
          </p>
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left column */}
          <div className="space-y-4">
            {t.raw("questions.left").map((item, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
                  openLeft === index
                    ? "shadow-lg shadow-purple-500/20 dark:shadow-purple-500/10 border-purple-200 dark:border-purple-700"
                    : "shadow-md border-slate-200/50 dark:border-gray-700 hover:shadow-lg hover:border-purple-100 dark:hover:border-purple-800"
                }`}
              >
                <button
                  onClick={() => toggleLeft(index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 dark:text-slate-100 pr-4 text-sm md:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`cursor-pointer w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      openLeft === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openLeft === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="px-5 md:px-6 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {t.raw("questions.right").map((item, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
                  openRight === index
                    ? "shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 border-indigo-200 dark:border-indigo-700"
                    : "shadow-md border-slate-200/50 dark:border-gray-700 hover:shadow-lg hover:border-indigo-100 dark:hover:border-indigo-800"
                }`}
              >
                <button
                  onClick={() => toggleRight(index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 dark:text-slate-100 pr-4 text-sm md:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`cursor-pointer w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      openRight === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openRight === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="px-5 md:px-6 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 dark:border-purple-800/50">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:to-indigo-500 dark:to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {t("cta.title")}
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                {t("cta.description")}
              </p>
            </div>
            <Link href="/contact">
              <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:to-indigo-500 dark:to-violet-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap">
                {t("cta.button")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}