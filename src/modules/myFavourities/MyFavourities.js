import { UseMyFavourities } from "./UseMyFavourities"
import { FetchProducts } from "../landingPage/products/UseAllProducts";
import { CommonHooks } from '../../commonHooks/CommonHooks';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React  from "react";
import ProductCard from "../../commonComponents/productCard/ProductCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    loadMoreButton: {
        margin: theme.spacing(1),
        backgroundColor: 'rgb(0, 47, 52)',
        color: 'white',
        "&:hover": {
            backgroundColor: 'rgb(0, 47, 52)',
        }
    },
}));

export default function MyFavourities() {
    const [spacing, setSpacing] = React.useState(1);
    const classes = useStyles();
    const [visible, loadMore] = CommonHooks();
    const [productsData,getFavProducts,loading,userId] = FetchProducts();
    const [favBtn] = UseMyFavourities();
    let products = getFavProducts.filter((item) => {
        if (item.favUid == userId) {
            return item;
        }
    })
    return (
        <div>
                         <div>
        <ToastContainer
        style={{marginTop:100}}
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
/>
      </div>
        <Container>
            <h2>My Favourities</h2>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} >
                    <Grid container spacing={spacing}>

                        {products.map((product) => {
                             return  (
                                    <ProductCard products={product}/>
                             )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            {
                visible+1<products.length?
            <Button variant="contained" size="large" onClick={loadMore} className={classes.loadMoreButton}>
              LOAD MORE
             </Button>
            :null
            }
   
        </Container>
    </div>

    )
}