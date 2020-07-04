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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/careerStyle.js";

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = makeStyles(styles);

export default function Careers() {
  const classes = useStyles();
  return (
    <div >
{/*
<Carousel className = {classes.carousel}
  autoPlay={2000}
  animationSpeed={1000}
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
          <a target = "_blank" href = "https://en.wikipedia.org/wiki/Genomics" > <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398988/haystack/images_2_iv0wms.jpg" /> </a>
          <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398987/haystack/1_g5gwcx.jpg" />
          <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398748/haystack/4636cebb-3707-4f80-b4d1-358c1893cf30_fyyvkg.jpg" />
          <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398737/haystack/big-genomic-data-visualization-dna-260nw-1102537547_vn67ah.jpg" />
          <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398748/haystack/4636cebb-3707-4f80-b4d1-358c1893cf30_fyyvkg.jpg" />
         <div> <img src="https://res.cloudinary.com/haystackanalytics/image/upload/c_scale,h_250,w_250/v1592398988/haystack/images_dbzigq.jpg" />
         <h3> Genomics data
         </h3>
         <h4>Continue Reading...</h4>
         </div>

          
</Carousel> */}
      <GridContainer>
      <GridItem xs={12} sm={12} md={0}>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
      
       


        </GridItem>
        <GridItem xs={12} sm={12} md={0}>
        </GridItem>
      </GridContainer>
      <GridContainer>


      <List className={classes.root}>
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
                Genomics: Internship
              </Typography>
              <br/>
              {"  Applications are invited for an internship position for developing computational genomic analysis pipeline. Key roles include, next generation sequencing raw data processing, reference based mapping, variant calling and pipeline validation. "} <br/>

              {" — Essential requirements   :   Next Generation Sequencing data analysis: (samtools, bwa, stampy, GATK, annovar, VarScan); Python, Bash scripting. "} <br/>

              {" — Desirable requirements   :   Programming: Tensorflow, DeepVariant, SciPy, and Scikit-learn.; Genomics: Disease epidemiology, phylogenetics and comparative genomics. Please write to us with subject title “Genomics Internship” at: contact@haystackanalytics.in If you have your own Github page, please share link. "} <br/>

            </React.Fragment>
          }
        />
      </ListItem>
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
                Web Stack Developer: Internship
              </Typography>
              <br/>
              {" Applications are invited for an internship position for developing cloud analysis, data visualization and web access platform of existing genomic algorithm."} <br/>

              {" — Essential requirements   :   Python, R, Docker, Virtualenv. Knowledge of following python packages are essential: nextflow, matplotlib, pandas, numpy, and vagrant. "} <br/>

              {" — Desirable requirements   :   Hadoop/Kubernetes, Next Generation Sequencing data analysis (samtools, bwa, stampy, GATK, annovar, VarScan), Tensorflow, DeepVariant, SciPy, and Scikit-learn."} <br/>

              {" — Duration of internship   :   Minimum 3 months Please write to us with subject title “summer internship” at: contact@haystackanalytics.in If you have your own Github page, please share link. "} <br/>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />


    </List>

     
      </GridContainer>
      <GridContainer>

      </GridContainer>
    </div>
  );
}
