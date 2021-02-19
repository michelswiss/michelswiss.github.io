import React from 'react';
import MentorPanelChild from './MentorPanelChild';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

function UsersList({userStatus, type, localization, history, submitCloseDrawer}) {
    console.log('USER LIST HERE', userStatus)
    return (
        <React.Fragment>
            {userStatus.map((user, i) => {
                if(type === "hometask") {
                    return (
                        <React.Fragment>
                            {i === 0 && <Divider/>}
                            <MentorPanelChild
                                id={user.id}
                                userInfo={user.phoneNumber}
                                {...user}                    
                                history={history}
                                submitCloseDrawer={submitCloseDrawer}
                                pathLocation={localization}
                            />
                            <Divider/>
                        </React.Fragment>
                    )
                } else  if (type === "chat") {
                    return (
                        <React.Fragment>
                            {i === 0 && <Divider/>}
                            <MentorPanelChild
                                id={user.id}
                                userInfo={user.phoneNumber}
                                {...user}                    
                                history={history}
                                submitCloseDrawer={submitCloseDrawer}
                                pathLocation={localization}
                            />
                            <Divider/>
                        </React.Fragment>
                    )
                }
            })}
        </React.Fragment>
    )
}
export default UsersList;