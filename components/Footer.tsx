import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const linksData = [
    {
      href: "https://www.ecelliitbhu.com/sw/",
      text: "Startup Weekend Varanasi",
    },
    {
      href: "https://www.ecelliitbhu.com/cd/",
      text: "Campus Ambassador",
    },
  ];

  return (
    <footer className="bg-transparent py-10">
      <div className="flex flex-col items-center space-y-8">
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Link
            className="hover:scale-125 transition ease-in-out"
            href="https://x.com/ecelliitbhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
          </Link>

          <Link
            className="hover:scale-125 transition ease-in-out"
            href="https://www.instagram.com/ecelliitbhu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-pink-600 text-2xl hover:text-pink-600/75 cursor-pointer transition ease-in-out" />
          </Link>

          <Link
            className="text-blue-600 hover:text-blue-600/75 hover:scale-125 transition ease-in-out"
            href="https://www.linkedin.com/company/ecelliitbhu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
          </Link>

          <Link
            className="text-gray-900 hover:text-gray-900/75 transition ease-in-out"
            href="https://www.youtube.com/c/ecelliitbhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-red-600 text-2xl hover:text-red-600/75 cursor-pointer dark:text-gray-300 dark:hover:text-gray-300/75 hover:scale-125 transition ease-in-out" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="rounded-3xl border-2 border-[#FFFFF0] p-6 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold">
            {linksData.map((link, index) => (
              <li key={index}>
                <Link
                  className="transition hover:text-primary"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Text */}
        <p className="mx-auto max-w-lg text-xs text-center">
          E-Cell, IIT BHU Varanasi is a non-profit organization established
          to nurture the entrepreneurial culture in our college and open
          doors for the next generation of startup founders, entrepreneurs,
          and change makers to leave behind a legacy!
          <span className="mt-4 block">&copy; 2026 E-Cell IIT BHU</span>
        </p>
      </div>
    </footer>
  );
}

