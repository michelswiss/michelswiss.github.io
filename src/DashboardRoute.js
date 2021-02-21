import React, { useEffect, useState } from 'react';
import classNames from 'clsx';
import MentorPanelControl from './MentorPanelControl';
import MentorPageChatArea from './MentorPageChatArea';
import DetailArea from './DetailArea';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DashboardRouteStyles'

function DashboardRoute(props) {
    const { 
        classes, 
        chatArea, 
        listArea, 
        chatMain, 
        changeDrawerStatus, 
        users, 
        history, 
        match, 
        drawerStatus } = props;
    const [localUser, setLocalUser] = useState({});
    const [messages, pushMessage] = useState([]);
    const [modules, setModules] = useState([]);
    const [detail, pushDetail] = useState({});
    const [filterType, setFilterType] = useState('hometask');
    const [panel, pushPanel] = useState(0);
    const [pathLocation, pushPathLocation ] = useState('hometask');
    useEffect(() => {
        /**@find users and tasks and homeworks */
        if(match.params.userId) {
            const user = users.find((user) => user.id === match.params.userId);
            setLocalUser(user);
            setModules(user.tasks);
            if(match.params.exerciseId) {
                const details = user.tasks.find((task) => task.id === match.params.exerciseId);
                pushDetail(details)
                pushMessage(details.messages);
            } else if(history.location.pathname.includes("chat")) {
                pushMessage(user.chat);
            }
        }
        /**@location for panel item */
        if(history.location.pathname.includes("hometask")) {
            pushPanel(0);
            setFilterType("hometask");
        } else if (history.location.pathname.includes("chat")){
            pushPanel(1);
            setFilterType("chat");
        }
    }, [history.location.pathname]);
    const changeMentorPanelControl = (value, nextValue) => {
        pushPanel(nextValue);
        setFilterType(nextValue === 0 ? false : true);
        /**
         * @helpers for path each of user
         */
        pushPathLocation(nextValue === 0 ? 'hometask' : 'chat');
        history.push(`/dashboard/mentor/${nextValue === 0 ? 'hometask' : 'chat'}`);
    }
    const drawer = drawerStatus === "open";
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
                            users={users}
                            panel={panel}
                            history={history}
                            match={match}
                            pathLocation={pathLocation}
                            filterType={filterType}
                            submitCloseDrawer={changeDrawerStatus}
                            changeMentorPanelControl={changeMentorPanelControl}
                        />
                    </div>
                    <div className={`p-0 ${drawer ? 'col-md-4' : 'col-md-5'}`}>
                    <div className={'chat-area-container'}>
                        {chatArea && ( 
                            <MentorPageChatArea
                                user={localUser}
                                panel={panel}
                                modules={modules}
                                message={messages}
                                match={match}
                                history={history}
                                listArea={listArea}
                                chatMain={chatMain}
                            />
                        )}
                    </div>
                    </div>
                    <div className={'col-md-3'}>
                        {listArea && (
                            <DetailArea
                                user={localUser}
                                match={match}
                                history={history}
                                detail={detail}
                                fullInfo={chatMain === listArea}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Grid>    
    );
}
export default withStyles(styles)(DashboardRoute);