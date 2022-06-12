import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

// step 1: Find the file corresponding to the slug
// step 2: Populate then inside the page

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          voluptas, deleniti eos culpa, nihil aspernatur eveniet ullam nisi ipsa
          officia excepturi et amet enim autem dignissimos explicabo. Aut iure
          labore excepturi dolorum consequuntur ducimus dolore recusandae
          aspernatur provident nobis minima, sit cupiditate inventore hic alias
          distinctio nesciunt neque rerum expedita repudiandae accusantium fuga
          eveniet enim ipsa! Sequi molestias rerum vitae nulla sapiente
          reprehenderit tempora perspiciatis consequuntur delectus ut laborum
          dolor possimus nostrum nam, voluptatem, distinctio accusamus, veniam
          commodi ullam corrupti ipsa? Vel itaque atque porro rem voluptate
          dolore?
        </p>
      </div>
    </div>
  );
};

export default Post;
