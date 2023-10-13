import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavigationDirectionContext } from "../../components/NavigationDirectionProvider";
import LeftArrow from "../../assets/svg/chevron-left.svg";
import RightArrow from "../../assets/svg/chevron-right.svg";

// Import all individual blog post components
import TheMetaverse from "./blogposts/the-metaverse";
import ContentStrategy from "./blogposts/content-strategy";
import EarthFlorals from "./blogposts/earth-florals";
import TheDigitalMarketingFuture from "./blogposts/the-digital-marketing-future";
import _2023TechTrendsBoostingCreativeSuccess from "./blogposts/2023-Tech-&-Creativity";
import TheEventBrainstorm from "./blogposts/the-event-brainstorm";
import NutritionArt from "./blogposts/nutrition-art";
import BuildingYourPersonalBrand from "./blogposts/building-your-personal-brand";
import WabiSabiDesign from "./blogposts/wabi-sabi-design";
import LookIntoLightingDesign from "./blogposts/look-into-lighting-design";
import Vision from "./blogposts/vision";
import CateringArtOverAnything from "./blogposts/catering-art-over-anything";
import TextileTones2023 from "./blogposts/textile-tones-2023";
import LocationLocationLocation from "./blogposts/location-location-location";
import Typography from "./blogposts/typography";
import TheArtOfInfluence from "./blogposts/the-art-of-influence";
import ThePrintOf2023 from "./blogposts/the-print-of-2023";

// Map postSlug to the corresponding component
const components = {
  "the-metaverse": TheMetaverse,
  "content-strategy": ContentStrategy,
  "earth-florals": EarthFlorals,
  "the-digital-marketing-future": TheDigitalMarketingFuture,
  "2023-Tech-&-Creativity": _2023TechTrendsBoostingCreativeSuccess,
  "the-event-brainstorm": TheEventBrainstorm,
  "nutrition-art": NutritionArt,
  "building-your-personal-brand": BuildingYourPersonalBrand,
  "wabi-sabi-design": WabiSabiDesign,
  "look-into-lighting-design": LookIntoLightingDesign,
  vision: Vision,
  "catering-art-over-anything": CateringArtOverAnything,
  "textile-tones-2023": TextileTones2023,
  "location-location-location": LocationLocationLocation,
  typography: Typography,
  "the-art-of-influence": TheArtOfInfluence,
  "the-print-of-2023": ThePrintOf2023
};

const BlogPostDetail = () => {
  const { setDirection } = React.useContext(NavigationDirectionContext);
  const { postSlug } = useParams();
  const navigate = useNavigate();

  const PostComponent = components[postSlug];

  if (!PostComponent) {
    return <div>Post not found</div>;
  }

  const allSlugs = Object.keys(components);
  const currentIndex = allSlugs.indexOf(postSlug);

  const previousPostSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextPostSlug =
    currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const handleArrowClick = (slug, dir) => {
    setDirection(dir);
    // wait for a tick to ensure state is updated before navigation
    setTimeout(() => {
      navigate(`/blog/${slug}`);
    });
  };

  return (
    <div className="blog-wrapper">
      {previousPostSlug && (
        <div
          className="arrow-container left"
          to={`/blog/${previousPostSlug}`}
          onClick={() => handleArrowClick(previousPostSlug, "left")}
        >
          <img src={LeftArrow} alt="Previous Post" />
        </div>
      )}

      <div className="blog-content-wrapper">
        <PostComponent />
      </div>

      {nextPostSlug && (
        <div
          className="arrow-container right"
          to={`/blog/${nextPostSlug}`}
          onClick={() => handleArrowClick(nextPostSlug, "right")}
        >
          <img src={RightArrow} alt="Next Post" />
        </div>
      )}
    </div>
  );
};

export default BlogPostDetail;
