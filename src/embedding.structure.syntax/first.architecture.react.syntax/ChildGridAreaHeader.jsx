import React from 'react';
import Slider from 'react-slick';
import ChildGridAreaHeaderMain from './ChildGridAreaHeaderMain';
import GradeIcon from '@material-ui/icons/Grade';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css"
import './styles/slick.css';

function ChildGridAreaHeader({user, taskMessages }) {
    /**
     * @param
     * our response => [{ name, number, id tasks, etc. }] => user[0];
     */
    const { id, name, profile, tasks } = user[0];
    const messages = tasks[tasks.length - 1].messages;
      const slides = [ 
        {  
          img: "https://dummyimage.com/600x400/000/fff"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        }
      ];
    //   const settings = {
    //     arrows: true,
    //     centerMode: true,
    //     edgeFriction: 4,
    //     infinite: false,
    //     swipeToSlide: true,
    //     variableWidth: true,
    //     accessibility: true,
    //     //prevArrow: <SlickArrowLeft />,
    //     //nextArrow: <SlickArrowRight />,
    //     focusOnSelect: true,
    //     draggable: true
    //   };
    var settings = {
        dots: true
    };
    // beshikdagi godaklar
    return (
        <React.Fragment>
            <div className={'chat-area col-md-4'}>
                    <Slider {...settings}>
                        {tasks.map((task, i) => {
                            return (
                                <React.Fragment key={task.id}>
                                    <div>
                                        {task.number}
                                        <div>
                                            <GradeIcon/>
                                            <span>{task.rating}</span>
                                        </div>
                                        <p>HARD</p>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </Slider>
                <div className={'chat-area-header'}>
                    <div className={'chat-area-title'}>
                        Introduce DOM Adventure
                    </div>
                    <div className={'chat-area-group'}>
                        <span>16%</span>
                    </div>
                </div>
                { taskMessages && (
                    <React.Fragment key={id}>
                        <div className={'chat-area-footer'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-video">
                                <path d="M23 7l-7 5 7 5V7z"/>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-image">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <path d="M21 15l-5-5L5 21"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-plus-circle">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 8v8M8 12h8"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-paperclip">
                                <path
                                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                            </svg>
                            <input type={'text'} placeholder="Type something here..."/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-smile">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-thumbs-up">
                                <path
                                    d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
                            </svg>
                        </div>
                        <div className={'chat-area-main'}>
                            {/** @change or rename => isntOwner */}
                            <ChildGridAreaHeaderMain
                                    id={id}
                                    name={name}
                                    profile={profile}
                                    messages={messages}
                            />
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    )
}
export default ChildGridAreaHeader;

/*


<div className="detail-changes">
                <input type="text" placeholder="Search in Conversation"/>
                <div className="detail-change">
                    Change Color
                    <div className="colors">
                        <div className="color blue selected" data-color="blue"></div>
                    <div className="color purple" data-color="purple"></div>
                    <div className="color green" data-color="green"></div>
                    <div className="color orange" data-color="orange"></div>
                    </div>
                    </div>
                    <div className="detail-change">
                        Change Emoji
                    <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-thumbs-up">
                    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
                    </svg>
                    </div>
                    </div>
            <div className="detail-photos">
                        <div className="detail-photo-title">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                    </svg>
                    Shared photos
                    </div>
                    <div className="detail-photo-grid">
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
<div className="view-more">View More</div>
</div>
            <a href="https://twitter.com/AysnrTrkk" className="follow-me">
    <span className="follow-text">
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

 */

 /*

                     <div className={'chat-msg'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 1.22pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Luctus et ultrices posuere cubilia curae.</div>
                            <div className={'chat-msg-text'}>
                                <img
                                    src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif"/>
                            </div>
                            <div className={'chat-msg-text'}>Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
                                Pretium lectus quam id leo.
                            </div>
                        </div>
                    </div>
                    <div className={'chat-msg owner'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 1.22pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂
                            </div>
                            <div className={'chat-msg-text'}>Cras mollis nec arcu malesuada tincidunt.</div>
                        </div>
                    </div>
                    <div className={'chat-msg'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 2.45pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum
                                primis in faucibus orci luctus et ultrices posuere cubilia curae😊
                            </div>
                            <div className={'chat-msg-text'}>Ut faucibus pulvinar elementum integer enim neque volutpat.</div>
                        </div>
                    </div>
                    <div className={'chat-msg owner'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 2.50pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>posuere eget augue sodales, aliquet posuere eros.</div>
                            <div className={'chat-msg-text'}>Cras mollis nec arcu malesuada tincidunt.</div>
                        </div>
                    </div>
                    <div className={'chat-msg'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt=""/>
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Egestas tellus rutrum tellus pellentesque</div>
                        </div>
                    </div>
                    <div className={'chat-msg'}>
                        <div className="chat-msg-profile">
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""
                                 className={'account-profile'} alt=""/>
                            <div className={'chat-msg-date'}>Message seen 3.16pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Consectetur adipiscing elit pellentesque habitant morbi tristique
                                senectus et.
                            </div>
                        </div>
                    </div>
                    <div className={'chat-msg owner'}>
                        <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 2.50pm</div>
                        </div>
                        <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>Tincidunt arcu non sodales😂</div>
                        </div>
                    </div>
                    <div className={'chat-msg'}>
                    <div className={'chat-msg-profile'}>
                            <img className={'chat-msg-img'}
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt=""/>
                            <div className={'chat-msg-date'}>Message seen 3.16pm</div>
                        </div>
                    <div className={'chat-msg-content'}>
                            <div className={'chat-msg-text'}>
                                Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et🥰
                            </div>
                        </div>
                    </div>

 */