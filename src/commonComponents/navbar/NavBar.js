import { Hidden } from '@material-ui/core';
import DropDown from './DropDown';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
          <Hidden smDown>
          <div className='navbarSection'> 
          <DropDown />

                <ul className='navList'>
                <li> 
                </li>
                 <li><Link className='link' to='/mobile-phones'>Mobile Phones</Link></li>
                  <li><Link className='link' to='/cars'>Cars</Link></li>
                  <li><Link className='link' to='/motorcycles'>Motorcycles</Link></li>
                  <li><Link className='link' to='/home-appliances'>Home Appliances</Link></li>
                  <li><Link className='link' to='/land-plots'>Land & Plots</Link></li>
                  <li><Link className='link' to='/tablets'>Tablets</Link></li>
                  <li><Link className='link' to='/animals'>Animals</Link></li>
                </ul>
                </div>
                </Hidden>
        </div>
    )
}