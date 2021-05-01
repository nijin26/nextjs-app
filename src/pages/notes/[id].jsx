/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";

export default ({ note }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  console.log(params + "params");
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
}
