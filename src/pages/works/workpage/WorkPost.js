import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WorkPost = () => {
  const { workSlug } = useParams();
  const [WorkComponent, setWorkComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    import(`../allworkposts/${workSlug}.jsx`)
      .then((module) => {
        setWorkComponent(() => module.default);
        setIsLoading(false); // Update loading state once the component is loaded
      })
      .catch((error) => {
        console.error("Component loading failed:", error);
        setIsLoading(false); // Update loading state in case of error
      });
  }, [workSlug]);

  if (isLoading) {
    return <div></div>; // Or any other fallback UI like a skeleton screen
  }

  if (!WorkComponent) {
    return <div>Error loading component</div>; // Error handling
  }

  return <WorkComponent />;
};

export default WorkPost;
