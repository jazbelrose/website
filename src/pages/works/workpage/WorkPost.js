import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WorkPost = () => {
  const { workSlug } = useParams();
  const [WorkComponent, setWorkComponent] = useState(null);

  useEffect(() => {
    import(`../allworkposts/${workSlug}.jsx`)
      .then((module) => {
        setWorkComponent(() => module.default);
      })
      .catch((error) => {
        // Handle the error or set a fallback component
        console.error("Component loading failed:", error);
      });
  }, [workSlug]);

  if (!WorkComponent) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return <WorkComponent />;
};

export default WorkPost;
