import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  withStyles
} from '@material-ui/core';
import Paper from '../components/Paper';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(/icons/appCurvyLines.png)',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6),
    },
  },
});

function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
