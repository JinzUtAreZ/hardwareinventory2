import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

//export default function SimpleCard(props) {
const CardContext = (props) => {
  const classes = useStyles();
  const { mediaLogo, headerContext, footerContext, FormContext } = props;
  let { source } = props;

  if (source === undefined) {
    source = 'default';
  }

  //////// dynamic component ///////
  const media = {
    signin: mediaLogo,
    default: '',
  };

  const MediaComp = media[source || false];

  const header = {
    signin: headerContext,
    default: '',
  };

  const HeaderComp = header[source || false];

  const footer = {
    signin: footerContext,
    default: '',
  };

  const FooterComp = footer[source || false];

  //////// end of dynamic component ///////

  return (
    <Card className={classes.root}>
      <CardContent>
        {console.log('cardcontext', props)}
        {mediaLogo && <MediaComp />}

        {headerContext && <HeaderComp />}

        <form noValidate>
          <FormContext />
        </form>

        {footerContext && (
          <Box mt={8}>
            <FooterComp />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CardContext;

CardContext.defaultProps = {
  MediaComp: '',
  HeaderComp: '',
  FooterComp: '',
  FormContext: 'CardContext Custom error: FORM CONTEXT props in every page',
};

CardContext.propTypes = {
  source: PropTypes.string,
  footerContext: PropTypes.func,
  mediaLogo: PropTypes.func,
  headerContext: PropTypes.func,
  formContext: PropTypes.func.isRequired,
};
