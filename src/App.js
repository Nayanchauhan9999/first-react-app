//Imports
import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentList from "./Components/Component_list";
import { Component1 } from "./Components/component_1";
import { Component2 } from "./Components/component_2";
import { Component3 } from "./Components/component_3";
import { Component4 } from "./Components/component_4";
import { Component5 } from "./Components/component_5";
import { Component6 } from "./Components/component_6";
import { Component7 } from "./Components/component_7";
import { Component8 } from "./Components/component_8";
import { Top5AmazonSeries } from "./Components/component_9";
import { UseState } from "./Components/component_10";
import UpdateTimeOnClick from "./Components/component_11";
import UpdateTimeAutomatically from "./Components/component_12";
import TextEditor from "./Components/Sasta Google Docs/component_13";
import Component14 from "./Components/component_14";
import Component15 from "./Components/component_15";
import Component16 from "./Components/component_16";
import Component17 from "./Components/component_17";
import Component18 from "./Components/Component_18";
import Component19 from "./Components/Component_19";
import { Component20, Accordion } from "./Components/Component_20";
import { AccordionGroup } from "./Components/Component_21";
import { Component22 } from "./Components/Component_22";
import FetchAPI from "./Components/Component_23";
import EnglishJokes from "./Components/Component_24";
import HindiJokes from "./Components/Component_25";
import ReactRouterDom from "./Components/Component_28";
import Component26 from "./Components/Component_26";
import Component27 from "./Components/Component_27";
// import NewsAPI from "./Components/Component_29";
import StockMarket from "./Components/Component_30";
import Flipkart from "./Flipkart Clone/Flipkart";
import WeatherAPI from "./Components/Component_31";
import ActiveLastBreadcrumb from "./Components/Breadcrumbs";
import CategoryWiseData from "./Components/Component_32";
import EmojiFinder from "./Components/Component_33";
import Calculator from "./Components/Component_34";
import WindowClone from "./window clone/WindowClone";
import Portfolio from "./Portfolio site/Portfolio";
import Home from "./Portfolio site/Home";
import About from "./Portfolio site/About";
import Contact from "./Portfolio site/Contact";
import Blog from "./Portfolio site/Blog";
import Component35 from "./Components/Component_35";
import AllinOneIcon from "./Components/Component_36";
import LogicRaysPractice from "./Components/Logic Rays/LogicRays";
import ChangeCounter from "./Components/Inc-Dec-counter-redux";
import AgeCalculator from "./Components/AgeCalculator";
function App() {
  return (
    <React.Fragment>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ActiveLastBreadcrumb />
        <Routes>
          <Route path="/" element={<ComponentList />} />
          <Route path="/Component1" element={<Component1 />} />
          <Route path="/Component2" element={<Component2 />} />
          <Route path="/Component3" element={<Component3 />} />
          <Route path="/Component4" element={<Component4 />} />
          <Route path="/Component5" element={<Component5 />} />
          <Route path="/Component6" element={<Component6 />} />
          <Route path="/Component7" element={<Component7 />} />
          <Route path="/Component8" element={<Component8 />} />
          <Route path="/Top5AmazonSeries" element={<Top5AmazonSeries />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UpdateTimeOnClick" element={<UpdateTimeOnClick />} />
          <Route
            path="/UpdateTimeAutomatically"
            element={<UpdateTimeAutomatically />}
          />
          <Route path="/TextEditor" element={<TextEditor />} />
          <Route path="/Component14" element={<Component14 />} />
          <Route path="/Component15" element={<Component15 />} />
          <Route path="/Component16" element={<Component16 />} />
          <Route path="/Component17" element={<Component17 />} />
          <Route path="/Component18" element={<Component18 />} />
          <Route path="/Component19" element={<Component19 />} />
          <Route
            path="/Component20"
            element={
              <>
                <Component20 />
                <Accordion />
              </>
            }
          />
          <Route path="/AccordionGroup" element={<AccordionGroup />} />
          <Route path="/Component22" element={<Component22 />} />
          <Route path="/FetchAPI" element={<FetchAPI />} />
          <Route path="/EnglishJokes" element={<EnglishJokes />} />
          <Route path="/HindiJokes" element={<HindiJokes />} />
          <Route path="/Component26" element={<Component26 />} />
          <Route path="/Component27" element={<Component27 />} />
          <Route path="/ReactRouterDom/*" element={<ReactRouterDom />} />
          {/* <Route path="/NewsAPI" element={<NewsAPI/>} /> */}
          <Route path="/StockMarket" element={<StockMarket />} />
          <Route path="/flipkart" element={<Flipkart />} />
          <Route path="/WeatherAPI" element={<WeatherAPI />} />
          <Route path="/categoryWiseData" element={<CategoryWiseData />} />
          <Route path="/emojiFinder" element={<EmojiFinder />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="windowclone" element={<WindowClone />} />
          <Route path="portfolio" element={<Portfolio />}>
            <Route path="portfolio" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        <Route path="component35" element={<Component35/>} />
        <Route path="allinoneicons" element={<AllinOneIcon/>} />
        <Route path="logicray" element={<LogicRaysPractice/>} />
        <Route path="changecounter" element={<ChangeCounter/>} />
        <Route path="/agecalculator" element={<AgeCalculator/>} />
        </Routes>
      </BrowserRouter>
      </LocalizationProvider>
    </React.Fragment>
  );
}

export default App;
