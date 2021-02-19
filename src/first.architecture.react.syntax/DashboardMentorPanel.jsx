import React, { useEffect, useState } from 'react';
import HomeworkPanelChild from './HomeworkPanelChild'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles, useTheme } from '@material-ui/core/styles';
import styles from './styles/DashboardMentorPanelStyles';

function Panel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function eachOfTabPropsForSwepeableView(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function DashboardMentorPanelStyles({classes, requestCloseDrawer, status = 0, history, children}) {
    const theme = useTheme();
    const [panel, setPanel] = useState(status);
    useEffect(() => {
        setPanel(status);
    }, [status]);
    const handleChangePanel = (event, newValue) => {
        if(newValue === 0) {
            history.push('/dashboard/mentor/homework');
        }
        else if (newValue === 1) {
            history.push('/dashboard/mentor/chat');
        }
    };
    const handleChangeIndex = (index) => {
        setPanel(index);
    };
    return (
        <div className={classes.root}>
            <AppBar
                position={'statis'}
                color={'default'}
            >
                <Tabs
                    value={panel}
                    onChange={handleChangePanel}
                    indicatorColor={'primary'}
                    textColor={'inherit'}
                    variant={'fullWidth'}
                >
                    <Tab label="Homework" {...eachOfTabPropsForSwepeableView(0)} />
                    <Tab label="Chat" {...eachOfTabPropsForSwepeableView(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={panel}
                onChangeIndex={handleChangeIndex}
            >
                <Panel value={panel} index={0} dir={theme.direction}>
                    <HomeworkPanelChild
                        history={history}
                        submitCloseDrawer={requestCloseDrawer}
                    />
                </Panel>
                <Panel value={panel} index={1} dir={theme.direction}>
                </Panel>
            </SwipeableViews>
        </div>
    );
}

Panel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardMentorPanelStyles);