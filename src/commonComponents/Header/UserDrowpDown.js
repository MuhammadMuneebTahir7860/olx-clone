import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import AvatarImage from '../../assets/download.png';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {AuthActionLogout} from '../../redux/actions/AuthActions';
import {useDispatch,useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    width:'300px',
    marginRight:30,
    marginTop:10
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
 
}));

export default function MenuListComposition() {
  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const dispatch=useDispatch();
    const logoutHandler = () =>{
        dispatch(AuthActionLogout())
        return <Redirect to={'/'}/>
    }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

const handleClose = () =>{
    setOpen(false)
}

  const handleOPen = () =>{
      setOpen(true)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleOPen}
        >
          <img src={AvatarImage} width="40px" height='40px' alt="" />
          {open?
            <ExpandLessIcon style={{cursor:'pointer',marginTop:-10}} onClick={handleClose} id='expandLessIcon' />
            :
            <ExpandMoreIcon style={{cursor:'pointer',marginTop:-10}} onClick={handleOPen} id="expandMoreIcon" />

                }
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
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
        <Link onClick={handleClose} className='link' to='/selling'>
        <ListItem>
              <ListItemIcon>
              <CameraAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText>
                 Start selling
                  </ListItemText>
            </ListItem>
            </Link>
            <Link onClick={handleClose} className='link' to='my-ads'>
        <ListItem>
            <ListItemIcon>
            <AssignmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText>My ads</ListItemText>
            </ListItem>
            </Link>
            <ListItem>
            <ListItemIcon>
            <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText>My Favourities</ListItemText>
            </ListItem>
           <Divider />
           <ListItem style={{cursor:'pointer'}} onClick={logoutHandler}>
            <ListItemIcon>
            <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
