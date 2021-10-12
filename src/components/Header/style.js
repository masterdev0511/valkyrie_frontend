import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    position: 'absolute',
    zIndex: '2',
    padding: '0',
    fontFamily: 'HelveticaNeue',
    '& > div:first-child': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      margin: '30px 70px',
      '& > a': {
        margin: '0',
        '& > img': {
          margin: '0',
        },
      },
    },
    '& a': {
      textTransform: 'uppercase',
      color: 'white',
      textDecoration: 'none',
      margin: '0 20px',
      fontSize: '13px',
      lineHeight: '20px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      height: 'fit-content',
      '& > img': {
        marginLeft: '5px',
      },
      '&:hover': {
        opacity: '0.8'
      },
    }
  },
  linkPanel: {
    display: 'flex',
    alignItems: 'center',
  },
  subMenu: {
    paddingTop: '20px',
    position: 'absolute',
    top: '74px',
    display: 'none',
    '& > div': {
      display: 'flex',
      backgroundColor: '#13397C',
      boxShadow: '0px 2px 4px #666',
      borderRadius: '12px',
      padding: '24px 28px',
      width: '200px',
      flexDirection: 'column',
      justifyContent: 'center',
      '& > a': {
        textTransform: 'capitalize',
        textDecoration: 'underline',
        margin: '0',
        fontSize: '16px',
        lineHeight: '34px',
      },
    },
    '& > span': {
      position: 'absolute',
      backgroundColor: '#13397C',
      width: '24px',
      height: '24px',
      top: '15px',
      left: '83px',
      transform: 'rotate(45deg)',
    },
  },
});

export default styles;