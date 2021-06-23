

import { FetchProducts } from '../../modules/landingPage/products/UseAllProducts';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React from 'react';
import { CommonHooks } from '../../commonHooks/CommonHooks';
import { UseMyAds } from './UseMyAds';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextEllipsis from 'react-text-ellipsis';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    loading: {
        textAlign: 'center',
        margin: 'auto'
    },
    loadMoreButton: {
        margin: theme.spacing(1),
        backgroundColor: 'rgb(0, 47, 52)',
        color: 'white',
        "&:hover": {
            backgroundColor: 'rgb(0, 47, 52)',
        }
    },
    card: {
        marginBottom: 10,
    },
    paper: {
        height: "auto",
        padding: "5px 20px 5px 20px !important",
        border: '1px solid rgb(204,213,214) !important',
        borderRadius: 5,
    },
    image: {
        margin: 'auto',
        display: "flex",
        width: '70%',
        height: '100%',
        marginBottom: -30,
        "@media (max-width: 968px)": {
            height: '100%',
        },
        "@media (max-width: 568px)": {
            width: '90%',
            height: '100%',
        },
    },
    imageDiv: {
        height: 160,
        "@media (max-width: 968px)": {
            height: 230,
        },
        "@media (max-width: 668px)": {
            height: 230,
        },
        "@media (max-width: 568px)": {
            height: 150,
        },
    },
    price: {
        fontSize: 20,
        paddingLeft: 10,
        marginBottom: -20,
    },
    location: {
        paddingLeft: 10,
        fontSize: 12,
        marginTop: 20,
        lineHeight: 0,
    },
    title: {
        paddingLeft: 10,
    },
    button: {
        width: '100%',
        marginBottom:10,
    },

}));
export default function MyAds() {
    const [productsData,getFavProducts,loading,userId] = FetchProducts();
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(1);
    const [visible, loadMore] = CommonHooks();
    const [uid,deleteHandler,ctaUpdateHandler] = UseMyAds();
    let myAds = productsData.filter((row) => {
        if (row.userId == uid) {
            return row;
        }
    });
    return (
        <div>
            <Container>
                <h2>My Ads</h2>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} >
                        <Grid container spacing={spacing}>
                            {loading && <p className={classes.loading}>Loading....</p>}
                            {myAds.slice(0, visible).map((product) => {
                                return (
                                    <Grid className={classes.card} key={product} item lg={3} md={3} sm={6} xs={6}>
                                        <div className={classes.paper}>
                                            <Link className='link' to={`/products/${product.docId}`}>
                                                <div className={classes.imageDiv}>
                                                    <img className={classes.image} src={product.image} alt="" />
                                                </div>
                                                <TextEllipsis
                                                    lines={2}
                                                    tag={'h4'}
                                                    ellipsisChars={'...'}
                                                    tagClass={'className'}
                                                    debounceTimeoutOnResize={200}
                                                    useJsOnly={true}>
                                                    <h4 className={classes.price}>Rs. {product.price}</h4>
                                                </TextEllipsis>
                                                <TextEllipsis
                                                    lines={2}
                                                    tag={'p'}
                                                    ellipsisChars={'...'}
                                                    tagClass={'className'}
                                                    debounceTimeoutOnResize={200}
                                                    useJsOnly={true}>
                                                    <p className={classes.title}>{product.title}</p>
                                                </TextEllipsis>
                                            </Link>
                                            <div>
                                                <Grid container className={classes.root} spacing={2}>
                                                    <Grid item xs={12} >
                                                        <Grid container spacing={spacing}>
                                                            <Grid style={{margin:'auto',display:'flex'}} lg={5} md={6} sm={5} xs={12}>
                                                            <Button
                                                                onClick={()=>deleteHandler(product.docId)}
                                                                variant="contained"
                                                                color="secondary"
                                                                className={classes.button}
                                                                startIcon={<DeleteIcon />}
                                                            >
                                                                Delete
                                                                </Button>
                                            </Grid>
                                            <Grid lg={5} md={5} sm={5} xs={12} style={{margin:'auto',display:'flex'}}>
                                                          <Link className='link' to={`/edit/${product.docId}`} 
                                                          >
                                                              
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                className={classes.button}
                                                                startIcon={<EditIcon />}
                                                            >
                                                                Edit
                                                                </Button>
                                                                </Link>
                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </div>
                                            <div >
                                                <p className={classes.location}>{product.location}</p>
                                            </div>

                                        </div>

                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                {
                    visible + 1 <= myAds.length ?
                        <Button variant="contained" size="large" onClick={loadMore} className={classes.loadMoreButton}>
                            LOAD MORE
             </Button>
                        : null
                }

            </Container>
        </div>
    )
}