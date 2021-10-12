import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './style';

const useStyles = makeStyles(styles);

export default function FeaturedPostsSlider(props) {
  const classes = useStyles();
  const { posts } = props;

  const [index, setIndex] = React.useState(0);

  return (
    <div className={classes.root}>
      <p>Featured Posts</p>
      <div className={classes.post}>
        <img src={posts[index].image} alt="" />
        <div>
          <span>CATEGORY</span>
          <p>{posts[index].title}</p>
          <span>By {posts[index].detail}</span>
          <span>Read More {'>'}</span>
          <div>
            <span>{index + 1} / {posts.length}</span>
            <div>
              <img src="/images/arrow-left.svg" alt="Left Arrow" onClick={() => setIndex(index > 0 ? index - 1 : index)} />
              <img src="/images/arrow-right.svg" alt="Right Arrow" onClick={() => setIndex(index < posts.length - 1 ? index + 1 : index)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}