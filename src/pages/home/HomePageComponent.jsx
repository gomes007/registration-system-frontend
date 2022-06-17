import {Box, Container, Grid, Typography} from "@mui/material";
import {Budget} from "../../components/budget";
import {TotalCustomers} from "../../components/total-customers";
import {Sales} from "../../components/sales";

import UploadImages from "../../components/UploadImages";
import {Img} from "../../components/Img";




export default function HomePageComponent(){
    return (
        <div className="content">
            homePage
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Budget />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalCustomers />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <Sales />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <UploadImages/>
            <Img/>
        </div>
    )
}