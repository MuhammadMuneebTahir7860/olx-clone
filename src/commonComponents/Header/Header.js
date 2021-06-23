import './Header.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/logo.svg';
import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import LeftDrawer from './LeftDrawer';
import {  useSelector } from "react-redux";
import {
    Link
  } from "react-router-dom";
import UserDropDown from './UserDrowpDown';
import {get} from '../../redux/actions/AuthActions';
import {useDispatch} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding:10,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "90%",
        marginTop: -3,
        backgroundColor: "white",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Header() {
    const dispatch=useDispatch();
    const[pending,setPending]=useState(true);
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const classes = useStyles();
    const[searchInput,setSearchInput]=useState('');
    const [location, setLocation] = React.useState('');
    useEffect(()=>{
        dispatch(get(setPending));
    },[]);
    let searchData='';
    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    for(let i=0; i<searchInput.length; i++){
        if(searchInput[i]!=" "){
            searchData +=searchInput[i];
        }
        else if(searchInput[i]==" "){
            searchData = searchData + '-';
        }
    }
    return (
        <div className="Header-Section">
            <Container >
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item lg={1} md={1} sm={6} xs={6}>
                            <div className='button-logo'>
                            <Hidden mdUp>
                           <LeftDrawer />
                           </Hidden>
                           <Link to='/'>
                           <img src={Logo} alt="Logo"  />
                           </Link>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={6}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={handleChange}
                                    label="Location"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                                    <MenuItem value="Lahore">Lahore</MenuItem>
                                    <MenuItem value="Islamabad">Islamabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={5} sm={12} xs={12} className='search-section'>
                            <input onChange={(e)=>setSearchInput(e.target.value)} type="search" id="searchBar" placeholder="Find Cars Mobile Phones and More..." />
                           <Link to={`/${searchData}`}><div id='search-icon'>< SearchIcon id='icon' /></div></Link>
                        </Grid>
                        <Hidden smDown>
                            <Grid item lg={2} md={3}>
                                <span id="login-sell-section">
                                        {authState?
                                        <UserDropDown />
                                        :
                                        <h4 id='login-heading'>
                                        <Link className='link' to='/login'>
                           {pending? <CircularProgress disableShrink />:
                                           <p>Login</p>
                           }
                                            </Link>
                                        </h4>
}
                                    <Link className='link' to='/selling'><div id='sell-div'>+ SELL</div></Link>
                                </span>
                            </Grid>
                        </Hidden>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}