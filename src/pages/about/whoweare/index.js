
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from '../style';

const useStyles = makeStyles(styles);

const tabs = [
  'Honor',
  'Grit',
  'Hope',
  'Love',
  'Curiosity',
];

function WhowearePage() {
  const classes = useStyles();

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <div className={classes.hero}>
        <span>
          Company Culture at Valkyrie 
        </span>
        <p>Our value is our people. Without them, we’re just a collection of laptops</p>
      </div>
      <div className={classes.metrics}>
        <p>Company Metrics</p>
        <span>
          “We've worked with and solved problems for a wide range of organizations from defense to healthcare to racing to nonprofits.”
          <br/><br/>
          At Valkyrie, we’re big fans of data. Here are a few data points that illustrate what we’ve been up to. 
        </span>
        <div>
          <div>
            <p>We have</p>
            <h1>26</h1>
            <span>Team Members</span>
          </div>
          <div>
            <p>Donated</p>
            <h1>$584,978.92</h1>
            <span>in pro-bono data science services</span>
          </div>
          <div>
            <p>Valkyrie wings have been on</p>
            <h1>18 <span>in</span> 119</h1>
            <span>Cars&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Races</span>
          </div>
        </div>
      </div>
      <div className={classes.special}>
        <div>
          <p>What make us special</p>
          <ol>We apply truths derived from research to solve challenges, drive impact and create value.</ol>
          <ol>We advance the light of knowledge and truth to empower our interconnected world.</ol>
        </div>
      </div>
      <div className={classes.values}>
        <h1>Our daily values</h1>
        <p>Let’s make this section a hover effect or some kind of interactive effect triggered when the mouse hovers over each value.</p>
        <div>
          {tabs.map((val, index) => (<Button key={index} style={index === tab ? {borderBottom: '3px solid white'} : {}} onClick={() => setTab(index)}>{val}</Button>))}
          <div>
            <p>
              At Valkyrie, we manifest honor from the beginning to end of our client work. Through the diligent oversight of our Algorithmic Accountability task force, we take into account our clients and their complete ecosystem of stakeholders, ensuring equitable and impactful results.
            </p>
            <div />
          </div>
        </div>
      </div>
      <div className={classes.hello}>
        <p>Become a Valkyrie</p>
        <Button>Say Hello</Button>
      </div>
    </>
  );
}

export default WhowearePage;