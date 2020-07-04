import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-dashboard-react/views/landingPage.js";
import Dashboard from  "views/Dashboard/Dashboard.js";

import Home from  "views/Home/Home.js";
import Blog from  "views/Blog/Blog.js";
import Careers from  "views/Careers/Careers.js";
import Contact from  "views/Contact/Contact.js";
import Funding from  "views/Funding/Funding.js";
import Publication from  "views/Publication/Publication.js";
import Services from  "views/Services/Services.js";
import Team from  "views/Team/Team.js";


import Table from  "views/TableList/TableList.js";
import Sidebar from "components/Sidebar/Sidebar.js"; 

import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes.js";

//import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
// Sections for this page


const dashboardRoutes = [];
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/stacklayout") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/stacklayout" to="/stacklayout/typography" />
  </Switch>
);
const getRoute = () => {
  return window.location.pathname !== "/admin/maps";
};
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const mainPanel = React.createRef();

  
  return (
    <div>
     
      <Header
      
        color="white"
        routes={dashboardRoutes}
     //   brand="HaystackAnalytics"
        logo = "https://res.cloudinary.com/http-dthingz-com/image/upload/v1592406280/rsz_1newlogo_ktncc5.jpg"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
  
     <div className={classNames(classes.topspacing)}>


     </div>
      <div className={classNames(classes.main)}>
      <div className={classes.mainPanel} ref={mainPanel}>
       
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        
        
      </div>
        <div className={classes.container}>
          
          
        </div>
      </div>
      <Footer />
     
    </div>
  );
}