import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "../../data/blogPosts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { BookOpen, Clock, Tag, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Internet & Tech Guides | Next Broadband Pakistan Blog",
  description:
    "Expert broadband and networking guides for Pakistan. Learn how to reduce gaming ping, choose between fiber and wireless, boost home Wi-Fi signals, and select the right internet speed.",
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
    url: "https://nextbroadband.pk/blog",
    siteName: "Next Broadband",
    locale: "en_PK",
    type: "website",
  },
};

export default function BlogListingPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-[#F8FAFC] overflow-x-hidden w-full max-w-full">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Internet & Tech Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight uppercase leading-tight mb-4">
              Broadband Insights For Pakistan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed">
              In-depth articles, expert networking tips, gaming latency fixes, and speed guidance
              written by our engineering and dispatch team.
            </p>
          </div>

          {/* 6 Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 group"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#94A3B8] px-2 py-0.5 rounded bg-[#0A0F1C] border border-white/[0.06]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Read Button */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Help Banner */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-[#111827] border border-[#00E5FF]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Consultation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] uppercase mb-3">
                Have A Specific Connectivity Question?
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] mb-6">
                Our local engineering team is ready to analyze your premises and recommend the ideal fiber or wireless package.
              </p>
              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20have%20a%20question%20about%20internet%20packages%20and%20coverage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 border border-[#25D366]/40 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp</span>
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
