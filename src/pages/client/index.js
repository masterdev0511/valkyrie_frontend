
import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styles from './style';
import { useRouter } from 'next/router';

const useStyles = makeStyles(styles);

const cards = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card3.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card3.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/card3.png",
  },
];

const Card = (props) => {
  const classes = useStyles();

  const { title, image } = props;

  return (
    <div className={classes.card} {...props} >
      <img src={image} alt="" />
      <span>Industry Category</span>
      <p>{title}</p>
    </div>
  );
}

export default function ClientWorkPage() {
  const classes = useStyles();

  const router = useRouter();

  const handleClick = (index) => {
    router.push(`/client/detail/${index}`);
  }

  return (
    <>
      <div className={classes.hero}>
        <span>Driving Client Success</span>
        <p>We create value and drive impact for clients by addressing their most critical challenges.</p>
        <img src="/images/logo-nike.svg" alt="" id="nike" />
        <img src="/images/logo-puma.svg" alt="" id="puma" />
        <img src="/images/logo-leaf.svg" alt="" id="leaf" />
        <img src="/images/logo-adidas.svg" alt="" id="adidas" />
        <img src="/images/logo-nb.svg" alt="" id="nb" />
        <img src="/images/logo-np.svg" alt="" id="np" />
        <img src="/images/logo-nb.svg" alt="" id="nb1" />
        <img src="/images/logo-puma1.svg" alt="" id="puma1" />
      </div>
      <div className={classes.cards}>
        {cards.map((card, index) => ( <Card key={index} title={card.title} image={card.image} onClick={() => handleClick(index + 1)} /> ))}
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
