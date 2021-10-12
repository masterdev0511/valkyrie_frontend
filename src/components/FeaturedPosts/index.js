import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './style';

const useStyles = makeStyles(styles);

export default function FeaturedPosts(props) {
  const classes = useStyles();

  const { posts, featured_post } = props;

  const Post = (props) => {
    const classes = useStyles();
  
    const { title, author, image, isLast } = props;
  
    return (
      <div className={classes.post} style={!isLast ? {borderBottom: '1px solid #101219', marginBottom: '32px'} : {}}>
        <img src={image} alt="" />
        <div>
          <span>CATEGORY</span>
          <p>{title}</p>
          <span>By {author}</span>
        </div>
      </div>
    );
  }
  
  const Featured = (props) => {
    const classes = useStyles();
  
    const { title, author, image } = props;
  
    return (
      <div className={classes.featured}>
        <img src={image} alt="" />
        <span>CATEGORY</span>
        <p>{title}</p>
        <span>By {author}</span>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <p>Featured Posts</p>
      <div>
        <Featured title={featured_post.title} author={featured_post.author} image={featured_post.image} />
        <div>
          {posts.map((post, index) => (
            <Post key={index} title={post.title} author={post.author} image={post.image} isLast={index === posts.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}