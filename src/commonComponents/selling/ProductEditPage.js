import UseSelling from "./UseSelling";
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import { useParams } from "react-router";
import { FetchProducts } from "../../modules/landingPage/products/UseAllProducts";
import { UseProductEditPage } from "./UseProductEditPage";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10,
    },
    signUpForm: {
        width: '90%',
        marginTop: 40,
        margin: 'auto',
        padding: "5px 20px 5px 20px !important",
        borderRadius: 5,
        "@media (max-width: 568px)": {
            width: "90%",
        },
    },
    postBtn: {
        fontSize: 13,
        display: 'flex',
        backgroundColor: 'rgb(0, 47, 52)',
        color: 'white',
        marginBottom: 10,
        '&:hover': {
            color: 'black',
        },
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: "90%",
        backgroundColor: "white",
        marginBottom: 10,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function ProductEditPage() {
    const classes = useStyles();
    const {docId} =useParams();
    const [productsData,getFavProducts,loading,userId]=FetchProducts();
    const[postLoading,dataEditHandler,setdocId,title,setTitle,description,setDescription,price,setPrice,location,setLocation,category,setCategory,setUserId,image,setImage,changeHandler]=UseProductEditPage();

    useEffect(()=>{
        setdocId(docId)
        let editProduct=productsData.filter((item)=>{
            if(item.docId==docId){
                return item;
            }
        })

    let product=editProduct.map((item)=>{
                setTitle(item.title)
                setDescription(item.description)
                setPrice(item.price)
                setLocation(item.location);
                setCategory(item.category)
                setUserId(item.userId);
                setImage(item.image);
    });
    },[])
      

    return (
        <div>
            <div>
                <div className={classes.signUpForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                    </DialogTitle>
        <DialogContent>
                        <DialogContentText style={{ textAlign: 'center' }}>
                            Post Your Product
          </DialogContentText>
                        <Input
                            autoFocus
                            margin="dense"
                            id="Product Title"
                            placeholder="Product Title"
                            type="text"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                        /><br /><br /><br />
                        <Input
                            required="required"
                            margin="dense"
                            id="Descriptions"
                            placeholder="Description"
                            type="text"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        /><br /><br /><br />
                        <Input
                            margin="dense"
                            id="price"
                            placeholder="Price"
                            type="number"
                            fullWidth
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        /><br /><br />
                        <Grid lg={6} md={6} sm={6} xs={12}>
                            <div><img src={image} alt="" /></div>
                            <div><input onChange={changeHandler}  type="file" /></div><br /><br /> 
                        </Grid>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid lg={6} md={6} sm={6} xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            onChange={(e) => setCategory(e.target.value)}
                                            label="Category"
                                            value={category}
                                        >
                                            <MenuItem value="Mobile Phones">Mobile Phones</MenuItem>
                                            <MenuItem value="Cars">Cars</MenuItem>
                                            <MenuItem value="Motorcycles">Motorcycles</MenuItem>
                                            <MenuItem value="Home Appliances">Home Appliances</MenuItem>
                                            <MenuItem value="Land & Plots">Land & Plots</MenuItem>
                                            <MenuItem value="Tablets">Tablets</MenuItem>
                                            <MenuItem value="Animals">Animals</MenuItem>
                                            <MenuItem value="Kids Toys">Kids Toys</MenuItem>
                                            <MenuItem value="Clothes">Clothes</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid lg={6} md={6} sm={6} xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            onChange={(e) => setLocation(e.target.value)}
                                            label="Location"
                                            value={location}
                                        >
                                            <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                                            <MenuItem value="Lahore">Lahore</MenuItem>
                                            <MenuItem value="Islamabad">Islamabad</MenuItem>
                                            <MenuItem value="Karachi">Karachi</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </div>
                        {postLoading && <CircularProgress disableShrink />}
                        <Button onClick={dataEditHandler} variant="contained" className={classes.postBtn}>
                            Edit
              </Button><br />
                    </DialogContent>
                </div>
            </div>
        </div>
    )
}