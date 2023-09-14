import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar"; // Updated import
import Toolbar from "@mui/material/Toolbar"; // Updated import
import IconButton from "@mui/material/IconButton"; // Updated import
import Button from "@mui/material/Button"; // Updated import
import Typography from "@mui/material/Typography"; // Updated import
import InputBase from "@mui/material/InputBase"; // Updated import
import Badge from "@mui/material/Badge"; // Updated import
import MenuItem from "@mui/material/MenuItem"; // Updated import
import Menu from "@mui/material/Menu"; // Updated import
import withStyles from "@mui/material/styles/withStyles"; // Updated import
import HomeIcon from "@mui/icons-material/Home"; // Updated import
import SearchIcon from "@mui/icons-material/Search"; // Updated import
import AccountCircle from "@mui/icons-material/AccountCircle"; // Updated import
import MoreIcon from "@mui/icons-material/MoreVert"; // Updated import
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Updated import
import LinkIcon from "@mui/icons-material/Link"; // Updated import

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontWeight: "900",
  },
  generateCertificate: {
    display: "block",
    paddingLeft: 30,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class NavBarLanding extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem
          style={{ justifyContent: "flex-end" }}
          component={Link}
          to="/"
        >
          Home
        </MenuItem>
        <MenuItem
          style={{ justifyContent: "flex-end" }}
          component={Link}
          to="/admin"
        >
          Central Authority Portal
        </MenuItem>
        <MenuItem
          style={{ justifyContent: "flex-end" }}
          component={Link}
          to="/institute"
        >
          Institute Portal
        </MenuItem>
        <MenuItem
          style={{ justifyContent: "flex-end" }}
          component={Link}
          to="/view"
        >
          View Certificate
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>our
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="white">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Icon"
              component={Link}
              to="/"
            >
              <AccountBalanceWalletIcon color="primary" />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="primary"
              noWrap
            >
              Certoshi
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <LinkIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <LinkIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavBarLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarLanding);
