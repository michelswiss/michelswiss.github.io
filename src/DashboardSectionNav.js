import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
    sectionNav: {
        boxShadow: 'none'
    }
});

function DashboardSectionNav({classes, sectionName}) {
    return (
        <AppBar
            position={'static'}
            color={'inherit'}
            className={classes.sectionNav}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    {sectionName}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default withStyles(styles)(DashboardSectionNav);