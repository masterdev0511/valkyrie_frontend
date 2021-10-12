
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from '../style';
import FeaturedPostsSlider from '../../../components/FeaturedPostsSlider';

const useStyles = makeStyles(styles);

const posts = [
  {
    title: "Announcing Valkyrie Virtue: Uplifting Nonprofits and Women in STEM",
    detail: "At Valkyrie, we believe data science has the potential to transform lives and push humanity forward. And with 2020 serving as an incredibly challenging year for all...",
    image: "/images/post1.png",
  },
  {
    title: "Valkyrie to Work with Global Medical Response to ...",
    detail: "Valkyrie, a science-driven firm that solves organizational challenges using artificial and augmented intelligence, grew its business 50 percent year-over-year in the second quarter of 2020.",
    image: "/images/post2.png",
  },
];

function PhilanthropyPage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Philanthropy</span>
        </div>
        <span>
          Science for Impact
        </span>
        <p>Valkyrie Virtue is a home to our philanthropic initiative with a primary focus on AI & data science.</p>
      </div>
      <div className={classes.philanthropy_overview}>
        <div>
          <p>Science for Social Impact</p>
          <div>
            <span>
              At Valkyrie, we believe data science has the potential to transform lives and push humanity forward for the betterment of all. As dedicated scientists, it is our charter to use our sought after capabilities to advance this mission.
              <br/><br/>
              Valkyrie Virtue is a home to our philanthropic operations with a primary focus on AI & data science by providing our services and resources to those that need it most. Virtue serves as the tangible manifestation of our values and an effort our company remains deeply committed to.  
            </span>
            <p>
              Virtue encapsulates all of our philanthropic efforts and allows us to directly invest in our community in two distinct ways; through our investing in future scientists and our pro-bono data science services. 
            </p>
          </div>
        </div>
        <div>
          <img src="images/philanthropy.png" alt="" />
          <img src="images/philanthropy.png" alt="" />
          <span>
            Through Virtue, we are committed to spotlighting underrepresented and emerging voices in science. To further promote diversity in our field, we’ve launched our Women in STEM Scholarship Fund for local Austin students pursuing higher education in STEM. With a special focus on women of color, these scholarships aim to broaden the scientific community and provide new opportunities to pursue male-dominated careers in college and in the workplace. We believe it is critical to invest in future women scientists, and we are especially proud to be championing these young women from our home city of Austin, Texas. 
          </span>
          <span>
            The second pillar of Valkyrie Virtue is our pro-bono program. Though our industry of data science is growing, access to it is not. By donating our services, Virtue provides white-glove data science solutions to nonprofit organizations making a demonstrable impact in their respective communities. Democratizing our services allows us to provide our nonprofit clients with the cutting edge machine learning solutions they need in order to reach their full potential.
          </span>
        </div>
      </div>
      <div className={classes.method}>
        <p>Valkyrie R.E.D Method</p>
        <span>By investing in future women scientists and supporting nonprofit organizations through our capabilities, Valkyrie Virtue is actively driving social impact through science. </span>
        <img src="/images/flow-chart-2.png" alt="" width="100%" />
        <div>
          <p>
            Algorithmic Accountability<br/>
            Working With Clients<br/>
            Understanding the Cause
          </p>
          <p>
            Optimizing Resources<br/>
            Transforming Data Sets
          </p>
          <p>
            Deep Data Processing<br/>
            Delivering Solutions<br/>
            Consulting Best Practices
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

export default PhilanthropyPage;