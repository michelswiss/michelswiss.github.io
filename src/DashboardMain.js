import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class  DashboardMain extends Component{
    render() {
        return (
            <div>
                <Link>
                    Go to Mentors Page
                </Link>
            </div>
        )
    }
}
export default withStyles(styles)(DashboardMain);