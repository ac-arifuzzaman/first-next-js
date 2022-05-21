import Link from "next/link";
import React from "react";

const doctors = ({ posts }) => {
  return (
    <div>
      <h2>this is doctors page: {posts.length}</h2>
      {posts.map((post) => (
        <>
          <p key={post.id}>{post.title}</p>
          <Link href={`posts/${post.id}`}>
            <a>More</a>
          </Link>
        </>
      ))}
    </div>
  );
};

export default doctors;

export async function getStaticProps() {
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await url.json();
  return {
    props: { posts },
  };
}
