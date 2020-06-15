import React from 'react';
import logo from '../nfap.jpg'; 
import { Button, Dialog  } from '@material-ui/core';

export default function Home(){  
    return(
        <div> 
            <img src={logo} alt="logo"/>
            <h1>Did you fap today? </h1>
            <div>
              <Button variant="contained" color="secondary" onClick={handleClickYes}>
                Yes
              </Button> &nbsp;
              <Button variant="contained" color="primary" onClick={handleClickNo}>
                No
              </Button>
            </div>

            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    ); 
} 