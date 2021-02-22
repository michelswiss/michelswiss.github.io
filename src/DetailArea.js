import React, { useState, useEffect }from 'react';
import NotificationSnackbar from './components/NotificationSnackbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import FileDownloadIcon from '@material-ui/icons/CloudDownload';
import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import TaskIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import AllDoneIcon from '@material-ui/icons/DoneAll';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DetailAreaStyles';

function DetailArea({classes, fullInfo, user,history, match, detail}) {
    const [star, changeStar] = useState(0);
    // const [moduleStatus, setModuleStatus] = useState({});
    // /**@local module state */
    // useEffect(() => {
    //     /**@search new module config for each of section */
    //     setModuleStatus(modules.find((module) => module.id === match.params.exerciseId));
    // }, [match.params.exerciseId]);
    const goSpecificUserChatSection = (userId) => {
        if(user.support) {
            history.push(`/dashboard/mentor/chat/${userId}`);
        }
    }
    return (
        <div className={classes.detailArea}>
            <div className={classes.detailHeader}>
                <Avatar
                    alt={user.name}
                    src={user.profile}
                    className={classes.detailProfile}
                />
                <div className={classes.detailTitle}>
                    {user.name}
                </div>
                <div className={classes.detailSubtitle}>
                    {user.phoneNumber}
                </div>
                <div className={classes.detailButtons}>
                    <div className={classes.buttonGroup}>
                        <IconButton
                            onClick={() => goSpecificUserChatSection(user.id)}
                        >
                            <ChatIcon/>
                        </IconButton>
                        <Typography>
                            Go Chat
                        </Typography>
                    </div>
                    <div className={classes.buttonGroup}>
                        <IconButton>
                            <InfoIcon/>
                        </IconButton>
                        <Typography>
                            Course Info
                        </Typography>
                    </div>
                    <div className={classes.buttonGroup}>
                        <IconButton>
                            <TaskIcon/>
                        </IconButton>
                        <Typography>
                            History
                        </Typography>
                    </div>
                </div>
            </div>
            { match.params.exerciseId && (
                <div className={classes.detailStatus}>
                    <div className={'rating-details'}>
                        <div className={classes.statusRating}>
                            <Rating
                                id={star}
                                value={detail.rating ? detail.rating : 0}
                                className={classes.rating}
                                onChange={(value, nextValue) => changeStar(nextValue)}
                                size={'large'}
                            />
                        </div>
                    </div>
                    <div className={classes.statusButtonGroup}>
                        <div className={classes.ratingButtonStatus}>
                            <Button
                                variant={'contained'}
                                color={'static'}
                                className={`${classes.toButton} ${classes.success}`}
                                onClick={() => <NotificationSnackbar variant={'success'} message={'successfully rated this user'}/>}
                            >
                                <AllDoneIcon/>
                            </Button>
                        </div>
                        <div className={classes.ratingButtonStatus}>
                            <Button
                                variant={'contained'}
                                color={'static'}
                                className={`${classes.toButton} ${classes.warning}`}
                            >
                                <WarningIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {fullInfo && (
                <React.Fragment>
                    <div className={classes.detailHometask}>
                        <div className={classes.hometaskTitle}>
                            React Content API
                        </div>
                        <div className={classes.hometask}>
                            Create Dark & Light theme Project, 
                            function must changed with Global variable
                            "Context & useContext" and you know "createContext"
                        </div>
                    </div>
                    <div className={classes.detailFiles}>
                        <div className={classes.detailFileTitle}>
                            All files here
                        </div>
                        <div className={classes.detailFilesGrid}>
                            {Array(5).fill(null).map(() => (
                                <div className={classes.files}>
                                    <FileDownloadIcon/>
                                </div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>         
    )
}
export default withStyles(styles)(DetailArea);