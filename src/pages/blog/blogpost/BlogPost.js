import React, { Suspense } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./style.css";
import allBlogPosts from '../allblogposts/allBlogPosts.json';
import { NavigationDirectionContext } from "../../../app/contexts/NavigationDirectionProvider";
import LeftArrow from "../../../assets/svg/chevron-left.svg";
import RightArrow from "../../../assets/svg/chevron-right.svg";

const BlogPost = () => {



  const { setDirection } = React.useContext(NavigationDirectionContext);
  const { postSlug } = useParams();
  const navigate = useNavigate();
  const allSlugs = allBlogPosts.map(post => post.slug);
  const currentIndex = allSlugs.indexOf(postSlug);

  const previousPostSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextPostSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;


  const PostComponent = React.lazy(() => import(`../allblogposts/${postSlug}.jsx`));



  const handleArrowClick = (slug, dir) => {
    setDirection(dir);
    setTimeout(() => {
      navigate(`/blog/${slug}`);
    });
  };



  return (
    <div className="blog-content-wrapper">
      {previousPostSlug && (
        <Link to={`/blog/${previousPostSlug}`}>
          <div
            className="arrow-container left"
            onClick={() => handleArrowClick(previousPostSlug, "left")}
          >
            <img src={LeftArrow} alt="Previous Post" />
          </div>
        </Link>
      )}
  
      <Suspense fallback={<div>Loading...</div>}>
        <div className="blog-content-wrapper">
          <PostComponent />
        </div>
      </Suspense>
  
      {nextPostSlug && (
        <Link to={`/blog/${nextPostSlug}`}>
          <div
            className="arrow-container right"
            onClick={() => handleArrowClick(nextPostSlug, "right")}
          >
            <img src={RightArrow} alt="Next Post" />
          </div>
        </Link>
      )}
    </div>
  );
    
  
};

export default BlogPost;
