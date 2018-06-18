import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import { ReactComponent as GithubIcon } from "../../images/svg-icons/github.svg";
import { ReactComponent as linkedinIcon } from "../../images/svg-icons/linkedin.svg";

const styles = theme => ({
  social: {
    marginBottom: theme.base.sizes.linesMargin,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.bars.colors.icon
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.bars.colors.icon,
    transition: "all .5s"
  },
  divider: {
    width: "65%",
    border: '0',
    borderTop: `1px solid ${theme.bars.colors.icon}`,
    opacity: '.4',
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    linkedIn: linkedinIcon,
    github: GithubIcon
  };

  return (
    <div className={classes.social}>
      <hr className={classes.divider}/>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
