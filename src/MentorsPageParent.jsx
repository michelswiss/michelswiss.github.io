import React, { useEffect, useState } from 'react';
import DashboardMentorPanel from './DashboardMentorPanel';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.css';

function MentorsPageParent({changeDrawerStatus, children, history, isEmpty}) {
    const [status, setStatus] = useState(0);
    useEffect(() => {
        if(history.location.pathname.includes("homework")) {
            setStatus(0);
        } else if (history.location.pathname.includes("chat")) {
            setStatus(1);
        }
    }, [history.location.pathname]);
    const AlertEmptyInitialSection = () => {
        return isEmpty
            ? "error not found"
            : (
                <h1>hi there i am user</h1>
            )
    }
    return (
        <Paper>
            <div className={'row mr-0'}>
                <div className={'col-md-3'}>
                    <DashboardMentorPanel
                        status={status}
                        history={history}
                        requestCloseDrawer={changeDrawerStatus}
                    />
                </div>
                <div className={'col-md-8'}>
                    {children}
                </div>
            </div>
        </Paper>
    );
}
export default MentorsPageParent;