import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Digital Insights | Vevofiks",
  description: "Read our latest articles on web performance, CRO, SaaS engineering, and white-label agency growth strategies from the Vevofiks team.",
  keywords: ["Vevofiks Blog", "SaaS Engineering", "Web Performance Optimization", "CRO Strategy", "White Label Development"],
  openGraph: {
    title: "Blog & Digital Insights | Vevofiks",
    description: "Read our latest articles on web performance, CRO, SaaS engineering, and white-label agency growth strategies.",
    url: "https://vevofiks.com/blogs",
    type: "website",
  }
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const gridPosts = BLOG_POSTS.slice(1);

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-[#050505] text-white pt-32 pb-24 overflow-hidden relative">
        {/* Glow ambient background lights */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header section */}
          <div className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-3 text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
              <span className="w-8 h-px bg-blue-500/50"></span>
              The Journal
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Insights & <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Strategies.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Engineering guides, conversion-focused design breakdowns, and B2B growth tips compiled by the Vevofiks core team.
            </p>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div className="mb-20">
              <h2 className="text-xs uppercase font-bold text-gray-500 tracking-widest mb-6">Latest Feature</h2>
              <Link 
                href={`/blogs/${featuredPost.slug}`}
                className="group block relative border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-3xl hover:border-blue-500/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Container */}
                  <div className="relative aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[450px] overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-black via-black/30 to-transparent" />
                  </div>

                  {/* Text Container */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                        <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Author & Read CTA */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={featuredPost.author.avatar} 
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover border border-white/10"
                        />
                        <div>
                          <div className="text-sm font-semibold text-white">{featuredPost.author.name}</div>
                          <div className="text-xs text-gray-500">{featuredPost.author.role}</div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-blue-500/50 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid of Other Posts */}
          {gridPosts.length > 0 && (
            <div>
              <h2 className="text-xs uppercase font-bold text-gray-500 tracking-widest mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group flex flex-col justify-between relative border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-3xl hover:border-blue-500/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] transition-all duration-500"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-4">
                          <span className="px-2.5 py-0.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Author & Arrow Footer */}
                    <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover border border-white/10"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">{post.author.name}</div>
                          <div className="text-[10px] text-gray-500">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-blue-500/50 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
