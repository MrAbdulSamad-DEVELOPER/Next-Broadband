"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Internet & Tech Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
              Latest Broadband Guides
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#475569] font-sans max-w-xl">
              Practical tips on reducing gaming ping, choosing the right speed tier, and optimizing your home Wi-Fi signal in Pakistan.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#E2E8F0] transition-all self-start md:self-auto min-h-[44px]"
          >
            <span>View All 6 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E2E8F0] hover:bg-white shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE] font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-sans">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading group-hover:text-[#1D4ED8] transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#475569] font-sans leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

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
      </div>
    </section>
  );
}
