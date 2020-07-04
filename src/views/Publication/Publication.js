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

import TextField from '@material-ui/core/TextField';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

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
      <Divider variant="inset" component="li" />
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
                <strong>Publications : </strong>
              </Typography>
              {" — TB Genomics"}
            </React.Fragment>
          }
        />
      </ListItem>



      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <a target = "_blank" href = "https://jcm.asm.org/content/55/5/1285.short" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592736367/C14_sxmz69.png" /> </a>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Same-Day Diagnostic and Surveillance Data for Tuberculosis via Whole-Genome Sequencing of Direct Respiratory Samples
          </Typography>
           <Button color="primary">Journal of Clinical Microbiology</Button>
         </CardBody>
        </Card>
        </GridItem>  


        
      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <a target = "_blank" href = "https://www.nature.com/articles/s41588-017-0029-0" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592736367/C15_kowiaf.png" /> </a>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Genome-wide analysis of multi- and extensively drug-resistant Mycobacterium tuberculosis.
          </Typography>
           <Button color="primary">Nature Genetics</Button>
         </CardBody>
        </Card>
        </GridItem>  

        
      <GridItem xs={12} sm={12} md={4}>
    <Card>
    <a target = "_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S1472979217301786" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592736368/c16_q9pq1a.png" /> </a>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Whole genome sequencing of clinical strains of Mycobacterium tuberculosis from Mumbai, India: A potential tool for determining drug-resistance and strain lineage.
          </Typography>
           <Button color="primary">Tuberculosis</Button>
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
                <strong>Publications : </strong>
              </Typography>
              {" — Metagenomics"}
            </React.Fragment>
          }
        />
      </ListItem>



<GridItem xs={12} sm={12} md={4}>
    <Card>
    <a target = "_blank" href = "https://www.nature.com/articles/s41598-019-40171-y" > <img src="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_200,w_300/v1592736367/C17_dheyjq.png" /> </a>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           Genomic and metagenomic signatures of giant viruses are ubiquitous in water samples from sewage, inland lake, waste water treatment plant, and municipal water supply in Mumbai, India.
          </Typography>
           <Button color="primary">Scientific Reports</Button>
         </CardBody>
        </Card>
        </GridItem> 


      </GridContainer>


      
    </div>
  );
}
