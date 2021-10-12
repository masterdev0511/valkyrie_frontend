import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    padding: '100px 80px',
    display: 'flex',
    backgroundColor: '#101219',
    color: 'white',
  },
  first_panel: {
    width: '22.5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > div > div:nth-child(1)': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      '& > img': {
        marginRight: '10px',
      },
    },
    '& > div > div:nth-child(2)': {
      display: 'flex',
      alignItems: 'center',
      '& > a': {
        marginRight: '30px',
      },
    },
  },
  copyright: {
    maxWidth: '200px',
    fontFamily: 'HelveticaNeue',
    fontSize: '14px',
    lineHeight: '28px',
  },
  second_panel: {
    width: '22.5%',
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      margin: '0',
      paddingBottom: '16px',
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: '600',
    },
    '& > span': {
      maxWidth: '233px',
      fontFamily: 'HelveticaNeue',
      fontSize: '14px',
      lineHeight: '17px',
    },
    '& > span:not(span:last-child)': {
      paddingBottom: '32px',
    },
  },
  third_panel: {
    width: '20%',
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      margin: '0',
      paddingBottom: '16px',
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: '600',
    },
    '& > span': {
      fontFamily: 'HelveticaNeue',
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
  last_panel: {
    width: '35%',
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      margin: '0',
      paddingBottom: '16px',
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: '600',
    },
    '& .MuiOutlinedInput-root': {
      margin: '10px 0 24px',
      backgroundColor: 'white',
      fontFamily: 'HelveticaNeue',
      fontSize: '14px',
      lineHeight: '28px',
      '& > input': {
        paddingLeft: '24px',
      },
    },
    '& > button': {
      width: '124px',
      height: '48px',
      backgroundColor: '#D7DEE7',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'black',
      '&:hover': {
        backgroundColor: '#D7DEE7',
        opacity: '0.8',
      },
      '& > span': {
        fontFamily: 'Montserrat',
      },
    },
  },
});

export default styles;