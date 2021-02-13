import React, { PureComponent } from 'react';
import DashboardNav from "./DashboardNav";
import DashboardSectionNav from "./DashboardSectionNav";
import classNames from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DashboardStyles';

class Dashboard extends PureComponent {
    static defaultProps = {
        defaultDuration: 986.6,
        closeDuration: 1265
    }
    constructor(props) {
        super(props);
        this.handleSubmitDrawerStatus = this.handleSubmitDrawerStatus.bind(this);
        this.changeDrawerStatusWithMouseEvent = this.changeDrawerStatusWithMouseEvent.bind(this);
        this.closeDrawerWithMouseLeave = this.closeDrawerWithMouseLeave.bind(this);
    }
    componentDidMount() {
        console.log('DASHBOARD SECTION RUNNING');
    }
    changeSectionNavName(name) {

    }
    handleSubmitDrawerStatus() {
        this.props.handleChangeDrawerStatus(
            this.props.drawerStatus === "open" ? "close" : "open"
        );
    }
    changeDrawerStatusWithMouseEvent(mouseEvent) {
        setTimeout(() => {
            this.props.handleChangeDrawerStatus("open");
        }, this.props.defaultDuration);
    }
    closeDrawerWithMouseLeave(leaveEvent) {
        setTimeout(() => {
            this.props.handleChangeDrawerStatus("close");
        }, this.props.closeDuration);
    }
    render() {
        console.log('DASHBOARD RENDERED');
        const {
            classes,
            drawerStatus,
            children }= this.props;
        const openDrawer = drawerStatus === "open";
        return (
            <div className={classes.root}>
                <CssBaseline />
                <DashboardNav
                    open={openDrawer}
                    auth={true}
                />
                <Drawer
                    variant={'permanent'}
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: openDrawer,
                        [classes.drawerClose]: !openDrawer,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: openDrawer,
                            [classes.drawerClose]: !openDrawer,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        logo here
                    </div>
                    <div
                        className={classes.overflow}
                        onMouseOver={this.changeDrawerStatusWithMouseEvent}
                        onMouseLeave={this.closeDrawerWithMouseLeave}
                    >
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.resizeContainer}>
                        <List>
                            <ListItem
                                button
                                onClick={this.handleSubmitDrawerStatus}
                                className={classes.resize}
                            >
                                {openDrawer
                                    ? <ChevronLeftIcon/>
                                    : <ChevronRightIcon/>
                                }
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <DashboardSectionNav
                        sectionName={'mentors & chat'}
                    />
                    {children}
                </main>
            </div>
        );
    }
}
export default withStyles(styles)(Dashboard);

/*

import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

 */
/*

            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            nav 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            nav 5
                        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            nav 6
                        </Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            nav 7
                        </Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>
                            nav 8
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>

 */