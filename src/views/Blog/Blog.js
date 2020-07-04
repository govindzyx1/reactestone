import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.js";

import { bugs, website, server } from "variables/general.js";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>



        </GridItem>
      
      </GridContainer>
      <GridContainer>
      
      </GridContainer>
      <GridContainer>
      

<GridItem xs={12} sm={12} md={4}>
    <Card>
         <CardBody>
         <div className="selfCenter standardWidth">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="HaystackLab"
  options={{height: 400}}

/>
</div>
         </CardBody>
        </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={8}>
    <Card>
    <a target = "_blank" href = "https://plugin.org.in/current-cohort" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_280,w_700/v1592736365/c3_tl6eig.png" /> </a>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           HaystackAnalytics selected as one of the 11 startups from over 200 entries as a part of the 3rd edition of the Plugin accelerator, a 1-year program for hardware and systems startups.
          </Typography>
           <Button color="primary">Plugin 3rd Edition</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592736365/c4_ybiyh0.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Winner in healthcare category. Project to pilot whole genome sequencing based diagnostics for drug resistant TB in Mumbai.
          </Typography>
           <Button color="primary">Maharashtra Startup Week</Button>
         </CardBody>
        </Card>
        </GridItem> 

        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592408417/images_5_jxpzgq.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Selected among 22 top Biotech Startups in India, out of more 2000 applicants.  Chosen for NBEC bootcamp held in Bengaluru 2018, conducted by BIRAC-C-CAMP. 
          </Typography>
           <Button color="primary">National Bio Entrepreneurship Competition</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592408422/images_3_q1ycfu.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Pilot project implemented by HaystackAnalytics for whole genome sequencing based TB diagnostic featured in Times of India, along with note from State TB Officer. 
          </Typography>
           <Button color="primary">Times of India Article</Button>
         </CardBody>
        </Card>
        </GridItem> 


      </GridContainer>


      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Blog
              </Typography>
              {" — All Post :"}
            
            </React.Fragment>
          }
        />
      </ListItem>


      <Carousel className = {classes.carousel}
  autoPlay={3000}
  animationSpeed={400}
  infinite
  arrows
  centered
  slidesPerPage={3}
  breakpoints={{
    640: {
      slidesPerPage: 1,
      arrows: false
    },
    900: {
      slidesPerPage: 2,
      arrows: false
    }
  }}
>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/covid-19-the-story-of-the-anti-hero-spike-protein" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592408420/images_4_qmr3jp.jpg" /> <br/><h18>23rd June 2020, Covid-19 , The story of the anti-hero Spike protein...</h18></a> 
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/in-the-eye-of-the-storm--a-covid-19-perspective" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592736800/c1_ioarzb.png" />  <br/><h18>9th May 2020, In the eye of the storm - a Covid-19 perspective ...</h18> </a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/a-lung-on-chip-infection-model-for-tb" > <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_350/v1592398748/haystack/4636cebb-3707-4f80-b4d1-358c1893cf30_fyyvkg.jpg" /> <br/><h18>3rd Mar 2020, A lung-on-chip infection model for TB...</h18> </a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/whole-genome-sequencing-for-tb" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592408422/images_3_q1ycfu.jpg" /> <br/><h18>19th Feb 2020, Whole genome sequencing for TB...</h18> </a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/phenotypiclpa-dst-vs-wgs-dst" > <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_350/v1592398988/haystack/images_2_iv0wms.jpg" /> <br/><h18>31st Jan 2020, Phenotypic DST vs LPA vs WSG DST...</h18> </a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/species-specific-gyrase-subunit-interactions" > <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_350/v1592398988/haystack/images_dbzigq.jpg" />  <br/><h18>21st Jan 2020, Species-specific Gyrase subunit interactions...</h18></a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/new-insights-into-recurrent-tuberculosis" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_250,w_350/v1592244724/haystack/ea8c3e13e8c17436264760d638ab970e1_e2qizr.png" /> <br/><h18>13th Jan 2020, New Insights into recurrent tuberculosis...</h18> </a>
          <a target = "_blank" href = "https://haystackanalytics.in/blog-%26-news/f/changes-to-the-treatment-of-drug-resistant-tuberculosis" > <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_350/v1592398987/haystack/1_g5gwcx.jpg" /> <br/><h18>7th Jan 2020, Changes to the treatment of durg-resistant...</h18> </a>
         
          
         
        

          
        </Carousel>
    </div>
  );
}
