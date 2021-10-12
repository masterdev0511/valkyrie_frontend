
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../style';

const useStyles = makeStyles(styles);

const featured_news = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '08.10.2021',
  image: '/images/news.png',
};

const news = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '08.10.2021',
    image: '/images/news.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '08.10.2021',
    image: '/images/news.png',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '08.10.2021',
    image: '/images/news.png',
  },
];

const News = (props) => {
  const classes = useStyles();

  const { title, date, image, isLarge } = props;

  return (
    <div className={classes.news}>
      <img src={image} alt="" style={isLarge ? {height: '400px'} : {}} />
      <p>News or Event</p>
      <h3 style={isLarge ? {width: '80%', fontSize: '40px'} : {}}>{title}</h3>
      <span>{date} mins read</span>
    </div>
  );
}

function NewsPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.news_hero}>
        <h3>Unlocking Analytics with Data Lake and Graph Analysis</h3>
        <Button>Read More</Button>
        <span>08.10.2021 ・5 mins read</span>
      </div>
      <div className={classes.news_view}>
        <div>
          <News title={featured_news.title} date={featured_news.date} image={featured_news.image} isLarge={true} />
        </div>
        <div>
          <News title={news[0].title} date={news[0].date} image={news[0].image} />
        </div>
      </div>
      <div className={classes.news_related}>
        {news.map((val, index) => (<News key={index} title={val.title} date={val.date} image={val.image} />))}
      </div>
      <div className={classes.news_featured}>
        <img src={featured_news.image} alt="" />
        <div>
          <p>News or Event</p>
          <h3>{featured_news.title}</h3>
          <span>{featured_news.date}</span>
        </div>
      </div>
      <div className={classes.news_related}>
        {news.map((val, index) => (<News key={index} title={val.title} date={val.date} image={val.image} />))}
        <Button>Read More</Button>
      </div>
    </>
  );
}

export default NewsPage;