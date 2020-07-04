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

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
  {/*
        <Card>
    <img src ="http://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,w_290/v1592323505/haystack/download_lijfbp.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Applying current industry standard Big Data analytics solution to biological data.
          </Typography>
           <Button color="primary">Analytics</Button>
         </CardBody>
        </Card>

        <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/v1592387660/haystack/DNA-810x429_udydge.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Re-imagining data-mining, representation and visualization for Genomics. With our intuitive problem specific reporting, we make genomics data consumable for the general public. 
          </Typography>
           <Button color="primary">Genomic Analytics</Button>
         </CardBody>
        </Card>

        <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/v1592387800/haystack/big-genomic-data-visualization-dna-260nw-1102537547_ja6xkr.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Our current focus area. Driven by our experience in TB epidemiology, molecular biology and genomics. Setting the bar for At-Scale genomic diagnostics, one disease at a time.
          </Typography>
           <Button color="primary">TB Genomic Analytics</Button>
         </CardBody>
  </Card>     */}


        </GridItem>
      {/*  <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
  </GridItem> 
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem> 
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>*/}
      </GridContainer>
      <GridContainer>
       {/* <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
      </GridItem>   


      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="http://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,w_290/v1592323505/haystack/download_lijfbp.jpg"/>
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
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/v1592387660/haystack/DNA-810x429_udydge.jpg"/>
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
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/v1592387800/haystack/big-genomic-data-visualization-dna-260nw-1102537547_ja6xkr.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Our current focus area. Driven by our experience in TB epidemiology, molecular biology and genomics. Setting the bar for At-Scale genomic diagnostics, one disease at a time.
          </Typography>
           <Button color="primary">TB Genomic Analytics</Button>
         </CardBody>
        </Card>
        </GridItem>  */}

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
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_320,w_370/v1592736365/c3_tl6eig.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           HaystackAnalytics is excited about its collaboration with Intel India Maker Lab, a leading accelerator for systems startups. HaystackAnalytics will leverage world-class Intel® architecture processors along with Intel® Software Development Tools to optimize its genomics solution. Also, HaystackAnalytics is benefitting greatly from the technical and business mentorship during the program. 
          </Typography>
           <Button color="primary">Collaboration Support</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_320,w_370/v1592244725/haystack/award_buhhkl.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Adjudged Winner in Healthcare Category at Maharashtra Startup Week 2018. Recipient of Govt. of Maharashtra work order for Pilot roll out of Genomic drug resistance prediction for Tuberculosis 
           <a href = "">https://yourstory.com/2018/07/24-winners-maharashtra-startup-week/</a> 
          </Typography>
           <Button color="primary">Winner, Maharashtra Startup Week </Button>
         </CardBody>
        </Card>
        </GridItem> 

        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592244726/haystack/nbec_g9t3ln.jpg"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           HaystaclAnalytics selected for a 1-year accelerator program of Plugin 3rd edition.
          </Typography>
           <Button color="primary">Accelerator Support </Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592410886/haystack/logo_y2uboo.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           HaystackAnalytics awarded prestigious  NIDHI PRAYAS (DST, Gov. of India) grant  for new device prototype and pilot
          </Typography>
           <Button color="primary">Device Prototype Grant   </Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={4}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592244726/haystack/sinebig_r8nh1q.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           HaystaclAnalytics selected for incubation at Society for Innovation and Entrepreneurship, Indian Institute of Technology, Bombay. 
          </Typography>
           <Button color="primary">Incubator Support</Button>
         </CardBody>
        </Card>
        </GridItem> 


      </GridContainer>
    </div>
  );
}
