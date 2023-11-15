import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

const WorkPost = () => {
  const { workSlug } = useParams();
  const WorkComponent = React.lazy(() => import(`../allworkposts/${workSlug}.jsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkComponent />
    </Suspense>
  );
};

export default WorkPost;