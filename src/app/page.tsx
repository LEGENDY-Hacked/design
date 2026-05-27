"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import Story from "@/components/Story";
import ImageStrip from "@/components/ImageStrip";
import SignatureDishes from "@/components/SignatureDishes";
import BreakfastSection from "@/components/BreakfastSection";
import OnTheGo from "@/components/OnTheGo";
import ValueHospitality from "@/components/ValueHospitality";
import ReviewsWall from "@/components/ReviewsWall";
import VisitUs from "@/components/VisitUs";
import TableAwaits from "@/components/TableAwaits";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  // Scroll-reveal observer
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]")] as HTMLElement[];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    let revealedAny = false;
    let io: IntersectionObserver | undefined;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              revealedAny = true;
              (e.target as HTMLElement).classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
      );
      els.forEach((el) => io!.observe(el));
    } catch {
      /* no IO */
    }

    const fallback = setTimeout(() => {
      if (!revealedAny) els.forEach((el) => el.classList.add("in"));
    }, 1200);

    return () => {
      io?.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const scrollToVisit = () => {
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToMenu = () => {
    document.getElementById("dishes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top">
      <Nav onReserve={scrollToVisit} />
      <Hero onReserve={scrollToVisit} onMenu={scrollToMenu} />
      <div data-reveal className="reveal">
        <SocialProofStrip />
      </div>
      <div data-reveal className="reveal">
        <Story />
      </div>
      <div data-reveal className="reveal">
        <ImageStrip />
      </div>
      <div data-reveal className="reveal">
        <SignatureDishes onReserve={scrollToVisit} />
      </div>
      <div data-reveal className="reveal">
        <BreakfastSection onReserve={scrollToVisit} />
      </div>
      <div data-reveal className="reveal">
        <OnTheGo />
      </div>
      <div data-reveal className="reveal">
        <ValueHospitality />
      </div>
      <div data-reveal className="reveal">
        <ReviewsWall />
      </div>
      <div data-reveal className="reveal">
        <VisitUs />
      </div>
      <div data-reveal className="reveal">
        <TableAwaits onReserve={scrollToVisit} />
      </div>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
