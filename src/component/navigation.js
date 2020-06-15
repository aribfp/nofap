import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Navigation(){  
    return(
        <div>
            <Button > <Link to='/'> Home </Link> </Button> 
            <Button > <Link to='/about'> About </Link> </Button> 
            <Button > <Link to='/signup'> Sign Up </Link> </Button> 
        </div>
    ); 
} 