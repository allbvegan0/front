import React from "react";
import PropTypes from "prop-types";
import View from "../../components/organism/view";



const View0 = (props) => {
  return <View props={props} />;
};

export default View0;

// export async function getServerSideProps(ctx) {


//   const _feed = await fetch("http://localhost:4000/api/feed")
//   const feed = _feed.json()

//   const _draft = await fetch("http://localhost:4000/api/draft")
//   const draft = _draft.json()

//   return { props: { feed, draft } };
// }
