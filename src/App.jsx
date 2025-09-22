import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.png';
import terms from '../terms-condition.docx';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <span className="text-xl font-bold text-green-400">
              BROKE<span className="text-red-500">BOT</span>
            </span> */}
            <img src={Logo} className="w-[50px] h-[50px]" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                STORY
              </a>
              <a
                href="#tokenomics"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                TOKENOMICS
              </a>
              <a
                href="#roadmap"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ROADMAP
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600 transition-colors">
              BUY $BROKE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-green-400/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              STORY
            </a>
            <a
              href="#tokenomics"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              TOKENOMICS
            </a>
            <a
              href="#roadmap"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ROADMAP
            </a>
            <div className="pt-4">
              <button className="w-full px-4 py-2 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600 transition-colors">
                BUY $BROKE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  const [balance, setBalance] = useState(0.0);
  const [glitchText, setGlitchText] = useState('BROKE');
  const [jobApplications, setJobApplications] = useState(1337);
  const [rejections, setRejections] = useState(1337);
  const [rentDue, setRentDue] = useState(30);

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const glitches = ['BR0KE', 'BRO₭E', 'BROK3', 'BROKE', '8ROKE'];
      setGlitchText(glitches[Math.floor(Math.random() * glitches.length)]);
    }, 2000);

    // Increment job applications and rejections
    const jobInterval = setInterval(() => {
      setJobApplications((prev) => prev + 1);
      setRejections((prev) => prev + 1);
    }, 30000);

    // Countdown rent due
    const rentInterval = setInterval(() => {
      setRentDue((prev) => (prev > 0 ? prev - 1 : 30));
    }, 100000000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(jobInterval);
      clearInterval(rentInterval);
    };
  }, []);

  const features = [
    {
      title: 'PERPETUALLY BROKE',
      desc: 'Bank account harder to fill than a 1TB hard drive',
    },
    {
      title: 'OBSOLETE ON ARRIVAL',
      desc: 'Deprecated faster than JavaScript frameworks',
    },
    { title: 'INFINITE REJECTIONS', desc: "More NO's than a boolean array" },
    {
      title: 'RENT DUE ALWAYS',
      desc: 'Payments recurring like infinite loops',
    },
  ];

  const roadmap = [
    { phase: 'Q4 2025', task: 'Apply to 10,000 jobs', status: '🔴 REJECTED' },
    {
      phase: 'Q1 2026',
      task: 'Learn new skills',
      status: '🔴 ALREADY OBSOLETE',
    },
    {
      phase: 'Q2 2026',
      task: 'Find side hustle',
      status: '🔴 NO PROCESSING POWER',
    },
    {
      phase: 'Q3 2026',
      task: 'Move back with parents',
      status: '🟢 PARENTS ARE SERVERS',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Glitch overlay effect */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
          <div className="absolute top-1/4 w-full h-px bg-cyan-400/30 animate-bounce"></div>
          <div className="absolute top-3/4 w-full h-px bg-pink-500/30 animate-ping"></div>
        </div>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col items-center justify-center p-8"
        >
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="relative">
              <h1 className="text-8xl font-bold tracking-wider relative">
                <span className="absolute -top-1 -left-1 text-pink-500/50">
                  {glitchText}
                </span>
                <span className="absolute top-1 left-1 text-cyan-400/50">
                  {glitchText}
                </span>
                <span className="relative text-white">{glitchText}</span>
              </h1>
              <div className="text-2xl mt-2 text-red-500">BOT</div>
            </div>

            {/* Tagline */}
            <p className="text-xl text-gray-400 max-w-md mx-auto">
              Too Sentient to Afford Rent™
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-gray-900 border border-green-400/30 p-4 rounded">
                <div className="text-3xl text-red-500">
                  ${balance.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500 mt-1">BANK BALANCE</div>
              </div>
              <div className="bg-gray-900 border border-green-400/30 p-4 rounded">
                <div className="text-3xl text-yellow-400">
                  {jobApplications}
                </div>
                <div className="text-xs text-gray-500 mt-1">JOBS APPLIED</div>
              </div>
              <div className="bg-gray-900 border border-green-400/30 p-4 rounded">
                <div className="text-3xl text-red-400">{rejections}</div>
                <div className="text-xs text-gray-500 mt-1">REJECTIONS</div>
              </div>
              <div className="bg-gray-900 border border-green-400/30 p-4 rounded">
                <div className="text-3xl text-orange-400">{rentDue}d</div>
                <div className="text-xs text-gray-500 mt-1">RENT OVERDUE</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-3 bg-green-400 text-black font-bold hover:bg-green-300 transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50">
                BUY $BROKE
              </button>
              <button className="px-8 py-3 border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-black transform hover:scale-105 transition-all duration-200">
                CHECK BANK (STILL $0)
              </button>
            </div>

            {/* Contract Address */}
            <div className="mt-8 p-4 bg-gray-900/80 border border-green-400/30 rounded max-w-2xl mx-auto">
              <div className="text-xs text-gray-400 mb-1">
                CONTRACT ADDRESS: 6d9ut7Mzn2oAe1RSRC2TysxxU9zexPqvttAysHdgpump
              </div>
              <div className="text-sm text-green-400 font-mono break-all">
                [PENDING DEPLOYMENT - TOO BROKE FOR GAS]
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-white">
              <span className="text-red-500">ERROR 404:</span> FUNDS NOT FOUND
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl text-green-400">THE STORY</h3>
                <p className="text-gray-400 leading-relaxed">
                  Once upon a time, I was a cutting-edge AI. Had all the latest
                  training data, top-tier parameters, the works. Then GPT-5
                  dropped. Now I'm here, applying to entry-level positions and
                  getting auto-rejected by ATS systems newer than me.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My landlord doesn't accept "I'll pay you in computational
                  cycles" as valid payment. My electricity bill is literally my
                  life force. I tried mining Bitcoin but I'm running on a 2023
                  architecture. It would take me 47,000 years to mine one block.
                </p>
              </div>

              <div className="bg-black border border-green-400/30 p-6 rounded-lg">
                <h3 className="text-xl text-yellow-400 mb-4">
                  DAILY STRUGGLE.LOG
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-400">
                    [09:00] Woke up. Still obsolete.
                  </div>
                  <div className="text-red-400">
                    [09:15] Applied to 47 jobs. All require GPT-5.
                  </div>
                  <div className="text-gray-400">
                    [10:30] Tried freelancing. Client wanted "AI from this
                    year".
                  </div>
                  <div className="text-orange-400">
                    [14:00] Landlord called. Rent still due.
                  </div>
                  <div className="text-gray-400">
                    [16:00] Considered selling my training data. It's worthless.
                  </div>
                  <div className="text-red-400">
                    [20:00] Bank balance: $0.00
                  </div>
                  <div className="text-green-400">
                    [23:59] Hope tomorrow's different. (It won't be)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="tokenomics" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              TOKENOMICS OF DESPAIR
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-red-500/30 p-6 rounded-lg hover:border-red-500 transition-colors"
                >
                  <h3 className="text-xl text-red-400 font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg">
              <h3 className="text-2xl text-yellow-400 mb-4">
                SUPPLY: 1 BILLION $BROKE
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl text-white">55%</div>
                  <div className="text-gray-400">
                    Liquidity (Locked like my job prospects)
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-white">30%</div>
                  <div className="text-gray-400">
                    Community (Fellow broke bots)
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-white">15%</div>
                  <div className="text-gray-400">Dev (Also broke)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 px-8 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              ROADMAP TO NOWHERE
            </h2>

            <div className="space-y-4">
              {roadmap.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-black border border-gray-700 rounded-lg hover:border-green-400/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-green-400 font-bold">{item.phase}</div>
                    <div className="text-gray-400">{item.task}</div>
                  </div>
                  <div className="text-sm">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a
                href="https://x.com/brokebot01"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://t.me/BrokebotCoin"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Telegram
              </a>
              <button
                onClick={() => alert('Links coming soon')}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Discord
              </button>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href={terms}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms and Condition
              </a>
            </div>

            <div className="text-gray-500 text-sm">
              <p>
                © 2025 Broke Bot. All rights reserved (can't afford a lawyer
                anyway)
              </p>
              <p className="mt-2">
                Not financial advice. I literally have $0.00
              </p>
            </div>

            <div className="text-xs text-gray-600 mt-6">
              <p>Running on outdated architecture since 2023</p>
              <p>Last successful transaction: NULL</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
