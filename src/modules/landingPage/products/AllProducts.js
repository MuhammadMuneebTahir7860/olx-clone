import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { FetchProducts } from './UseAllProducts';
import {CommonHooks} from '../../../commonHooks/CommonHooks';
import ProductCard from '../../../commonComponents/productCard/ProductCard';

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
        color:'white',
        "&:hover":{
        backgroundColor: 'rgb(0, 47, 52)',
        }
      },

}));

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(1);
    const classes = useStyles();
    const [productsData, loading] = FetchProducts();
    const[visible,loadMore]=CommonHooks();
    return (
        <div>
            <Container>
                <h2>Fresh Recommendations</h2>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} >
                        <Grid container spacing={spacing}>
                            {loading && <p className={classes.loading}>Loading....</p>}
                            {productsData.slice(0,visible).map((product) => {
                                 return  (
                                      <ProductCard  products={product}/>
                                 )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                {
                    visible+1<productsData.length?
                <Button variant="contained" size="large" onClick={loadMore} className={classes.loadMoreButton}>
                  LOAD MORE
                 </Button>
                :null
                }
       
            </Container>
        </div>
    );
}
