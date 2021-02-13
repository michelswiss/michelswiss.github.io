import React, { Component } from 'react';
import users from './users-base/users';
import HomeworkPanelChildList from './HomeworkPanelChildList';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tasksList: {
        padding: '0'
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
    },
});

class HomeworkPanelChild extends Component {
    render() {
        const { classes, history, submitCloseDrawer} = this.props;
        const createUserList = users.map((user) => (
            <HomeworkPanelChildList
                key={user.id}
                image={user.phoneNumber}
                history={history}
                {...user}
                submitCloseDrawer={submitCloseDrawer}
            />
        ));
        return (
            <div className={classes.tasksList}>
                <Grid container>
                    {/*<div*/}
                    {/*    className={`conversation-area ${classes.root}`}*/}
                    {/*>*/}
                    {/*    {createUserList}*/}
                    {/*</div>*/}
                    <List
                        className={`conversation-area ${classes.root}`}
                    >
                        {createUserList}
                    </List>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(HomeworkPanelChild);
