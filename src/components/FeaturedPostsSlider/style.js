import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    backgroundColor: '#D7DEE7',
    textAlign: 'center',
    padding: '100px 50px',
    color: '#101219',
    '& > p': {
      fontFamily: 'Montserrat',
      margin: '0',
      paddingBottom: '68px',
      fontSize: '55px',
      fontWeight: '600',
      lineHeight: '75px',
    },
  },
  post: {
    display: 'flex',
    width: '100%',
    minHeight: '620px',
    '& > img': {
      width: '50%',
      objectFit: 'cover',
    },
    '& > div': {
      display: 'flex',
      width: '50%',
      flexDirection: 'column',
      textAlign: 'left',
      padding: '40px',
      '& > span:nth-child(1)': {
        paddingBottom: '25px',
        fontSize: '13px',
        fontWeight: '800',
        lineHeight: '20px',
      },
      '& > p': {
        margin: '0',
        paddingBottom: '30px',
        fontSize: '45px',
        fontWeight: '600',
        lineHeight: '50px',
      },
      '& > span:nth-child(3)': {
        paddingBottom: '32px',
        fontFamily: 'HelveticaNeue',
        fontSize: '20px',
        lineHeight: '150%',
      },
      '& > span:nth-child(4)': {
        fontFamily: 'HelveticaNeue',
        fontSize: '16px',
        lineHeight: '150%',
        paddingBottom: '100px',
      },
      '& > div': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        flexGrow: '1',
        '& > span': {
          fontSize: '25px',
          lineHeight: '35px',
        },
        '& > div': {
          display: 'flex',
          justifyContent: 'space-between',
          '& > img': {
            cursor: 'pointer',
            marginLeft: '32px',
          },
        },
      },
    },
  },
});

export default styles;