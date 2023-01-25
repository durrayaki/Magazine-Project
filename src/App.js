import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import {SectionsContainer, Section} from 'react-fullpage'
import issue1 from "./images/issue1.png";
import issue2 from "./images/issue2.png";
import issue3 from "./images/issue3.png";
import issue4 from "./images/issue4.png";



function App() {

  let options = {
    activeClass:          'active', // the class that is appended to the sections links
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree','sectionFour'], // the anchors for each sections
    arrowNavigation:      true, // use arrow keys
    className:            'SectionContainer', // the class name for the section container
    delay:                500, // the scroll animation speed
    navigation:           true, // use dots navigatio
    scrollBar:            false, // use the browser default scrollbar
    sectionClassName:     'Section', // the section class name
    sectionPaddingTop:    '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign:        false // align the content of each section vertical
  };

  // const menuOnClick() {
  //   document.getElementById("menu-bar").classList.toggle("change");
  //   document.getElementById("nav").classList.toggle("change");
  //   document.getElementById("menu-bg").classList.toggle("change-bg");
  // };

  return (
    <div className="App">
      <div className="App-header">
      <div id="menu-bar" onclick="menuOnClick()">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
        <div><h1><span>Mg</span>azine.</h1></div>
      </div>
      <SectionsContainer className="sectionContainer" {...options}>
        <Section className="child"><img src={issue1}/><br></br>
          <p className="description">Issue #1</p>
          <a className="buy-link" href=''>BUY HERE</a>
        </Section>
        <Section className="child"><img src={issue2}/><br></br>
          <p className="description">Issue #2</p>
          <a className="buy-link" href=''>BUY HERE</a></Section>
        <Section className="child"><img src={issue3}/><br></br>
          <p className="description">Issue #3 is sold out!</p>
          </Section>
        <Section className="child"><img src={issue4}/><br></br>
          <p className="description">Issue #4</p>
          <a className="buy-link" href=''>BUY HERE</a></Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
