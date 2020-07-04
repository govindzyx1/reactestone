/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

import "assets/css/material-dashboard-react.css";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import handleClick from "@material-ui/core/";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import '@progress/kendo-react-buttons'
import '@progress/kendo-react-inputs'


const useStyles = makeStyles(styles);

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#ffffff",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "#333333",
      },
    },
  },
}))(MenuItem);

export default function HeaderLinks(props) {
  const path = window.location.pathname;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <List className={classes.list}>

<ListItem className={classes.listItem}>
        <Button

          href="/haylayout/dashboard"
          color="transparent"
          className={path==="/haylayout/dashboard"?classes.navLinkActive:classes.navLink}
         
        >
           Home
        </Button>
      </ListItem>
    


      {/*<Menu hoverOpenDelay={0} hoverCloseDelay={200}>
                    <MenuItem text="Item1">
                        <MenuItem text="Item1.1" />
                        <MenuItem text="Item1.2">
                            <MenuItem text="Item1.2.1" />
                            <MenuItem text="Item1.2.2" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem text="Item2">
                        <MenuItem text="Item2.1" />
                        <MenuItem text="Item2.2" />
                    </MenuItem>
                    <MenuItem text="Item3" />
                </Menu>

      <ListItem className={classes.listItem}>
    
    
      <Button 

href="/haylayout/dashboard"
color="transparent"
className={path==="/haylayout/dashboard"?classes.navLinkActive:classes.navLink}

>
 Home

 <Menu hoverOpenDelay={0} hoverCloseDelay={200}>
 <MenuItem text="Item1">
                        <MenuItem text="Item1.1" />
                        <MenuItem text="Item1.2">
                            <MenuItem text="Item1.2.1" />
                            <MenuItem text="Item1.2.2" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem text="Item2">
                        <MenuItem text="Item2.1" />
                        <MenuItem text="Item2.2" />
                    </MenuItem>
                    <MenuItem text="Item3" />
 </Menu>
</Button>
     

      </ListItem>
  */}
      



    

    {/*   <ListItem className={classes.listItem}
      
      
   >
      
     
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="transparent"
        onMouseClick={handleClick}

      >
        News & Media
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        
      >
      
       <StyledMenuItem>
         
          
          <Button
          href="/stacklayout/blog"
          color="transparent"
         
          className={path==="/stacklayout/blog"?classes.navLinkActive:classes.navLink}
        > Blog  </Button>
        </StyledMenuItem>
        
        
        <StyledMenuItem>
        

        <Button
          href="/stacklayout/news"
          color="transparent"
         
          className={path==="/stacklayout/news"?classes.navLinkActive:classes.navLink}
        > In The News </Button>
        </StyledMenuItem>
        
        
        <StyledMenuItem>
        <Button
          href="/stacklayout/faq"
          color="transparent"
         
          className={path==="/stacklayout/faq"?classes.navLinkActive:classes.navLink}
        > FAQ </Button>
        </StyledMenuItem>
      </StyledMenu>
 
  </ListItem>   

<ListItem className={classes.listItem}>
      <div class="dropdown">
  <button className="dropbtn" color="transparent">News & Media</button>
  <div class="dropdown-content">
    <a href="/stacklayout/blog">News</a>
    <a href="/stacklayout/team">Blog</a>
    <a href="#">Press</a>
  </div>
</div>
      </ListItem>     */}



<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="News & Media"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
         // buttonIcon={Apps}
          dropdownList={[
            <Link to="/stacklayout/blog" 
            className={classes.dropdownLink} color="transparent">
               
              Blog
            </Link>,
            
            <a
              href="/stacklayout/news"
              color="transparent"
              className={classes.dropdownLink}
            >
              In The News
            </a>,
             <a
             href="/stacklayout/faq"
             color="transparent"
             className={classes.dropdownLink}
           >
             FAQ
           </a>

            
            
            
          ]}
          
        />
        
      </ListItem>


      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/services"
          color="transparent"
         
          className={path==="/stacklayout/services"?classes.navLinkActive:classes.navLink}
        >
           Services
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/team"
          color="transparent"
       
          className={path==="/stacklayout/team"?classes.navLinkActive:classes.navLink}
        >
           Team
        </Button>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/funding"
          color="transparent"
          className={path==="/stacklayout/funding"?classes.navLinkActive:classes.navLink}
         // className={classes.navLink}
        >
           Funding & Partners
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/careers"
          color="transparent"
          className={path==="/stacklayout/careers"?classes.navLinkActive:classes.navLink}
          //className={classes.navLink}
        >
           Careers
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/publications"
          color="transparent"
          className={path==="/stacklayout/publications"?classes.navLinkActive:classes.navLink}
          //className={classes.navLink}
        > Publications
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/stacklayout/contact"
          color="transparent"
          className={path==="/stacklayout/contact"?classes.navLinkActive:classes.navLink}
          //className={classes.navLink}
        >
           Contact
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="https://twitter.com/HaystackLab"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
        <i class="fa fa-twitter"></i> 
      </Button>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Button
          href="https://www.linkedin.com/company/haystack-analytics/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
        <i class="fa fa-linkedin"></i> 
      </Button>
      </ListItem>


   {/*   <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
    {/*     <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>*/}
    </List>
  );
}
