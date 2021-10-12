
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from '../style';
import FeaturedPosts from '../../../components/FeaturedPosts';

const useStyles = makeStyles(styles);

const posts = [
  {
    title: "Four Ways AI Will Propel Your Business",
    author: "Author Name",
    image: "/images/post1.png",
  },
  {
    title: "Valkyrie to Work with Global Medical Response to ...",
    author: "Author Name",
    image: "/images/post2.png",
  },
  {
    title: "Questions to Ask Your Data",
    author: "Author Name",
    image: "/images/post3.png",
  },
];

const featured_post = {
  title: "Change of Command: Valkyrie at USSOCOM",
  author: "Author Name",
  image: "/images/featured.png",
};

function GovernmentPage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Government</span>
        </div>
        <span>
          Bringing data-driven intelligence to life across the public domain
        </span>
        <p>Valkyrie is proud to be AI Advisors to government and defense officials.</p>
      </div>
      <div className={classes.government_overview}>
        <div>
          <p>Leading Innovation in Government</p>
          <span>With deep experience across industries and a relentless focus on driving strategic impact, we've earned a reputation as the “go-to” strategic data science firm.</span>
        </div>
      </div>
      <div className={classes.method}>
        <p>Valkyrie R.E.D Method</p>
        <span>Our operations serve to impact our planet with real, tangible, science-centered solutions. Valkyrie’s operations are centered around a process called the RED method. This application of the scientific method is at the core of our methodology to  how we approach all of our client’s biggest challenges.</span>
        <img src="/images/flow-chart-2.png" alt="" width="100%" />
        <div>
          <p>
            Interview End Users<br/>
            Defining Goals<br/>
            Social Media Research<br/>
            Battlefield Logistics
          </p>
          <p>
            Experiment With Prototypes<br/>
            Predictive Maintenance Algorithms<br/>
            Knowledge Graphs
          </p>
          <p>
            Analyze & Document Findings<br/>
            Integrate Advanced Solutions<br/>
            Ensuring Impactful Solutions
          </p>
        </div>
        <p>
          The RED Method is Valkyrie’s unique way of applying the scientific method to data in order to solve our clients’ biggest challenges
        </p>
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

export default GovernmentPage;