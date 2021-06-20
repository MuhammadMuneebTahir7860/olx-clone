import Container from '@material-ui/core/Container';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 170,
    },
    items: {
        textAlign: 'center',
    }
}));
export default function NavBarMobile() {
    const classes = useStyles();

    const CategoriesItems = [
        {
            icon: <img src="https://img.icons8.com/color/48/000000/android.png" />,
            title: 'Mobile Phones',
            link:'/mobile-phones',
        },
        {
            icon: <img src="https://img.icons8.com/color/48/000000/carpool.png" />,
            title: 'Cars',
            link:'/cars',
        }, {
            icon: <img src="https://img.icons8.com/color/48/000000/motorcycle.png" />,
            title: 'Motorcycles',
            link:'/motorcycles',
        }, {
            icon: <img src="https://img.icons8.com/color/48/000000/appliances.png" />,
            title: 'Home Appliances',
            link:'/home-appliances',
        }, {
            icon: <img src="https://img.icons8.com/color/48/000000/land-sales.png" />,
            title: 'Land & Plots',
            link:'/land-plots',
        }, {
            icon: <img src="https://img.icons8.com/color/48/000000/android-tablet.png" />,
            title: 'Tablets',
            link:'/tablets',
        }, {
            icon: <img src="https://img.icons8.com/color/48/000000/group-of-animals.png" />,
            title: 'Animals',
            link:'/animals',
        },
        {
            icon: <img src="https://img.icons8.com/color/48/000000/fidget-spinner--v2.png" />,
            title: 'Kids Toys',
            link:'/kids-toys',
        },
        {
            icon: <img src="https://img.icons8.com/color/48/000000/clothes.png" />,
            title: 'Clothes',
            link:'/clothes',
        },
    ]
    return (
        <div>
            <Hidden mdUp>
                <Container>
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                        <Grid item xs={6} sm={4}>
                            <h4 style={{textAlign:'center'}}>Browse Categories</h4>
                        </Grid>
                        <Grid item xs={6} sm={8}>
                            </Grid>
                            {CategoriesItems.map((item) => {
                                return (
                                    <Grid item xs={4}>
                                        <Link className='link' to={item.link}>
                                        <div className={classes.items}>
                                            {item.icon}
                                            <h5>{item.title}</h5>
                                        </div>
                                        </Link>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </div>
                </Container>
            </Hidden>
        </div>
    )
}