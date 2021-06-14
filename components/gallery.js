/*@jsxImportSource theme-ui*/

import Masonry from "react-masonry-css";

import Card from "./card";

import data from "../lib/data";

const Component = () => (
  <>
    <Masonry
      key="masonry"
      sx={{ backgroundImage:'linear-gradient(to bottom, #1c2963, #233477, #29408d, #2e4ca3, #3358b9)', py: [4, 5] }}
      breakpointCols={{
        10000: 4,
        1024: 3,
        640: 2,
        480: 1,
        default: 1,
      }}
      className="masonry-posts"
      columnClassName="masonry-posts-column"
    >
      {data.map(({ ...props }) => (
        <Card key={props.img} img_url={props.img} {...props} />
      ))}
    </Masonry>
    ,
    <style jsx global key="masonry-style">{`
      .masonry-posts {
        display: flex;
        width: 100%;
        max-width: 100%;
      }
      .masonry-posts-column {
        background-clip: padding-box;
      }
      .post {
        margin-bottom: 2px;
      }
      @media (min-width: 32em) {
        .masonry-posts {
          padding-right: 12px;
        }
        .masonry-posts-column {
          padding-left: 12px;
        }
        .post {
          border-radius: 12px;
          margin-bottom: 12px;
        }
      }
      @media (min-width: 64em) {
        .masonry-posts {
          padding-right: 24px;
        }
        .masonry-posts-column {
          padding-left: 24px;
        }
        .post {
          margin-bottom: 24px;
        }
      }
    `}</style>
  </>
);

export default Component;
