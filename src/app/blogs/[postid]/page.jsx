import React from 'react';

const PostDetailPage = async ({ params }) => {
  const { postid } = await params;

  return (
    <div>
      <h2>Post Details Page: {postid}</h2>
    </div>
  );
};

export default PostDetailPage;
