import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import styles from './style';

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <div className={classes.first_panel}>
        <div>
          <div>
            <img src="/images/logo.png" alt="Logo" width="54px" />  
            <img src="/images/logo-text.png" alt="Logo" width="120px" />  
          </div>
          <div>
            <a href="#"><img src="/images/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/images/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/images/camera.svg" alt="Camera" /></a>
            <a href="#"><img src="/images/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
        <div className={classes.copyright}>
          © Copyright 2021, VALKYRIE INTELLIGENCE LLC
        </div>
      </div>
      <div className={classes.second_panel}>
        <p>Office</p>
        <span>515 Congress Ave. Austin, TX 78701 Suite #1425</span>
        <p>Email</p>
        <span>inquiries@valkyrie.ai</span>
        <p>Phone</p>
        <span>(512) 947 - 6472</span>
      </div>
      <div className={classes.third_panel}>
        <p>Links</p>
        <span>Privacy Policy<br/><br/>Data Governance</span>
      </div>
      <div className={classes.last_panel}>
        <p>Stay in touch</p>
        <TextField placeholder="Your email" variant="outlined" fullWidth />
        <Button>Submit</Button>
      </div>
    </Container>
  );
}