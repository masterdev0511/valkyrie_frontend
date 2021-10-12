import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  hero: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& > div:not(div:last-child)': {
      maxWidth: '556px',
      padding: '230px 0 200px',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      '& > *': {
        margin: '0',
      },
      '& > h3': {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '48px',
        paddingBottom: '16px',
      },
      '& > h4': {
        fontSize: '24px',
        lineHeight: '32px',
        paddingBottom: '80px',
      },
      '& > p': {
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
    '& > div:last-child': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: '245px',
      left: '80px',
      '& > button': {
        width: '200px',
        height: '28px',
        fontSize: '18px',
        lineHeight: '28px',
        color: 'white',
        textTransform: 'capitalize',
        justifyContent: 'left',
        padding: '0',
      },
      '& > div': {
        height: '1px',
        margin: '16px 0',
        borderBottom: '1px solid white',
      },
    },
  },
});

export default styles;