import { galleryItems } from "../../assets/images/CompleteGalleryItems";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";

gsap.registerPlugin(CSSPlugin);

export const Works = () => {
  let galleryRefs = useRef([]);

  useEffect(() => {
    // GSAP animations and intersection observer setup...
    galleryRefs.current.forEach((galleryItem) => {
      gsap.set(galleryItem, { autoAlpha: 0, y: 50 });
    });

    const observerOptions = {
      root: null,
      rootMargin: "-50px 50px",
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            overwrite: "auto"
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    galleryRefs.current.forEach((galleryItem) => {
      if (galleryItem) {
        observer.observe(galleryItem);
      }
    });

    return () => {
      if (galleryRefs.current) {
        galleryRefs.current.forEach((galleryItem) => {
          if (galleryItem) {
            observer.unobserve(galleryItem);
          }
        });
      }
      observer.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="works">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Works</title>
        </Helmet>

        <div className="mb-5 po_items_ho">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="po_item"
              ref={(el) => (galleryRefs.current[i] = el)}
            >
              <div className="img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={`Image ${i + 1}`}
                  className="d-block w-100"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>

              <div className="content">
                <p>{item.title}</p>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  View project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};
