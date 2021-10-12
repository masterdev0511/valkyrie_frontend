import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  hero: {
    position: 'relative',
    height: '900px',
    padding: '215px 135px',
    display: 'flex',
    flexDirection: 'column',
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
    '& > p': {
      maxWidth: '570px',
      margin: '0',
      fontSize: '30px',
      lineHeight: '40px',
      zIndex: '1',
    },
  },
  metrics: {
    dispaly: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    '& > p': {
      margin: '0',
      padding: '60px 380px 24px',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '48px',
      letterSpacing: '-1px',
    },
    '& > span': {
      fontSize: '18px',
      lineHeight: '28px',
    },
    '& > div': {
      margin: '72px 135px 128px',
      padding: '100px 90px',
      display: 'flex',
      justifyContent: 'space-between',
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
  },
  special: {
    padding: '0 135px',
    display: 'flex',
    color: 'white',
    '& > div': {
      width: '50%',
      padding: '48px',
      '& > p': {
        margin: '0',
        fontSize: '45px',
        fontWeight: 'bold',
        lineHeight: '50px',
        paddingBottom: '50px',
      },
      '& > ol': {
        margin: '0',
        fontSize: '18px',
        lineHeight: '28px',
        paddingBottom: '40px',
      },
    },
  },
  values: {
    padding: '0 135px 30px',
    color: 'white',
    '& > h1': {
      margin: '0',
      fontSize: '45px',
      fontWeight: 'bold',
      lineHeight: '50px',
      paddingBottom: '16px',
    },
    '& > p': {
      margin: '0',
      maxWidth: '555px',
      fontSize: '17px',
      lineHeight: '25px',
    },
    '& > div': {
      paddingTop: '100px',
      display: 'flex',
      flexWrap: 'wrap',
      '& > button': {
        width: '20%',
        color: 'white',
        justifyContent: 'left',
        borderRadius: '0',
        fontWeight: 'bold',
        '&:hover': {
          opacity: '0.8',
        },
      },
      '& > div': {
        position: 'relative',
        '& > p': {
          margin: '0',
          padding: '60px 0 210px 60px',
          width: '50%',
          fontSize: '18px',
          lineHeight: '28px',
        },
        '& > div': {
          width: '500px',
          height: '300px',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: '0',
          right: '0',
        },
      },
    },
  },
  team_bio: {
    padding: '70px 135px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    '& > div': {
      display: 'flex',
      '&:first-child': {
        justifyContent: 'space-between',
        '& > p': {
          margin: '0',
          fontFamily: 'HelveticaNeue',
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '48px',
        },
        '& > span': {
          width: '65%',
          fontFamily: 'HelveticaNeue',
          fontSize: '18px',
          lineHeight: '28px',
        },
      },
      '&:last-child': {
        padding: '80px 0 50px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        '& > img': {
          width: '20%',
        },
      },
    },
  },
  presses: {
    padding: '130px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    color: 'white',
    '& > p': {
      margin: '0',
      paddingBottom: '80px',
      width: '100%',
      fontFamily: 'HelveticaNeue',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '48px',
    },
    '& > div': {
      width: '32%',
    },
  },
  press: {
    display: 'flex',
    flexDirection: 'column',
    '& > img': {
      width: '100%',
      height: '200px',
      backgroundColor: '#DDDDFF',
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '24px',
      fontSize: '24px',
      lineHeight: '32px',
      '& > img': {
        margin: '0 17px',
      },
    },
    '& > p': {
      margin: '0',
      paddingTop: '16px',
      fontSize: '24px',
      lineHeight: '32px',
    },
    '& > span': {
      padding: '16px 0 40px',
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  hire: {
    padding: '60px 80px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& > div': {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      '&:first-child': {
        paddingRight: '8%',
      },
      '& > p': {
        margin: '0',
        fontFamily: 'HelveticaNeue',
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '48px',
        paddingBottom: '32px',
      },
      '& > span': {
        fontFamily: 'HelveticaNeue',
        fontSize: '18px',
        lineHeight: '28px',
      },
      '& > img': {
        width: '100%',
        height: '400px',
        backgroundColor: '#DDDDFF',
      },
    },
  },
  gallery: {
    color: 'white',
    padding: '70px 0',
    '& > div:first-child': {
      display: 'flex',
      overflow: 'hidden',
      scrollBehavior: 'smooth',
      '& > img': {
        minWidth: '100%',
        paddingRight: '80px',
        height: '650px',
      },
    },
    '& > div:last-child': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '32px 80px',
      '& > span': {
        fontSize: '17px',
        lineHeight: '25px',
      },
      '& > div:nth-child(2)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        '& > p': {
          margin: '0',
          width: '5%',
          height: '2px',
          border: '1px solid #aaa',
        },
      },
      '& > div:last-child': {
        display: 'flex',
        '& > img': {
          marginLeft: '32px',
          cursor: 'pointer',
        }
      },
    },
  },
  employment: {
    padding: '60px 80px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& > div': {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      '&:last-child': {
        paddingLeft: '8%',
      },
      '& > p': {
        margin: '0',
        fontFamily: 'HelveticaNeue',
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '48px',
        paddingBottom: '32px',
      },
      '& > span': {
        fontFamily: 'HelveticaNeue',
        fontSize: '18px',
        lineHeight: '28px',
      },
      '& > img': {
        width: '100%',
        height: '400px',
        backgroundColor: '#DDDDFF',
      },
    },
  },
  hello: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '143px 0 111px',
    '& > p': {
      width: '45%',
      margin: '0',
      fontFamily: 'Montserrat',
      fontSize: '50px',
      fontWeight: '600',
      lineHeight: '50px',
      paddingBottom: '32px',
    },
    '& > button': {
      width: '190px',
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