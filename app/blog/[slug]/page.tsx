import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts } from "../../../data/blogPosts";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FloatingWhatsApp from "../../../components/FloatingWhatsApp";
import {
  Clock,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Calendar,
  User,
  Zap,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found | Next Broadband" };

  return {
    title: `${post.title} | Next Broadband Pakistan`,
    description: post.excerpt,
    keywords: [...post.tags, "Pakistan Broadband", "Next Broadband ISP"],
    alternates: {
      canonical: `https://nextbroadband.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — Next Broadband Pakistan`,
      description: post.excerpt,
      url: `https://nextbroadband.vercel.app/blog/${post.slug}`,
      siteName: "Next Broadband",
      locale: "en_PK",
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const whatsappInquiryUrl = `https://wa.me/923491988224?text=${encodeURIComponent(
    `Hello Next Broadband! I read your guide "${post.title}" and would like to inquire about internet availability and packages for my area.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-[#F8FAFC] overflow-x-hidden w-full max-w-full">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 sm:mb-12 border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight uppercase leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111827] border border-white/[0.1] flex items-center justify-center text-[#00E5FF]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#F8FAFC]">Next Broadband Engineering Team</div>
                  <div className="text-[11px] text-[#94A3B8]">Supervised by Site Incharge Sher Muhammad</div>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#25D366]">
                Verified ISP Guide
              </span>
            </div>
          </header>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none text-sm sm:text-base text-[#94A3B8] leading-relaxed space-y-8">
            {/* Intro paragraph */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111827] border border-white/[0.08] text-[#F8FAFC] font-medium leading-relaxed">
              {post.content.intro}
            </div>

            {/* Sections */}
            {post.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight pt-4 border-t border-white/[0.06]">
                  {sec.heading}
                </h2>
                <p className="leading-relaxed">
                  {sec.body}
                </p>

                {/* Subsections if any */}
                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {sec.subsections.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 sm:p-5 rounded-xl bg-[#111827]/70 border border-white/[0.08]"
                      >
                        <h3 className="text-sm font-bold text-[#00E5FF] mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span>{sub.subheading}</span>
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="mt-8 p-6 rounded-2xl bg-[#111827] border border-[#00E5FF]/30 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00E5FF]" />
                <span>Key Takeaway & Recommendation</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </article>

          {/* Direct WhatsApp Call to Action Banner */}
          <div className="mt-12 sm:mt-16 rounded-3xl bg-[#111827] border-2 border-[#25D366]/40 p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#25D366] block mb-2 font-bold">
                Ready For High-Speed Connectivity?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] uppercase mb-4 leading-tight">
                Get Connected with Next Broadband
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
                Speak directly with our local engineering dispatch team. Check optical fiber feasibility or wireless coverage in your area within minutes.
              </p>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/25 border border-[#25D366]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
                <span>Inquire on WhatsApp (0349 1988224)</span>
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#94A3B8] font-mono">Related Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#111827] border border-white/[0.08] text-[#00E5FF]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
