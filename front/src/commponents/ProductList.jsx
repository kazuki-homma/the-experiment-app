import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProductList() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0, 1, 2].map((value) => (
            <ProductCard />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}