import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SJPage() {
  //   return (
  //     <>
  //       <h1 className="text-[40px]">Startup Junction</h1>
  //       <Link
  //         href={"/payment?type=startup_junction"}
  //         className="px-1 py-4 bg-orange-300 text-black text-center"
  //       >
  //         Register Now
  //       </Link>
  //     </>
  //   );
  // }

  return (
    <div className="min-h-screen mt-20 text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Startup Junction 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 italic">
          Where Ambition Meets Investment
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-gray-400">
          An exclusive forum connecting high-potential startups with India’s top
          venture firms — in Bangalore, Delhi, and Ahmedabad.
        </p>
        <p className="text-lg font-medium mb-6 text-gray-300">
          Date:{" "}
          <span className="text-blue-400 font-semibold">December 6, 2025</span>
        </p>
        <Button
          asChild
          className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700"
        >
          <Link
            href={"/payment?type=startup_junction"}
            className="px-1 py-4 bg-orange-300 text-black text-center"
          >
            Register Now
          </Link>
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          About Startup Junction
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-400 mb-8">
          India’s metros are bursting with entrepreneurial energy — but many
          events prioritize quantity over quality. Startup Junction changes the
          game by handpicking founders and investors to foster meaningful,
          sector-focused connections. With a focus on relevance, depth, and
          genuine networking, the event ensures every conversation counts.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-gray-700 bg-black">
            <CardContent className="text-center py-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                20+ Startups
              </h3>
              <p className="text-gray-300">
                Handpicked for relevance and readiness
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-700 bg-black">
            <CardContent className="text-center py-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                10+ VC Firms
              </h3>
              <p className="text-gray-300">From leading venture ecosystems</p>
            </CardContent>
          </Card>
          <Card className="border-gray-700 bg-black">
            <CardContent className="text-center py-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                3 Cities
              </h3>
              <p className="text-gray-300">Bangalore • Delhi • Ahmedabad</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          The Startup Junction Experience
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Startup Junction 2025 is not just another startup event — it’s a
            bridge between vision and investment. Every participating startup
            undergoes a selective screening process ensuring that only
            high-potential and market-ready ventures reach the investors’ table.
          </p>
          <p>
            The event offers more than just pitching sessions. Founders gain
            exposure to real market validation, one-on-one investor feedback,
            and direct mentorship opportunities. Investors, in turn, get a
            front-row seat to discover tomorrow’s disruptive ventures in India’s
            most dynamic startup ecosystems.
          </p>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Why Participate?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              For Startups
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Pitch directly to active venture capitalists</li>
              <li>
                Get real-time feedback and mentorship from seasoned investors
              </li>
              <li>Network with founders, mentors, and fellow innovators</li>
              <li>Gain visibility in front of leading VCs and startup media</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              For Investors
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Discover early-stage ventures with market potential</li>
              <li>Access curated, sector-specific startup pitches</li>
              <li>Collaborate with other venture firms and angel investors</li>
              <li>
                Build long-term relationships with founders and IIT BHU network
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Legacy of Excellence — Powered by E-Cell, IIT BHU
        </h2>
        <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
          Startup Junction stands on the foundation of E-Cell IIT BHU’s
          entrepreneurial legacy. As the creators of E-Summit — one of India’s
          largest entrepreneurship festivals — we’ve connected hundreds of
          startups with investors, mentors, and corporates across Bangalore,
          Delhi, and Pune. With the 50,000+ strong alumni network including
          unicorn founders and venture leaders, our platform ensures that
          innovation meets opportunity.
        </p>
      </section>

      {/* Footer Section */}
    </div>
  );
}
