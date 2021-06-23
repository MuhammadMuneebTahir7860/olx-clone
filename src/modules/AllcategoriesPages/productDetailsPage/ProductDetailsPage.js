import { useParams } from 'react-router-dom';
import { FetchProducts } from '../../landingPage/products/UseAllProducts';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: 20,
        height: "auto",
        padding: "5px 20px 5px 20px !important",
        border: '1px solid rgb(204,213,214) !important',
        borderRadius: 5,
    },
    favBtn: {
        fontSize: 13,
        width: "100%",
        display: 'flex',
        margin: 'auto',
        backgroundColor: 'rgb(0, 47, 52)',
        color: 'white',
        marginBottom: 10,
        '&:hover': {
            color: 'black',
        },
    },
}));
export default function ProductDetailsPage() {
    const { docId } = useParams();
    
    const classes = useStyles();
    const [productsData,getFavProducts,loading,userId] = FetchProducts();
    let productDetails = productsData.filter((product) => {
        if (product.docId == docId) {
            return product;
        }
    });
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {productDetails.map((productInfo) => {
                            return (
                                <>
                                    <Grid item lg={8} md={8} sm={12} xs={12}>
                                        <div className={classes.paper}><img src={productInfo.image} width="100%" height="100%" alt="" /></div>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        <div className={classes.paper}><h1>Rs {productInfo.price}</h1>
                                            <p>{productInfo.title}</p>
                                            <p>{productInfo.location}</p>
                                            <div>
                                                <Button variant="contained" className={classes.favBtn}>
                                                    <FavoriteBorderIcon /> &nbsp; Favourite
                                                </Button>
                                            </div>
                                        </div>
                                        <Grid item xs={12}>
                                            <div className={classes.paper}><p>{productInfo.description}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        })
                        }
                    </Grid>
                </div>
            </Container>
        </div>
    )
}