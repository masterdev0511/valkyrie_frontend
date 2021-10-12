import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    backgroundColor: '#D7DEE7',
    textAlign: 'center',
    padding: '105px 134px',
    color: '#101219',
    '& > p': {
      fontFamily: 'Montserrat',
      margin: '0',
      paddingBottom: '68px',
      fontSize: '55px',
      fontWeight: '600',
      lineHeight: '75px',
    },
    '& > div': {
      display: 'flex',
      '& > div:last-child': {
        marginLeft: '32px',
        paddingLeft: '32px',
        borderLeft: '1px solid #101219',
      },
    },
  },
  post: {
    display: 'flex',
    '& > img': {
      height: '100%',
      marginRight: '32px',
    },
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      '& > span:first-child': {
        paddingBottom: '10px',
        fontSize: '10px',
        lineHeight: '12px',
      },
      '& > p': {
        margin: '0',
        paddingBottom: '15px',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '112.3%',
      },
      '& > span:last-child': {
        paddingBottom: '30px',
        fontFamily: 'HelveticaNeue',
        fontSize: '12px',
        lineHeight: '150%',
      },
    },
  },
  featured: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.2)',
    '& > img': {
      width: '100%',
      marginBottom: '32px',
    },
    '& > span': {
      paddingBottom: '10px',
      fontSize: '10px',
      lineHeight: '12px',
    },
    '& > p': {
      margin: '0',
      padding: '0 37px 15px',
      fontSize: '25px',
      fontWeight: '600',
      lineHeight: '112.3%',
    },
    '& > span:last-child': {
      paddingBottom: '30px',
      fontFamily: 'HelveticaNeue',
      fontSize: '12px',
      lineHeight: '150%',
    },
  },
});

export default styles;