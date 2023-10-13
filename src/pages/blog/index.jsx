import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ScrambleText from "scramble-text";
import { Helmet, HelmetProvider } from "react-helmet-async";


const static_blog_posts = [
  { id: 74782, title: "The Metaverse", slug: "the-metaverse" },
  { id: 4252, title: "Content Strategy", slug: "content-strategy" },
  {
    id: 4239,
    title: "花 Hana : Floral Design Essence",
    slug: "earth-florals"
  },
  {
    id: 4245,
    title: "The Digital Marketing Future",
    slug: "the-digital-marketing-future"
  },
  {
    id: 4225,
    title: "2023: Tech & Creativity",
    slug: "2023-Tech-&-Creativity"
  },
  { id: 4636, title: "The Event Brainstorm", slug: "the-event-brainstorm" },
  { id: 4233, title: "Nutrition & Art", slug: "nutrition-art" },
  {
    id: 20518,
    title: "Building your personal brand.",
    slug: "building-your-personal-brand"
  },
  { id: 20520, title: "Wabi-Sabi Design 侘寂", slug: "wabi-sabi-design" },
  {
    id: 1,
    title: "Look into Lighting Design",
    slug: "look-into-lighting-design"
  },
  {
    id: 74783,
    title: "Catering Art over Anything",
    slug: "catering-art-over-anything"
  },
  { id: 74784, title: "The Print of 2023", slug: "the-print-of-2023" },
  { id: 74785, title: "Textile Tones 2023", slug: "textile-tones-2023" },
  {
    id: 74786,
    title: "Location Location Location",
    slug: "location-location-location"
  },
  { id: 74787, title: "tīˈpäɡrəfē", slug: "typography" }, // changed to simple typography for slug
  { id: 74788, title: "20/23 Vision", slug: "vision" },
  { id: 74789, title: "The Art of Influence", slug: "the-art-of-influence" }
];

const BlogPost = ({ post }) => {
  const containerRef = useRef(null);
  let scrambleInstance = null;

  const handleMouseEnter = () => {
    const h2Elem = containerRef.current;
    const scrambledElem = h2Elem.querySelector(".scrambled");
    if (scrambledElem && !scrambleInstance) {
      // Lock the width of the h2 element
      h2Elem.style.width = `${h2Elem.offsetWidth}px`;

      scrambleInstance = new ScrambleText(scrambledElem, {
        timeOffset: 12.5,
        chars: ["o", "¦"],
        callback: () => {
          // Reset the width of the h2 element after scramble
          h2Elem.style.width = "auto";
          scrambleInstance = null;
        }
      });
      scrambleInstance.start().play();
    }
  };

  return (
    <Link to={`/blog/${post.slug}`}>
      <h2
        ref={containerRef}
        className="h2 blog-element"
        onMouseEnter={handleMouseEnter}
      >
        <span className="scrambled">{post.title}</span>
      </h2>
    </Link>
  );
};

export const Blog = ({ maxPosts = 20 }) => {
  const displayedPosts = static_blog_posts.slice(0, maxPosts);
  return (
    <HelmetProvider>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog </title>
        </Helmet>

        <div className="reads">
          <h1 id="reads-title">Reads</h1>
        </div>
        <div className="blog-titles">
          {displayedPosts.map((post, index) => (
            <div className="blog-title-container" key={index}>
              <BlogPost post={post} />
            </div>
          ))}
          {maxPosts < static_blog_posts.length && (
            <div className="reads-container">
              <a
                href="https://belroselax.com/blog"
                className="h2  blog-element "
              >
                All
              </a>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};
