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
      <GridItem xs={12} sm={12} md={2}>
  
  </GridItem>
  <GridItem xs={12} sm={12} md={8}>
  <iframe
    src="https://res.cloudinary.com/http-dthingz-com/video/upload/v1592323547/haystack/From_DNA_to_protein_-_3D_pvyxub.mp4"
    width="800"
    height="500"
    allow="false; fullscreen; encrypted-media; picture-in-picture"
    allowfullscreen
    frameborder="0"
  ></iframe>
  </GridItem>
  <GridItem xs={12} sm={12} md={2}>
  
  </GridItem>
      </GridContainer>
      <div className={classes.videoposition}>
  
  </div>


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
                COVID-19
              </Typography>
              {" — How is  Covid19 spreading in different parts of the world? Connecting the dots: Insights from the Genomics of Covid-19 "}
            
            </React.Fragment>
          }
        />
      </ListItem>

  <Carousel
  slidesPerPage={2}
  arrows
  infinite

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
<div>  <a target = "_blank" href = "http://haystackanalytics.co.in/narratives/covid" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/v1593201362/c18_u1htzt.png" /> <h4>click to explore...</h4>
</a>
         
         </div>
<div>         <a target = "_blank" href = "https://nextstrain.org/ncov/global" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/v1593201362/c19_wrukiv.png" /> <h4>click to explore...</h4> </a>  
         </div>

          
        </Carousel>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
  
        </GridItem>
     
      </GridContainer>
      <GridContainer>
      

      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592323505/haystack/download_lijfbp.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Applying current industry standard Big Data analytics solution to biological data.
          </Typography>
           <Button color="primary">Analytics</Button>
         </CardBody>
        </Card>
        </GridItem>  


        
      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592736800/c1_ioarzb.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Re-imagining data-mining, representation and visualization for Genomics. With our intuitive problem specific reporting, we make genomics data consumable for the general public.
          </Typography>
           <Button color="primary">Genomic Analytics</Button>
         </CardBody>
        </Card>
        </GridItem>  

        
      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592387800/haystack/big-genomic-data-visualization-dna-260nw-1102537547_ja6xkr.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Our current focus area. Driven by our experience in TB epidemiology, molecular biology and genomics. Setting the bar for At-Scale genomic diagnostics, one disease at a time.
          </Typography>
           <Button color="primary">TB Genomic Analytics</Button>
         </CardBody>
        </Card>
        </GridItem>  

       {/* <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
    </GridItem>   
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>  */}
      </GridContainer>
      <GridContainer>
       {/* <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
          </GridItem> 
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}


<GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_420,w_500/v1592390599/haystack/1_zprqvn.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Despite being the most well studied genomes, genomics of bacteria, viruses and protozoa are yet to benefit from the genome sciences. One of the principle reasons for the lag is the “non-glamorous” nature of the infectious diseases (IDs). IDs are classically believed to be the problem of the public health system, and consequently are the biggest expense heads in the health program of India.With our validate WGS analysis pipeline, the turn-around-time (TAT) for WGS based drug susceptibility testing of M.tb would be reduced to 5-10 days, as against 1 – 5 months. The implementation of portable sequencers, the TAT would reduce to a few hours (Votintseva et al. 2017).
           Whole genome shot-gun sequencing (WGS) of M.tuberculosis (M.tb) isolates in Mumbai demonstrated the disruptive power of WGS in drug susceptibility testing (DST) and unparalleled epidemiological insights (Chatterjee et.al. 2017). From raw data to a diagnostic report, WGS based DST analytics requires meagerly few minutes.
          </Typography>
           <Button color="primary">Technology</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/v1592736365/c2_dvuntb.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           We don't want to simplify genomics. 
           Our at-scale genomic pipeline, maintains the intensity of research methodologies. However, our big-data analytics, wraps around the genomic pipeline ensuring that the complex and high performance fades into the background. What remains is a simplified "Diagnostic Report", instantly consumable by the general public.
           Our vision is to use high performance computing along with big-data at an affordable scale making it available as a Plug'N'Play platform.
          </Typography>
           <Button color="primary">Vision</Button>
         </CardBody>
        </Card>
        </GridItem> 


      </GridContainer>
    </div>
  );
}
