import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
import axios from 'axios';
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { Person, Notifications, Dashboard, Search } from "@material-ui/icons";

import { CustomInput, IconButton as SearchButton } from "components";

import headerLinksStyle from "assets/jss/material-dashboard-react/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false,
    query: ''
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClickQuery = () => {
     axios.get("https://api.themoviedb.org/3/search/keyword?api_key=2d2687b13c2d438d213417aea67f58a0&query="+this.state.query+"&page=1")
      .then(res => {
        console.log(res)
       axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2d2687b13c2d438d213417aea67f58a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords="+res.data.results[0].id) 
        .then(result => {
          console.log(result.data)
       })
      })
  };

  changeQuery = (e) => {
   var query = e.target.value
   this.setState({
    query: query
   })
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
      <CustomInput
      formControlProps={{
        className: classes.margin + " " + classes.search
      }}
      inputProps={{
        placeholder: "Search",
        inputProps: {
          onChange: this.changeQuery,
          "aria-label": "Search"
        }
      }}
      
       />
       <SearchButton
       color="white"
       aria-label="edit"
       customClass={classes.margin + " " + classes.searchButton}
       onClick = {this.handleClickQuery}
       >
       <Search className={classes.searchIcon} />
       </SearchButton>
       <IconButton
       color="inherit"
       aria-label="Dashboard"
       className={classes.buttonLink}
       >
       <Dashboard className={classes.links} />
       <Hidden mdUp>
       <p className={classes.linkText}>Dashboard</p>
       </Hidden>
       </IconButton>
       <Manager style={{ display: "inline-block" }}>
       <Target>
       <IconButton
       color="inherit"
       aria-label="Notifications"
       aria-owns={open ? "menu-list" : null}
       aria-haspopup="true"
       onClick={this.handleClick}
       className={classes.buttonLink}
       >
       <Notifications className={classes.links} />
       <span className={classes.notifications}>5</span>
       <Hidden mdUp>
       <p onClick={this.handleClick} className={classes.linkText}>
       Notification
       </p>
       </Hidden>
       </IconButton>
       </Target>
       <Popper
       placement="bottom-start"
       eventsEnabled={open}
       className={
        classNames({ [classes.popperClose]: !open }) +
        " " +
        classes.pooperResponsive
      }
      >
      <ClickAwayListener onClickAway={this.handleClose}>
      <Grow
      in={open}
      id="menu-list"
      style={{ transformOrigin: "0 0 0" }}
      >
      <Paper className={classes.dropdown}>
      <MenuList role="menu">
      <MenuItem
      onClick={this.handleClose}
      className={classes.dropdownItem}
      >
      Mike John responded to your email
      </MenuItem>
      <MenuItem
      onClick={this.handleClose}
      className={classes.dropdownItem}
      >
      You have 5 new tasks
      </MenuItem>
      <MenuItem
      onClick={this.handleClose}
      className={classes.dropdownItem}
      >
      You're now friend with Andrew
      </MenuItem>
      <MenuItem
      onClick={this.handleClose}
      className={classes.dropdownItem}
      >
      Another Notification
      </MenuItem>
      <MenuItem
      onClick={this.handleClose}
      className={classes.dropdownItem}
      >
      Another One
      </MenuItem>
      </MenuList>
      </Paper>
      </Grow>
      </ClickAwayListener>
      </Popper>
      </Manager>
      <IconButton
      color="inherit"
      aria-label="Person"
      className={classes.buttonLink}
      >
      <Person className={classes.links} />
      <Hidden mdUp>
      <p className={classes.linkText}>Profile</p>
      </Hidden>
      </IconButton>
      </div>
      );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
