import { Grid, TextField } from "@material-ui/core";
import React from "react";

const DCandidateForm = (props) => {
    return (
    <form autoComplete="off" noValidate>
        <Grid Container>
            <Grid item xs={6}>
                <TextField
                name="fullName"
                variant="outlined"
                label="Full Name"
                />
            </Grid>
        </Grid>
    </form>
        )
}

export default DCandidateForm;