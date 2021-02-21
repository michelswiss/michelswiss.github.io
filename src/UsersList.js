import React from 'react';
import MentorPanelChild from './MentorPanelChild';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

function UsersList({userStatus, type, localization, match, history, submitCloseDrawer}) {
    return (
        <React.Fragment>
            {userStatus.map((user, i) => {
                if(type === "hometask") {
                    return (
                        <React.Fragment key={i + 10}>
                            {i === 0 && <Divider/>}
                            <MentorPanelChild
                                id={user.id}
                                userInfo={user.phoneNumber}
                                {...user}                    
                                history={history}
                                submitCloseDrawer={submitCloseDrawer}
                                pathLocation={localization}
                                active={match.params.userId === user.id}
                            />
                            <Divider/>
                        </React.Fragment>
                    )
                } else  if (type === "chat") {
                    if(user.support) {
                        return (
                            <React.Fragment key={i + 10}>
                                {i === 0 && <Divider/>}
                                <MentorPanelChild
                                    id={user.id}
                                    userInfo={user.phoneNumber}
                                    {...user}                    
                                    history={history}
                                    submitCloseDrawer={submitCloseDrawer}
                                    pathLocation={localization}
                                    active={match.params.userId === user.id}
                                />
                                <Divider/>
                            </React.Fragment>
                        )
                    }
                }
            })}
        </React.Fragment>
    )
}
export default UsersList;