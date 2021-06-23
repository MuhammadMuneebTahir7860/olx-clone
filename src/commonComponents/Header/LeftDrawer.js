import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Avatar from '@material-ui/core/Avatar';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import AvatarImage from '../../assets/download.png';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Container from '@material-ui/core/Container';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {AuthActionLogout} from '../../redux/actions/AuthActions';




const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(0, 2),
  },
  userSection:{
      display:'inline-flex',
      lineHeight:0.5,
  },
  loginButton:{
      width:"100%",
      height:'40px',
      backgroundColor:"rgb(0, 47, 52)",
      color:"white",
      textAlign:'center',
      cursor:'pointer',
      paddingTop:'10px',
      fontWeight:'bold',
  }
}));


export default function LeftDrawer(){
  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const dispatch=useDispatch();
    const mobileLogoutHandler = () =>{
        dispatch(AuthActionLogout())
    }
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
return(
    <>
    <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    className={clsx(classes.menuButton, open && classes.hide)}
>
    <MenuIcon />
</IconButton>
<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <CloseOutlinedIcon />
          </IconButton>
        </div>
        <List>
        <div className={classes.userSection}>
        <Avatar alt="Remy Sharp" src={AvatarImage} className={classes.large} />
        <div>
        {authState? 
            <p style={{marginTop:'30px'}}>Welcome to OLX!</p>
        :<> 
        <p>Enter to your account</p>
        <p>Login to your account</p>
        </>
}
        </div>
        </div>
        </List>
        <Divider />
        <List>
        <Link className='link' to='selling'>
        <ListItem onClick={handleDrawerClose}>
              <ListItemIcon>
              <CameraAltOutlinedIcon />
              </ListItemIcon>
             <ListItemText>Start selling</ListItemText>
            </ListItem>
            </Link>
            {authState &&
            <Link className='link' onClick={handleDrawerClose} to='/my-ads'>
        <ListItem >
            <ListItemIcon>
            <AssignmentOutlinedIcon />
              </ListItemIcon>
              
              <ListItemText>My ads</ListItemText>
            </ListItem>
            </Link>
}            <Link onClick={handleDrawerClose} className='link' to='/my-favourities'>
            <ListItem>
            <ListItemIcon>
            <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText>My Favourities</ListItemText>
            </ListItem>
            </Link>
            <ListItem>
            <ListItemIcon>
            <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Help</ListItemText>
            </ListItem>
            <Container>
              {authState? 
               <div onClick={mobileLogoutHandler} className={classes.loginButton}>Logout</div>
            :
            <Link onClick={handleDrawerClose} className='link' to='/login'>
            <div className={classes.loginButton}>Login</div>
            </Link>
}
            </Container>
        </List>
      </Drawer>
      </>
)
}