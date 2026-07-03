import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, ChevronRight, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for SSG
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamically generate page metadata for search engines
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Vevofiks",
    };
  }

  return {
    title: `${post.title} | Vevofiks Insights`,
    description: post.excerpt,
    keywords: [post.category, "Vevofiks Blog", post.title],
    openGraph: {
      title: `${post.title} | Vevofiks Insights`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://vevofiks.com/blogs/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Vevofiks Insights`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // A robust markdown parser that splits by lines and groups them correctly, supporting bold & links in all blocks
  const parseMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    
    let currentParagraph: string[] = [];
    let currentList: string[] = [];
    
    const flushParagraph = (key: string | number) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        elements.push(
          <p key={`p-${key}`} className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-normal">
            {parseBoldAndLinks(text)}
          </p>
        );
        currentParagraph = [];
      }
    };
    
    const flushList = (key: string | number) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc pl-6 space-y-3 mb-6 text-gray-300 text-sm md:text-base">
            {currentList.map((item, lIdx) => (
              <li key={`li-${lIdx}`} className="leading-relaxed">
                {parseBoldAndLinks(item)}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const parseBoldAndLinks = (text: string) => {
      return text.split(/(\*\*.*?\*\*)/).map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const innerText = part.slice(2, -2);
          return (
            <strong key={`bold-${pIdx}`} className="text-white font-bold">
              {parseLinksOnly(innerText)}
            </strong>
          );
        }
        return parseLinksOnly(part);
      });
    };

    const parseLinksOnly = (text: string) => {
      return text.split(/(\[.*?\]\(.*?\))/).map((part, pIdx) => {
        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const linkText = match[1];
          const linkUrl = match[2];
          const isExternal = linkUrl.startsWith("http") || linkUrl.startsWith("//");
          if (isExternal) {
            return (
              <a
                key={`link-${pIdx}`}
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium"
              >
                {linkText}
              </a>
            );
          } else {
            return (
              <Link
                key={`link-${pIdx}`}
                href={linkUrl}
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium"
              >
                {linkText}
              </Link>
            );
          }
        }
        return part;
      });
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushParagraph(idx);
        flushList(idx);
        return;
      }
      
      if (trimmed.startsWith("# ")) {
        flushParagraph(idx);
        flushList(idx);
        elements.push(
          <h1 key={`h1-${idx}`} className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 mt-12 leading-tight">
            {parseBoldAndLinks(trimmed.slice(2))}
          </h1>
        );
        return;
      }
      
      if (trimmed.startsWith("## ")) {
        flushParagraph(idx);
        flushList(idx);
        elements.push(
          <h2 key={`h2-${idx}`} className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 mt-10 border-b border-white/5 pb-2">
            {parseBoldAndLinks(trimmed.slice(3))}
          </h2>
        );
        return;
      }
      
      if (trimmed.startsWith("### ")) {
        flushParagraph(idx);
        flushList(idx);
        elements.push(
          <h3 key={`h3-${idx}`} className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3 mt-8">
            {parseBoldAndLinks(trimmed.slice(4))}
          </h3>
        );
        return;
      }
      
      if (trimmed.startsWith("> ")) {
        flushParagraph(idx);
        flushList(idx);
        elements.push(
          <blockquote key={`bq-${idx}`} className="border-l-4 border-blue-500 bg-white/3 pl-6 py-4 pr-4 my-8 rounded-r-xl italic text-gray-300 text-sm md:text-base">
            {parseBoldAndLinks(trimmed.slice(2))}
          </blockquote>
        );
        return;
      }
      
      if (trimmed.startsWith("---")) {
        flushParagraph(idx);
        flushList(idx);
        elements.push(<hr key={`hr-${idx}`} className="border-white/10 my-10" />);
        return;
      }
      
      if (trimmed.startsWith("* ")) {
        flushParagraph(idx);
        currentList.push(trimmed.slice(2));
        return;
      }
      
      flushList(idx);
      currentParagraph.push(trimmed);
    });
    
    flushParagraph("final");
    flushList("final");
    
    return elements;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": `https://vevofiks.com${post.image}`,
            "datePublished": new Date(post.publishedAt).toISOString().split('T')[0],
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vevofiks",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vevofiks.com/company-logo.png"
              }
            },
            "description": post.excerpt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://vevofiks.com/blogs/${post.slug}`
            }
          })
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs & Back Link */}
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-3 text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
              <span className="w-8 h-px bg-blue-500/50"></span>
              {post.category}
            </div>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author Profile and Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-6">
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/15"
                />
                <div>
                  <div className="text-sm font-semibold text-white">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Massive Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 bg-black/40">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Article Content Rendered via dynamic parser */}
          <article className="prose prose-invert max-w-none">
            {parseMarkdown(post.content)}
          </article>

          {/* Conversion CTA Banner targeting our main landing page */}
          <div className="mt-20 p-8 md:p-12 border border-white/10 rounded-[2.5rem] bg-linear-to-r from-blue-950/40 to-indigo-950/20 backdrop-blur-3xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to scale your business?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Partner with Vevofiks to turn your vision into an elite, conversion-optimized, and high-performance digital product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://cal.com/vevofiks-mm1vfe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="coloredButton px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 group/btn"
              >
                Schedule a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="px-8 py-3.5 rounded-full text-sm font-semibold bg-[#1a1a1a] text-white hover:bg-[#252525] hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 border-t border-white/10 pt-16">
              <h3 className="text-xl font-bold tracking-tight text-white mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((rPost) => (
                  <Link 
                    key={rPost.slug}
                    href={`/blogs/${rPost.slug}`}
                    className="group flex flex-col justify-between relative border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-3xl hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-3">
                        <span className="text-blue-400">{rPost.category}</span>
                        <span>&middot;</span>
                        <span>{rPost.readTime}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {rPost.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                      <span className="text-[10px] text-gray-500">Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
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
