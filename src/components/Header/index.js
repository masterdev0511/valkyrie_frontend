
import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Link from '../../Link';
import styles from './style';

const useStyles = makeStyles(styles);

export default function Header() {
  const classes = useStyles();

  const [subMenu, setSubMenu] = React.useState('');

  React.useEffect(() => {
    ['about', 'science', 'perspective'].forEach(type => {
      const menu = document.getElementById(type);
      menu.style.display = "none";
    })
    if(subMenu) {
      const element = [...document.getElementsByTagName('a')].filter(val => val.textContent.toLowerCase().includes(subMenu))[0];
      const menu = document.getElementById(subMenu);
      menu.style.left = element.offsetLeft  - (200 - element.clientWidth) / 2 + 'px';
      menu.style.display = "flex";
    }
  }, [ subMenu ])

  return (
    <Container className={classes.root} maxWidth="xl">
      <div>
        <Link href="/">
          <img src="/images/mark.png" alt="Logo" />
        </Link>
        <div className={classes.linkPanel} onMouseLeave={() => setSubMenu('')}>
          <Link href="#" onMouseEnter={() => setSubMenu('about')}>
            About
            <img src="/images/arrow-down.svg" alt="Arrow" />
          </Link>
          <Link href="#" onMouseEnter={() => setSubMenu('science')}>
            Science Applied to...
            <img src="/images/arrow-down.svg" alt="Arrow" />
          </Link>
          <Link href="/client" onMouseEnter={() => setSubMenu('')}>Client work</Link>
          <Link href="#" onMouseEnter={() => setSubMenu('perspective')}>
            Perspective
            <img src="/images/arrow-down.svg" alt="Arrow" />
          </Link>
          <Link href="/contact" onMouseEnter={() => setSubMenu('')}>Contact Us</Link>
        </div>
        <div className={classes.subMenu} id="about" onMouseEnter={() => setSubMenu('about')}  onMouseLeave={() => setSubMenu('')}>
          <div>
            <Link href="/about/whoweare">Who we are</Link>
            <Link href="/about/ourscientists">Our scientists</Link>
            <Link href="/about/jointheteam">Join The Team</Link>
          </div>
          <span />
        </div>
        <div className={classes.subMenu} id="science" onMouseEnter={() => setSubMenu('science')}  onMouseLeave={() => setSubMenu('')}>
          <div>
            <Link href="/science/business">Business</Link>
            <Link href="/science/government">Government</Link>
            <Link href="/science/investments">Investments</Link>
            <Link href="/science/philanthropy">Philanthropy</Link>
            <Link href="/science/motorsports">Motorsports</Link>
          </div>
          <span />
        </div>
        <div className={classes.subMenu} id="perspective" onMouseEnter={() => setSubMenu('perspective')}  onMouseLeave={() => setSubMenu('')}>
          <div>
            <Link href="/perspective/blog">Blog</Link>
            <Link href="/perspective/news">News & Events</Link>
          </div>
          <span />
        </div>
      </div>
    </Container>
  );
}