
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../../style';

const useStyles = makeStyles(styles);

const posts = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/featured_voice.png',
  },
];

const Card = (props) => {
  const classes = useStyles();

  const { title, image } = props;

  return (
    <div className={classes.detail_card}>
      <img src={image} alt="" />
      <p>{title}</p>
      <span>Read More {'>'}</span>
    </div>
  );
}

function BlogDetailPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.detail}>
        <h4>Tech</h4>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p id="center">Our take on the world of data science, its strategic implications, and what you need to know to navigate and thrive in a data-powered world.</p>
        <span>3 mins read</span>
        <span>July 4, 2021</span>
        <img src="/images/blog_detail.png" alt="" id="top" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img src="/images/blog_detail.png" alt="" />
        <div>
          <img src="/images/blog_detail.png" alt="" />
          <img src="/images/blog_detail.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={classes.detail_related}>
        <h3>Related Posts</h3>
        <div>
          {posts.map((post, index) => ( <Card key={index} title={post.title} image={post.image} /> ))}
        </div>
      </div>
    </>
  );
}

export default BlogDetailPage;