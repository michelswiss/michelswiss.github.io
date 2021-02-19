import React, { PureComponent } from 'react';
import classNames from 'clsx';
import MentorPanelControl from './MentorPanelControl';
import MentorPageChatArea from './MentorPageChatArea';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    main: {
        marginLeft: 240, //drawerWidth
        overflow: 'hidden',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '& .row': {
            width: '100vw',
            display: 'block',
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            },
            '& .tab-section-control': {
                marginLeft: '10px',
                maxWidth: '90% !important',
                [theme.breakpoints.up('md')]: {
                    maxWidth: '25% !important'
                },
                borderRight: '2px solid #f8f8f8'
            },
            '& .col-md-5': {
                // backgroundColor: 'green !important',
                maxWidth: '100% !important',
                [theme.breakpoints.up('md')]: {
                    width: '41% !important',
                },
                '& .chat-area-container': {
                    overflow: 'hidden'
                }
            },
            '& .col-md-3': {
                // backgroundColor: 'yellow !important'
            }
        },
    },
    mainShift: {
        marginLeft: '70px',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
});

class DashboardRoute extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("DASHBOARD ROUTE '/PATH' HERE ")
    }
    render() {
        const { 
            classes, 
            drawerStatus, 
            chatArea,
            listArea,
            areaCategory,
            children,
            changeDrawerStatus
        } = this.props;
        const drawer = drawerStatus === "open";
        console.log(drawer)
        return (
            <Grid>
                <div
                    className={
                        classNames( `app-container ${classes.main}`, {
                            [classes.mainShift]: !drawer
                        })
                    }
                >
                    <div className={'row'}>
                        <div className={'p-0 tab-section-control'}>
                            <MentorPanelControl 
                                history={this.props.history}
                                submitCloseDrawer={changeDrawerStatus}
                            />
                        </div>
                        <div className={'p-0 col-md-5'}>
                        <div className={'chat-area-container'}>
                            { children }
                            {chatArea && ( 
                                <MentorPageChatArea
                                    listArea={this.props.listArea}
                                    chatMain={this.props.chatMain}
                                />
                            )}
                        </div>
                        </div>
                        <div className={'col-md-3'}>
                            <div className={'user-detail-area'}>
                                <div className={'user-detail-area-header'}>
                                    <div className={'user-detail-profile'}>
                                        image
                                    </div>
                                    <div className={'detail-header-title'}>
                                        title
                                    </div>
                                    <div className={'detail-header-subtitle'}>
                                        subtitle
                                    </div>
                                    <div className={'detail-header-buttons'}>
                                        // some one header here
                                    </div>
                                </div>
                                
                                <div className={'user-detail-changes'}>
                                    <div className={'detail-changes'}>
                                        details change
                                    </div>
                                    <div className={'detail-changes'}>
                                        details change
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>    
        );
    }
}
export default withStyles(styles)(DashboardRoute);