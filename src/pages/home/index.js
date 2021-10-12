
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from './style';
import FeaturedPosts from '../../components/FeaturedPosts';

const useStyles = makeStyles(styles);

const tabs = [
  'Business',
  'Government',
  'Investments',
  'Philanthropy',
  'Racing',
];

const stories = [
  {
    title: "Homefront Fund",
    description: "Critical to our mission of creating a plan to address homelessness was data-driven analysis of where the need in our city really is. Valkyrie's in-depth research contributions as data scientists allows us to create a plan that more accurately prevents community members from experiencing homelessness - Tyson Tuttle, CEO at Silicon Labs",
    url: "/images/story1.png",
  },
  {
    title: "BuildGroup",
    description: "Valkyrie's technical capabilities are matched by their integrity and determination. The Valkyrie team has been core to the realization of our data-driven investing thesis, and has enabled our team through data science and engineering. They have worked with us to incorporate our operating experience and strategic priorities into an AI product that we use to find great entrepreneurs and to help them grow their companies — Lanham Napier, CEO at BuildGroup",
    url: "/images/story2.png",
  },
  {
    title: "Global Medical Response (GMR)",
    description: "Valkyrie has done incredible work and provided invaluable, critical insight in the midst of an unprecedented global pandemic,” said Randy Owen, CEO of GMR. “They’ve helped our team of first responders navigate one of the most challenging time periods in the modern era, and the assistance that they’ll continue to provide will only enhance our team’s response capabilities and make our essential",
    url: "/images/story3.png",
  },
  {
    title: "Homefront Fund",
    description: "Critical to our mission of creating a plan to address homelessness was data-driven analysis of where the need in our city really is. Valkyrie's in-depth research contributions as data scientists allows us to create a plan that more accurately prevents community members from experiencing homelessness - Tyson Tuttle, CEO at Silicon Labs",
    url: "/images/story1.png",
  },
  {
    title: "BuildGroup",
    description: "Valkyrie's technical capabilities are matched by their integrity and determination. The Valkyrie team has been core to the realization of our data-driven investing thesis, and has enabled our team through data science and engineering. They have worked with us to incorporate our operating experience and strategic priorities into an AI product that we use to find great entrepreneurs and to help them grow their companies — Lanham Napier, CEO at BuildGroup",
    url: "/images/story2.png",
  },
  {
    title: "Global Medical Response (GMR)",
    description: "Valkyrie has done incredible work and provided invaluable, critical insight in the midst of an unprecedented global pandemic,” said Randy Owen, CEO of GMR. “They’ve helped our team of first responders navigate one of the most challenging time periods in the modern era, and the assistance that they’ll continue to provide will only enhance our team’s response capabilities and make our essential",
    url: "/images/story3.png",
  },
];

const posts = [
  {
    title: "Four Ways AI Will Propel Your Business",
    author: "Author Name",
    image: "/images/post1.png",
  },
  {
    title: "New Database Trends & Applications in Data Science",
    author: "Author Name",
    image: "/images/post2.png",
  },
  {
    title: "Four Ways AI Will Propel Your Business",
    author: "Author Name",
    image: "/images/post3.png",
  },
];

const featured_post = {
  title: "Science, Applied: Three Ways AI and ML are Advancing the insurance Inductry",
  author: "Author Name",
  image: "/images/featured.png",
};

const Card = (props) => {
  const classes = useStyles();

  const { title, description, url, isSelect } = props;

  return (
    <div 
      className={classes.card} 
      style={{color: 'black', backgroundImage: `url(${url})`, outline: isSelect ? '5px ridge white' : 'none' }}
    >
      <img src="/images/business-icon.svg" alt="" />
      <p>{title}</p>
      <span>{description}</span>
    </div>
  );
}

function HomePage() {
  const classes = useStyles();

  const [tab, setTab] = React.useState(0);
  const [mtab, setMtab] = React.useState(0);
  const [storyIndex, setStoryIndex] = React.useState(0);

  const moveLeft = () => {
    const card_width = storyIndex === 1 ? (window.innerWidth - 17) * 0.4 + 100 : (window.innerWidth - 17) * 0.4 + 40;
    if(storyIndex > 0) setStoryIndex(storyIndex - 1);
    const el = document.getElementById('slider');
    el.scrollLeft -= card_width;
  }

  const moveRight = () => {
    const card_width = storyIndex === stories.length - 2 ? (window.innerWidth - 17) * 0.4 + 100 : (window.innerWidth - 17) * 0.4 + 40;
    if(storyIndex < stories.length - 1) setStoryIndex(storyIndex + 1);
    const el = document.getElementById('slider');
    el.scrollLeft += card_width;
  }

  return (
    <>
      <div className={classes.business}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>BUSINESS</span>
        </div>
        <span>
          Science,<br/> Applied to <span>Business</span>
        </span>
        <p>Science, applied for meaningful impact for our clients, employees and the world around us.</p>
        <Button variant="contained">Action</Button>
        <img src="/images/graph1.png" alt="graph" width="638" />
        <img src="/images/graph2.png" alt="graph" width="638" />
        <div>
          <img src="/images/arrow-left.svg" alt="Left Arrow" />
          <img src="/images/arrow-right.svg" alt="Right Arrow" />
        </div>
      </div>
      <div className={classes.tabs}>
        <div>
          {tabs.map((val, index) => (
            <Button className={index === tab ? classes.black : ''} key={index} onClick={() => setTab(index)}>{val}</Button>
          ))}
        </div>
        <div>
          <div>
            <img src="/images/architecture.png" alt="Architecture" />
          </div>
          <div>
            <span>
              Valkyrie solves industry’s hardest problems by applying the scientific method to data to gain meaningful insights. 
              We are comprised of top scientific talent across a variety of fields. 
              Our team has 50+ years of combined experience in the most prestigious government labs, including: DARPA, NASA & AFRL. 
              From physics to mathematics to biology, our scientists are advancing the field of Artificial Intelligence and relying our research into industry transforming applications.
            </span>
            <p>
              Valkyrie applies science to data to solve challenges, drive impact and create value.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.customer_stories}>
        <div>
          <p>Customer Stories</p>
          <div>
            <p>{storyIndex + 1 < 10 ? '0' + (storyIndex + 1) : storyIndex + 1}</p>
            <div />
            <p>{stories.length < 10 ? '0' + stories.length : stories.length}</p>
            <img src="/images/arrow-left.svg" alt="left" onClick={() => moveLeft()} />
            <img src="/images/arrow-right.svg" alt="right" onClick={() => moveRight()} />
          </div>
        </div>
        <div id="slider">
          {stories.map((val, index) => (<Card key={index} title={val.title} description={val.description} url={val.url} isSelect={index === storyIndex} />))}
        </div>
        <Button>See more client work</Button>
      </div>
      <div className={classes.method}>
        <div>
          <p>Valkyrie R.E.D Method</p>
          <span>Valkyrie’s secret sauce is our RED Method. Through iterating on Research, Evaluation, and Deployment, our scientists uncover hidden insights within our clients’ data and create solutions based on intelligence.</span>
          <div>
            {tabs.map((val, index) => (
              <Button key={index} onClick={() => setMtab(index)} style={ index === mtab ? { color: 'black'} : {} }>{val}</Button>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.flow}>
        <img src="/images/flow-chart-1.png" alt="Flow Chart" width="88%" />
        <div>
          <p>
            Interview Key Stakeholders<br/>
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
        <img src="/images/hero-bg.png" alt="Hero" />
      </div>
      <FeaturedPosts featured_post={featured_post} posts={posts} />
      <div className={classes.hello}>
        <p>Interested to working with us?</p>
        <Button>Say Hello</Button>
      </div>
    </>
  );
}

export default HomePage;