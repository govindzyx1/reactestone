import React, { useState ,useEffect} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";


import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import ReactMarkdown from 'react-markdown';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 19.134510, lng: 72.91177 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 19.134510, lng: 72.91177 }} />
    </GoogleMap>
  ))
);




const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  p:{
    color:"#000000"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);



export default function UserProfile() {
  const classes = useStyles();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');
  const [message, setMessage] = useState('');
 
  useEffect(() => {
   
    
   



  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  const fnamedata = {"fname":fname};
  const lnamedata = {"lname":lname};
    const fdata = {fnamedata,lnamedata};

    axios.post("http://localhost:1337/analytics", fdata,
     {headers: {'Accept': 'application/json'}}).then(console.log).catch(console.error)
    


  }
  const handleChange = event =>{
 
  }

  const [data, setData] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:1337/blogs/1',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
  return (
    <div>

      {/*
<GridContainer>
<GridItem xs={12} sm={12} md={8}>
<Card>

<CardHeader color="primary">
        
        <p className={classes.cardCategoryWhite}>{data.title}</p>
      </CardHeader>
<CardBody>
<p><ReactMarkdown source={data.content} /> </p>

</CardBody>
</Card>
</GridItem>
      </GridContainer>    */}


      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
        
              <p className={classes.cardCategoryWhite}>Contact Us</p>
            </CardHeader>
            <CardBody>
            <form onSubmit = { handleSubmit }>
              <GridContainer>
               {/* <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  /> 
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>*/}
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={e => setEmail(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <input type = "text"
                    name="fname"
      
                    onChange={e => setFname(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <input type = "text"
                
                    name="lname"
                    
                    onChange={e => setLname(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange= {handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange= {handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange= {handleChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                   // labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    onChange= {handleChange}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <button type = "submit"> Submit </button>
                </GridItem>


      </GridContainer>
              </form>
            </CardBody>
          
          </Card>
        </GridItem>
      </GridContainer>

      



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
            
              </Typography>
       
              {"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."} <br/>

            </React.Fragment>
          }
        />








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
                HaystackAnalytics Pvt. Ltd.
              </Typography>
              <br/>
              {"SOCIETY FOR INNOVATION & ENTREPRENEURSHIP (SINE), IIT BOMBAY, IIT Area, Powai, Mumbai, Maharashtra, India"} <br/>

            </React.Fragment>
          }
        />

<CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPI7PTpr3NJ54_h-Yv0sny1J9cFH8_kfg"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
}
