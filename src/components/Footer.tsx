import { Mail } from 'lucide-react';

const linkClass = "text-muted-foreground hover:text-blue-500 transition-colors";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <div className="flex justify-center items-center space-x-8">
        <a
          href="https://x.com/tapegossip"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="TapeGossip on X"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="mailto:tapegossip@gmail.com" className={linkClass} aria-label="Email TapeGossip">
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-8 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TapeGossip
      </p>
    </div>
  </footer>
);

export default Footer;
