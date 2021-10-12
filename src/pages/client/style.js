import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  hero: {
    position: 'relative',
    height: '942px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    '& > span': {
      maxWidth: '750px',
      fontSize: '70px',
      fontWeight: 'bold',
      lineHeight: '75px',
      letterSpacing: '-1px',
      zIndex: '1',
      paddingBottom: '48px',
    },
    '& > p': {
      maxWidth: '550px',
      margin: '0',
      fontSize: '30px',
      lineHeight: '40px',
      zIndex: '1',
    },
    '& > img': {
      position: 'absolute',
    },
    '& > img#nike': {
      top: '136px',
      left: '0',
    },
    '& > img#puma': {
      top: '130px',
      right: '332px',
    },
    '& > img#leaf': {
      top: '189px',
      right: '0',
    },
    '& > img#adidas': {
      bottom: '194px',
      right: '0',
    },
    '& > img#nb': {
      bottom: '0px',
      right: '48px',
    },
    '& > img#np': {
      bottom: '-15px',
      left: '186px',
    },
    '& > img#nb1': {
      width: '128px',
      bottom: '120px',
      left: '0',
    },
    '& > img#puma1': {
      top: '400px',
      left: '0',
    },
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '80px 120px',
    '& > div': {
      width: '32%',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    marginBottom: '80px',
    cursor: 'pointer',
    '& > img': {
      width: '100%',
      height: '300px',
      backgroundColor: '#DDD',
    },
    '& > span': {
      paddingTop: '32px',
      fontSize: '10px',
      lineHeight: '12px',
      textTransform: 'uppercase',
    },
    '& > p': {
      margin: '0',
      paddingTop: '16px',
      fontSize: '25px',
      lineHeight: '28px',
    },
  },
  case: {
    position: 'relative',
    height: '900px',
    padding: '215px 135px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    '& > div:first-child': {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '16px',
      '& > span': {
        fontSize: '17px',
        lineHeight: '25px',
        paddingLeft: '15px',
      }
    },
    '& > span': {
      maxWidth: '750px',
      fontSize: '70px',
      fontWeight: 'bold',
      lineHeight: '75px',
      letterSpacing: '-1px',
      zIndex: '1',
      paddingBottom: '48px',
    },
    '& > p': {
      maxWidth: '550px',
      margin: '0',
      fontSize: '30px',
      lineHeight: '40px',
      zIndex: '1',
    },
  },
  tabs: {
    display: 'flex',
    padding: '125px',
    backgroundColor: 'white',
    '& > div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content',
      backgroundColor: '#F2F8FF',
      marginRight: '125px',
      padding: '40px 24px 60px',
      '& > button': {
        padding: '12px 24px',
        fontSize: '12px',
        lineHeight: '15px',
        justifyContent: 'left',
        borderRadius: '0',
        borderLeft: '1px solid rgba(0, 101, 242, 0.2)',
      },
    },
    '& > div:not(div:first-child)': {
      width: '60%',
      '& > h4': {
        margin: '0',
        padding: '0 0 28px 50px',
        fontSize: '28px',
        lineHeight: '31px',
      },
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 24px 50px',
        '& > img': {
          width: '84px',
          height: '84px',
          backgroundColor: '#0065F2',
          borderRadius: '50%',
        },
        '& > p': {
          margin: '0',
          paddingLeft: '24px',
          fontSize: '16px',
          lineHeight: '24px',
        }
      },
      '& > img': {
        margin: '40px 0 50px',
        width: '100%',
        height: '300px',
        backgroundColor: '#ddd',
      },
      '& > h3': {
        margin: '0',
        fontSize: '45px',
        lineHeight: '50px',
        fontWeight: '700',
      },
      '& > span': {
        display: 'block',
        whiteSpace: 'pre-line',
        paddingTop: '24px',
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
  },
  number_board: {
    width: 'auto !important',
    margin: '70px 135px',
    padding: '100px 90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    textAlign: 'center',
    backgroundColor: '#F2F8FF',
    '& > div': {
      '& > p': {
        margin: '0',
        fontSize: '22px',
        fontWeight: 'bold',
        lineHeight: '25px',
      },
      '& > h1': {
        margin: '0',
        fontSize: '67px',
        lineHeight: '60px',
        padding: '12px 0 28px',
        '& > span': {
          fontSize: '24px',
          lineHeight: '32px',
        }
      },
      '& > span': {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  },
  realted: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    color: 'white',
    padding: '45px 0',
    '& > div:first-child': {
      width: '100%',
      padding: '0 135px 45px',
      display: 'flex',
      justifyContent: 'space-between',
      '& > span': {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '48px',
      },
      '& > div': {
        display: 'flex',
        '& > img': {
          marginLeft: '40px',
          padding: '0 16px',
          borderRadius: '50%',
          border: '2px solid white',
        },
      },
    },
  },
  image_card: {
    width: '49.5%',
    position: 'relative',
    '& > img': {
      width: '100%',
      height: '450px',
      backgroundColor: '#ddd',
    },
    '& > p': {
      position: 'absolute',
      bottom: '0',
      margin: '0',
      color: 'black',
      padding: '0 60px 60px',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '49px',
    },
  },
  hello: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '121px 0 127px',
    '& > p': {
      width: '45%',
      textAlign: 'center',
      margin: '0',
      fontFamily: 'Montserrat',
      fontSize: '50px',
      fontWeight: '600',
      lineHeight: '50px',
      paddingBottom: '32px',
    },
    '& .MuiOutlinedInput-root': {
      width: '380px',
      borderRadius: '0',
      marginBottom: '24px',
      backgroundColor: 'white',
      fontFamily: 'HelveticaNeue',
      fontSize: '14px',
      lineHeight: '28px',
      '& > input': {
        paddingLeft: '24px',
      },
    },
    '& .MuiOutlinedInput-multiline': {
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
});

export default styles;