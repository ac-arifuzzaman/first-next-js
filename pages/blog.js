import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

// step 1: collect all the files from blogdata directorty
// step 2: iterate through them and Display then

const Blog = () => {
  return (
    <div className={styles.main}>
      <div>
        <Link href={"/blogpost/learn-javascript"}>
          <h2 className={styles.blogitemh2}>How to learn JavaScript in 2022</h2>
        </Link>
        <p>JavaScript is a machine language</p>
      </div>
      <div>
        <h2 className={styles.blogitemh2}>How to learn JavaScript in 2022</h2>
        <p>JavaScript is a machine language</p>
      </div>
      <div>
        <h2 className={styles.blogitemh2}>How to learn JavaScript in 2022</h2>
        <p>JavaScript is a machine language</p>
      </div>
      <div>
        <h2 className={styles.blogitemh2}>How to learn JavaScript in 2022</h2>
        <p>JavaScript is a machine language</p>
      </div>
    </div>
  );
};

export default Blog;
