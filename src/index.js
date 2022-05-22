import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ModalApp from './App';
import {CardContainer} from './Components/Cards/cards'
import { useState, useEffect } from "react";

const Spacer = (props) => {
  return(
    <div style={{padding: '30px 0px'}}></div>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    <Spacer/>
    <CardContainer />
    </>

);
