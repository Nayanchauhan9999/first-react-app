import React from "react";
import { NavLink } from "react-router-dom";

function ComponentList() {
  return (
    <React.Fragment>
      <ol>
        <li>
          <NavLink to="/component1">Component 1 : First React Program</NavLink>
        </li>
        <li>
          <NavLink to="/Component2">Component 2 : JS variable in JSX</NavLink>
        </li>
        <li>
          <NavLink to="/Component3">Component 3 : Template Litrals</NavLink>
        </li>
        <li>
          <NavLink to="/Component4">
            Component 4 : Date and Time in react Js
          </NavLink>
        </li>
        <li>
          <NavLink to="/Component5">Component 5 : JSX attribute in JSX</NavLink>
        </li>
        <li>
          <NavLink to="/Component6">Component 6 : Anchor Tag in JSX</NavLink>
        </li>
        <li>
          <NavLink to="/Component7">Component 7 :Greating</NavLink>
        </li>
        <li>
          <NavLink to="/Component8">Component 8 : Basic Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/Top5AmazonSeries">
            Component 9 : Web Series List
          </NavLink>
        </li>
        <li>
          <NavLink to="/UseState">
            Component 10 : Increment-Decrement Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/UpdateTimeOnClick">
            Component 11: onClick Time Change
          </NavLink>
        </li>
        <li>
          <NavLink to="/UpdateTimeAutomatically">
            Component 12: Automatic time Update
          </NavLink>
        </li>
        <li>
          <NavLink to="/TextEditor">Component 13 : Sasta Google Docs</NavLink>
        </li>
        <li>
          <NavLink to="/Component14">Component 14: Print Name</NavLink>
        </li>
        <li>
          <NavLink to="/Component15">
            Component 15 : Print Name On submit
          </NavLink>
        </li>
        <li>
          <NavLink to="/Component16">Component 16 : Form Tag</NavLink>
        </li>
        <li>
          <NavLink to="/Component17">Component 17 : Complex Form</NavLink>
        </li>
        <li>
          <NavLink to="/Component18">Component 18 : Todo List Trial</NavLink>
        </li>
        <li>
          <NavLink to="/Component19">Component 19 : Todo List Final</NavLink>
        </li>
        <li>
          <NavLink to="/Component20">Component 20 : Accordian</NavLink>
        </li>
        <li>
          <NavLink to="/AccordionGroup">Component 21 : Accordian Group</NavLink>
        </li>
        <li>
          <NavLink to="/Component22">Component 22 : Google Keep Clone</NavLink>
        </li>
        <li>
          <NavLink to="/FetchAPI">Component 23 : Fetch API</NavLink>
        </li>
        <li>
          <NavLink to="/EnglishJokes">
            Component 24 : English Jokes(api)
          </NavLink>
        </li>
        <li>
          <NavLink to="/HindiJokes">Component 25 : Hindi Jokes(api)</NavLink>
        </li>
        <li>
          <NavLink to="/Component26">Component 26 : Currency Exchange</NavLink>
        </li>
        <li>
          <NavLink to="/Component27">Component 27 : Country Flags</NavLink>
        </li>
        <li>
          <NavLink to="/ReactRouterDom/*">
            Component 28 : React Dom Router
          </NavLink>  
        </li>
        {/* <li>
          <NavLink to="/NewsAPI">
            Component 29 : News API 
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/StockMarket">Slider(Carousel)</NavLink>
        </li>
        <li>
          <NavLink to="/flipkart">Flipkart</NavLink>
        </li>
        <li>
          <NavLink to="/WeatherAPI">WeatherAPI</NavLink>
        </li>
        <li>
          <NavLink to="/categoryWiseData">Category wise Data</NavLink>
        </li>
        <li>
          <NavLink to="/emojiFinder">Emoji Finder App</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/windowclone">windowclone</NavLink>
        </li>
        <li>
          <NavLink to="/allinoneicons">All In One Icons</NavLink>
        </li>
        <li>
          <NavLink to="/component35">Quotes API</NavLink>
        </li>
        <li>
          <NavLink to="/logicray">Logic Ray Practice</NavLink>
        </li>
        <li>
          <NavLink to="/changecounter">Icrement - Decrement Counter using redux</NavLink>
        </li>
      </ol>
    </React.Fragment>
  );
}

export default ComponentList;
