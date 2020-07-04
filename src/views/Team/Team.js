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
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_355,w_375/v1592736368/c7_hgpvkp.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           <strong>Dr. Amrutraj Zade</strong> obtained his Ph.D. from Indian Institute of Technology Bombay. His fields of expertise are Molecular Biology, Cell Biology and Evolutionary Bioinformatics. He has publications in Frontiers in Microbiology and Journal of Virology.
          </Typography>
           <Button color="primary">Amrutraj Zade, PhD (Genome Analyst)</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_355,w_375/v1592736366/c8_yx6tqz.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
            
           
            <strong>Dr. Anirvan Chatterjee </strong>obtained his PhD from the University of Mumbai for his work on Tuberculosis Epidemiology carried out at the “Foundation for Medical Research”, Mumbai, followed by a post-doctoral stint at Oxford University and another one at IIT Bombay on viral genomics. He is a “Tata IGPEDU Fellow” in the Department of Biosciences and Bioengineering, IIT Bombay. He has coauthored more than 20 papers in journals like Nature Genetics, Tuberculosis, J. Clin. Micro., etc. He envisions HAPL making genomic diagnostics accessible to every stratum of the population.
          
          </Typography>
          {/*
          <a target = "_blank" href = "http://haystackanalytics.co.in/narratives/covid" > 
           <Button color="primary">Anirvan Chatterjee, PhD  (Founder & CEO ) </Button>
          </a>
          */}
           <Button color="primary">Anirvan Chatterjee, PhD  (Founder & CEO ) </Button>
         </CardBody>
        </Card>
        </GridItem> 

        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_355,w_375/v1592736366/c9_dwrhdt.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           <strong>Dr. Bajarang Kumbhar </strong>obtained his Ph.D. from Shivaji University Kolhapur. He was Post-Doctoral fellow, followed by Senior Research Associate at Department of Biosciences and Bioengineering, IIT Bombay. His research focuses to investigate the origin of anticancer drug resistance due to an expression of tubulin isotypes using protein modeling, molecular docking, molecular dynamics simulations, and free energy calculations. He has publications in several prestigious international journals such as Plos One, Cell Biochemistry and Biophysics, Journal of Molecular Graphics and Modeling, RSC Advances, JBSD etc. 
          </Typography>
           <Button color="primary">Bajarang Kumbhar, PhD    (Team Lead, HPC Design) </Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_355,w_375/v1592736366/c11_ftball.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           <strong>Dr. Akanksha Singh </strong>received her Ph.D degree in Physics from the University of Pune.  She was a Research Scientist at National Research Center of France CNRS, FEMTO-ST Institute in the Micro Nano Science & System department. She continued her research at Micronova-VTT, Centre for Micro and Nanotechnology, Espoo-Finland. After serving internationally in the research field of Micro and Nanotechnology she returne to India where she joined IIT-Bombay . She moved to  IIT Kanpur, National Canter for Flexible Electronics(NcFleXE) as a Senior Project Scientist. Currently she is Vice President - Innovation & Technology in a startup in Mumbai. She has more than 25 publications in international journals. Her research focuses in the fabrication of micro/nano structured devices.
          </Typography>
           <Button color="primary">Akanksha Singh, PhD  (Mentor, Device Design and Fabrication)</Button>
         </CardBody>
        </Card>
        </GridItem> 


        <GridItem xs={12} sm={12} md={6}>
    <Card>
    <img src ="https://res.cloudinary.com/http-dthingz-com/image/upload/c_scale,h_355,w_375/v1592736366/c10_qtdvog.png"/>
         <CardBody>
           <h4 className={classes.cardTitle}>Card title</h4>
           <Typography variant="body2" color="textSecondary" component="p">
           <strong>Govind Verma </strong>completed his MCA from VIT University. Prior to joining Haystack, Govind has been involved in coding of business logic and design. He has implemented and managed turnkey projects using API management, Front-end and Micro services architecture.At Haystack he is building the webstack to support our Genomics Big Data Analytics.
          </Typography>
           <Button color="primary">Govind Verma (WebStack Developer)    </Button>
         </CardBody>
        </Card>
        </GridItem> 


      </GridContainer>
    </div>
  );
}
