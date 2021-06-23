import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles} from '@material-ui/core/styles';
import AvatarImage from '../assets/download.png';
import {Link} from 'react-router-dom';
import UseLogin from './UseLogin';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    loginForm:{
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
    loginBtn: {
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
export default function Login() {
    const classes = useStyles();
    const[setEmail,setPassword,loginHandler,loginLoading,]=UseLogin();
  return (
    <div>
      <div className={classes.loginForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
        <img src={AvatarImage} className={classes.avatarImage} alt="" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
          Save all your favorite items in one place
          </DialogContentText>
          <Input
            autoFocus
            margin="dense"
            id="name"
            placeholder="Email Address"
            type="email"
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
             /><br /><br /><br />
              <Input
            margin="dense"
            id="password"
            placeholder="Password"
            type="password"
            fullWidth
            onChange={(e)=>setPassword(e.target.value)}
             /><br /><br />
             {loginLoading && <CircularProgress disableShrink />}
               <Button onClick={loginHandler} variant="contained" className={classes.loginBtn}>
                   Login
              </Button><br />
          <DialogContentText style={{textAlign:'center'}}>
            Don't have an account? <Link to='/sign-up'>Signup </Link>
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
