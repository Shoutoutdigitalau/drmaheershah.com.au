import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F0F0F0] overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        {/* Header - Single horizontal row */}
        <header className="hero-header absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-[240px] py-[40px]">
          {/* Logo - Left */}
          <div className="logo-wrapper flex-shrink-0">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a3c1bc0a5e74e5c9e1d8f2c3a4b5c6d"
              alt="Dr Maheer Shah Logo"
              width={180}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Navigation Menu - Center */}
          <nav className="nav-menu flex gap-[40px] flex-1 justify-center">
            <a href="#about" className="nav-link text-white font-medium text-sm hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
              About Us
            </a>
            <a href="#services" className="nav-link text-white font-medium text-sm hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
              Patient Services
            </a>
            <a href="#gallery" className="nav-link text-white font-medium text-sm hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
              Case Gallery
            </a>
            <a href="#dentists" className="nav-link text-white font-medium text-sm hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
              For Dentists
            </a>
            <a href="#contact" className="nav-link text-white font-medium text-sm hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
              Contact
            </a>
          </nav>

          {/* CTA Button - Right */}
          <button className="cta-button bg-[#00A1E0] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0090c9] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/50 text-sm whitespace-nowrap flex-shrink-0">
            <span>Book a Consultation</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </header>

        {/* Hero Container - Two Column Grid */}
        <div className="hero-container grid grid-cols-2 min-h-screen relative">
          {/* LEFT COLUMN - Gradient Background with Text */}
          <div className="hero-left relative flex flex-col justify-center px-[80px] py-[120px]" style={{background: "linear-gradient(135deg, #0082b3 0%, #124c69 100%)"}}>
            <div className="hero-content max-w-[600px]">
              <h1 className="hero-title text-[#f0f0f0] text-[74px] font-medium leading-[80px] mb-6">
                Where Traditional Dentistry Meets Digital Innovation
              </h1>
              <p className="hero-description text-[rgba(240,240,240,0.9)] text-[20px] leading-relaxed mb-12">
                Expert care for patients seeking the future of dentistry | Advanced training for practitioners mastering digital workflows.
              </p>

              <div className="hero-buttons flex gap-[24px]">
                <button className="primary-cta bg-[#00a1e0] text-white px-[22px] py-[12px] rounded-full inline-flex items-center justify-center gap-2 hover:bg-[#0090c9] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/50 text-sm">
                  <span>Book a Consultation</span>
                </button>
                <button className="secondary-cta bg-white text-[#15171F] px-[22px] py-[12px] rounded-full inline-flex items-center justify-center gap-2 hover:bg-[#f5f5f5] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#00a1e0]/50 text-sm">
                  <span>Explore Courses</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Background Image */}
          <div className="hero-right w-full h-full" style={{backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F4180cf4ba9354e9e8b40c4dc6a5abfa9%2F3960a92c14444b9f8af3c93f8a78f540?format=webp&width=800')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
        </div>

        {/* STATS BAR - Overlay at Bottom */}
        <div className="stats-bar absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between" style={{background: "rgba(21,23,31,0.3)", padding: "54px 240px"}}>
          <div className="stats-text text-white text-base">
            14+ Years of Experience | 80+ Certifications | 500+ Patients Treated
          </div>

          <div className="social-icons flex gap-[20px]">
            <a href="#" aria-label="LinkedIn" className="social-icon w-14 h-14 rounded-full bg-[rgba(240,240,240,0.1)] border border-[rgba(240,240,240,0.2)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6666 10C22.7221 10 24.6933 10.7902 26.1467 12.1967C27.6001 13.6032 28.4166 15.5109 28.4166 17.5V26.25H23.25V17.5C23.25 16.837 22.9778 16.2011 22.4933 15.7322C22.0088 15.2634 21.3518 15 20.6666 15C19.9815 15 19.3244 15.2634 18.8399 15.7322C18.3555 16.2011 18.0833 16.837 18.0833 17.5V26.25H12.9166V17.5C12.9166 15.5109 13.7331 13.6032 15.1865 12.1967C16.64 10.7902 18.6112 10 20.6666 10Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75004 11.25H2.58337V26.25H7.75004V11.25Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.16671 7.5C6.59344 7.5 7.75004 6.38071 7.75004 5C7.75004 3.61929 6.59344 2.5 5.16671 2.5C3.73997 2.5 2.58337 3.61929 2.58337 5C2.58337 6.38071 3.73997 7.5 5.16671 7.5Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon w-14 h-14 rounded-full bg-[rgba(240,240,240,0.1)] border border-[rgba(240,240,240,0.2)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9584 2.5H9.04171C5.47487 2.5 2.58337 5.29822 2.58337 8.75V21.25C2.58337 24.7018 5.47487 27.5 9.04171 27.5H21.9584C25.5252 27.5 28.4167 24.7018 28.4167 21.25V8.75C28.4167 5.29822 25.5252 2.5 21.9584 2.5Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.6666 14.2119C20.826 15.2522 20.6424 16.3147 20.1419 17.2482C19.6414 18.1817 18.8494 18.9387 17.8787 19.4115C16.908 19.8843 15.8079 20.0489 14.735 19.8818C13.6621 19.7147 12.6709 19.2245 11.9024 18.4809C11.134 17.7372 10.6274 16.778 10.4548 15.7397C10.2821 14.7013 10.4522 13.6368 10.9408 12.6974C11.4294 11.758 12.2116 10.9916 13.1762 10.5072C14.1408 10.0228 15.2387 9.84514 16.3137 9.9994C17.4102 10.1568 18.4254 10.6512 19.2092 11.4098C19.9931 12.1683 20.504 13.1507 20.6666 14.2119Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.6041 8.125H22.6163" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-icon w-14 h-14 rounded-full bg-[rgba(240,240,240,0.1)] border border-[rgba(240,240,240,0.2)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.25 2.5H19.375C17.6621 2.5 16.0194 3.15848 14.8082 4.33058C13.5971 5.50268 12.9166 7.0924 12.9166 8.75V12.5H9.04163V17.5H12.9166V27.5H18.0833V17.5H21.9583L23.25 12.5H18.0833V8.75C18.0833 8.41848 18.2194 8.10054 18.4616 7.86612C18.7038 7.6317 19.0324 7.5 19.375 7.5H23.25V2.5Z" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-[80px] md:py-[120px] lg:py-[160px] px-6">
        <div className="max-w-[813px] mx-auto text-center mb-[60px]">
          <h2 className="text-[#15171F] text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[56px] mb-4">
            Choose Your Path
          </h2>
          <p className="text-[#15171F] text-lg">
            Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
          </p>
        </div>

        <div className="max-w-[1236px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* For Patients Card */}
          <article className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#00A1E0] via-[#0082b8] to-[#083B4E] flex flex-col">
            <div className="relative h-[445px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae564589cd294d7c5509e3c3379203e14c5720a8"
                alt="Patient receiving dental care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 588px"
              />
              <div className="absolute inset-0 p-[42px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-[114px] h-[114px] rounded-[24px] bg-[rgba(21,23,31,0.3)] flex items-center justify-center">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46.6669 51C47.0719 51.0754 47.0719 51.0754 47.4051 51.4527C47.513 51.6203 47.621 51.7879 47.7322 51.9606C49.2714 54.2487 51.0915 55.5135 53.6564 56.2257C56.155 56.6676 58.7035 56.198 60.7959 54.6565C61.9801 53.7063 62.8727 52.7321 63.6347 51.3822C63.9159 51.0754 63.9159 51.0754 64.398 51.0201C64.8346 51.0754 64.8346 51.0754 64.9877 51.2364C65.0879 52.3802 64.5596 52.95 63.9159 53.8115C63.8367 53.9233 63.7576 54.0352 63.676 54.1504C62.0344 56.3168 59.4732 57.4171 56.9582 57.9458C53.6512 58.2507 50.6989 57.2666 48.1246 55.0689C47.2369 54.2131 46.2975 53.1712 46.0185 51.9204C46.0124 51.7478 46.0063 51.5752 46 51.3973C46.3063 51.0754 46.3063 51.0754 46.6669 51Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="bg-[rgba(21,23,31,0.4)] px-4 py-2 rounded-full text-sm font-medium text-white">
                    FOR PATIENTS
                  </span>
                </div>
                
                <div>
                  <h3 className="text-white text-[32px] md:text-[36px] font-medium leading-[46px] mb-4">
                    Experience the Future<br />of Dental Care
                  </h3>
                  <p className="text-white text-lg max-w-[504px]">
                    Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-[42px] flex-1 flex flex-col">
              <ul className="space-y-3 mb-10 flex-1">
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>Biomimetic restorations that mimic nature</span>
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>3D-printed precision in hours, not weeks</span>
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>Holistic approach to lasting oral health</span>
                </li>
              </ul>
              
              <button className="bg-white text-[#15171F] px-[22px] py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/50">
                <span>Explore Patient Services</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </article>

          {/* For Dentists Card */}
          <article className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#00A1E0] via-[#0082b8] to-[#083B4E] flex flex-col">
            <div className="relative h-[445px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a2aaf6390e9eca430759b5f867d6f401694dcde"
                alt="Dentist in training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 588px"
              />
              <div className="absolute inset-0 p-[42px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-[114px] h-[114px] rounded-[24px] bg-[rgba(21,23,31,0.3)] flex items-center justify-center">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a13d06fd37d6f67e19a593ba2a0ee54a106a7c4b"
                      alt="Education icon"
                      width={114}
                      height={114}
                    />
                  </div>
                  <span className="bg-[rgba(240,240,240,0.1)] px-4 py-2 rounded-full text-sm font-medium text-white">
                    FOR DENTISTS
                  </span>
                </div>
                
                <div>
                  <h3 className="text-white text-[32px] md:text-[36px] font-medium leading-[46px] mb-4">
                    Master the Digital<br />Dentistry Revolution
                  </h3>
                  <p className="text-white text-lg max-w-[504px]">
                    Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-[42px] flex-1 flex flex-col">
              <ul className="space-y-3 mb-10 flex-1">
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>5 comprehensive courses from novice to expert</span>
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>Learn AI integration, 3D printing, biomimetics</span>
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.25967L3.74529 10.0043L12.646 0.00439453" stroke="currentColor"/>
                  </svg>
                  <span>Transform your practice, not just your skills</span>
                </li>
              </ul>
              
              <button className="bg-white text-[#15171F] px-[22px] py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/50">
                <span>Explore Courses</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-[80px] md:py-[120px] lg:py-[160px] px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[876px] ml-auto text-right mb-[60px]">
            <h2 className="text-[#15171F] text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[56px] mb-4">
              The Three Pillars of Modern Dentistry
            </h2>
            <p className="text-[#15171F] text-lg max-w-[813px] ml-auto">
              Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[503px_1fr] gap-[82px] items-start">
            <div className="relative">
              <div className="flex justify-end mb-[-40px] relative z-10">
                <div className="w-[77px] h-[77px] rounded-full bg-[#124C69] flex items-center justify-center text-white text-[48px] font-medium">
                  1
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[24px] p-[37px] bg-gradient-to-br from-[#00A1E0] via-[#0082b8] to-[#124C69]">
                  <h3 className="text-white text-[28px] md:text-[32px] font-medium leading-[42px] mb-4">
                    Nature-Inspired Restorations
                  </h3>
                  <p className="text-white text-lg">
                    We don't just fix teeth—we rebuild them using biomimetic principles that mimic natural tooth structure. This means stronger, longer-lasting restorations that preserve your natural tooth.
                  </p>
                </div>

                <div className="rounded-[24px] p-[30px] border border-[#124C69]">
                  <h3 className="text-[#15171F] text-[28px] md:text-[32px] font-medium leading-[42px]">
                    Same-Day Precision Technology
                  </h3>
                </div>

                <div className="rounded-[24px] p-[30px] border border-[#124C69]">
                  <h3 className="text-[#15171F] text-[28px] md:text-[32px] font-medium leading-[42px]">
                    Whole-Body Dental Health
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="rounded-[24px] overflow-hidden relative h-[660px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f58b44caeb5ed48f0ed60b57e67f346ade8c2303"
                  alt="Biomimetic Dentistry demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 378px"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 p-[39px] max-w-[245px] text-right">
                  <span className="inline-block bg-[rgba(21,23,31,0.4)] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Biomimetic Dentistry
                  </span>
                  <p className="text-white text-lg">
                    90% of traditional crowns can be avoided with biomimetic approaches
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] overflow-hidden h-[660px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4f685eb8b14a228f244a4a7f7b82bb85196bc3cc"
                  alt="Digital dentistry technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 437px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-[80px] md:py-[120px] lg:py-[160px] bg-gradient-to-b from-[#124C69] via-[#0a3147] to-[#00a1e0]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-[60px]">
            <div className="max-w-[720px]">
              <h2 className="text-white text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[56px] mb-4">
                See the Transformation
              </h2>
              <p className="text-white text-lg">
                Real patients, real results using digital dentistry. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus.
              </p>
            </div>
            <button className="bg-white text-[#15171F] px-[22px] py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap">
              <span>View Full Case Gallery</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="overflow-x-auto pb-8 -mx-6 md:-mx-12 lg:-mx-[60px] px-6 md:px-12 lg:px-[60px]">
            <div className="flex gap-10 min-w-min">
              <article className="flex-shrink-0 w-[90vw] max-w-[454px] rounded-[24px] overflow-hidden">
                <div className="bg-gradient-to-br from-[#00A1E0] to-[#124C69] p-[36px] pb-6">
                  <h3 className="text-white text-xl font-medium mb-2">Dental Veneers</h3>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <path d="M11.7597 0.921241C11.7832 0.929019 11.8067 0.936798 11.8308 0.944812C13.0458 1.35296 14.1001 2.06129 15.0129 2.95012L15.1121 3.04509C15.3179 3.2455 15.5001 3.45907 15.6776 3.68471L15.7615 3.78802C16.3404 4.51494 16.778 5.36067 17.0768 6.2383L17.1061 6.32388C17.6984 8.08361 17.67 10.011 17.0768 11.7652L17.0532 11.8364C16.6451 13.0514 15.9367 14.1056 15.0479 15.0185L14.9529 15.1177C14.7525 15.3234 14.539 15.5056 14.3133 15.6831L14.21 15.767C13.4831 16.346 12.6374 16.7835 11.7597 17.0823L11.6742 17.1117C9.48172 17.8496 7.11397 17.6009 5.05628 16.5852C4.27774 16.1884 3.60335 15.6608 2.97958 15.0534L2.88038 14.9585C2.67458 14.7581 2.49241 14.5445 2.31495 14.3188L2.23105 14.2155C0.836077 12.4641 0.269813 10.1542 0.518361 7.94833C0.74853 6.10071 1.58066 4.38931 2.87464 3.05506L2.92911 2.99786C3.18714 2.72712 3.45706 2.48607 3.75676 2.26234L3.94086 2.12083C4.29813 1.84612 4.68139 1.62316 5.07842 1.41097L5.15923 1.36752C7.16346 0.307839 9.63113 0.201477 11.7597 0.921241Z" fill="white"/>
                        <path d="M9.25412 2.83778C9.3735 2.9401 9.41142 3.00249 9.42451 3.15994L9.42432 3.28306L9.4245 3.35181C9.42462 3.42776 9.42423 3.5037 9.42385 3.57965L9.42388 3.74307C9.4239 3.89093 9.42349 4.03879 9.423 4.18665L9.42244 4.65024C9.42222 4.94286 9.42165 5.23547 9.42094 5.52809L9.41943 6.52751C9.4187 7.21279 9.41746 7.89807 9.41591 8.58335L9.55393 8.58241C9.98319 8.57958 10.4125 8.57748 10.8417 8.57611L11.5038 8.5728L12.1427 8.57008L12.3865 8.56856L12.7279 8.56747L12.8297 8.56595C13.0268 8.56716 13.144 8.58857 13.2988 8.72328C13.3977 8.87171 13.3916 9.00373 13.3687 9.17803C13.2942 9.30574 13.2239 9.36749 13.0889 9.42289L12.9128 9.43225L12.8052 9.43315L12.6878 9.43305L12.5636 9.43377L12.2269 9.43459L12.0164 9.43498L11.2815 9.43585L10.5971 9.43766L10.009 9.4389L9.658 9.43982L9.26637 9.43989L9.14939 9.44108C8.93696 9.43933 8.80502 9.43021 8.64633 9.28297C8.56282 9.15777 8.56741 9.04448 8.56702 8.89656L8.56654 8.82133L8.56621 8.57176L8.5655 8.39282C8.56488 8.23078 8.56471 8.06874 8.56467 7.9067L8.5641 7.50091L8.56341 6.54353L8.56161 5.5559L8.56036 4.70797L8.55944 4.20154L8.55926 3.72522L8.55875 3.5505L8.55907 3.31178L8.55896 3.1769C8.58227 3.01558 8.64855 2.89975 8.77751 2.79843C8.95998 2.74774 9.0888 2.75206 9.25412 2.83778Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>2 visits, 1 week</span>
                  </div>
                </div>
                <div className="bg-white p-[39px] space-y-[22px]">
                  <div>
                    <h4 className="text-[rgba(21,23,31,0.46)] text-lg font-medium mb-1">Problem</h4>
                    <p className="text-[#15171F] text-sm">
                      Sarah came to us with a severely damaged molar that required intervention. Traditional dentistry would have recommended a crown requiring significant tooth removal.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[rgba(21,23,31,0.46)] text-lg font-medium mb-1">Solution</h4>
                    <p className="text-[#15171F] text-sm">
                      Using biomimetic bonding and digital design, we preserved 70% more of her natural tooth structure while creating a restoration that perfectly mimics natural enamel.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[rgba(21,23,31,0.46)] text-lg font-medium mb-1">Result</h4>
                    <p className="text-[#15171F] text-sm">
                      Completed in 2 visits, zero pain, natural appearance that's indistinguishable from her other teeth.
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex-shrink-0 w-[90vw] max-w-[454px] rounded-[24px] overflow-hidden bg-white">
                <div className="p-[36px] pb-6">
                  <h3 className="text-[#15171F] text-xl font-medium mb-2">Dental Implant</h3>
                  <div className="flex items-center gap-2 text-[rgba(21,23,31,0.46)] text-sm mb-6">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip1)">
                        <path d="M11.7597 0.921241C11.7832 0.929019 11.8067 0.936798 11.8308 0.944812C13.0458 1.35296 14.1001 2.06129 15.0129 2.95012L15.1121 3.04509C15.3179 3.2455 15.5001 3.45907 15.6776 3.68471L15.7615 3.78802C16.3404 4.51494 16.778 5.36067 17.0768 6.2383L17.1061 6.32388C17.6984 8.08361 17.67 10.011 17.0768 11.7652L17.0532 11.8364C16.6451 13.0514 15.9367 14.1056 15.0479 15.0185L14.9529 15.1177C14.7525 15.3234 14.539 15.5056 14.3133 15.6831L14.21 15.767C13.4831 16.346 12.6374 16.7835 11.7597 17.0823L11.6742 17.1117C9.48172 17.8496 7.11397 17.6009 5.05628 16.5852C4.27774 16.1884 3.60335 15.6608 2.97958 15.0534L2.88038 14.9585C2.67458 14.7581 2.49241 14.5445 2.31495 14.3188L2.23105 14.2155C0.836077 12.4641 0.269813 10.1542 0.518361 7.94833C0.74853 6.10071 1.58066 4.38931 2.87464 3.05506L2.92911 2.99786C3.18714 2.72712 3.45706 2.48607 3.75676 2.26234L3.94086 2.12083C4.29813 1.84612 4.68139 1.62316 5.07842 1.41097L5.15923 1.36752C7.16346 0.307839 9.63113 0.201477 11.7597 0.921241Z" fill="currentColor"/>
                        <path d="M9.25412 2.83778C9.3735 2.9401 9.41142 3.00249 9.42451 3.15994L9.42432 3.28306L9.4245 3.35181C9.42462 3.42776 9.42423 3.5037 9.42385 3.57965L9.42388 3.74307C9.4239 3.89093 9.42349 4.03879 9.423 4.18665L9.42244 4.65024C9.42222 4.94286 9.42165 5.23547 9.42094 5.52809L9.41943 6.52751C9.4187 7.21279 9.41746 7.89807 9.41591 8.58335L9.55393 8.58241C9.98319 8.57958 10.4125 8.57748 10.8417 8.57611L11.5038 8.5728L12.1427 8.57008L12.3865 8.56856L12.7279 8.56747L12.8297 8.56595C13.0268 8.56716 13.144 8.58857 13.2988 8.72328C13.3977 8.87171 13.3916 9.00373 13.3687 9.17803C13.2942 9.30574 13.2239 9.36749 13.0889 9.42289L12.9128 9.43225L12.8052 9.43315L12.6878 9.43305L12.5636 9.43377L12.2269 9.43459L12.0164 9.43498L11.2815 9.43585L10.5971 9.43766L10.009 9.4389L9.658 9.43982L9.26637 9.43989L9.14939 9.44108C8.93696 9.43933 8.80502 9.43021 8.64633 9.28297C8.56282 9.15777 8.56741 9.04448 8.56702 8.89656L8.56654 8.82133L8.56621 8.57176L8.5655 8.39282C8.56488 8.23078 8.56471 8.06874 8.56467 7.9067L8.5641 7.50091L8.56341 6.54353L8.56161 5.5559L8.56036 4.70797L8.55944 4.20154L8.55926 3.72522L8.55875 3.5505L8.55907 3.31178L8.55896 3.1769C8.58227 3.01558 8.64855 2.89975 8.77751 2.79843C8.95998 2.74774 9.0888 2.75206 9.25412 2.83778Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip1">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>2 visits, 1 week</span>
                  </div>
                </div>

                <div className="relative h-[279px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9bfbf840950e6be89922586b5299dab5e5e2db56"
                    alt="Before and after dental implant"
                    fill
                    className="object-cover"
                    sizes="454px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-[37px]">
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-[14px] py-1 rounded-full text-xs font-medium">
                      BEFORE
                    </span>
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-[14px] py-1 rounded-full text-xs font-medium">
                      AFTER
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[39px] h-[39px] rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 22L18.5 14.5L10.5 7" stroke="#00A1E0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-[37px] pt-[43px]">
                  <blockquote className="text-[#15171F] text-sm mb-3">
                    "Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus."
                  </blockquote>
                  <cite className="text-[rgba(21,23,31,0.46)] text-sm not-italic">Jane</cite>
                </div>
              </article>

              <article className="flex-shrink-0 w-[90vw] max-w-[454px] rounded-[24px] overflow-hidden bg-white">
                <div className="p-[36px] pb-6">
                  <h3 className="text-[#15171F] text-xl font-medium mb-2">Dental Crown</h3>
                  <div className="flex items-center gap-2 text-[rgba(21,23,31,0.46)] text-sm mb-6">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip2)">
                        <path d="M11.7597 0.921241C11.7832 0.929019 11.8067 0.936798 11.8308 0.944812C13.0458 1.35296 14.1001 2.06129 15.0129 2.95012L15.1121 3.04509C15.3179 3.2455 15.5001 3.45907 15.6776 3.68471L15.7615 3.78802C16.3404 4.51494 16.778 5.36067 17.0768 6.2383L17.1061 6.32388C17.6984 8.08361 17.67 10.011 17.0768 11.7652L17.0532 11.8364C16.6451 13.0514 15.9367 14.1056 15.0479 15.0185L14.9529 15.1177C14.7525 15.3234 14.539 15.5056 14.3133 15.6831L14.21 15.767C13.4831 16.346 12.6374 16.7835 11.7597 17.0823L11.6742 17.1117C9.48172 17.8496 7.11397 17.6009 5.05628 16.5852C4.27774 16.1884 3.60335 15.6608 2.97958 15.0534L2.88038 14.9585C2.67458 14.7581 2.49241 14.5445 2.31495 14.3188L2.23105 14.2155C0.836077 12.4641 0.269813 10.1542 0.518361 7.94833C0.74853 6.10071 1.58066 4.38931 2.87464 3.05506L2.92911 2.99786C3.18714 2.72712 3.45706 2.48607 3.75676 2.26234L3.94086 2.12083C4.29813 1.84612 4.68139 1.62316 5.07842 1.41097L5.15923 1.36752C7.16346 0.307839 9.63113 0.201477 11.7597 0.921241Z" fill="currentColor"/>
                        <path d="M9.25412 2.83778C9.3735 2.9401 9.41142 3.00249 9.42451 3.15994L9.42432 3.28306L9.4245 3.35181C9.42462 3.42776 9.42423 3.5037 9.42385 3.57965L9.42388 3.74307C9.4239 3.89093 9.42349 4.03879 9.423 4.18665L9.42244 4.65024C9.42222 4.94286 9.42165 5.23547 9.42094 5.52809L9.41943 6.52751C9.4187 7.21279 9.41746 7.89807 9.41591 8.58335L9.55393 8.58241C9.98319 8.57958 10.4125 8.57748 10.8417 8.57611L11.5038 8.5728L12.1427 8.57008L12.3865 8.56856L12.7279 8.56747L12.8297 8.56595C13.0268 8.56716 13.144 8.58857 13.2988 8.72328C13.3977 8.87171 13.3916 9.00373 13.3687 9.17803C13.2942 9.30574 13.2239 9.36749 13.0889 9.42289L12.9128 9.43225L12.8052 9.43315L12.6878 9.43305L12.5636 9.43377L12.2269 9.43459L12.0164 9.43498L11.2815 9.43585L10.5971 9.43766L10.009 9.4389L9.658 9.43982L9.26637 9.43989L9.14939 9.44108C8.93696 9.43933 8.80502 9.43021 8.64633 9.28297C8.56282 9.15777 8.56741 9.04448 8.56702 8.89656L8.56654 8.82133L8.56621 8.57176L8.5655 8.39282C8.56488 8.23078 8.56471 8.06874 8.56467 7.9067L8.5641 7.50091L8.56341 6.54353L8.56161 5.5559L8.56036 4.70797L8.55944 4.20154L8.55926 3.72522L8.55875 3.5505L8.55907 3.31178L8.55896 3.1769C8.58227 3.01558 8.64855 2.89975 8.77751 2.79843C8.95998 2.74774 9.0888 2.75206 9.25412 2.83778Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip2">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>2 visits, 1 week</span>
                  </div>
                </div>

                <div className="relative h-[279px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6c84c7b4154c6c8a058b845e20da6d169edb8a84"
                    alt="Before and after dental crown"
                    fill
                    className="object-cover"
                    sizes="454px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-[37px]">
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-[14px] py-1 rounded-full text-xs font-medium">
                      BEFORE
                    </span>
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-[14px] py-1 rounded-full text-xs font-medium">
                      AFTER
                    </span>
                  </div>
                </div>

                <div className="p-[37px] pt-[43px]">
                  <blockquote className="text-[#15171F] text-sm mb-3">
                    "Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus."
                  </blockquote>
                  <cite className="text-[rgba(21,23,31,0.46)] text-sm not-italic">Jane</cite>
                </div>
              </article>
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-10">
            <button aria-label="Previous" className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-[#e0e0e0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 23.5L8 14.5L17 5.5" stroke="#124C69" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button aria-label="Next" className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-[#e0e0e0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 23.5L19 14.5L10 5.5" stroke="#00A1E0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-[80px] md:py-[120px] lg:py-[160px] px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[813px] mx-auto text-center mb-[60px]">
            <h2 className="text-[#15171F] text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[56px] mb-4">
              Bridging Ancient Wisdom with Modern Innovation
            </h2>
            <p className="text-[#15171F] text-lg">
              Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[589px_1fr] rounded-[24px] overflow-hidden">
            <div className="relative min-h-[500px] lg:min-h-[781px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/e58305220b2d39e3dbc1c2c89ab1916fd334b695"
                alt="Dr Maheer Shah - Principal Dentist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 589px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,23,31,0.84)] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-[42px]">
                <h3 className="text-white text-[36px] md:text-[40px] font-medium leading-[46px] mb-1">Dr Maheer Shah</h3>
                <p className="text-[#00A1E0] text-xl">Principal Dentist</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] p-8 md:p-12 lg:p-[69px] flex items-center">
              <div className="space-y-[42px]">
                <div className="space-y-[30px]">
                  <div>
                    <p className="text-[#15171F] text-lg font-medium mb-[10px]">
                      My journey in dentistry began with a simple question:
                    </p>
                    <p className="text-[#15171F] text-[36px] md:text-[40px] font-medium leading-[50px] bg-gradient-to-r from-[#00A1E0] to-[#124C69] bg-clip-text text-transparent">
                      Why do we keep doing things the way we've always done them?
                    </p>
                  </div>

                  <p className="text-[#15171F] text-lg leading-relaxed">
                    After training in biomimetic techniques internationally and integrating holistic practices from my yoga background, I realized dentistry needed a revolution—not just for patients, but for practitioners.
                    <br /><br />
                    Traditional dentistry often focuses on fixing problems after they occur. I wanted to create a practice that prevents problems, preserves natural tooth structure, and treats the whole person, not just teeth.
                    <br /><br />
                    Today, I split my time between transforming smiles in my practice and teaching dentists worldwide how to embrace digital workflows without losing the artistry of our craft.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-[rgba(0,161,224,0.4)] to-[rgba(18,76,105,0.4)]"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/TEMP/9eb7a0b01952f8118a56a04508bc550f3c67c2c7"
                        alt=""
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">BDS, Advanced Biomimetic Certification</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/TEMP/61295c5f2bcf85e1877d3ba5442f7dc63e37d584"
                        alt=""
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">15+ Years in Practice</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/TEMP/b989cc38b0452737787d18806d87263d43a6df5c"
                        alt=""
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">Digital Dentistry Specialist</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/TEMP/10fcf23f8bcb120f76baf336fda3ed2580b7b276"
                        alt=""
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">500+ Patients | 200+ Dentists Trained</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Services Section */}
      <section className="py-[80px] md:py-[120px] lg:py-[160px] px-6 bg-[#F9F9F9]">
        <div className="max-w-[1236px] mx-auto">
          <div className="max-w-[720px] mx-auto text-center mb-[50px]">
            <h2 className="text-[#15171F] text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[56px] mb-4">
              Patient Services
            </h2>
            <p className="text-[#15171F] text-lg">
              Comprehensive care using the latest digital dentistry techniques. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-[50px]">
            <article className="group cursor-pointer">
              <div className="relative rounded-[24px] overflow-hidden mb-[-80px] z-10">
                <div className="relative h-[445px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/831b15d42c8f0325eded401bc7b6ef0a7653bcea"
                    alt="Biomimetic Dentistry"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 588px"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-[42px] left-[42px]">
                  <div className="w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#00A1E0] to-[#00587A] flex items-center justify-center text-white text-2xl font-bold">
                    🦷
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00A1E0] to-[#124C69] rounded-[24px] pt-[100px] p-[42px] text-white">
                <h3 className="text-[28px] md:text-[32px] font-medium leading-[42px] mb-2">Biomimetic Dentistry</h3>
                <p className="text-lg mb-10">
                  Nature-inspired fillings and restorations that preserve your natural tooth. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="inline-flex items-center gap-3 hover:gap-5 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  <span>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="relative rounded-[24px] overflow-hidden mb-[-80px] z-10">
                <div className="relative h-[445px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/36b48bdfe33fd7d4878c5c5bdf86cf0a9bfb9165"
                    alt="3D Printing & Digital Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 588px"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-[42px] left-[42px]">
                  <div className="w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#00A1E0] to-[#00587A]">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/70ba342136763122d13f2686759022f9e447e9bb"
                      alt=""
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[24px] pt-[100px] p-[42px]">
                <h3 className="text-[#15171F] text-[28px] md:text-[32px] font-medium leading-[42px] mb-2">3D Printing & Digital Design</h3>
                <p className="text-[#15171F] text-lg mb-10">
                  Same-day crowns, bridges, and surgical guides using cutting-edge technology. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="inline-flex items-center gap-3 hover:gap-5 transition-all font-medium text-[#15171F] focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50 rounded">
                  <span>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="relative rounded-[24px] overflow-hidden mb-[-80px] z-10">
                <div className="relative h-[445px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/dcab5378798d9dc59941b0d8ef0671c9f814c030"
                    alt="Full-Mouth Rehabilitation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 588px"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-[42px] left-[42px]">
                  <div className="w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#00A1E0] to-[#00587A]">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c095efa5d76a531a6dd8c9c2b12b4079d55d4de0"
                      alt=""
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[24px] pt-[100px] p-[42px]">
                <h3 className="text-[#15171F] text-[28px] md:text-[32px] font-medium leading-[42px] mb-2">Full-Mouth Rehabilitation</h3>
                <p className="text-[#15171F] text-lg mb-10">
                  Comprehensive smile makeovers combining multiple advanced techniques. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="inline-flex items-center gap-3 hover:gap-5 transition-all font-medium text-[#15171F] focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50 rounded">
                  <span>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="relative rounded-[24px] overflow-hidden mb-[-80px] z-10">
                <div className="relative h-[445px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f4ba32b84c5ca8c25a0e556efd30009b7982cf07"
                    alt="Holistic Dental Care"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 588px"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-[42px] left-[42px]">
                  <div className="w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#00A1E0] to-[#00587A]">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/82740aa05f3bbaf2814ea9a61d7991f5a0a10f79"
                      alt=""
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[24px] pt-[100px] p-[42px]">
                <h3 className="text-[#15171F] text-[28px] md:text-[32px] font-medium leading-[42px] mb-2">Holistic Dental Care</h3>
                <p className="text-[#15171F] text-lg mb-10">
                  Integrating TMJ therapy, breathing, and whole-body wellness into treatment. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="inline-flex items-center gap-3 hover:gap-5 transition-all font-medium text-[#15171F] focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50 rounded">
                  <span>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          </div>

          <div className="text-center">
            <button className="bg-[#00A1E0] text-white px-[22px] py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#0090c9] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50">
              <span>View All Patient Services</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section - Master the Skills */}
      <section className="py-[160px] px-[240px] bg-gradient-to-b from-[#15171F] via-[#124C69] to-[#124C69]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[744px] mx-auto text-center mb-[60px]">
            <div className="inline-flex px-4 py-2 mb-8 rounded-full bg-[rgba(240,240,240,0.1)]">
              <span className="text-white text-sm font-medium">FOR PATIENTS</span>
            </div>
            <h2 className="text-white text-[48px] font-medium leading-[56px] mb-4">
              Master the Skills That Will Define the Next Decade
            </h2>
            <p className="text-white text-lg">
              5 comprehensive courses taking you from digital novice to advanced practitioner. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="space-y-[40px]">
            {/* Course Row 1 */}
            <div className="flex gap-[39px]">
              {/* Course 1 */}
              <article className="w-[454px] flex flex-col">
                <div className="relative h-[439px] rounded-t-[24px] overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f8db2f44a174ac1c22ffd4ac65855256e88fec4e"
                    alt="Biomimetic Basics Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-12 left-[37px] flex items-center justify-between w-[380px]">
                    <div className="w-14 h-14 rounded-[16px] bg-white flex items-center justify-center">
                      <span className="text-[#124C69] text-[36px] font-semibold leading-5">1</span>
                    </div>
                    <div className="text-white text-[48px] font-semibold leading-[56px]">$499</div>
                  </div>
                  <div className="absolute bottom-0 left-[37px] right-[37px] mb-[-30px]">
                    <h3 className="text-white text-[32px] font-medium leading-[42px] mb-1">Biomimetic Basics</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.978 0-7.2-3.222-7.2-7.2S5.022 1.8 9 1.8s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z" fill="#F0F0F0"/>
                        <path d="M9.254 2.838l.17.157v5.763l3.384.004c.168 0 .285.021.44.166.099.148.093.28.07.454-.075.127-.145.189-.28.244l-.084.009h-3.7V3.282c.023-.159.09-.282.219-.384.183-.05.311-.046.477.028z" fill="#F0F0F0"/>
                      </svg>
                      <span className="text-white text-base">6 modules, 12 hours</span>
                    </div>
                    <p className="text-white text-lg">
                      Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-b-[24px] pt-[70px] px-[37px] pb-[45px]">
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Foundation principles</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Material science</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Basic techniques</span>
                    </li>
                  </ul>
                  <button className="px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors">
                    <span>Enroll Now</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>

              {/* Course 2 */}
              <article className="w-[454px] flex flex-col">
                <div className="relative h-[439px] rounded-t-[24px] overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/668e21e3c5cfaba9e77e7171c589901bee0089d7"
                    alt="3D Printing Mastery Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-12 left-[37px] flex items-center justify-between w-[379px]">
                    <div className="w-14 h-14 rounded-[16px] bg-white flex items-center justify-center">
                      <span className="text-[#124C69] text-[36px] font-semibold leading-5">2</span>
                    </div>
                    <div className="text-white text-[48px] font-semibold leading-[56px]">$699</div>
                  </div>
                  <div className="absolute bottom-0 left-[37px] right-[37px] mb-[-30px]">
                    <h3 className="text-white text-[32px] font-medium leading-[42px] mb-1">3D Printing Mastery</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.978 0-7.2-3.222-7.2-7.2S5.022 1.8 9 1.8s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z" fill="#F0F0F0"/>
                        <path d="M9.254 2.838l.17.157v5.763l3.384.004c.168 0 .285.021.44.166.099.148.093.28.07.454-.075.127-.145.189-.28.244l-.084.009h-3.7V3.282c.023-.159.09-.282.219-.384.183-.05.311-.046.477.028z" fill="#F0F0F0"/>
                      </svg>
                      <span className="text-white text-base">8 modules, 16 hours</span>
                    </div>
                    <p className="text-white text-lg">
                      Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-b-[24px] pt-[70px] px-[37px] pb-[45px]">
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">From scan to final restoration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Printer setup & maintenance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Material selection</span>
                    </li>
                  </ul>
                  <button className="px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors">
                    <span>Enroll Now</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>

              {/* Course 3 */}
              <article className="w-[454px] flex flex-col">
                <div className="relative h-[439px] rounded-t-[24px] overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5d255b2a7beb228bb02dc521ab9d7660a5889281"
                    alt="Digital Workflow Integration Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-12 left-[37px] flex items-center justify-between w-[379px]">
                    <div className="w-14 h-14 rounded-[16px] bg-white flex items-center justify-center">
                      <span className="text-[#124C69] text-[36px] font-semibold leading-5">3</span>
                    </div>
                    <div className="text-white text-[48px] font-semibold leading-[56px]">$899</div>
                  </div>
                  <div className="absolute bottom-0 left-[37px] right-[37px] mb-[-30px]">
                    <h3 className="text-white text-[32px] font-medium leading-[42px] mb-1">Digital Workflow Integration</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.978 0-7.2-3.222-7.2-7.2S5.022 1.8 9 1.8s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z" fill="#F0F0F0"/>
                        <path d="M9.254 2.838l.17.157v5.763l3.384.004c.168 0 .285.021.44.166.099.148.093.28.07.454-.075.127-.145.189-.28.244l-.084.009h-3.7V3.282c.023-.159.09-.282.219-.384.183-.05.311-.046.477.028z" fill="#F0F0F0"/>
                      </svg>
                      <span className="text-white text-base">10 modules, 20 hours</span>
                    </div>
                    <p className="text-white text-lg">
                      Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-b-[24px] pt-[70px] px-[37px] pb-[45px]">
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Systems and efficiency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Software mastery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Team training</span>
                    </li>
                  </ul>
                  <button className="px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors">
                    <span>Enroll Now</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>
            </div>

            {/* Course Row 2 */}
            <div className="flex gap-[39px]">
              {/* Course 4 */}
              <article className="w-[454px] flex flex-col">
                <div className="relative h-[439px] rounded-t-[24px] overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fac4af9367f58aa337f05d487a0278b6009ef7d3"
                    alt="AI Tools for Dentists Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-12 left-[37px] flex items-center justify-between w-[379px]">
                    <div className="w-14 h-14 rounded-[16px] bg-white flex items-center justify-center">
                      <span className="text-[#124C69] text-[36px] font-semibold leading-5">4</span>
                    </div>
                    <div className="text-white text-[48px] font-semibold leading-[56px]">$699</div>
                  </div>
                  <div className="absolute bottom-0 left-[37px] right-[37px] mb-[-30px]">
                    <h3 className="text-white text-[32px] font-medium leading-[42px] mb-1">AI Tools for Dentists</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.978 0-7.2-3.222-7.2-7.2S5.022 1.8 9 1.8s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z" fill="#F0F0F0"/>
                        <path d="M9.254 2.838l.17.157v5.763l3.384.004c.168 0 .285.021.44.166.099.148.093.28.07.454-.075.127-.145.189-.28.244l-.084.009h-3.7V3.282c.023-.159.09-.282.219-.384.183-.05.311-.046.477.028z" fill="#F0F0F0"/>
                      </svg>
                      <span className="text-white text-base">6 modules, 12 hours</span>
                    </div>
                    <p className="text-white text-lg">
                      Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-b-[24px] pt-[70px] px-[37px] pb-[45px]">
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">AI-assisted diagnosis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Treatment planning with AI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Practice automation</span>
                    </li>
                  </ul>
                  <button className="px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors">
                    <span>Enroll Now</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>

              {/* Course 5 */}
              <article className="w-[454px] flex flex-col">
                <div className="relative h-[439px] rounded-t-[24px] overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3e936dce116177b37d5f2947a542238cb8a71ed1"
                    alt="Full-Mouth Digital Rehabilitation Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-12 left-[37px] flex items-center justify-between w-[380px]">
                    <div className="w-14 h-14 rounded-[16px] bg-white flex items-center justify-center">
                      <span className="text-[#124C69] text-[36px] font-semibold leading-5">5</span>
                    </div>
                    <div className="text-white text-[48px] font-semibold leading-[56px]">$1,299</div>
                  </div>
                  <div className="absolute bottom-0 left-[37px] right-[37px] mb-[-30px]">
                    <h3 className="text-white text-[32px] font-medium leading-[42px] mb-1">Full-Mouth Digital Rehabilitation</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.978 0-7.2-3.222-7.2-7.2S5.022 1.8 9 1.8s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z" fill="#F0F0F0"/>
                        <path d="M9.254 2.838l.17.157v5.763l3.384.004c.168 0 .285.021.44.166.099.148.093.28.07.454-.075.127-.145.189-.28.244l-.084.009h-3.7V3.282c.023-.159.09-.282.219-.384.183-.05.311-.046.477.028z" fill="#F0F0F0"/>
                      </svg>
                      <span className="text-white text-base">12 modules, 24 hours</span>
                    </div>
                    <p className="text-white text-lg">
                      Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-b-[24px] pt-[70px] px-[37px] pb-[45px]">
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Advanced comprehensive care</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Complex case planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#15171F" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[#15171F] text-lg">Multi-disciplinary integration</span>
                    </li>
                  </ul>
                  <button className="px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors">
                    <span>Enroll Now</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn from Dr. Maheer - Mid CTA */}
      <section className="relative px-[347px] py-[149px] min-h-[707px] bg-gradient-to-r from-[rgba(18,76,105,0.91)] via-[rgba(18,76,105,0.88)] to-[rgba(23,101,130,0.82)]" style={{backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/66dc57df948a92cb0c8eef8eb864ccb3d56676a6')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="max-w-[720px]">
          <h2 className="text-white text-[64px] font-medium leading-[74px] mb-4">
            Why Learn from<br />Dr. Maheer?
          </h2>
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#F0F0F0" strokeWidth="1.2"/>
              </svg>
              <span className="text-white text-xl">Practicing dentist, not just educator</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#F0F0F0" strokeWidth="1.2"/>
              </svg>
              <span className="text-white text-xl">Integration roadmap, not just theory</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#F0F0F0" strokeWidth="1.2"/>
              </svg>
              <span className="text-white text-xl">Hands-on digital workflow in real practice</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#F0F0F0" strokeWidth="1.2"/>
              </svg>
              <span className="text-white text-xl">AHPRA-compliant continuing education</span>
            </div>
          </div>
          <button className="px-[22px] py-3 rounded-full bg-white text-[#15171F] font-medium flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <span>Enroll Now</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Dual CTA Boxes */}
      <section className="px-[240px] py-20 bg-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto flex gap-10">
          {/* Ready to Experience Digital Dentistry */}
          <div className="flex-1 rounded-[24px] p-[58px_47px] bg-gradient-to-br from-[#00A1E0] to-[#124C69] relative overflow-hidden" style={{backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/153c5702b17033ec59303c39a2be636fe8939bf1')", backgroundSize: 'cover'}}>
            <div className="relative z-10">
              <h3 className="text-white text-[36px] font-medium leading-[48px] mb-4">
                Ready to Experience<br />Digital Dentistry?
              </h3>
              <p className="text-white text-base leading-7 mb-[34px]">
                Book your consultation and see what modern dentistry can do for your smile. Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="space-y-4 mb-10">
                <input type="text" placeholder="Name" className="w-full px-[22px] py-4 rounded-xl bg-[rgba(18,76,105,0.1)] border border-[rgba(255,255,255,0.3)] text-white placeholder:text-[rgba(255,255,255,0.7)]" />
                <input type="email" placeholder="Email" className="w-full px-[22px] py-4 rounded-xl bg-[rgba(18,76,105,0.1)] border border-[rgba(255,255,255,0.3)] text-white placeholder:text-[rgba(255,255,255,0.7)]" />
                <input type="tel" placeholder="Phone" className="w-full px-[22px] py-4 rounded-xl bg-[rgba(18,76,105,0.1)] border border-[rgba(255,255,255,0.3)] text-white placeholder:text-[rgba(255,255,255,0.7)]" />
                <input type="text" placeholder="Preferred Date" className="w-full px-[22px] py-4 rounded-xl bg-[rgba(18,76,105,0.1)] border border-[rgba(255,255,255,0.3)] text-white placeholder:text-[rgba(255,255,255,0.7)]" />
              </div>
              <button className="w-full px-[22px] py-3 rounded-full bg-white text-[#15171F] font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors mb-5">
                <span>Book My Consultation</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-white text-sm text-center italic">We'll call you within 24 hours to confirm.</p>
            </div>
          </div>

          {/* Start Your Digital Transformation Today */}
          <div className="flex-1 rounded-[24px] p-[58px_46px] bg-gradient-to-br from-[#15171F] to-[#124C69] relative overflow-hidden" style={{backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/5b8cf104e15b29e1f710c1846e9287ff65cc995d')", backgroundSize: 'cover'}}>
            <div className="relative z-10">
              <h3 className="text-white text-[36px] font-medium leading-[48px] mb-4">
                Start Your Digital<br />Transformation Today
              </h3>
              <p className="text-white text-base leading-7 mb-[34px]">
                Enroll in any course and get instant access to all materials. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat aucibus.
              </p>
              <div className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(0,161,224,0.1)] p-6 mb-10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#FFF" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-white text-base">Instant Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#FFF" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-white text-base">Lifetime Updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#FFF" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-white text-base">Community Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M0 6.26L3.745 10.004L12.646 0.004" stroke="#FFF" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-white text-base">CE Credits</span>
                  </li>
                </ul>
              </div>
              <button className="w-full px-[22px] py-3 rounded-full bg-white text-[#15171F] font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors mb-5">
                <span>View All Courses</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#00A1E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-full px-[22px] py-3 rounded-full bg-[#00A1E0] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors mb-5">
                <span>Download Free Course Guide (PDF)</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-white text-sm text-center italic">30-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Trusted by Patients & Practitioners */}
      <section className="px-[240px] py-[120px] bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto">
          <svg width="52" height="43" viewBox="0 0 52 43" fill="none" className="mb-6">
            <path d="M2.9 43C0.967 35.833 0 29.435 0 23.804C0 16.253 1.869 10.43 5.606 6.335C9.343 2.112 14.756 0 21.844 0v9.022c-3.351 0-5.8.96-7.346 2.88-1.418 1.792-2.127 4.607-2.127 8.447v4.031h10.439V43H2.9zm29.189 0c-1.804-6.655-2.706-13.054-2.706-19.196 0-7.551 1.804-13.374 5.413-17.469C38.533 2.112 43.946 0 51.034 0v9.022c-6.315 0-9.472 3.775-9.472 11.326v4.031H52V43H32.089z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="60.45" y1="-5.827" x2="-7.63" y2="100.072" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A1E0"/>
                <stop offset="1" stopColor="#00587A"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="mb-[60px]">
            <h2 className="text-[#15171F] text-[48px] font-medium leading-[56px] mb-4">
              Trusted by Patients & Practitioners
            </h2>
            <p className="text-[#15171F] text-lg max-w-[830px]">
              Real feedback from our community. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
            </p>
          </div>

          <div className="flex items-center justify-between mb-[60px]">
            <div className="flex gap-5">
              <button className="w-[60px] h-[60px] rounded-full bg-[#124C69] flex items-center justify-center hover:bg-[#0d3a52] transition-colors">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
                  <path d="M17 23.5L8 14.5L17 5.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-[60px] h-[60px] rounded-full bg-[#00A1E0] flex items-center justify-center hover:bg-[#0090c9] transition-colors">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
                  <path d="M10 23.5L19 14.5L10 5.5" stroke="white" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-10">
            {/* Testimonial 1 */}
            <div className="rounded-[24px] bg-white p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-br from-[#00A1E0] to-[#00587A] flex items-center justify-center text-white">
                  <svg width="30" height="30" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_linear)"/>
                    <path d="M39.072 44.286c-2.035.832-5.681 1.811-11.572 1.811s-9.537-.979-11.572-1.811c-.658-.27-1.21-.746-1.574-1.358-.363-.611-.517-1.324-.439-2.031.267-2.43 1.037-4.848 2.797-5.944 3.243-2.017 6.463-2.878 6.463-2.878.113-.353.241-1.521.308-2.717-.411-.426-.819-.872-1.247-1.294-.819-.803-.91-1.951-1.201-3.432-.536.152-.706-.103-.848-.32-.098-.149-.135-.327-.171-.5-.131-.624-.262-1.248-.393-1.872-.098-.469-.196-.95-.13-1.424.033-.224.112-.458.295-.591.183-.133.491-.1.584.107 0 0-.299-2.938-.299-2.691-.249-.277-.447-.88-.364-1.346.082-.467.229-.92.305-1.387.08-.513.072-1.043.219-1.541.208-.702.704-1.277 1.21-1.808.358-.375.728-.74 1.132-1.065.809-.65 1.773-1.139 2.805-1.255.331-.037.665-.035.998-.033l1.121.006 1.12-.006c.333-.002.667-.005.998.033 1.032.116 1.997.605 2.805 1.255.404.325.774.69 1.132 1.065.506.53 1.002 1.106 1.212 1.808.147.498.138 1.028.219 1.541.074.467.221.92.302 1.387.083.466-.114 1.069-.364 1.346 0-.247-.298 2.691-.298 2.691.092-.207.401-.24.584-.107.183.133.262.367.295.591.066.474-.032.955-.13 1.424-.131.624-.262 1.248-.393 1.872-.036.173-.073.351-.171.5-.142.217-.312.472-.848.32-.292 1.481-.383 2.629-1.201 3.432-.429.422-.836.868-1.247 1.294.067 1.196.194 2.364.308 2.717 0 0 3.22.861 6.463 2.878 1.76 1.096 2.53 3.514 2.797 5.944.079.707-.074 1.42-.437 2.032-.363.611-.915 1.088-1.573 1.358z" fill="#fff"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#15171F] text-xl font-medium">Michael R.</h4>
                  <p className="text-[#15171F] text-sm">Biomimetic Restoration Patient</p>
                </div>
              </div>
              <blockquote className="text-[#15171F] text-[32px] font-normal leading-[46px] mb-8">
                "The biomimetic approach saved my tooth that other dentists wanted to extract. Dr. Maheer's expertise in digital dentistry is unmatched!"
              </blockquote>
              <div className="flex items-center gap-8">
                <div className="h-px flex-1 bg-gradient-to-r from-[rgba(0,161,224,0.4)] to-[rgba(18,76,105,0.4)]"></div>
                <svg width="40" height="33" viewBox="0 0 40 33" fill="none">
                  <path d="M37.77 33c1.487-5.5 2.23-10.411 2.23-14.732 0-5.795-1.437-10.264-4.312-13.408C32.813 1.62 28.649 0 23.197 0v6.924c2.577 0 4.461.737 5.65 2.21 1.091 1.375 1.636 3.536 1.636 6.482v3.793h-8.03V33h15.316zm-22.454 0c1.388-5.107 2.082-10.018 2.082-14.732 0-5.795-1.388-10.264-4.164-13.408C10.36 1.62 6.196 0 .744 0v6.924c4.857 0 7.286 2.897 7.286 8.692v3.793H0V33h15.316z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-6.5" y1="-4.472" x2="45.697" y2="76.91" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A1E0"/>
                      <stop offset="1" stopColor="#00587A"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-[24px] bg-white p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-br from-[#00A1E0] to-[#00587A] flex items-center justify-center text-white">
                  <svg width="30" height="30" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_linear)"/>
                    <path d="M39.072 44.286c-2.035.832-5.681 1.811-11.572 1.811s-9.537-.979-11.572-1.811c-.658-.27-1.21-.746-1.574-1.358-.363-.611-.517-1.324-.439-2.031.267-2.43 1.037-4.848 2.797-5.944 3.243-2.017 6.463-2.878 6.463-2.878.113-.353.241-1.521.308-2.717-.411-.426-.819-.872-1.247-1.294-.819-.803-.91-1.951-1.201-3.432-.536.152-.706-.103-.848-.32-.098-.149-.135-.327-.171-.5-.131-.624-.262-1.248-.393-1.872-.098-.469-.196-.95-.13-1.424.033-.224.112-.458.295-.591.183-.133.491-.1.584.107 0 0-.299-2.938-.299-2.691-.249-.277-.447-.88-.364-1.346.082-.467.229-.92.305-1.387.08-.513.072-1.043.219-1.541.208-.702.704-1.277 1.21-1.808.358-.375.728-.74 1.132-1.065.809-.65 1.773-1.139 2.805-1.255.331-.037.665-.035.998-.033l1.121.006 1.12-.006c.333-.002.667-.005.998.033 1.032.116 1.997.605 2.805 1.255.404.325.774.69 1.132 1.065.506.53 1.002 1.106 1.212 1.808.147.498.138 1.028.219 1.541.074.467.221.92.302 1.387.083.466-.114 1.069-.364 1.346 0-.247-.298 2.691-.298 2.691.092-.207.401-.24.584-.107.183.133.262.367.295.591.066.474-.032.955-.13 1.424-.131.624-.262 1.248-.393 1.872-.036.173-.073.351-.171.5-.142.217-.312.472-.848.32-.292 1.481-.383 2.629-1.201 3.432-.429.422-.836.868-1.247 1.294.067 1.196.194 2.364.308 2.717 0 0 3.22.861 6.463 2.878 1.76 1.096 2.53 3.514 2.797 5.944.079.707-.074 1.42-.437 2.032-.363.611-.915 1.088-1.573 1.358z" fill="#fff"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#15171F] text-xl font-medium">Dr. Jennifer L.</h4>
                  <p className="text-[#15171F] text-sm">Sydney, Course Alumnus</p>
                </div>
              </div>
              <blockquote className="text-[#15171F] text-[32px] font-normal leading-[46px] mb-8">
                "These courses transformed my practice. Within 3 months of implementing the digital workflow, my efficiency increased by 40% and patient satisfaction soared."
              </blockquote>
              <div className="flex items-center gap-8">
                <div className="h-px flex-1 bg-gradient-to-r from-[rgba(0,161,224,0.4)] to-[rgba(18,76,105,0.4)]"></div>
                <svg width="40" height="33" viewBox="0 0 40 33" fill="none">
                  <path d="M37.77 33c1.487-5.5 2.23-10.411 2.23-14.732 0-5.795-1.437-10.264-4.312-13.408C32.813 1.62 28.649 0 23.197 0v6.924c2.577 0 4.461.737 5.65 2.21 1.091 1.375 1.636 3.536 1.636 6.482v3.793h-8.03V33h15.316zm-22.454 0c1.388-5.107 2.082-10.018 2.082-14.732 0-5.795-1.388-10.264-4.164-13.408C10.36 1.62 6.196 0 .744 0v6.924c4.857 0 7.286 2.897 7.286 8.692v3.793H0V33h15.316z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-6.5" y1="-4.472" x2="45.697" y2="76.91" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A1E0"/>
                      <stop offset="1" stopColor="#00587A"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10">
            <div className="rounded-[24px] bg-gradient-to-br from-[#00A1E0] to-[#124C69] px-7 py-[42px] text-center flex-1">
              <div className="text-white text-[60px] font-medium leading-[64px] tracking-[-2px] mb-0.5">500+</div>
              <div className="text-[rgba(240,240,240,0.9)] text-base">Patients Treated</div>
            </div>
            <div className="rounded-[24px] bg-gradient-to-br from-[#00A1E0] to-[#124C69] px-7 py-[42px] text-center flex-1">
              <div className="text-white text-[60px] font-medium leading-[64px] tracking-[-2px] mb-0.5">200+</div>
              <div className="text-[rgba(240,240,240,0.9)] text-base">Dentist Trained</div>
            </div>
            <div className="rounded-[24px] bg-gradient-to-br from-[#00A1E0] to-[#124C69] px-7 py-[42px] text-center flex-1">
              <div className="text-white text-[60px] font-medium leading-[64px] tracking-[-2px] mb-0.5">98%</div>
              <div className="text-[rgba(240,240,240,0.9)] text-base">Patient Satisfaction</div>
            </div>
            <div className="rounded-[24px] bg-gradient-to-br from-[#00A1E0] to-[#124C69] px-7 py-[42px] text-center flex-1">
              <div className="text-white text-[60px] font-medium leading-[64px] tracking-[-2px] mb-0.5">4.9/5</div>
              <div className="text-[rgba(240,240,240,0.9)] text-base">Course Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-[240px] py-[160px] bg-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[813px] mx-auto text-center mb-[60px]">
            <h2 className="text-[#15171F] text-[48px] font-medium leading-[56px] mb-4">What to Expect</h2>
            <p className="text-[#15171F] text-lg">
              Clear pathways for both patients and dentists. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
            </p>
          </div>

          {/* For Patients Journey */}
          <div className="mb-[130px]">
            <div className="flex gap-[60px] mb-[60px]">
              <div className="flex flex-col gap-10 w-[720px]">
                <div className="grid grid-cols-2 gap-10">
                  {/* Step 1 */}
                  <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                    <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7817c5ea52ae0fbb8894cc3845c60db90162abc4" alt="Initial Consultation" fill className="object-cover" />
                    <div className="absolute top-[33px] left-8 right-8">
                      <div className="w-[66px] h-[66px] rounded-[33px] bg-white flex items-center justify-center mb-[62px]">
                        <span className="text-[#124C69] text-[40px] font-medium leading-[46px]">1</span>
                      </div>
                      <h3 className="text-white text-2xl font-medium leading-[30px] mb-4">Initial<br />Consultation</h3>
                      <p className="text-white text-lg">Digital scans and comprehensive assessment (45 min). Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                    <Image src="https://api.builder.io/api/v1/image/assets/TEMP/e32b42f884111eb28658e605f3cb61e44a0ca352" alt="Custom Treatment Plan" fill className="object-cover" />
                    <div className="absolute top-[33px] left-8 right-8">
                      <div className="w-[66px] h-[66px] rounded-[33px] bg-[#124C69] flex items-center justify-center mb-[62px]">
                        <span className="text-white text-[40px] font-medium leading-[46px]">2</span>
                      </div>
                      <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Custom<br />Treatment Plan</h3>
                      <p className="text-[#15171F] text-lg">3D visualization of your future smile. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  {/* Step 3 */}
                  <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                    <Image src="https://api.builder.io/api/v1/image/assets/TEMP/e32b42f884111eb28658e605f3cb61e44a0ca352" alt="Precision Treatment" fill className="object-cover" />
                    <div className="absolute top-[33px] left-8 right-8">
                      <div className="w-[66px] h-[66px] rounded-[33px] bg-[#124C69] flex items-center justify-center mb-[62px]">
                        <span className="text-white text-[40px] font-medium leading-[46px]">3</span>
                      </div>
                      <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Precision<br />Treatment</h3>
                      <p className="text-[#15171F] text-lg">Biomimetic techniques with digital accuracy. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                    <Image src="https://api.builder.io/api/v1/image/assets/TEMP/e32b42f884111eb28658e605f3cb61e44a0ca352" alt="Ongoing Care" fill className="object-cover" />
                    <div className="absolute top-[33px] left-8 right-8">
                      <div className="w-[66px] h-[66px] rounded-[33px] bg-[#124C69] flex items-center justify-center mb-[62px]">
                        <span className="text-white text-[40px] font-medium leading-[46px]">4</span>
                      </div>
                      <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Ongoing<br />Care</h3>
                      <p className="text-[#15171F] text-lg">Holistic maintenance for lasting results. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[660px]">
                <h3 className="text-[#15171F] text-[32px] font-medium leading-[42px] mb-4">For Patients: Your Journey</h3>
                <p className="text-[#15171F] text-lg mb-[60px]">Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.</p>
                <div className="h-[732px] rounded-[30px] overflow-hidden">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/76e98259281ed0b63657c98e0738d377b1510870" alt="Patient Journey" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-[rgba(0,161,224,0.4)] to-[rgba(18,76,105,0.4)] mb-[130px]"></div>

          {/* For Dentists Journey */}
          <div className="flex gap-[60px]">
            <div className="w-[660px]">
              <h3 className="text-[#15171F] text-[32px] font-medium leading-[42px] mb-4">For Dentists: Your Learning Path</h3>
              <p className="text-[#15171F] text-lg mb-[60px]">Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.</p>
              <div className="h-[732px] rounded-[30px] overflow-hidden relative">
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/26206776a0b4aa0a70d456c8a926841447571d26" alt="Dentist Learning Path" fill className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-10 w-[720px]">
              <div className="grid grid-cols-2 gap-10">
                {/* Step 1 */}
                <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/03d55f3879bb43ee8ccf6b5b66b91d836e7cf88e" alt="Enroll & Access" fill className="object-cover" />
                  <div className="absolute top-[33px] left-8 right-8">
                    <div className="w-[66px] h-[66px] rounded-[33px] bg-white flex items-center justify-center mb-[62px]">
                      <span className="text-[#124C69] text-[40px] font-medium leading-[46px]">1</span>
                    </div>
                    <h3 className="text-white text-2xl font-medium leading-[30px] mb-4">Enroll &<br />Access</h3>
                    <p className="text-white text-lg">Instant access to all course materials. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/5537f32d971a7c8ff8bcdda5a2dc763027b21572" alt="Learn at Your Pace" fill className="object-cover" />
                  <div className="absolute top-[33px] left-8 right-8">
                    <div className="w-[66px] h-[66px] rounded-[33px] bg-[#00A1E0] flex items-center justify-center mb-[62px]">
                      <span className="text-white text-[40px] font-medium leading-[46px]">2</span>
                    </div>
                    <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Learn at<br />Your Pace</h3>
                    <p className="text-[#15171F] text-lg">Video lectures, PDFs, case studies. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                {/* Step 3 */}
                <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/5537f32d971a7c8ff8bcdda5a2dc763027b21572" alt="Implement in Practice" fill className="object-cover" />
                  <div className="absolute top-[33px] left-8 right-8">
                    <div className="w-[66px] h-[66px] rounded-[33px] bg-[#00A1E0] flex items-center justify-center mb-[62px]">
                      <span className="text-white text-[40px] font-medium leading-[46px]">3</span>
                    </div>
                    <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Implement<br />in Practice</h3>
                    <p className="text-[#15171F] text-lg">Actionable protocols you can use tomorrow. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative h-[432px] rounded-[24px] overflow-hidden">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/5537f32d971a7c8ff8bcdda5a2dc763027b21572" alt="Community Support" fill className="object-cover" />
                  <div className="absolute top-[33px] left-8 right-8">
                    <div className="w-[66px] h-[66px] rounded-[33px] bg-[#00A1E0] flex items-center justify-center mb-[62px]">
                      <span className="text-white text-[40px] font-medium leading-[46px]">4</span>
                    </div>
                    <h3 className="text-[#15171F] text-2xl font-medium leading-[30px] mb-4">Community<br />Support</h3>
                    <p className="text-[#15171F] text-lg">Join the digital dentistry network. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus. Et potenti tristique in feugiat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/67c73bb823ea84e585a74b066c788162bdf1252f"
          alt="Footer"
          width={1920}
          height={647}
          className="w-full h-auto"
        />
      </footer>
    </div>
  );
}
