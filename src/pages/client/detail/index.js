
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from '../style';
import { useRouter } from 'next/router';

const useStyles = makeStyles(styles);

const tabs = [
  'The Challenge',
  'The Solution',
  'The Outcome',
];

const data = {
  challenge: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  solution: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    solution_image: '/images/solution.png',
  },
  outcome: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    outcome_image: '/images/outcome.png',
    author_image: '/images/author.png',
    author_name: 'John William',
    header: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.'
  },
}

const ImageCard = (props) => {
  const classes = useStyles();

  const { image, title } = props;

  return (
    <div className={classes.image_card}>
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default function ClientDetailPage() {
  const classes = useStyles();

  const router = useRouter();

  const id = router.query.id;

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <div className={classes.case}>
        <div>
          <img src="/images/business-icon.png" alt="business" />
          <span>Case Study</span>
        </div>
        <span>
          Case study Title Example {id}
        </span>
        <p>We helped our  (Banking, Healthcare, or other industry) client build (insert our solution), which saved them (insert value of services...how we made impact).</p>
      </div>
      <div className={classes.tabs}>
        <div>
          {tabs.map((val, index) => ( <Button key={index} onClick={() => setTab(index)} style={tab === index ? {borderColor: '#0065F2'} : {}}>{val}</Button> ))}
        </div>
        {Object.keys(data).map((val ,index) => (
          <div key={index} id={val} style={index !== tab ? {display: 'none'} : {}}>
            {data[val].header && (<h4>{data[val].header}</h4>)}
            {data[val].author_name && (
              <div>
                <img src={data[val].author_image} alt="" />
                <p>{data[val].author_name}</p>
              </div>
            )}
            {data[val].outcome_image && (<img src={data[val].outcome_image} alt="" />)}
            <h3>The {val[0].toUpperCase() + val.substring(1)}</h3>
            {data[val].solution_image && (<img src={data[val].solution_image} alt="" />)}
            <span>{data[val].description}</span>
          </div>
        ))}
      </div>
      <div className={classes.number_board}>
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
          <h1>18 <span>in</span> 119</h1>
          <span>Cars&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Races</span>
        </div>
      </div>
      <div className={classes.realted}>
        <div>
          <span>Related Case Studies</span>
          <div>
            <img src="/images/arrow-left.svg" alt="Left Arrow" />
            <img src="/images/arrow-right.svg" alt="Right Arrow" />
          </div>
        </div>
        <ImageCard image="/images/case-study.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ImageCard image="/images/case-study.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
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
