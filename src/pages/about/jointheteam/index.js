
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../style';

const useStyles = makeStyles(styles);

const images = [
  '/images/story1.png',
  '/images/story2.png',
  '/images/story3.png',
  '/images/story1.png',
  '/images/story2.png',
  '/images/story3.png',
];

function JointheteamPage() {
  const classes = useStyles();

  const [image, setImage] = React.useState(0);

  const moveLeft = () => {
    if(image > 0) setImage(image - 1);
    const el = document.getElementById('slider');
    el.scrollLeft -= el.clientWidth;
  }

  const moveRight = () => {
    if(image < images.length - 1) setImage(image + 1);
    const el = document.getElementById('slider');
    el.scrollLeft += el.clientWidth;
  }

  return (
    <>
      <div className={classes.hero}>
        <span>
          Become A Valkyrie
        </span>
        <p>Valkyrie is a services company that applies science to data to solve challenges, drive impact and create value.</p>
      </div>
      <div className={classes.hire}>
        <div>
          <p>How we hire at Valkyrie</p>
          <span>At Valkyrie, we champion a culture of integrity, ingenuity and inclusion. We see opportunity in adversity and believe in creating a brighter, more humane future with thoughtfully designed data-driven solutions.</span>
        </div>
        <div>
          <img src="/images/hire.png" alt="" />
        </div>
      </div>
      <div className={classes.gallery}>
        <div id="slider">
          {images.map((val, index) => ( <img key={index} src={val} alt="" /> ))}
        </div>
        <div>
          <span>{image + 1 < 10 ? '0' + (image + 1) : image + 1} / {images.length < 10 ? '0' + images.length : images.length}</span>
          <div>
            {images.map((val, index) => ( <p key={index} style={index === image ? {borderColor: 'white'} : {}} /> ))}
          </div>
          <div>
            <img src="/images/arrow-left.svg" alt="left" onClick={() => moveLeft()} />
            <img src="/images/arrow-right.svg" alt="right" onClick={() => moveRight()} />
          </div>
        </div>
      </div>
      <div className={classes.employment}>
        <div>
          <img src="/images/employment.png" alt="" />
        </div>
        <div>
          <p>Join The Team</p>
          <span>As a growing company, we're always looking to connect with great people. We hire people who think differently and have a unique, science-driven approach to solving challenging problems. We go above and beyond for our clients and our community, and center the greatest good in all the work we do. </span>
        </div>
      </div>
      <div className={classes.hello}>
        <p>Become a Valkyrie</p>
        <Button>Say Hello</Button>
      </div>
    </>
  );
}

export default JointheteamPage;