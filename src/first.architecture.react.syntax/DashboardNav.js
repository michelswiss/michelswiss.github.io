import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import classNames from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles} from "@material-ui/core/styles";
import styles from './styles/DashboardSectionNavStyles';

function DashboardNav({classes, open, auth}) {
    const [openMenu, setOpenMenu] = React.useState(false);
    return (
        <AppBar
            position={'fixed'}
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Typography
                    className={classes.title}
                    variant={'h6'}
                    noWrap
                >
                    Auth User Name
                </Typography>
                <div className={classes.grow} />
                <div
                    className={ classNames(classes.activeFalse, {
                        [classes.active]: !open
                    })}
                >
                    <IconButton>
                        <Badge
                            badgeContent={17}
                            color={'secondary'}
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge={'end'}
                    >
                        <Avatar alt={'user'}>
                            {auth && <AccountCircle />}
                        </Avatar>
                    </IconButton>
                </div>
            </Toolbar>
            <Menu
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openMenu}
                onClose={() => setOpenMenu(!openMenu)}
            >
                <MenuItem onClick={() => alert(' go to profile')}>Profile</MenuItem>
                <MenuItem onClick={() => alert(' go to profile too ')}>My account</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default withStyles(styles)(DashboardNav);