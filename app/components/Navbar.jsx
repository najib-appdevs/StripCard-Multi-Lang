/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Check, ChevronDown, Globe, Menu, Moon, Sun } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { getUserProfile } from "../utils/api";
import UserMenu from "./UserMenu";
import NotificationBell from "./icons/NotificationBell";

const LANGUAGES = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "ar", label: "Arabic", native: "العربية", flag: "🇸🇦" },
  { code: "es", label: "Spanish", native: "Español", flag: "🇪🇸" },
  { code: "fr", label: "French", native: "Français", flag: "🇫🇷" },
  { code: "hi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
];

export default function Navbar({ onMenuClick }) {
  const [userName, setUserName] = useState("User");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfile();
        const user = response?.data?.user || response?.user;
        if (user) {
          const name =
            user.fullname ||
            `${user.firstname || ""} ${user.lastname || ""}`.trim() ||
            user.username ||
            "User";
          setUserName(name);
        }
      } catch (error) {
        toast.error("Failed to load user name");
      }
    };
    fetchUser();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const getCurrentLocale = () => pathname.split("/")[1] || "en";

  const switchLanguage = (langCode) => {
    const currentLocale = getCurrentLocale();
    const newPath = pathname.replace(`/${currentLocale}`, `/${langCode}`);
    router.push(newPath || `/${langCode}`);
    setIsLangOpen(false);
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === getCurrentLocale()) || LANGUAGES[0];

  return (
    <>
      <style>{`
        .lang-wrapper { position: relative; }

        .lang-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 36px;
          padding: 0 10px 0 8px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .dark .lang-trigger { color: #9ca3af; }

        .lang-trigger:hover {
          background: rgba(99,102,241,0.10);
          color: #4f46e5;
        }

        .dark .lang-trigger:hover {
          background: rgba(99,102,241,0.18);
          color: #818cf8;
        }

        .lang-chevron { transition: transform 0.22s ease; opacity: 0.6; }
        .lang-trigger.open .lang-chevron { transform: rotate(180deg); }

        .lang-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 190px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          box-shadow: 0 8px 40px rgba(99,102,241,0.14), 0 2px 10px rgba(0,0,0,0.08);
          padding: 6px;
          animation: langDropIn 0.22s cubic-bezier(0.4,0,0.2,1);
          z-index: 100;
        }

        .dark .lang-dropdown {
          background: rgba(22,33,55,0.96);
          border-color: rgba(255,255,255,0.10);
          box-shadow: 0 8px 40px rgba(99,102,241,0.18), 0 2px 10px rgba(0,0,0,0.35);
        }

        @keyframes langDropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 9px 12px;
          border-radius: 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          transition: background 0.16s ease, color 0.16s ease;
          text-align: left;
        }

        .dark .lang-option { color: #d1d5db; }

        .lang-option:hover {
          background: rgba(99,102,241,0.09);
          color: #4f46e5;
        }

        .dark .lang-option:hover {
          background: rgba(99,102,241,0.17);
          color: #818cf8;
        }

        .lang-option.selected {
          background: rgba(99,102,241,0.11);
          color: #4f46e5;
          font-weight: 600;
        }

        .dark .lang-option.selected {
          background: rgba(99,102,241,0.22);
          color: #818cf8;
        }

        .opt-labels { display: flex; flex-direction: column; gap: 1px; flex: 1; }
        .opt-native { font-size: 13px; font-weight: 600; }
        .opt-english { font-size: 11px; opacity: 0.55; font-weight: 400; }
        .opt-check { margin-left: auto; flex-shrink: 0; color: #4f46e5; }
        .dark .opt-check { color: #818cf8; }
      `}</style>

      <nav className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} className="text-black dark:text-white" />
            </button>

            <div className="pl-4">
              <h1 className="text-base sm:text-lg font-semibold text-gray-950 dark:text-gray-200">
                Welcome Back
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                {userName}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 px-8">
            {/* Language Switcher */}
            <div className="lang-wrapper hidden sm:block" ref={langDropdownRef}>
              <button
                className={`lang-trigger${isLangOpen ? " open" : ""}`}
                onClick={() => setIsLangOpen((v) => !v)}
                aria-label="Select language"
                aria-expanded={isLangOpen}
              >
                <Globe size={20} />
                <span style={{ fontSize: 15 }}>{currentLang.flag}</span>
                <ChevronDown size={13} className="lang-chevron" />
              </button>

              {isLangOpen && (
                <div className="lang-dropdown" role="menu">
                  {LANGUAGES.map((lang) => {
                    const isSelected = lang.code === currentLang.code;
                    return (
                      <button
                        key={lang.code}
                        className={`lang-option${isSelected ? " selected" : ""}`}
                        onClick={() => switchLanguage(lang.code)}
                        role="menuitem"
                      >
                        <span style={{ fontSize: 16 }}>{lang.flag}</span>
                        <span className="opt-labels">
                          <span className="opt-native">{lang.native}</span>
                          <span className="opt-english">{lang.label}</span>
                        </span>
                        {isSelected && (
                          <Check size={13} className="opt-check" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <NotificationBell />
            <UserMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
