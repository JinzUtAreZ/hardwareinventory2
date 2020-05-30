import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

//import { handleSearchChange } from '../Tables/CustomTables';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function InputSearch(props) {
  ////// aayusin ko pa to
  const {
    //value,
    //label,
    searchPlaceholder,
    handleSearchChange,
    //searchInput,
  } = props;
  const classes = useStyles();

  // console.log(searchPlaceholder);
  const handleChange = (event) => {
    const { value } = event.target;
    //console.log('inputsearch', value);
    handleSearchChange(value);
  };

  return (
    <Paper className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        className={classes.input}
        placeholder={searchPlaceholder}
        inputProps={{ 'aria-label': 'searchables' }}
        onChange={handleChange}
      />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  );
}
