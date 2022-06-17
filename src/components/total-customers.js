import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL CUSTOMERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1,6k
          </Typography>
        </Grid>
        <Grid item>

        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >

        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
