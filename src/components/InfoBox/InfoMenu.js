import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  infoMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    width: "100%",
		paddingTop: "4em",
  },
  link: {
    padding: ".5em",
		fontWeight: 500,
		width: 100,
		textAlign: "center",
    fontTransform: "lowercase",
		color: theme.info.colors.menuLink,
		"&:first-child": {
			borderBottom: `1px solid rgba(66, 66, 66, .3)`,
		},
		"&:last-child": {
			borderTop: `1px solid rgba(66, 66, 66, .3)`,
    },
    "&:hover": {
      color: theme.info.colors.menuLinkHover
		},
  }
});

const InfoMenu = props => {
  const { classes, pages, linkOnClick } = props;

  return (
    <nav className={classes.infoMenu}>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={linkOnClick}
            className={classes.link}
            data-shape="closed"
          >
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })}
      <Link to="/contact/" onClick={linkOnClick} className={classes.link} data-shape="closed">
        Contact
      </Link>
    </nav>
  );
};

InfoMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoMenu);
