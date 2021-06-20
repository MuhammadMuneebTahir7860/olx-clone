import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles} from '@material-ui/core/styles';
import AvatarImage from '../assets/download.png';
import UseSignUp from './UseSignUp';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    signUpForm:{
        width:'50%',
        marginTop:40,
        margin:'auto',
        padding: "5px 20px 5px 20px !important",
        border: '1px solid rgb(204,213,214) !important',
        borderRadius: 5,
        "@media (max-width: 568px)": {
            width:"80%",
         },
    },
    avatarImage:{
        width:100,
        height:100,
        display:'flex',
        margin:'auto',
    },
    signUpBtn: {
        fontSize: 13,
        display: 'flex',
        backgroundColor: 'rgb(0, 47, 52)',
        color: 'white',
        marginBottom: 10,
        '&:hover': {
            color: 'black',
        },
    },
}));
export default function SignUp() {
    const classes = useStyles();
    const[setEmail,setPassword,setFirstName,setLastName,firstName,lastName,signUpHandler,signUpLoading]=UseSignUp();
  return (
    <div>
      <div className={classes.signUpForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
        <img src={AvatarImage} className={classes.avatarImage} alt="" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
          Save all your favorite items in one place
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="first name"
            label="Firs Name"
            type="email"
            fullWidth
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
             /><br /><br />
             <TextField
            margin="dense"
            id="last name"
            label="Last Name"
            type="email"
            fullWidth
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
             /><br /><br />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
             /><br /><br />
              <TextField
            margin="dense"
            id="password"
            label="Password"
            type="email"
            fullWidth
            onChange={(e)=>setPassword(e.target.value)}
             /><br /><br />
             {signUpLoading && <CircularProgress disableShrink />}
               <Button onClick={signUpHandler} variant="contained" className={classes.signUpBtn}>
                     SignUp
              </Button><br />
        </DialogContent>
      </div>
    </div>
  );
}
