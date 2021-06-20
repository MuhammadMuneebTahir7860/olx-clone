import './Footer.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function Footer(){
    const classes = useStyles();
    const footerData = [
        {
            heading: 'Popular Categories',
            list1: 'Cars',
            link1:'/cars',
            list2: 'Flats for rent',
            link2:'/land-plots',
            list3: 'Bikes',
            link3:'/motorcycles',
            list4: 'Mobile Phones',
            link4:'/mobile-phones',
        },
        {
            heading: 'Trending Searches',
            list1: 'Bikes',
            link1:'/motorcycles',
            list2: 'Home Appliances',
            link2:'/home-appliances',
            list3: 'Cars',
            link3:'/cars',
            list4: 'Animals',
            link4:'/animals',
        },
        {
            heading: 'About Us',
            list1: 'About EMPS',
            list2: 'OLX Blog',
            list3: 'Contact Us',
            list4: 'OLX for Businessess',
        },
        {
            heading: 'OLX',
            list1: 'Help',
            list2: 'Sitemap',
            list3: 'Legal and Privacy information',
        },
    ]
    return(
        <>
        <div className='footerSection'>
            <Container>
            <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            footerData.map((text) => {
                                return (
                                    <Grid md={3} sm={6} xs={6} lg={3}>
                                        <ul className='footerLists'>
                                            <li>
                                                <h4>
                                                    {text.heading}
                                                </h4>
                                            </li>
                                            <div className='footerText'>
                                                <li><Link className='link' to={text.link1}>{text.list1}</Link></li>
                                                <li><Link className='link' to={text.link2}>{text.list2}</Link></li>
                                                <li><Link className='link' to={text.link3}>{text.list3}</Link></li>
                                                <li><Link className='link' to={text.link4}>{text.list4}</Link></li>
                                            </div>
                                        </ul>
                                    </Grid>
                                )
                            })

                        }
                    </Grid>
                </div>

                <div className='followSection'>
                    <h3>
                        FOLLOW US
                        </h3>
                    <div className='follwerImages'>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YouTubeIcon  />
                    </div>
                </div>
            </Container>
            </div>
            <div className='copyrightSection'>
                <p>Free Classifieds in Pakistan &nbsp; &nbsp; .<span>&#169;</span> 2006-2021 OLX</p>
            </div>
            </>
    )
}