
import React from 'react';
import { Button, TextField, MenuItem, makeStyles, Select } from '@material-ui/core';
import styles from './style';

const useStyles = makeStyles(styles);

export default function ContactPage() {
  const classes = useStyles();

  const list = [
    {
      value: 'A',
      label: 'LabelA',
    },
    {
      value: 'B',
      label: 'LabelB',
    },
    {
      value: 'C',
      label: 'LabelC',
    },
  ];

  const [site, setSite] = React.useState('');

  return (
    <>
      <div className={classes.hero}>
        <span>Start the conversation</span>
      </div>
      <div className={classes.contact}>
        <div>
          <p>Location</p>
          <span>515 Congress Ave.  Suite #1425 Austin, TX 78701</span>
        </div>
        <div>
          <p>Contact Us</p>
          <span>+1 (512) 947 - 6472</span>
        </div>
        <div>
          <p>Contact</p>
          <TextField placeholder="Name" variant="outlined" fullWidth />
          <TextField placeholder="Phone Number" variant="outlined" fullWidth />
          <Select 
            variant="outlined" 
            fullWidth
            value={site}
            onChange={(e) => setSite(e.target.value)}
            displayEmpty
          >
            <MenuItem disabled value="">
              How did you hear about us?
            </MenuItem>
            {list.map((val, index) => (
            <MenuItem key={index} value={val.value}>
              {val.label}
            </MenuItem>
          ))}
          </Select>
          <TextField placeholder="Message" variant="outlined" fullWidth multiline rows={4} />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
}
