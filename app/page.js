import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F0F0F0] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[1179px]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/9ba6b0994ccb19a86237729a0fd67dd50a744bdc?placeholderIfAbsent=true"
          alt="Dental practice hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        <div className="relative z-10 pt-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            {/* Header */}
            <header className="flex flex-wrap items-center gap-6 lg:gap-8 mb-16 md:mb-32 lg:mb-[407px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/be2ccac0d784e68629aded2f5b73b64495992645?placeholderIfAbsent=true"
                alt="Dr Maheer Shah Logo"
                width={297}
                height={28}
                className="w-[200px] md:w-[240px] lg:w-[297px] h-auto"
              />
              
              <nav className="hidden lg:flex items-center gap-10 text-white font-medium flex-1">
                <a href="#about" className="hover:text-[#00A1E0] transition-colors">About Us</a>
                <a href="#services" className="hover:text-[#00A1E0] transition-colors">Patient Services</a>
                <a href="#gallery" className="hover:text-[#00A1E0] transition-colors">Case Gallery</a>
                <a href="#dentists" className="hover:text-[#00A1E0] transition-colors">For Dentists</a>
                <a href="#contact" className="hover:text-[#00A1E0] transition-colors">Contact Us</a>
              </nav>
              
              <button className="ml-auto bg-[#00A1E0] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#0090c9] transition-colors font-medium">
                <span>Book a Consultation</span>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4e17fbf8a2c910253aef638cfe8fd2eadc07cf88?placeholderIfAbsent=true"
                  alt=""
                  width={10}
                  height={10}
                />
              </button>
            </header>

            {/* Hero Content */}
            <div className="max-w-[720px] px-4 md:px-0">
              <h1 className="text-white text-3xl md:text-5xl lg:text-[74px] font-medium leading-tight lg:leading-[80px] mb-4">
                Where Traditional Dentistry Meets Digital Innovation
              </h1>
              <p className="text-white text-base md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16">
                Expert care for patients seeking the future of dentistry | Advanced training for practitioners mastering digital workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#00A1E0] text-white px-6 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-colors font-medium">
                  <span>Book a Consultation</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4e17fbf8a2c910253aef638cfe8fd2eadc07cf88?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
                <button className="bg-white text-[#15171F] px-6 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium">
                  <span>Explore Courses</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-[rgba(21,23,31,0.3)] backdrop-blur-sm z-10">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-60 py-8 md:py-14">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap gap-8 md:gap-10">
                <div className="min-w-[200px]">
                  <div className="text-white text-4xl md:text-5xl lg:text-[60px] leading-tight tracking-[-2px]">14+</div>
                  <div className="text-[#F0F0F0]">Years of Experience</div>
                </div>
                <div className="min-w-[200px]">
                  <div className="text-white text-4xl md:text-5xl lg:text-[60px] leading-tight tracking-[-2px]">80+</div>
                  <div className="text-[#F0F0F0]">Certifications</div>
                </div>
                <div className="min-w-[200px]">
                  <div className="text-white text-4xl md:text-5xl lg:text-[60px] leading-tight tracking-[-2px]">500+</div>
                  <div className="text-[#F0F0F0]">Patients Treated</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="w-16 h-16 rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/a50611500a54e9dfd5080fc98e5819cceb344080?placeholderIfAbsent=true"
                    alt="Facebook"
                    width={31}
                    height={31}
                  />
                </a>
                <a href="#" className="w-16 h-16 rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/1b8fc1ef3acff29ae8d4fed6c0c6c8a1cd9bf6fb?placeholderIfAbsent=true"
                    alt="Instagram"
                    width={31}
                    height={31}
                  />
                </a>
                <a href="#" className="w-16 h-16 rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/bc343557bf79ef5313d2f2175ae41bb0150a8975?placeholderIfAbsent=true"
                    alt="LinkedIn"
                    width={31}
                    height={31}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 md:py-24 lg:py-40 px-4">
        <div className="max-w-[813px] mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-[#15171F] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Choose Your Path
          </h2>
          <p className="text-[#15171F] text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* For Patients Card */}
          <article className="rounded-3xl overflow-hidden bg-white shadow-lg">
            <div className="relative h-[300px] md:h-[400px] lg:h-[445px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/3772d6d451b84f326580bc7569b88268c549aff9?placeholderIfAbsent=true"
                alt="Patient care"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
              />
              <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/639af947da0d619c7e966159e38e46aa64fe872a?placeholderIfAbsent=true"
                    alt="Patient icon"
                    width={114}
                    height={114}
                  />
                  <span className="bg-[rgba(21,23,31,0.4)] px-4 py-2 rounded-full text-sm font-medium">
                    FOR PATIENTS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
                    Experience the Future<br />of Dental Care
                  </h3>
                  <p className="text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <ul className="space-y-3 mb-10 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-lg">• Biomimetic restorations that mimic nature</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">• 3D-printed precision in hours, not weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">• Holistic approach to lasting oral health</span>
                </li>
              </ul>
              <button className="bg-white text-[#15171F] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium">
                <span>Explore Patient Services</span>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                  alt=""
                  width={10}
                  height={10}
                />
              </button>
            </div>
          </article>

          {/* For Dentists Card */}
          <article className="rounded-3xl overflow-hidden bg-white shadow-lg">
            <div className="relative h-[300px] md:h-[400px] lg:h-[445px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/c6c0d1d5a95ebf919bea4151f48280319f155a23?placeholderIfAbsent=true"
                alt="Dentist training"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
              />
              <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4a052052ff6f0657cfc2cc946a43e653d90418e6?placeholderIfAbsent=true"
                    alt="Dentist icon"
                    width={114}
                    height={114}
                  />
                  <span className="bg-[rgba(240,240,240,0.1)] px-4 py-2 rounded-full text-sm font-medium">
                    FOR DENTISTS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
                    Master the Digital<br />Dentistry Revolution
                  </h3>
                  <p className="text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <ul className="space-y-3 mb-10 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-lg">• 5 comprehensive courses from novice to expert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">• Learn AI integration, 3D printing, biomimetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">• Transform your practice, not just your skills</span>
                </li>
              </ul>
              <button className="bg-white text-[#15171F] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium">
                <span>Explore Courses</span>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                  alt=""
                  width={10}
                  height={10}
                />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24 lg:py-40 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[876px] ml-auto text-right mb-12 md:mb-16">
            <h2 className="text-[#15171F] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
              The Three Pillars of Modern Dentistry
            </h2>
            <p className="text-[#15171F] text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <div className="pt-10">
              <div className="flex justify-end mb-[-40px] relative z-10">
                <div className="w-[77px] h-[77px] rounded-full bg-[#124C69] flex items-center justify-center text-white text-5xl font-medium">
                  1
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#124C69] to-[#0a3147] rounded-3xl p-8 md:p-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-4">
                    Nature-Inspired Restorations
                  </h3>
                  <p className="text-base md:text-lg">
                    We don't just fix teeth—we rebuild them using biomimetic principles that mimic natural tooth structure. This means stronger, longer-lasting restorations that preserve your natural tooth.
                  </p>
                </div>
                
                <div className="bg-[#E8E8E8] rounded-3xl p-8 md:p-10 text-[#15171F]">
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                    Same-Day Precision Technology
                  </h3>
                </div>
                
                <div className="bg-[#E8E8E8] rounded-3xl p-8 md:p-10 text-[#15171F]">
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                    Whole-Body Dental Health
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <article className="rounded-3xl overflow-hidden relative h-[500px] md:h-[660px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/558a83b7b7379757270b0527b3d2bf2af0ed1ce8?placeholderIfAbsent=true"
                  alt="Biomimetic dentistry example"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 378px"
                />
                <div className="absolute bottom-0 right-0 p-6 max-w-[245px] text-right">
                  <span className="inline-block bg-[rgba(21,23,31,0.4)] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Biomimetic Dentistry
                  </span>
                  <p className="text-white text-lg">
                    90% of traditional crowns can be avoided with biomimetic approaches
                  </p>
                </div>
              </article>
              
              <div className="rounded-3xl overflow-hidden h-[500px] md:h-[660px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/0ee6adeb5de387c4cd34f1d3b7a2e70a8a59263b?placeholderIfAbsent=true"
                  alt="Modern dental technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 437px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 lg:py-40 px-4 bg-gradient-to-b from-[#124C69] to-[#0a3147]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div className="max-w-[720px]">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
                See the Transformation
              </h2>
              <p className="text-white text-base md:text-lg">
                Real patients, real results using digital dentistry. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus.
              </p>
            </div>
            <button className="bg-white text-[#15171F] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors font-medium whitespace-nowrap">
              <span>View Full Case Gallery</span>
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                alt=""
                width={10}
                height={10}
              />
            </button>
          </div>

          <div className="overflow-x-auto pb-8">
            <div className="flex gap-10 min-w-min">
              {/* Case Study 1 */}
              <article className="flex-shrink-0 w-[350px] md:w-[454px]">
                <div className="bg-gradient-to-br from-[#124C69] to-[#0a3147] rounded-t-3xl p-8 text-white">
                  <h3 className="text-xl font-medium mb-2">Dental Veneers</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/e48e8562054bb83a466362909605719a93416e3e?placeholderIfAbsent=true"
                      alt="Clock icon"
                      width={18}
                      height={18}
                    />
                    <span>2 visits, 1 week</span>
                  </div>
                </div>
                <div className="bg-white rounded-b-3xl p-8 text-[#15171F]">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg mb-1">Problem</h4>
                      <p className="text-sm">
                        Sarah came to us with a severely damaged molar that required intervention. Traditional dentistry would have recommended a crown requiring significant tooth removal.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Solution</h4>
                      <p className="text-sm">
                        Using biomimetic bonding and digital design, we preserved 70% more of her natural tooth structure while creating a restoration that perfectly mimics natural enamel.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Result</h4>
                      <p className="text-sm">
                        Completed in 2 visits, zero pain, natural appearance that's indistinguishable from her other teeth.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Case Study 2 - With Before/After */}
              <article className="flex-shrink-0 w-[350px] md:w-[454px] bg-white rounded-3xl p-8">
                <h3 className="text-xl font-medium mb-2 text-[#15171F]">Dental Implant</h3>
                <div className="flex items-center gap-2 text-sm mb-6 text-[#15171F]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4059e4c5f111b2562f8aa2215adda4130d1d4c31?placeholderIfAbsent=true"
                    alt="Clock icon"
                    width={18}
                    height={18}
                  />
                  <span>2 visits, 1 week</span>
                </div>
                
                <div className="relative h-[279px] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/909ebd7b96e99363a9f3f727c129a8419e003756?placeholderIfAbsent=true"
                    alt="Before and after dental implant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 350px, 454px"
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-4 py-1 rounded-full text-xs font-medium">
                      BEFORE
                    </span>
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-4 py-1 rounded-full text-xs font-medium">
                      AFTER
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-sm text-[#15171F] mb-3">
                  "Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus."
                </blockquote>
                <cite className="text-sm text-[#15171F] not-italic">Jane</cite>
              </article>

              {/* Case Study 3 */}
              <article className="flex-shrink-0 w-[350px] md:w-[454px] bg-white rounded-3xl p-8">
                <h3 className="text-xl font-medium mb-2 text-[#15171F]">Dental Crown</h3>
                <div className="flex items-center gap-2 text-sm mb-6 text-[#15171F]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/aa1b8f3511c1b3ce6a94d26935c4853e554115f5?placeholderIfAbsent=true"
                    alt="Clock icon"
                    width={18}
                    height={18}
                  />
                  <span>2 visits, 1 week</span>
                </div>
                
                <div className="relative h-[279px] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/909ebd7b96e99363a9f3f727c129a8419e003756?placeholderIfAbsent=true"
                    alt="Before and after dental crown"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 350px, 454px"
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-4 py-1 rounded-full text-xs font-medium">
                      BEFORE
                    </span>
                    <span className="bg-[rgba(21,23,31,0.4)] text-white px-4 py-1 rounded-full text-xs font-medium">
                      AFTER
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-sm text-[#15171F] mb-3">
                  "Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper aucibus."
                </blockquote>
                <cite className="text-sm text-[#15171F] not-italic">Jane</cite>
              </article>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <button className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-[#e0e0e0] transition-colors rotate-180">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/cc2b2505fbad53df25a5466e720398b3777fb991?placeholderIfAbsent=true"
                alt="Previous"
                width={28}
                height={28}
              />
            </button>
            <button className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-[#e0e0e0] transition-colors">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/cc2b2505fbad53df25a5466e720398b3777fb991?placeholderIfAbsent=true"
                alt="Next"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 lg:py-40 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[813px] mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[#15171F] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
              Bridging Ancient Wisdom with Modern Innovation
            </h2>
            <p className="text-[#15171F] text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Et potenti tristique in montes nascetur feugiat ullamcorper cursus faucibus. Velit nullam sagittis ac volutpat faucibus et morbi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[471px_1fr] gap-0 rounded-3xl overflow-hidden">
            <div className="relative min-h-[400px] lg:min-h-[781px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/db6e0ce3ade3643ed9e21a908986b7d925896017?placeholderIfAbsent=true"
                alt="Dr Maheer Shah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 471px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent p-8 md:p-10">
                <h3 className="text-white text-3xl md:text-4xl font-medium mb-2">Dr Maheer Shah</h3>
                <p className="text-[#00A1E0] text-xl">Principal Dentist</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                <div>
                  <p className="text-[#15171F] text-lg mb-2">
                    My journey in dentistry began with a simple question:
                  </p>
                  <p className="text-[#15171F] text-3xl md:text-4xl font-medium leading-tight">
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

                <div className="h-px bg-[#E0E0E0]"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/e266add1a0e2b156460c61cb81f3528cae5c2290?placeholderIfAbsent=true"
                        alt="Education icon"
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">BDS, Advanced Biomimetic Certification</span>
                    </div>
                    <div className="flex gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fe90b3b00113b0d97b4a8ee4470fcfd1c3c516fd?placeholderIfAbsent=true"
                        alt="Experience icon"
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">15+ Years in Practice</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/ef5e4bf6ca60eaa3f05fafcbd2080d5b823c21a4?placeholderIfAbsent=true"
                        alt="Specialization icon"
                        width={39}
                        height={39}
                      />
                      <span className="text-[#15171F] text-sm">Digital Dentistry Specialist</span>
                    </div>
                    <div className="flex gap-4">
                      <Image
                        src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/87cd50e3371879b49d2ed61a3a31b78647390a1f?placeholderIfAbsent=true"
                        alt="Stats icon"
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
      <section className="py-16 md:py-24 lg:py-40 px-4 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[720px] mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[#15171F] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
              Patient Services
            </h2>
            <p className="text-[#15171F] text-base md:text-lg">
              Comprehensive care using the latest digital dentistry techniques. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12">
            {/* Service Card 1 */}
            <article className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <div className="relative h-[350px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/d08b90f818dc42438d8cc131930fd828e8752f7c?placeholderIfAbsent=true"
                  alt="Biomimetic dentistry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
                />
              </div>
              <div className="absolute top-8 left-8">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/0d22c1915e5703a5e856b77aec33ea859ce0585e?placeholderIfAbsent=true"
                  alt="Icon"
                  width={72}
                  height={72}
                />
              </div>
              <div className="bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Biomimetic Dentistry</h3>
                <p className="text-base md:text-lg mb-6">
                  Nature-inspired fillings and restorations that preserve your natural tooth. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="text-white flex items-center gap-3 hover:gap-5 transition-all font-medium">
                  <span>Learn More</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4e17fbf8a2c910253aef638cfe8fd2eadc07cf88?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </article>

            {/* Service Card 2 */}
            <article className="relative rounded-3xl overflow-hidden group cursor-pointer bg-white">
              <div className="relative h-[350px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/03937045b8c1c8a1c6c62eccdd2f16e4f8f52c82?placeholderIfAbsent=true"
                  alt="3D printing and digital design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
                />
              </div>
              <div className="absolute top-8 left-8">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/386e49296b8a66afd2ad268fbb58f86c41c773ef?placeholderIfAbsent=true"
                  alt="Icon"
                  width={72}
                  height={73}
                />
              </div>
              <div className="bg-white absolute bottom-0 left-0 right-0 p-8 md:p-10 text-[#15171F]">
                <h3 className="text-2xl md:text-3xl font-medium mb-2">3D Printing & Digital Design</h3>
                <p className="text-base md:text-lg mb-6">
                  Same-day crowns, bridges, and surgical guides using cutting-edge technology. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="text-[#15171F] flex items-center gap-3 hover:gap-5 transition-all font-medium">
                  <span>Learn More</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </article>

            {/* Service Card 3 */}
            <article className="relative rounded-3xl overflow-hidden group cursor-pointer bg-white">
              <div className="relative h-[350px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/d2590fcb2d2728e887ce026d4ee7e4c7b1fc543f?placeholderIfAbsent=true"
                  alt="Full-mouth rehabilitation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
                />
              </div>
              <div className="absolute top-8 left-8">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/3395079f5ad867006123cabf04d6d22016904f73?placeholderIfAbsent=true"
                  alt="Icon"
                  width={72}
                  height={72}
                />
              </div>
              <div className="bg-white absolute bottom-0 left-0 right-0 p-8 md:p-10 text-[#15171F]">
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Full-Mouth Rehabilitation</h3>
                <p className="text-base md:text-lg mb-6">
                  Comprehensive smile makeovers combining multiple advanced techniques. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="text-[#15171F] flex items-center gap-3 hover:gap-5 transition-all font-medium">
                  <span>Learn More</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </article>

            {/* Service Card 4 */}
            <article className="relative rounded-3xl overflow-hidden group cursor-pointer bg-white">
              <div className="relative h-[350px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/c902e72a0f0e4d5a7d6f095414ec8a28c3deff31?placeholderIfAbsent=true"
                  alt="Holistic dental care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 588px"
                />
              </div>
              <div className="absolute top-8 left-8">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/93fadf04ed8ef3fc8b7cb8cefc9e8d83aba2b360?placeholderIfAbsent=true"
                  alt="Icon"
                  width={72}
                  height={72}
                />
              </div>
              <div className="bg-white absolute bottom-0 left-0 right-0 p-8 md:p-10 text-[#15171F]">
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Holistic Dental Care</h3>
                <p className="text-base md:text-lg mb-6">
                  Integrating TMJ therapy, breathing, and whole-body wellness into treatment. Lorem ipsum dolor sit amet consectetur. Et potenti tristique in feugiat ullamcorper aucibus.
                </p>
                <button className="text-[#15171F] flex items-center gap-3 hover:gap-5 transition-all font-medium">
                  <span>Learn More</span>
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/fbbabdf94359d1f570eb79126eb9ce3710859d4d?placeholderIfAbsent=true"
                    alt=""
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </article>
          </div>

          <div className="text-center">
            <button className="bg-[#00A1E0] text-white px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#0090c9] transition-colors font-medium">
              <span>View All Patient Services</span>
              <Image
                src="https://api.builder.io/api/v1/image/assets/d6129596c37d401a838963aa7ace07b6/4e17fbf8a2c910253aef638cfe8fd2eadc07cf88?placeholderIfAbsent=true"
                alt=""
                width={10}
                height={10}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
