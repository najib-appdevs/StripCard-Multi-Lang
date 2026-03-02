"use client";
import { ArrowRight, Shield, Sparkles, Star, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden font-['DM_Sans']">
        {/* Mesh background */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[100px] -right-20 size-[520px] rounded-full blur-[80px] opacity-[0.18] bg-gradient-to-br from-indigo-500 to-indigo-600 animate-[--animate-blob-drift]" />
          <div className="absolute -bottom-16 -left-16 size-[400px] rounded-full blur-[80px] opacity-[0.18] bg-gradient-to-br from-indigo-400 to-violet-600 animate-[--animate-blob-drift-slow]" />
          <div className="absolute top-[40%] left-[40%] size-[280px] rounded-full blur-[80px] opacity-[0.10] bg-gradient-to-br from-indigo-300 to-indigo-500 animate-[--animate-blob-drift-delay]" />

          <div className="absolute inset-0 bg-hero-dots pointer-events-none" />
        </div> */}

        {/* Main content */}
        <div className="relative z-[1] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left – Text */}
            <div className="flex flex-col gap-7">
              {/* Badge */}
              <div className="animate-[--animate-fade-up]">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-xl border border-indigo-500/15 shadow-[0_2px_16px_rgb(99_102_241/0.12)] text-sm font-semibold text-indigo-700 dark:bg-slate-900/80 dark:border-indigo-400/20 dark:text-indigo-300">
                  <span className="size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-[--animate-pulse-dot]" />
                  <Sparkles className="size-3.5" />
                  {t("badge")}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-tight tracking-[-0.03em] text-slate-900 dark:text-slate-100 animate-[--animate-fade-up-1]">
                {t("heading1")}
                <br />
                <span className="bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  {t("heading2")}
                </span>
                <br />
                {t("heading3")}
              </h1>

              {/* Description */}
              <p className="text-[clamp(1rem,2vw,1.125rem)] text-slate-600 leading-relaxed max-w-xl dark:text-slate-400 animate-[--animate-fade-up-2]">
                {t("description")}
              </p>

              {/* CTA – fixed alignment with ArrowRight */}
              <div className="flex flex-wrap gap-3 animate-[--animate-fade-up-3]">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-br from-indigo-600 to-violet-600 shadow-[0_4px_24px_rgb(99_102_241/0.40),0_1px_4px_rgb(0_0_0/0.1)] hover:shadow-[0_8px_32px_rgb(99_102_241/0.50)] hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-250 relative overflow-hidden"
                >
                  <span className="relative z-10">{t("cta")}</span>
                  <ArrowRight className="size-[18px] relative z-10 transition-transform duration-250 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm animate-[--animate-fade-up-3]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center">
                    <div className="size-8.5 rounded-full border-2.5 border-white -ml-2.5 first:ml-0 bg-gradient-to-br from-blue-400 to-indigo-600 dark:border-indigo-950" />
                    <div className="size-8.5 rounded-full border-2.5 border-white -ml-2.5 bg-gradient-to-br from-violet-400 to-indigo-500 dark:border-indigo-950" />
                    <div className="size-8.5 rounded-full border-2.5 border-white -ml-2.5 bg-gradient-to-br from-indigo-400 to-violet-600 dark:border-indigo-950" />
                  </div>
                  <span className="text-slate-600 font-medium dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      10,000+
                    </strong>{" "}
                    {t("activeUsers")}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 text-amber-400 fill-amber-400"
                        />
                      ))}
                  </div>
                  <span className="text-slate-600 font-medium dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      4.9
                    </strong>{" "}
                    {t("stars")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right – Card scene */}
            <div className="relative h-[480px] max-lg:h-[340px] animate-[--animate-fade-up-4]">
              {/* Orbs */}
              <div className="absolute -top-5 -right-5 size-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 opacity-70 animate-[--animate-orb-spin]" />
              <div className="absolute -bottom-2.5 -left-2.5 size-14 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 opacity-60 animate-[--animate-orb-spin-reverse]" />

              {/* Card wrapper */}
              <div className="absolute inset-5 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-indigo-100 to-violet-100 shadow-[0_20px_60px_rgb(99_102_241/0.18),0_4px_16px_rgb(0_0_0/0.06)] dark:from-indigo-950 dark:via-indigo-950 dark:to-purple-950 dark:shadow-[0_20px_60px_rgb(99_102_241/0.25)]">
                <div className="absolute inset-0 bg-card-grid pointer-events-none" />

                {/* Virtual card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] w-[240px] h-[148px] rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 shadow-[0_16px_48px_rgb(79_70_229/0.45),0_2px_8px_rgb(0_0_0/0.15)] p-5 text-white animate-[--animate-card-float]">
                  <div className="w-8 h-6 rounded-md mb-4 bg-gradient-to-br from-amber-400 to-amber-500" />

                  <div className="flex gap-2 mb-3">
                    {Array(3)
                      .fill(0)
                      .map((_, g) => (
                        <div key={g} className="flex gap-[3px]">
                          {Array(4)
                            .fill(0)
                            .map((_, d) => (
                              <div
                                key={d}
                                className="size-[5px] rounded-full bg-white/50"
                              />
                            ))}
                        </div>
                      ))}
                    <span className="text-xs font-bold tracking-widest">
                      4291
                    </span>
                  </div>

                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-semibold uppercase opacity-85 tracking-wide">
                      StripCard User
                    </span>
                    <span className="text-sm font-black italic opacity-95">
                      VISA
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating stat pills */}
              <div className="absolute top-[18%] -left-5 bg-white/95 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-[0_8px_32px_rgb(0_0_0/0.1)] px-4 py-3 flex items-center gap-2.5 animate-[--animate-stat-float] max-lg:-left-1 dark:bg-slate-900/90 dark:border-indigo-400/15 dark:shadow-[0_8px_32px_rgb(0_0_0/0.3)]">
                <div className="size-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 dark:bg-green-500/10">
                  <Shield className="size-4.5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {t("secure")}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">
                    {t("sslProtected")}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[22%] -right-5 bg-white/95 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-[0_8px_32px_rgb(0_0_0/0.1)] px-4 py-3 flex items-center gap-2.5 animate-[--animate-stat-float-1] max-lg:-right-1 dark:bg-slate-900/90 dark:border-indigo-400/15 dark:shadow-[0_8px_32px_rgb(0_0_0/0.3)]">
                <div className="size-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 dark:bg-blue-500/10">
                  <Zap className="size-4.5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {t("instant")}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">
                    {t("activation")}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[8%] left-12 bg-white/95 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-[0_8px_32px_rgb(0_0_0/0.1)] px-4 py-3 flex items-center gap-2.5 animate-[--animate-stat-float-2] dark:bg-slate-900/90 dark:border-indigo-400/15 dark:shadow-[0_8px_32px_rgb(0_0_0/0.3)]">
                <div className="size-9 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0 dark:bg-yellow-500/10">
                  <Star className="size-4.5 text-yellow-600 fill-yellow-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {t("topRated")}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">
                    4.9 {t("stars")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
