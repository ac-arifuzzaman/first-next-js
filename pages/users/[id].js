import React from "react";

const user = ({ user }) => {
  const { name } = post;
  return (
    <div>
      <h3>Not valid:</h3>
      <h2>{id}</h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default user;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const url = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await url.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  // Pass post data to the page via props
  return { props: { post: user } };
}
