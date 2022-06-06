import { useRouter } from "next/router";
import React from "react";

const Slug = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>{pid}</p>;
};

export default Slug;
