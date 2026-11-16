"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative py-16 sm:py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Internet & Tech Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
              Latest Broadband Guides
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-xl">
              Practical tips on reducing gaming ping, choosing the right speed tier, and optimizing your home Wi-Fi signal in Pakistan.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#00E5FF] bg-[#111827] hover:bg-[#162032] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all self-start md:self-auto min-h-[44px]"
          >
            <span>View All 6 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-7 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

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
      </div>
    </section>
  );
}
