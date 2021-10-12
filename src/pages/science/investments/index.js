
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from '../style';
import FeaturedPostsSlider from '../../../components/FeaturedPostsSlider';

const useStyles = makeStyles(styles);

const posts = [
  {
    title: "Valkyrie Embarks on Fourth Year With Rapid Growth & Expanded C-Suite",
    detail: "Valkyrie, a science-driven firm that solves organizational challenges using artificial and augmented intelligence, grew its business 50 percent year-over-year in the second quarter of 2020.",
    image: "/images/post1.png",
  },
  {
    title: "Valkyrie to Work with Global Medical Response to ...",
    detail: "Valkyrie, a science-driven firm that solves organizational challenges using artificial and augmented intelligence, grew its business 50 percent year-over-year in the second quarter of 2020.",
    image: "/images/post2.png",
  },
  {
    title: "Questions to Ask Your Data",
    detail: "Valkyrie, a science-driven firm that solves organizational challenges using artificial and augmented intelligence, grew its business 50 percent year-over-year in the second quarter of 2020.",
    image: "/images/post3.png",
  },
];

function InvestmentsPage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Investments</span>
        </div>
        <span>
          Bringing data-driven intelligence to life through alpha
        </span>
        <p>Valkyrie Vertex is an AI-driven venture fund leveraging data to identify companies that are more likely to outperform their peers in the market.</p>
      </div>
      <div className={classes.investments_overview}>
        <img src="/images/investments.png" alt="" />
        <div>
          <p>
            Data-driven Investments
          </p>
          <span>
            We've turned our experience and expertise in AI/ML based venture investing into a new venture. Valkyrie Vertex is our data science powered investment group. The algorithms we develop in R&D enhance the performance of our funds and inform our theses in private equities, tier-2 VC funds, and real estate investments.
          </span>
        </div>
      </div>
      <div className={classes.method}>
        <p>Valkyrie R.E.D Method</p>
        <span>Differentiating between skill and luck ranges from difficult to impossible for an investor. While it may be a game of chance for investors, our machine learning and custom algorithmic techniques are able to accurately separate luck from skill. Vertex uses AI/ML capabilities to inform VC funds of alpha and beta profiles. This leads to higher-expected-returns on lower-than-average risks, in comparison to current venture fund or fund-of-funds investing offers.</span>
        <img src="/images/flow-chart-2.png" alt="" width="100%" />
        <div>
          <p>
            Finding Areas of Opportunity<br/>
            Using Data Sources<br/>
            Investigate Investment Decision Process
          </p>
          <p>
            Exploring Correlations<br/>
            Creating A Balanced Structure<br/>
            Coding Investment Insights
          </p>
          <p>
            Identify Opportunities with Algorithms<br/>
            Evaluate Investment Performance<br/>
            Using Insights for Investment
          </p>
        </div>
        <p>
          The RED Method is Valkyrie’s unique way of applying the scientific method to data in order to solve our clients’ biggest challenges
        </p>
      </div>
      <FeaturedPostsSlider posts={posts} />
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

export default InvestmentsPage;