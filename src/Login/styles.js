

const styles = theme => ({


  main: {
     width: 'auto',
     display: 'block', // Fix IE 11 issue.
      marginLeft:507,
      marginRight: 463
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //   width: 400,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
     
    // },
  },
 

  paper: {
  
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,

  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,


    backgroundColor: '#227092',
    boxShadow: '0px 0px 2px black',
    color: 'white'
    
  },
  noAccountHeader: {
    width: '100%'
  },
  signUpLink: {
    width: '100%',
    textDecoration: 'none',
    color: '#227092',
    fontWeight: 'bolder',
    marginLeft: 134
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});

export default styles;