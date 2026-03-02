/* eslint-disable @next/next/no-img-element */
"use client"
function ServiceProvide() {
  const services = [
    {
      id: 1,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/423ffbae-6f99-4809-b834-cee688ebdd0e.webp",
      title: "Buy Virtual Card",
      description:
        "Get your Virtual Card today and enjoy the ease of using the Virtual Card for online shopping, gaming, or your favorite subscriptions.",
      accent: "#3B82F6",
      tag: "Cards",
    },
    {
      id: 2,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/d78871d3-ff5e-4d04-b026-7832c9a96a8e.webp",
      title: "Add Money",
      description:
        "Easily deposit funds into your digital wallet to ensure financial flexibility and convenience with our user-friendly and secure money-adding service.",
      accent: "#6366F1",
      tag: "Wallet",
    },
    {
      id: 3,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/c8c4aaef-d419-4086-ad09-c3dbd4f3d488.webp",
      title: "Money Transfer",
      description:
        "Swift and securely transfer money within the platform, providing convenience and peace of mind for all your financial needs.",
      accent: "#8B5CF6",
      tag: "Transfer",
    },
    {
      id: 4,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/25989242-5e9d-4bb1-bda0-3efed8f512b4.webp",
      title: "Withdraw Money",
      description:
        "Effortlessly transfer funds from your account to your preferred bank account or digital wallet.",
      accent: "#3B82F6",
      tag: "Withdraw",
    },
    {
      id: 5,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/04a7bb97-51a5-4388-a668-b3f2208de6e4.webp",
      title: "Virtual Card TopUp",
      description:
        "Easily top up your virtual card balance to ensure uninterrupted spending for shopping, subscriptions, or gaming.",
      accent: "#06B6D4",
      tag: "Top Up",
    },
    {
      id: 6,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/de25f560-2415-4d37-acef-fd8eba428e35.webp",
      title: "Gift Card",
      description:
        "Purchase digital gift cards for popular services, directly from the app, for seamless gifting.",
      accent: "#A855F7",
      tag: "Gifts",
    },
    {
      id: 7,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/43d05a5f-f7a8-4075-9364-58d50b35de24.webp",
      title: "Setup Virtual Card API",
      description:
        "Configure the API to enable virtual card generation and management for secure online payments.",
      accent: "#6366F1",
      tag: "API",
    },
    {
      id: 8,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/6858c3f1-fece-4935-99ab-5e79a392a6bd.webp",
      title: "Biometric Login",
      description:
        "Log in securely using biometric authentication using the fingerprint for added protection.",
      accent: "#3B82F6",
      tag: "Security",
    },
    {
      id: 9,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/188cb7f7-c86e-44f1-a4e8-805c2f58fc94.webp",
      title: "Transaction Logs",
      description:
        "Access detailed logs of all your transactions to track spending and monitor account activities.",
      accent: "#8B5CF6",
      tag: "Logs",
    },
    {
      id: 10,
      image:
        "https://mehedi.appdevs.team/stripcard/public/frontend/images/site-section/3ace52a4-e272-47ef-8f24-1b675cfd6f83.webp",
      title: "Multi-Language",
      description:
        "Use in multiple languages, making it accessible and user-friendly for a global audience.",
      accent: "#06B6D4",
      tag: "Global",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#f8f9ff] dark:bg-[#080c18]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .sp-section * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .sp-card {
          position: relative;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: default;
        }

        .dark .sp-card {
          background: rgba(15, 20, 40, 0.75);
          border-color: rgba(99, 102, 241, 0.12);
        }

        .sp-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.35s ease;
          background: linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06));
        }

        .sp-card:hover::before {
          opacity: 1;
        }

        .sp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px -12px rgba(99, 102, 241, 0.18), 0 0 0 1px rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.25);
        }

        .dark .sp-card:hover {
          box-shadow: 0 20px 60px -12px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(99, 102, 241, 0.3);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .sp-icon-wrap {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sp-card:hover .sp-icon-wrap {
          transform: scale(1.08) rotate(-3deg);
        }

        .sp-icon-wrap img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        .sp-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 20px;
          margin-bottom: 6px;
        }

        .sp-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        .dark .sp-title {
          color: #f1f5f9;
        }

        .sp-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .dark .sp-desc {
          color: #94a3b8;
        }

        .sp-number {
          position: absolute;
          bottom: 16px;
          right: 18px;
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
          opacity: 0.04;
          color: #6366f1;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .sp-card:hover .sp-number {
          opacity: 0.08;
        }

        /* Divider line accent */
        .sp-line-accent {
          width: 3px;
          height: 100%;
          border-radius: 2px;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .sp-card:hover .sp-line-accent {
          opacity: 1;
        }

        .sp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(99,102,241,0.2);
          box-shadow: 0 4px 20px rgba(99,102,241,0.12);
          backdrop-filter: blur(8px);
        }

        .dark .sp-badge {
          background: rgba(15,20,40,0.8);
          border-color: rgba(99,102,241,0.25);
        }

        .sp-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          animation: sp-pulse 2s ease-in-out infinite;
        }

        @keyframes sp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        .sp-fade-in {
          animation: sp-fade-up 0.5s ease both;
        }

        @keyframes sp-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Decorative background blobs */
        .sp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
      `}</style>

      {/* Background blobs */}
      <div
        className="sp-blob"
        style={{
          width: 500,
          height: 500,
          top: -100,
          right: -100,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="sp-blob"
        style={{
          width: 400,
          height: 400,
          bottom: -80,
          left: -80,
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="sp-blob"
        style={{
          width: 300,
          height: 300,
          top: "40%",
          left: "45%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="sp-section relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" style={{ gap: 20 }}>
          {/* Badge */}
          <div className="sp-badge">
            <div className="sp-dot" />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Service Provide
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0f172a",
              margin: 0,
              maxWidth: 640,
            }}
            className="dark:text-slate-50"
          >
            Our Upheld Administrations{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What We Serve To You
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: 580,
              margin: 0,
            }}
            className="dark:text-slate-400"
          >
            Unlock seamless digital transactions with our powerful services — from virtual card
            management and secure payments to multi-language support and real-time notifications.
          </p>

          {/* Decorative divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <div style={{ width: 24, height: 2, borderRadius: 2, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
            <div style={{ width: 40, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6" }} />
            <div style={{ width: 24, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #8b5cf6, transparent)" }} />
          </div>
        </div>

        {/* Services Grid — horizontal card layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sp-card sp-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Left accent line */}
              <div
                className="sp-line-accent"
                style={{ background: `linear-gradient(180deg, ${service.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="sp-icon-wrap"
                style={{
                  background: `linear-gradient(135deg, ${service.accent}18, ${service.accent}30)`,
                  border: `1px solid ${service.accent}25`,
                }}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  className="sp-tag"
                  style={{
                    color: service.accent,
                    background: `${service.accent}15`,
                  }}
                >
                  {service.tag}
                </span>
                <h3 className="sp-title">{service.title}</h3>
                <p className="sp-desc">{service.description}</p>
              </div>

              {/* Ghost number */}
              <span className="sp-number">{String(service.id).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA stripe */}
        <div
          className="dark:border-indigo-500/20"
          style={{
            marginTop: 48,
            borderRadius: 20,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 700,
                color: "#0f172a",
              }}
              className="dark:text-slate-100 sp-section"
            >
              Ready to get started?
            </p>
            <p
              style={{ margin: "4px 0 0", fontSize: 14, color: "#64748b" }}
              className="dark:text-slate-400 sp-section"
            >
              Join thousands of users who trust our platform for their digital finances.
            </p>
          </div>
          <button
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "inherit",
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
              color: "#fff",
              letterSpacing: "0.01em",
              boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.35)";
            }}
          >
            Explore All Services 
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;