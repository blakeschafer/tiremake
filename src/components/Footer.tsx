"use client";

const techLinks = [
  { label: "Homepage", href: "/" },
  { label: "Yard Operating System", href: "#" },
  { label: "The Agentic AI Yard", href: "#" },
  { label: "Yard Efficiency Calculator", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-terminal-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Gartner badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="#052424" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="#052424" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="#052424" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="#052424" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg">Terminal</span>
          </div>
          <div className="md:ml-auto flex items-center gap-3 bg-white/5 rounded-xl px-5 py-3">
            <span className="text-xs text-white/40 font-mono tracking-wider uppercase">
              Gartner
            </span>
            <span className="text-xs text-white/60">
              2025 Market Guide · Yard Management · Featured Vendor
            </span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Technology */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5">
              Technology
            </h4>
            <ul className="flex flex-col gap-3">
              {techLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5">
              Reach Us
            </h4>
            <p className="text-sm text-white/50 mb-1">
              <a href="#contact" className="text-white/70 hover:text-terminal-lime transition-colors">
                Ready for your yard of the future?
              </a>
            </p>
            <p className="text-sm text-white/40 mb-6">
              Connect with our experts today.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/terminal-industries/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-terminal-lime hover:border-terminal-lime/30 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/Terminal_Indust"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-terminal-lime hover:border-terminal-lime/30 transition-all"
                aria-label="X"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Terminal-Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-terminal-lime hover:border-terminal-lime/30 transition-all"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/25">
            Copyright Terminal Industries &copy; 2025 All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Technical Index
            </a>
            <span className="text-xs text-white/15">
              Built by{" "}
              <a
                href="https://www.rejouice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-white/50 transition-colors"
              >
                Rejouice
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
