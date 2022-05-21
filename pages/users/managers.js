import Link from "next/link";
import React from "react";

const managers = ({ users }) => {
  return (
    <div>
      <h6>this is managers from x girlfriend</h6>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}{" "}
          <Link href={`users/${user.id}`}>
            <a>explore</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default managers;

export async function getStaticProps(context) {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await url.json();
  return {
    props: { users },
  };
}
