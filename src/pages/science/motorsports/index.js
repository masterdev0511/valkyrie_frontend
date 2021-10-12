
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from '../style';
import FeaturedPosts from '../../../components/FeaturedPosts';

const useStyles = makeStyles(styles);

const posts = [
  {
    title: "Valkyrie In-Depth: 2020 24 Hours of Le Mans Part 1",
    author: "Author Name",
    image: "/images/post1.png",
  },
  {
    title: "From the Lab to the Track: 2019 In Review",
    author: "Author Name",
    image: "/images/post2.png",
  },
  {
    title: "2021 - Offical Member of Forbes",
    author: "Author Name",
    image: "/images/post3.png",
  },
];

const featured_post = {
  title: "A Year In Review at Valkyrie",
  author: "Author Name",
  image: "/images/featured.png",
};

function MotorsportsPage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Motorsports</span>
        </div>
        <span>
          Science In Motion
        </span>
        <p>Our racing activities bring our scientists and clients to the highest levels of motorsports around the world.</p>
      </div>
      <div className={classes.motorsports_overview}>
        <p>Valkyrie Veocity</p>
        <span>Velocity is the manifestation of Valkyrie’s methods and passion in an adrenaline-filled medium. By partnering with motorsports teams and series, Valkyrie proves how Science Applied to racing can generate new technologies, brand recognition and winning partnerships.</span>
        <img src="/images/motorsports.png" alt="" />
      </div>
      <div className={classes.method}>
        <p>Valkyrie R.E.D Method</p>
        <span>Racing has historically been rooted in precision, science, design, and calculated risk. Valkyrie Velocity, our racing initiative, serves as the tangible manifestation of science and sport. Velocity affords us the ability to share our science in a tangible, exciting way. </span>
        <img src="/images/flow-chart-2.png" alt="" width="100%" />
        <div>
          <p>
            Finding Valuable Insights<br/>
            Interview End Users<br/>
            Working With Clients<br/>
            Understanding the Cause
          </p>
          <p>
            Experimenting With Datasets<br/>
            Developing Metrics<br/>
            Incorporating Machine Learning 
          </p>
          <p>
            Competitor Statistics<br/>
            Data Analysis Tools<br/>
            Implement Algorithms
          </p>
        </div>
        <p>
          The RED Method is Valkyrie’s unique way of applying the scientific method to data in order to solve our clients’ biggest challenges
        </p>
      </div>
      <div className={classes.gallery}>

      </div>
      <FeaturedPosts featured_post={featured_post} posts={posts} />
      <div className={classes.hello}>
        <p>Say Hello</p>
        <TextField placeholder="Name" variant="outlined" />
        <TextField placeholder="Phone Number" variant="outlined" />
        <TextField placeholder="Message" variant="outlined" multiline rows={4} />
        <Button>Submit</Button>
      </div>
    </>
  );
}

export default MotorsportsPage;