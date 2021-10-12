import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  hero: {
    position: 'relative',
    height: '808px',
    padding: '215px 135px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    '& > span': {
      maxWidth: '510px',
      fontSize: '70px',
      fontWeight: 'bold',
      lineHeight: '75px',
      letterSpacing: '-1px',
      zIndex: '1',
      paddingBottom: '48px',
    },
  },
  contact: {
    display: 'flex',
    alignItems: 'end',
    backgroundColor: 'white',
    padding: '121px 135px 127px',
    '& > div': {
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      paddingLeft: '10%',
      '& > p': {
        margin: '0',
        paddingBottom: '16px',
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: '600',
      },
      '& > span': {
        minHeight: '40px',
        fontFamily: 'HelveticaNeue',
        fontSize: '14px',
        lineHeight: '17px',
      },
    },
    '& > div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      width: '40%',
      padding: '0',
      '& > p': {
        margin: '0',
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontWeight: '600',
        lineHeight: '30px',
        paddingBottom: '32px',
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '0',
        marginBottom: '24px',
        backgroundColor: 'white',
        fontFamily: 'HelveticaNeue',
        fontSize: '14px',
        '& > input': {
          paddingLeft: '24px',
        },
      },
      '& .MuiOutlinedInput-multiline': {
        paddingLeft: '24px',
      },
      '& .MuiSelect-outlined': {
        paddingLeft: '24px',
      },
      '& > button': {
        width: '190px',
        height: '48px',
        borderRadius: '0',
        marginTop: '16px',
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
    
  },
});

export default styles;