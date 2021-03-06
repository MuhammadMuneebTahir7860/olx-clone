import UseSelling from "./UseSelling";
import React from 'react';
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
export default function Selling() {
    const classes = useStyles();
    const [setTitle,setDescription,setPrice,setLocation,setCategory,title,description,location,category,price,dataPostHandler,postLoading,userId,setUserId,handleChange] = UseSelling();
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
                            required="required"
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
                            <label htmlFor="Upload Picture">Upload Picture: <br /><br />
                                <input  onChange={handleChange} type="file" /><br /><br /> 
                            </label>
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
                        <Button onClick={dataPostHandler} variant="contained" className={classes.postBtn}>
                            Post
              </Button><br />
                    </DialogContent>
                </div>
            </div>
        </div>
    )
}