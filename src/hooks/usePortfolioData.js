// usePortfolioData.js
import { useState, useEffect } from "react";
import axios from "axios";
import he from "he";

export const usePortfolioData = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(
          "https://belroselax.com/wp-json/wp/v2/portfolio?per_page=100"
        );

        const jsonData = response.data;
        const items = [];

        jsonData.forEach((item) => {
          if (item.yoast_head_json && item.yoast_head_json.og_image) {
            item.yoast_head_json.og_image.forEach((image) => {
              const imageUrl = image.url;
              const imageWidth = image.width;
              const imageHeight = image.height;
              const title = he.decode(item.title.rendered);

              const galleryItem = {
                imageUrl,
                imageWidth,
                imageHeight,
                title
              };

              items.push(galleryItem);
            });
          }
        });

        setGalleryItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolioData();
  }, []);

  return galleryItems;
};
