import React from "react";

const about = ({ users }) => {
  return (
    <div>
      <h2>this is about page: {users.length}</h2>
    </div>
  );
};

export default about;

export async function getStaticProps(context) {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await url.json();
  return {
    props: { users },
  };
}
