import './DropDown.css';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';


export default function DropDown(){
    const categories=[
        {
            title:"Mobile Phones",
            link:'/mobile-phones',
        },
        {
            title:"Cars",
            link:'/cars',
        }, 
        {
            title:"Motorcycles",
            link:'/motorcycles',
        }, 
        {
            title:"Home Appliances",
            link:'/home-appliances',
        },
        {
            title:"Land & Plots",
            link:'/land-plots',
        },
        {
            title:"Tablets",
            link:'/tablets',
        },
        {
            title:"Animals",
            link:'/animals',
        },
        {
            title:"Kids Toys",
            link:'/kids-toys',
        },
        {
            title:"Clothes",
            link:'/clothes',
        }

    ]
const[open,setOpen]=React.useState(false);
const[iconsOpen,setIconsOpen]=React.useState(true);

const handleChangeOpen=()=>{
    setOpen(true);
    setIconsOpen(false);
}
const handleChangeClose=()=>{
    setOpen(false);
    setIconsOpen(true);
}

    return(
        <>
        <div className='drop-down-menu'>
            <div>
                {
                    open?
            <h4 style={{cursor:'pointer'}} onClick={handleChangeClose}>ALL CATEGORIES</h4>
            :
            <h4 style={{cursor:'pointer'}} onClick={handleChangeOpen}>ALL CATEGORIES</h4>
}
            </div>
            <div>
                {iconsOpen?
            <ExpandMoreIcon style={{cursor:'pointer'}} onClick={handleChangeOpen} id="expandMoreIcon" />
            :
            <ExpandLessIcon style={{cursor:'pointer'}} onClick={handleChangeClose} id='expandLessIcon' />
                }
            </div>
        </div>
        {
            open?
        <div className='drop-down-section'>
            <List>
          {categories.map((text) => (
            <ListItem>
                <Link className='link' onClick={handleChangeClose} to={text.link}>
              <ListItemText>{text.title}
              <Divider />
              </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
        </div>
        :null
}
        </>
    )
}