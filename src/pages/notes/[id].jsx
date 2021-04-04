import React from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>Notes Page with id : {id}</div>;
};
