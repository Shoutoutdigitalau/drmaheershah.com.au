import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F0F0F0] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Navigation Header */}
        <div className="relative z-20 pt-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <header className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-white font-bold text-[20px] tracking-wide">
                DREAMHERSHAH
              </div>

              <nav className="hidden lg:flex items-center gap-10 text-white font-medium flex-1 ml-[135px]">
                <a href="#about" className="hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">About Us</a>
                <a href="#services" className="hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">Patient Services</a>
                <a href="#gallery" className="hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">Case Gallery</a>
                <a href="#dentists" className="hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">For Dentists</a>
                <a href="#contact" className="hover:text-[#F0F0F0] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">Contact Us</a>
              </nav>

              <button className="bg-[#00A1E0] text-white px-[22px] py-3 rounded-full flex items-center gap-3 hover:bg-[#0090c9] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/50">
                <span>Book a Consultation</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#F0F0F0"/>
                </svg>
              </button>
            </header>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px] py-[40px] md:py-[80px] lg:py-[120px]">
            <div>
              <h1 className="text-white text-[42px] md:text-[56px] lg:text-[64px] font-medium leading-[1.1] mb-6">
              Where Traditional Dentistry Meets Digital Innovation
            </h1>
            <p className="text-[rgba(240,240,240,0.9)] text-lg md:text-xl mb-10">
              Expert care for patients seeking the future of dentistry | Advanced training for practitioners mastering digital workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#00A1E0] text-white px-[22px] py-3 rounded-full inline-flex items-center justify-center gap-3 hover:bg-[#0090c9] transition-all hover:shadow-lg hover:scale-[1.02] font-medium focus:outline-none focus:ring-2 focus:ring-white/50">
                <span>Book a Consultation</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#F0F0F0"/>
                </svg>
              </button>
              <button className="bg-white text-[#15171F] px-[22px] py-3 rounded-full inline-flex items-center justify-center gap-3 hover:bg-[#e0e0e0] transition-all hover:shadow-lg hover:scale-[1.02] font-medium focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50">
                <span>Explore Courses</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
                </svg>
              </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F4180cf4ba9354e9e8b40c4dc6a5abfa9%2Ff7dcb10012e440ec94a3221e21317ba7?format=webp&width=800"
                alt="Dr Maheer Shah - Digital Dentistry Expert"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-10 bg-[rgba(21,23,31,0.4)] backdrop-blur-sm border-t border-[rgba(240,240,240,0.1)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[60px] py-[40px] md:py-[54px]">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-white text-[48px] md:text-[60px] leading-[64px] tracking-[-2px] font-normal">14+</div>
                  <div className="text-[rgba(240,240,240,0.9)]">Years of Experience</div>
                </div>
                <div>
                  <div className="text-white text-[48px] md:text-[60px] leading-[64px] tracking-[-2px] font-normal">80+</div>
                  <div className="text-[rgba(240,240,240,0.9)]">Certifications</div>
                </div>
                <div>
                  <div className="text-white text-[48px] md:text-[60px] leading-[64px] tracking-[-2px] font-normal">500+</div>
                  <div className="text-[rgba(240,240,240,0.9)]">Patients Treated</div>
                </div>
              </div>

              <div className="flex gap-[26px]">
                <a href="#" aria-label="LinkedIn" className="w-[66px] h-[64px] rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6666 10C22.7221 10 24.6933 10.7902 26.1467 12.1967C27.6001 13.6032 28.4166 15.5109 28.4166 17.5V26.25H23.25V17.5C23.25 16.837 22.9778 16.2011 22.4933 15.7322C22.0088 15.2634 21.3518 15 20.6666 15C19.9815 15 19.3244 15.2634 18.8399 15.7322C18.3555 16.2011 18.0833 16.837 18.0833 17.5V26.25H12.9166V17.5C12.9166 15.5109 13.7331 13.6032 15.1865 12.1967C16.64 10.7902 18.6112 10 20.6666 10Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.75004 11.25H2.58337V26.25H7.75004V11.25Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.16671 7.5C6.59344 7.5 7.75004 6.38071 7.75004 5C7.75004 3.61929 6.59344 2.5 5.16671 2.5C3.73997 2.5 2.58337 3.61929 2.58337 5C2.58337 6.38071 3.73997 7.5 5.16671 7.5Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-[66px] h-[64px] rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9584 2.5H9.04171C5.47487 2.5 2.58337 5.29822 2.58337 8.75V21.25C2.58337 24.7018 5.47487 27.5 9.04171 27.5H21.9584C25.5252 27.5 28.4167 24.7018 28.4167 21.25V8.75C28.4167 5.29822 25.5252 2.5 21.9584 2.5Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.6666 14.2119C20.826 15.2522 20.6424 16.3147 20.1419 17.2482C19.6414 18.1817 18.8494 18.9387 17.8787 19.4115C16.908 19.8843 15.8079 20.0489 14.735 19.8818C13.6621 19.7147 12.6709 19.2245 11.9024 18.4809C11.134 17.7372 10.6274 16.778 10.4548 15.7397C10.2821 14.7013 10.4522 13.6368 10.9408 12.6974C11.4294 11.758 12.2116 10.9916 13.1762 10.5072C14.1408 10.0228 15.2387 9.84514 16.3137 9.9994C17.4102 10.1568 18.4254 10.6512 19.2092 11.4098C19.9931 12.1683 20.504 13.1507 20.6666 14.2119Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.6041 8.125H22.6163" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-[66px] h-[64px] rounded-full bg-[rgba(240,240,240,0.05)] border border-[rgba(240,240,240,0.1)] flex items-center justify-center hover:bg-[rgba(240,240,240,0.15)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 2.5H19.375C17.6621 2.5 16.0194 3.15848 14.8082 4.33058C13.5971 5.50268 12.9166 7.0924 12.9166 8.75V12.5H9.04163V17.5H12.9166V27.5H18.0833V17.5H21.9583L23.25 12.5H18.0833V8.75C18.0833 8.41848 18.2194 8.10054 18.4616 7.86612C18.7038 7.6317 19.0324 7.5 19.375 7.5H23.25V2.5Z" stroke="#F0F0F0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
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
                  <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
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
                  <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
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
                <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
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
                  <div className="w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#00A1E0] to-[#00587A] flex items-center justify-center">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.8962 23.2216C30.1765 23.5252 30.2731 23.9358 30.4012 24.3155C30.7793 25.3812 31.2014 26.3676 31.9527 27.2424L32.115 27.4327C33.0326 28.4146 34.319 28.7699 35.6479 28.8395C36.6079 28.8701 37.5909 28.7832 38.4775 28.4077L38.6838 28.3224C40.292 27.5681 41.0604 25.8755 41.6275 24.3292L41.737 24.0182L41.7873 23.8756C41.8303 23.7517 41.8713 23.6272 41.9122 23.5027C42.0144 23.2839 42.0846 23.2026 42.3024 23.091C43.3933 22.9064 44.5577 23.389 45.4523 23.965C45.7997 24.2082 46.1175 24.4796 46.4273 24.7661L46.6089 24.9331C48.4014 26.7263 49.0071 29.3426 48.9999 31.7587C48.9588 34.3243 48.1116 36.6871 46.9579 38.9663C45.3715 42.1049 44.6494 45.3182 44.3277 48.7846V48.7885L44.2201 49.9802C44.1148 51.1789 43.9855 52.5762 43.0524 53.4617C42.2406 53.9868 41.454 54.0516 40.5025 53.9715C39.7513 53.8204 39.1276 53.3065 38.6838 52.7149C37.5133 50.9312 37.2092 48.7859 36.8408 46.739L36.8064 46.5488L36.6455 45.6358C36.5296 44.9729 36.3713 44.3436 36.1507 43.7059L36.0776 43.3381H35.9276C35.7474 43.8827 35.6139 44.4303 35.4964 44.9905L35.4387 45.2622C35.2856 45.9905 35.1515 46.7217 35.0191 47.4538C34.1728 52.1272 34.1728 52.1272 32.6277 53.4617C32.0152 53.858 31.5354 53.9854 30.8137 53.9897L30.629 53.9943C29.9467 53.9985 29.4077 53.8195 28.8831 53.3934C27.7551 52.3021 27.8217 50.4079 27.6855 48.9695C27.339 45.3211 26.5897 41.9827 24.9118 38.6797C23.2287 35.3597 22.3451 31.5632 23.5735 27.9505C23.7657 27.4211 24.016 26.9278 24.303 26.4413L24.3812 26.3077C25.2788 24.8011 26.609 23.6521 28.3575 23.173C29.4715 22.9348 29.4715 22.9348 29.8962 23.2216Z" fill="white"/>
                      <path d="M32.2241 17.3952C32.8603 17.6139 33.4453 17.9409 34.0347 18.2635C34.7015 18.6258 35.239 18.8149 35.9999 18.8316L36.1585 18.8367C36.9671 18.8329 37.6657 18.4544 38.3563 18.0649C39.0183 17.7036 39.6437 17.4237 40.3761 17.2474L40.5927 17.1934C41.0515 17.0978 41.5105 17.0831 41.9774 17.0765L42.1596 17.0725C42.4016 17.0728 42.589 17.0816 42.8144 17.1749C42.9873 17.4066 43.011 17.6308 42.9964 17.9125C42.9379 18.1882 42.8474 18.4475 42.7507 18.7115L42.6707 18.9364C41.9351 20.9565 40.9168 22.7653 38.934 23.7273C38.1637 24.0503 37.423 24.1941 36.5913 24.1941C36.6273 24.9623 36.6273 24.9623 36.664 25.746L36.9279 25.4874C37.1254 25.313 37.2189 25.2347 37.4783 25.1779C37.7482 25.2449 37.868 25.3052 38.047 25.5243C38.1262 25.7624 38.1166 25.9491 38.047 26.1894C37.8045 26.5211 37.5155 26.795 37.219 27.0762L36.9808 27.3109C36.3382 27.9416 36.3382 27.9416 36.0363 28C35.7682 27.9597 35.7178 27.9195 35.5251 27.7408L35.3706 27.5982L35.2083 27.4457L35.0452 27.2961C34.8789 27.142 34.716 26.9848 34.5533 26.8268L34.3824 26.6692C34.1118 26.4037 33.9348 26.223 33.9249 25.8289C33.9407 25.5841 33.9642 25.5326 34.1256 25.3349C34.383 25.2043 34.488 25.1666 34.7716 25.2287C34.9849 25.3865 35.163 25.5589 35.3539 25.746C35.3779 25.2339 35.4019 24.7217 35.4267 24.1941H34.8444C33.3743 24.0205 32.0244 23.3516 31.0596 22.1988C30.3167 21.2288 29.7981 20.1679 29.3855 19.0164L29.3004 18.7793C28.9383 17.7321 28.9383 17.7321 29.1171 17.3259C29.6532 16.6606 31.5199 17.186 32.2241 17.3952Z" fill="white"/>
                    </svg>
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
                    <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="white"/>
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
                    <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
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
                    <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
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
                    <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="#00A1E0"/>
                  </svg>
                </button>
              </div>
            </article>
          </div>

          <div className="text-center">
            <button className="bg-[#00A1E0] text-white px-[22px] py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#0090c9] transition-all hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/50">
              <span>View All Patient Services</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.49536 9.97926C9.71395 9.87783 9.82108 9.74488 9.93834 9.53652C9.99839 9.36595 9.98907 9.18961 9.98886 9.01107L9.98926 8.90398C9.98964 8.78544 9.98971 8.66689 9.98978 8.54835L9.99044 8.29351C9.99102 8.06262 9.99131 7.83173 9.99151 7.60084L9.99202 7.16804C9.99262 6.71662 9.99305 6.26519 9.99322 5.81377C9.99342 5.29276 9.9942 4.77175 9.99548 4.25073C9.99644 3.84795 9.99689 3.44517 9.99694 3.04239C9.99699 2.80186 9.99725 2.56133 9.99804 2.32079C9.99877 2.09446 9.99887 1.86815 9.99848 1.64182C9.99845 1.55886 9.99864 1.47591 9.99908 1.39295C9.99964 1.27946 9.99938 1.166 9.99892 1.05251L10 0.953689C9.99766 0.706713 9.957 0.452911 9.7917 0.259596C9.54252 0.0371342 9.28086 0.00437164 8.95897 0.00601482L8.85161 0.00550175C8.73327 0.00504589 8.61494 0.00522041 8.4966 0.00539684L8.24159 0.00471115C8.01095 0.00411892 7.78031 0.00409222 7.54966 0.00420475C7.35702 0.00425148 7.16437 0.00403595 6.97173 0.00382423C6.51717 0.00333309 6.06262 0.00331306 5.60807 0.00358105C5.13938 0.00384808 4.6707 0.00330353 4.20202 0.00236034C3.7994 0.00158024 3.39678 0.00131512 2.99416 0.00145912C2.75379 0.00153923 2.51343 0.00142193 2.27306 0.000806808C2.04698 0.000249863 1.8209 0.000336647 1.59482 0.00091362C1.51196 0.00101852 1.4291 0.000897408 1.34625 0.00053215C1.23289 6.77109e-05 1.11957 0.0004282 1.00622 0.00098896L0.907526 0C0.660022 0.00256443 0.399802 0.0408411 0.211904 0.214662C0.0152582 0.445912 -0.00228734 0.603988 0.000203716 0.90062C0.0222775 1.09447 0.0918905 1.21714 0.237094 1.34578C0.412896 1.47124 0.534525 1.4954 0.749249 1.49626L0.835884 1.49715C0.931315 1.49798 1.02672 1.49786 1.12215 1.49775L1.32781 1.49912C1.51368 1.50034 1.69954 1.50075 1.88541 1.50101C2.07975 1.50143 2.27407 1.50259 2.4684 1.50367C2.83629 1.5056 3.20418 1.50687 3.57207 1.50789C3.99095 1.50909 4.40982 1.51103 4.82869 1.51304C5.69024 1.51715 6.5518 1.52032 7.41336 1.52288C7.37832 1.55769 7.34329 1.59251 7.30719 1.62838C6.45476 2.47543 5.60298 3.32312 4.75186 4.17149C4.34025 4.58174 3.92843 4.99178 3.51613 5.40133C3.15677 5.75829 2.7978 6.11564 2.43929 6.47346C2.24945 6.66291 2.05942 6.85217 1.86891 7.04096C1.68958 7.21869 1.51078 7.39693 1.33237 7.57558L1.13516 7.77133C1.04507 7.86027 0.955686 7.94988 0.866443 8.03967L0.787181 8.11694C0.589931 8.3177 0.48134 8.52001 0.444394 8.80461C0.471912 9.09064 0.595422 9.2634 0.812967 9.44797C1.02286 9.56198 1.25029 9.55808 1.47744 9.49224C1.68968 9.3644 1.85699 9.21385 2.03081 9.03837L2.11482 8.95463C2.20725 8.86239 2.29937 8.76984 2.39149 8.67728L2.59062 8.4783C2.77055 8.29849 2.95021 8.1184 3.12982 7.93827C3.31767 7.74997 3.50576 7.56193 3.69383 7.37385C4.04982 7.01778 4.40558 6.66149 4.76125 6.30511C5.16624 5.89935 5.57148 5.49384 5.97674 5.08835C6.81028 4.25434 7.6435 3.42 8.47651 2.58546L8.47658 2.69315C8.47725 3.55822 8.47913 4.42327 8.48236 5.28832C8.4839 5.70666 8.48502 6.12499 8.48517 6.54333C8.48531 6.90799 8.48622 7.27264 8.48805 7.6373C8.48899 7.83035 8.48955 8.02339 8.48919 8.21644C8.48885 8.39826 8.48955 8.58005 8.49104 8.76186L8.49098 8.96173C8.48744 9.5861 8.48744 9.5861 8.7423 9.84644C8.97298 10.0268 9.2143 10.0132 9.49536 9.97926Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
