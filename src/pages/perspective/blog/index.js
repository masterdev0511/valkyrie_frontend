
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../style';

const useStyles = makeStyles(styles);

const featured_voice = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  duration: '5',
  image: '/images/featured_voice.png',
};

const cards = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
];

const featured_video = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description: 'At Valkyrie, we believe data science has the potential to transform lives and push humanity forward...',
  duration: '5',
  url: '/videos/featured_video.avi',
};

const related_cards = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duration: '5',
    image: '/images/featured_voice.png',
  },
];

const Card = (props) => {
  const classes = useStyles();

  const { title, duration, image } = props;

  return (
    <div className={classes.card}>
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <span>{duration} mins read</span>
      </div>
    </div>
  );
}

function BlogPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.voice}>
        <h1>Our Voice</h1>
        <div>
          <img src={featured_voice.image} alt="" />
          <h3>{featured_voice.title}</h3>
          <p>{featured_voice.description}</p>
          <span>{featured_voice.duration} mins read</span>
        </div>
        <div>
          {cards.map((val, index) => (<Card key={index} title={val.title} duration={val.duration} image={val.image} />))}
        </div>
      </div>
      <div className={classes.video}>
        <div>
          <iframe src={featured_video.url} />
        </div>
        <div>
          <span>CATEGORY</span>
          <h3>{featured_video.title}</h3>
          <p>{featured_video.description}</p>
          <span>{featured_video.duration} mins read</span>
        </div>
      </div>
      <div className={classes.related}>
        {related_cards.map((val, index) => (<Card key={index} title={val.title} duration={val.duration} image={val.image} />))}
      </div>
    </>
  );
}

export default BlogPage;