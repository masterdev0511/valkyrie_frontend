
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
    title: "2021 - Offical Member of Forbes",
    author: "Author Name",
    image: "/images/post3.png",
  },
];

const featured_post = {
  title: "Science, Applied: Entertainment & Media Companies Leveraging AI and ML Capabilities",
  author: "Author Name",
  image: "/images/featured.png",
};

function BusinessPage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Business</span>
        </div>
        <span>
          Bringing data-driven intelligence to life across industry
        </span>
        <p>Uncover opportunities to drive competitive advantage with cutting-edge data science capabilities.</p>
      </div>
      <div className={classes.business_overview}>
        <p>Creating Competitive Advantage</p>
        <span>We deploy industry-leading data science capabilities that equip our clients to leverage insights within their data through our custom solutions. </span>
        <img src="/images/industry.png" alt="" />
      </div>
      <div className={classes.method}>
        <p>Valkyrie R.E.D Method</p>
        <span>Our operations serve to impact our planet with real, tangible, science-centered solutions. Valkyrie’s operations are centered around a process called the RED method. This application of the scientific method is at the core of our methodology to  how we approach all of our client’s biggest challenges.</span>
        <img src="/images/flow-chart-2.png" alt="" width="100%" />
        <div>
          <p>
            Interview Key<br/>
            Stakeholders<br/>
            Exploratory Data Analysis<br/>
            Graph Ontology<br/>
            Finding Valueable Insights
          </p>
          <p>
            Explore Client Challenges<br/>
            Working With Algorithms<br/>
            Creating Intelligible Data<br/>
            Using Historical Data
          </p>
          <p>
            Implementing Code<br/>
            Documentation & Processes<br/>
            Strategizing With Stakeholders<br/>
            Testing Code Effectiveness
          </p>
        </div>
        <p>
          The RED Method is Valkyrie’s unique way of applying the scientific method to data in order to solve our clients’ biggest challenges
        </p>
      </div>
      <div className={classes.story}>
        <div>
          <p>Better Risk Assessment With Behavioral Analysis</p>
          <div>
            <span>Valkyrie engaged with an international financial institution client to assist in reducing their default rate for personal loans. Through ingesting their data sources and experimenting on the data with the hypotheses we generated, Valkyrie was able to identify key features that had a critical affect on a customer’s ability to pay back a loan. With these findings, Valkyrie scientists were able to build a custom risk prediction engine that successfully cut the client’s default rate in half.</span>
            <div>
              <p>15.97%</p>
              <span>Previous Avg. Default Rate</span>
              <p>8.0%</p>
              <span>Current Avg. Default Rate</span>
            </div>
          </div>
          <Button variant="outlined">See Case Study</Button>
          <img src="/images/industry.png" alt="" />
        </div>
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

export default BusinessPage;