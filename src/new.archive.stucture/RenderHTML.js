import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NotificationIcon from '@material-ui/icons/Notifications'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Grade';
import './render.html.style.css';

class RenderHTML extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'wrapper'}>
                <div className={'drawer'}>
                    <div className={'drawerOverflow'}>
                        <div className={'drawerItem'}>
                            <h5>Item 1</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 2</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 3</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 4</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 5</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 5</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 5</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 5</h5>
                        </div>
                        <div className={'drawerItem'}>
                            <h5>Item 5</h5>
                        </div>
                    </div>
                </div>
                <div className={'main-container'}>
                    <div className={'header'}>
                        <div className="logo">
                            Rent
                            <span className="logo-det">Cr</span>
                        </div>
                        {/*
                        <a className="header-link active" href="#">
                            <svg viewBox="-6 0 512 512" fill="currentColor">
                                <path
                                    d="M227.7 357.5a15.1 15.1 0 0021.3 0l54-54a15.1 15.1 0 10-21.4-21.3l-43.3 43.2-19.7-19.7a15.1 15.1 0 00-21.4 21.4zm0 0"/>
                                <path
                                    d="M250.1 439.8a120.1 120.1 0 10-120-120c0 66.2 53.8 120 120 120zm0-209.7a89.9 89.9 0 010 179.5 89.9 89.9 0 010-179.5zm0 0"/>
                                <path
                                    d="M451.3 32.2h-27.5v-17a15.1 15.1 0 00-30.3 0v17h-29.7v-17a15.1 15.1 0 00-30.2 0v17h-167v-17a15.1 15.1 0 00-30.2 0v17h-29.7v-17a15.1 15.1 0 00-30.2 0v17H48.9A49 49 0 000 81v382A49 49 0 0048.9 512h402.4a49 49 0 0049-48.9v-382a49 49 0 00-49-49zm18.7 431c0 10.2-8.4 18.6-18.7 18.6H49A18.7 18.7 0 0130.2 463V158H470zM30.2 81c0-10.3 8.4-18.7 18.7-18.7h27.6v17.1a15.1 15.1 0 0030.2 0v-17h29.7v17a15.1 15.1 0 0030.3 0v-17h166.9v17a15.1 15.1 0 0030.2 0v-17h29.7v17a15.1 15.1 0 0030.3 0v-17h27.5c10.3 0 18.7 8.3 18.7 18.6v46.6H30.2zm0 0"/>
                            </svg>
                            Bookings
                        </a>
                        <a className="header-link" href="#">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M10 13a2 2 0 110-4 2 2 0 010 4zm0-2.5a.5.5 0 100 1 .5.5 0 000-1z"/>
                                <path
                                    d="M20.3 11.8h-8.8a.8.8 0 010-1.6h8.8a.8.8 0 010 1.6zM8.5 11.8H3.7a.8.8 0 010-1.6h4.8a.8.8 0 010 1.6zM15 19a2 2 0 110-4 2 2 0 010 4zm0-2.5a.5.5 0 100 1 .5.5 0 000-1z"/>
                                <path
                                    d="M20.3 17.8h-3.8a.8.8 0 010-1.6h3.8a.8.8 0 010 1.6zM13.5 17.8H3.7a.8.8 0 010-1.6h9.8a.8.8 0 010 1.6z"/>
                                <path
                                    d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"/>
                                <path d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"/>
                            </svg>
                            Controller
                        </a>
                        <a className="header-link" href="#">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path
                                    d="M500 113.3C326.1 78.7 337.4 80.5 333.4 81.2L281 91.7A111.2 111.2 0 00176 17c-48.6 0-90 31.3-105 74.8L18 81.3A15 15 0 000 96v352a15 15 0 0012 14.7l162.2 32.2c3.6.4-7.6 2.3 161.8-31.6l158 31.4a15 15 0 0018-14.7V128a15 15 0 00-12-14.7zM176 47a81 81 0 0181 81c0 37.7-60.3 133.3-81 165-20.7-31.6-81-127.3-81-165a81 81 0 0181-81zM30 114.2l35.2 7a112 112 0 00-.2 6.8c0 25 16.4 65.4 50 123.4 19.7 33.9 39 63 46 73.2v137.1l-131-26zm161 210.4c7-10.2 26.3-39.3 46-73.2 33.6-58 50-98.4 50-123.4 0-2.3 0-4.6-.2-6.9l34.2-6.8v321.4l-130 26zm291 137.1l-131-26V114.3l131 26z"/>
                                <path
                                    d="M176 175a47 47 0 10-.1-94.1 47 47 0 00.1 94zm0-64a17 17 0 110 34 17 17 0 010-34z"/>
                            </svg>
                            Map
                        </a>
                        <a className="header-link" href="#">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path
                                    d="M76 240c12.1 0 23.1-4.8 31.2-12.6l44.2 22A44.9 44.9 0 00196 300a45 45 0 0040.6-64.4l60-60a45 45 0 0062.3-54l52.2-39.2a45 45 0 10-18-24l-52.2 39.2a45 45 0 00-65.5 56.8l-60 60a44.7 44.7 0 00-50.6 8.2l-44.2-22A44.9 44.9 0 0076 150a45 45 0 000 90zM436 30a15 15 0 110 30 15 15 0 010-30zm-120 90a15 15 0 110 30 15 15 0 010-30zM196 240a15 15 0 110 30 15 15 0 010-30zM76 180a15 15 0 110 30 15 15 0 010-30zm0 0"/>
                                <path
                                    d="M497 482h-16V165a15 15 0 00-15-15h-60a15 15 0 00-15 15v317h-30V255a15 15 0 00-15-15h-60a15 15 0 00-15 15v227h-30V375a15 15 0 00-15-15h-60a15 15 0 00-15 15v107h-30V315a15 15 0 00-15-15H46a15 15 0 00-15 15v167H15a15 15 0 100 30h482a15 15 0 100-30zm-76-302h30v302h-30zm-120 90h30v212h-30zM181 390h30v92h-30zM61 330h30v152H61zm0 0"/>
                            </svg>
                            Reports
                        </a>
                        */}
                        <div className={'user-info'}>
                            <div className={'user-name'}>
                                <Typography>
                                    Felix Robert
                                </Typography>
                                <IconButton>
                                    <PersonOutlineIcon/>
                                </IconButton>
                            </div>
                            <div className={'notification'}>
                                <IconButton>
                                    <NotificationIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                     <div className={'app'}>
                         <div className={'wrapper'}>
                             <div className="conversation-area">
                                 <div className="tab-panel">
                                     <div className={'tab-panel-control'}>
                                         <div className={'tab-item'}>
                                             homework
                                         </div>
                                         <div className={'tab-item'}>
                                             chat
                                         </div>
                                     </div>
                                     <div className={'search-user'}>
                                         <IconButton>
                                             <SearchIcon/>
                                         </IconButton>
                                         <TextField
                                             placeholder={'search users here'}
                                         />
                                     </div>
                                 </div>
                                 <div className={'msg anim-y'}>
                                     <img className={'msg-profile'}
                                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                                          alt=""/>
                                     <div className={'msg-detail'}>
                                         <div className={'msg-username'}>
                                             Miguel Cohen
                                         </div>
                                         <div className={'msg-content'}>
                                             <span className={'msg-message'}>
                                                 Adaptogen taiyaki austin jean shorts brunch
                                             </span>
                                             <span className={'msg-date'}>
                                                 20m
                                             </span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={'msg active anim-y'}>
                                     <div className={'msg-profile group'}>
                                         <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                                             <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5"/>
                                             <path d="M22 8.5l-10 7-10-7"/>
                                             <path d="M2 15.5l10-7 10 7M12 2v6.5"/>
                                         </svg>
                                     </div>
                                     <div className={'msg-detail'}>
                                         <div className={'msg-username'}>CodePen Group</div>
                                         <div className={'msg-content'}>
                                             <span className={'msg-message'}>Aysenur: I love CSS</span>
                                             <span className={'msg-date'}>28m</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={'msg online anim-y'}>
                                     <img className={'msg-profile'}
                                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                                          alt=""/>
                                     <div className={'msg-detail'}>
                                         <div className={'msg-username'}>Lea Debere</div>
                                         <div className={'msg-content'}>
                                             <span className={'msg-message'}>Shoreditch iPhone jianbing</span>
                                             <span className={'msg-date'}>45m</span>
                                         </div>
                                     </div>
                                 </div>
                                 <button className={'add'}></button>
                                 <div className={'overlay'}></div>
                             </div>
                             <div className={'chat-area'}>
                                 <div className={'chat-area-header'}>
                                     <div className={'chat-area-slider'}>
                                         <div className={'rating'}>
                                             <h5>1</h5>
                                             <div className={'rating-star'}>
                                                 <IconButton button>
                                                     <StarIcon/>
                                                 </IconButton>
                                                 <span>4</span>
                                             </div>
                                             <h6>easy</h6>
                                         </div>
                                     </div>
                                     <div className={'chat-area-title'}>
                                         <div className={'chat-area-title'}>CodePen Group</div>
                                         <div className={'chat-area-group'}>
                                             <img className={'chat-area-profile'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                                  alt=""/>
                                             <img className={'chat-area-profile'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                                                  alt=""/>
                                             <img className={'chat-area-profile'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                                                  alt=""/>
                                             <span>+4</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={'chat-area-main'}>
                                     <div className={'chat-msg'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>Message seen 1.22pm</div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>Luctus et ultrices posuere cubilia curae.</div>
                                             <div className={'chat-msg-text'}>
                                                 <img
                                                     src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif"/>
                                             </div>
                                             <div className={'chat-msg-text'}>Neque gravida in fermentum et sollicitudin ac
                                                 orci phasellus egestas. Pretium lectus quam id leo.
                                             </div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg owner'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>Message seen 1.22pm</div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>Sit amet risus nullam eget felis eget. Dolor sed
                                                 viverra ipsum😂😂😂
                                             </div>
                                             <div className={'chat-msg-text'}>Cras mollis nec arcu malesuada tincidunt.</div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>Message seen 2.45pm</div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>Aenean tristique maximus tortor non tincidunt.
                                                 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                                 cubilia curae😊
                                             </div>
                                             <div className={'chat-msg-text'}>Ut faucibus pulvinar elementum integer enim neque
                                                 volutpat.
                                             </div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg owner'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>Message seen 2.50pm</div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>posuere eget augue sodales, aliquet posuere
                                                 eros.
                                             </div>
                                             <div className={'chat-msg-text'}>Cras mollis nec arcu malesuada tincidunt.</div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>Message seen 3.16pm</div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>Egestas tellus rutrum tellus pellentesque</div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'"chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                                  alt="" className="account-profile" alt=""/>
                                             <div className={'chat-msg-date'}>
                                                 Message seen 3.16pm
                                             </div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>Consectetur adipiscing elit pellentesque habitant
                                                 morbi tristique senectus et.
                                             </div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg owner'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'"chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>
                                                 Message seen 2.50pm
                                             </div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>
                                                 Tincidunt arcu non sodales😂
                                             </div>
                                         </div>
                                     </div>
                                     <div className={'chat-msg'}>
                                         <div className={'chat-msg-profile'}>
                                             <img className={'chat-msg-img'}
                                                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                                                  alt=""/>
                                             <div className={'chat-msg-date'}>
                                                 Message seen 3.16pm
                                             </div>
                                         </div>
                                         <div className={'chat-msg-content'}>
                                             <div className={'chat-msg-text'}>
                                                 Consectetur adipiscing elit pellentesque habitant
                                                 morbi tristique senectus et🥰
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={'chat-area-footer'}>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-video">
                                         <path d="M23 7l-7 5 7 5V7z"/>
                                         <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                                     </svg>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-image">
                                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                         <circle cx="8.5" cy="8.5" r="1.5"/>
                                         <path d="M21 15l-5-5L5 21"/>
                                     </svg>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-plus-circle">
                                         <circle cx="12" cy="12" r="10"/>
                                         <path d="M12 8v8M8 12h8"/>
                                     </svg>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-paperclip">
                                         <path
                                             d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                                     </svg>
                                     <input type={'text'} placeholder={'Type something here...'}/>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-smile">
                                         <circle cx="12" cy="12" r="10"/>
                                         <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                                     </svg>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" className="feather feather-thumbs-up">
                                         <path
                                             d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
                                     </svg>
                                 </div>
                             </div>
                             <div className={'detail-area'}>
                                 <div className={'detail-area-header'}>
                                     <div className={'msg-profile group'}>
                                         <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                                             <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5"/>
                                             <path d="M22 8.5l-10 7-10-7"/>
                                             <path d="M2 15.5l10-7 10 7M12 2v6.5"/>
                                         </svg>
                                     </div>
                                     <div className={'detail-title'}>CodePen Group</div>
                                     <div className={'detail-subtitle'}>Created by Aysenur, 1 May 2020</div>
                                     <div className={'detail-buttons'}>
                                         <button className={'detail-button'}>
                                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                  stroke="currentColor" stroke-width="0" stroke-linecap="round"
                                                  stroke-linejoin="round" className="feather feather-phone">
                                                 <path
                                                     d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                                             </svg>
                                             Call Group
                                         </button>
                                         <button className={'detail-button'}>
                                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                  stroke="currentColor" stroke-width="0" stroke-linecap="round"
                                                  stroke-linejoin="round" className="feather feather-video">
                                                 <path d="M23 7l-7 5 7 5V7z"/>
                                                 <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                                             </svg>
                                             Video Chat
                                         </button>
                                     </div>
                                 </div>
                                 <div className={'detail-changes'}>
                                     <input type={'text'} placeholder={'Search in Conversation'}/>
                                     <div className={'detail-change'}>
                                         Change Color
                                         <div className={'colors'}>
                                             <div className="color blue selected" data-color="blue"></div>
                                             <div className="color purple" data-color="purple"></div>
                                             <div className="color green" data-color="green"></div>
                                             <div className="color orange" data-color="orange"></div>
                                         </div>
                                     </div>
                                     <div className={'detail-change'}>
                                         Change Emoji
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" className="feather feather-thumbs-up">
                                             <path
                                                 d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
                                         </svg>
                                     </div>
                                 </div>
                                 <div className={'detail-photos'}>
                                     <div className={'detail-photo-title'}>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" className="feather feather-image">
                                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                             <circle cx="8.5" cy="8.5" r="1.5"/>
                                             <path d="M21 15l-5-5L5 21"/>
                                         </svg>
                                         Shared photos
                                     </div>
                                     <div className={'detail-photo-grid'}>
                                         <img
                                             src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80"/>

                                         <img
                                             src="https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
                                         <img
                                             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2189&q=80"/>
                                     </div>
                                     <div className={'view-more'}>View More</div>
                                 </div>
                                 <a href="https://twitter.com/AysnrTrkk" className="follow-me" target="_blank">
                                     <span className={'follow-text'}>
                                         <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                                              stroke-linejoin="round" className="css-i6dzq1">
                                             <path
                                                 d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                         </svg>
                                         Follow me on Twitter
                                     </span>
                                     <span className="developer">
                                         <img src="https://pbs.twimg.com/profile_images/1253782473953157124/x56UURmt_400x400.jpg"/>
                                         Aysenur Turk — @AysnrTrkk
                                     </span>
                                 </a>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}
export default RenderHTML;