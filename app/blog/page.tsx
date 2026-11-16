import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "../../data/blogPosts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { BookOpen, Clock, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Internet & Tech Guides | Next Broadband Pakistan Blog",
  description:
    "Expert broadband and networking guides for Pakistan. Learn how to reduce gaming ping, choose between fiber and wireless, boost home Wi-Fi signals, and select the right internet speed.",
  alternates: {
    canonical: "https://nextbroadband.vercel.app/blog",
  },
  keywords: [
    "Pakistan broadband guides",
    "fiber optic vs wireless pakistan",
    "reduce gaming ping pubg valorant pakistan",
    "wifi boost tips pakistan",
    "next broadband blog",
    "best internet service provider pakistan",
  ],
  openGraph: {
    title: "Next Broadband Internet & Tech Guides — Pakistan",
    description:
      "Expert broadband advice, speed recommendations, gaming latency tips, and Wi-Fi optimization guides from Next Broadband.",
    url: "https://nextbroadband.vercel.app/blog",
    siteName: "Next Broadband",
    locale: "en_PK",
    type: "website",
  },
};

export default function BlogListingPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0F172A] overflow-x-hidden w-full max-w-full font-sans">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Internet & Tech Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase leading-tight mb-4 font-heading">
              Broadband Insights For Pakistan
            </h1>
            <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed">
              In-depth articles, expert networking tips, gaming latency fixes, and speed guidance
              written by our engineering and dispatch team.
            </p>
          </div>

          {/* 6 Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl bg-white border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] group"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE] font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-sans">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading group-hover:text-[#1D4ED8] transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-[#475569] font-sans leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#64748B] px-2.5 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Read Button */}
                <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs text-[#64748B] font-mono">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Help Banner */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-[#090D16] text-white border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Personalized Consultation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-3 font-heading">
                Have A Specific Connectivity Question?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-sans mb-6">
                Our local engineering team is ready to analyze your premises and recommend the ideal fiber or wireless package.
              </p>
              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20have%20a%20question%20about%20internet%20packages%20and%20coverage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-900/30 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp (0349 1988224)</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
