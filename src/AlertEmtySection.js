import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        '& a': {
            dextDecoration: 'none',
            color: 'lightgreen',
            opacity: '.9'
        }
    }
});

function AlertEmptySection({classes}) {
    return (
        <div className={'container ', classes.container}>
            <div className={'p-5 m-5'}>
                <h3>Hmm, What are you doing?</h3>
                <h4>Go! Check students homework</h4>
                <p>
                    <Link to={'/dashboard/mentor/chat'}>Go to Chat</Link>
                </p>
                <p>
                    <Link to={'/dashboard/mentor/homework'}>Go to Homework</Link>
                </p>
            </div>
        </div>
    )
}
export default withStyles(styles)(AlertEmptySection);