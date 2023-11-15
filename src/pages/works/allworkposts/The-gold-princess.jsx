import React, { useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';  // Ensure the correct path to your works.json

const TheGoldPrincess = () => {
  // Find the specific work data based on the slug
  const work = worksData.find(w => w.slug === "The-Gold-Princess");
  
  // Ensure work is defined before proceeding
  if (!work) {
    // Handle the case where work is not found
    return <div>Work not found.</div>;
  }

  let galleryRefs = useRef([]);

  // Assuming images are part of the 'work' object
  const imageUrls = work.images; // Replace with the correct property if different

  useEffect(() => {
    // GSAP animations and intersection observer setup...
    // Your existing useEffect logic
  }, []);

  return (
    <div className="works">
      <h1>{work.title}</h1>
      <h2>{work.subtitle}</h2> {/* You can replace these with dynamic data if needed */}
      <div className="mb-5 po_items_ho">
        {imageUrls.map((imageUrl, i) => (
          <div
            key={i}
            className="po_item"
            ref={(el) => (galleryRefs.current[i] = el)}
          >
            <div className="img-wrapper">
              <Carousel>
                <Carousel.Item>
                  <img
                    src={imageUrl}
                    alt={`Image ${i + 1}`}
                    className="d-block w-100"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheGoldPrincess;
