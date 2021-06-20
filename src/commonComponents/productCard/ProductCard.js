import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextEllipsis from 'react-text-ellipsis';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
        marginBottom:-30,
        "@media (max-width: 968px)": {
            height:'100%',
         },
        "@media (max-width: 568px)": {
            width: '90%',
            height: '100%',
        },
    },
    imageDiv:{
            height:160,
            "@media (max-width: 968px)": {
                height:230,
             },
             "@media (max-width: 668px)": {
                height:230,
             },
             "@media (max-width: 568px)": {
                height:150,
             },
    },
    price: {
        fontSize: 20,
        paddingLeft: 10,
        marginBottom:-20,
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
    heartIcon: {
        "@media (max-width: 380px)": {
            display: 'none',
        },
    }
}));

export default function ProductCard({ products}) {
    const classes = useStyles();
    return (
        <Grid className={classes.card} key={products} item lg={3} md={3} sm={6} xs={6}>
            <div className={classes.paper}>
        <Link className='link' to={`/products/${products.docId}`}>
                <div className={classes.imageDiv}>
                <img className={classes.image} src={products.image} alt="" />
                </div>
            <TextEllipsis
                    lines={2}
                    tag={'h4'}
                    ellipsisChars={'...'}
                    tagClass={'className'}
                    debounceTimeoutOnResize={200}
                    useJsOnly={true}>
                            <h4 className={classes.price}>Rs. {products.price}</h4>
                </TextEllipsis>
                <TextEllipsis
                    lines={2}
                    tag={'p'}
                    ellipsisChars={'...'}
                    tagClass={'className'}
                    debounceTimeoutOnResize={200}
                    useJsOnly={true}>
                <p className={classes.title}>{products.title}</p>
                </TextEllipsis>
            </Link>
                <div>
                    <Button  variant="contained" className={classes.favBtn}>
                        <FavoriteBorderIcon className={classes.heartIcon} /> &nbsp; Favourite
              </Button>
                </div>
                <div >
                    <p className={classes.location}>{products.location}</p>
                </div>

            </div>

        </Grid>
    )
}

