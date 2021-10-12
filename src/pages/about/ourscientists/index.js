
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../style';

const useStyles = makeStyles(styles);

const presses = [
  {
    title: "Meredith Butterfield- Search Enterprise | Techtarget Magazine",
    image: "/images/press1.png",
  },
  {
    title: "Keatra Nesbitt - From Math Teacher to Data Scientist ",
    image: "/images/press2.png",
  },
  {
    title: "Fintech Podcast: Episode 038 - Data science, AI initiatives & Algorithms - Charlie Burgoyne",
    image: "/images/press3.png",
  },
];

const Press = (props) => {
  const classes = useStyles();

  const { data } = props;

  return (
    <div className={classes.press}>
      <img src={data['image']} alt="" />
      <div>
        <img src="/images/card-logo.svg" alt="Logo" />
        Logo
      </div>
      <p>{data['title']}</p>
      <span>Read More {'>'}</span>
    </div>
  );
}

function OurscientistsPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <span>
          Meet The Team at Valkyrie
        </span>
        <p>We are dedicated to the intrepid scientists who selflessly advance humanity in the face of adversity</p>
      </div>
      <div className={classes.team_bio}>
        <div>
          <p>Meet Our<br/>Scientists</p>
          <span>
            The Valkyrie team is comprised of scientists and industry leaders from a variety of fields and backgrounds, brought together under one mission and two wings. We are a team that constantly strives for progress, from our client work to serving our community. 
          </span>
        </div>
        <div>
          <img src="/images/user.png" alt="Scientist1" />
          <img src="/images/user.png" alt="Scientist2" />
          <img src="/images/user.png" alt="Scientist3" />
          <img src="/images/user.png" alt="Scientist4" />
          <img src="/images/user.png" alt="Scientist5" />
          <img src="/images/user.png" alt="Scientist6" />
          <img src="/images/user.png" alt="Scientist7" />
          <img src="/images/user.png" alt="Scientist8" />
        </div>
      </div>
      <div className={classes.presses}>
        <p>Press</p>
        {presses.map((val, index) => (<Press key={index} data={val} />))}
      </div>
      <div className={classes.hello}>
        <p>Become a Valkyrie</p>
        <Button>Say Hello</Button>
      </div>
    </>
  );
}

export default OurscientistsPage;