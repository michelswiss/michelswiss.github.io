import React, { Component } from 'react';
import WrapperMain from './WrapperMain';
import ChildGridAreaHeader from './ChildGridAreaHeader';
import ChildGridAreaChatForm from './ChildGridAreaChatForm';
import { withStyles } from '@material-ui/core/styles';
import users from './users-base/users';
import { styles } from './styles/HomeworkChildGridFormStyles';
import './styles/HomeworkChildGridFormStyles.css';

class HomeworkChildGridForm extends Component {
     constructor(props) {
          super(props);
          this.state = {
               messages: false
          }
     }
     componentDidMount() {
          if (this.props.match.params.exerciseId) {
               console.log('this is exercise id', this.props.match.params.exerciseId);
               this.setState({messages: true});
          }
     }
     render() {
          const filterUserMatchParams = users.filter((user) => {
               let userId = this.props.match.params.userId;
               return user.id === userId;
          });
          const { classes } = this.props;
          const { messages } = this.state;
          return (
               <WrapperMain>
                    <ChildGridAreaHeader
                         user={filterUserMatchParams}
                         taskMessages={messages}
                    />
                    <ChildGridAreaChatForm
                         {...filterUserMatchParams}
                    />
               </WrapperMain>
          );
     }
}
export default withStyles(
    styles,
    /**@material-ui use transition theme */
    { withTheme: true})(HomeworkChildGridForm);

/*

       <div className="header">
        <div className="logo">
         <svg viewBox="0 0 513 513" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z"/>
          <path
              d="M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z"
              fill="#fff"/>
         </svg>
        </div>
        <div className="search-bar">
         <input type="text" placeholder="Search..."/>
        </div>
        <div className="user-settings">
         <div className="dark-light">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
               stroke-linejoin="round">
           <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
         </div>
         <div className="settings">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
           <circle cx="12" cy="12" r="3"/>
           <path
               d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
         </div>
         <img className="user-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""
              className="account-profile" alt=""/>
        </div>
       </div>

----------------------------------------------------------------------------------------------

        <div className="conversation-area">
         <div className="msg online">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Madison Jones</div>
           <div className="msg-content">
            <span className="msg-message">What time was our meet</span>
            <span className="msg-date">20m</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Miguel Cohen</div>
           <div className="msg-content">
            <span className="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
            <span className="msg-date">20m</span>
           </div>
          </div>
         </div>
         <div className="msg active">
          <div className="msg-profile group">
           <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" className="css-i6dzq1">
            <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5"/>
            <path d="M22 8.5l-10 7-10-7"/>
            <path d="M2 15.5l10-7 10 7M12 2v6.5"/>
           </svg>
          </div>
          <div className="msg-detail">
           <div className="msg-username">CodePen Group</div>
           <div className="msg-content">
            <span className="msg-message">Aysenur: I love CSS</span>
            <span className="msg-date">28m</span>
           </div>
          </div>
         </div>
         <div className="msg online">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Lea Debere</div>
           <div className="msg-content">
            <span className="msg-message">Shoreditch iPhone jianbing</span>
            <span className="msg-date">45m</span>
           </div>
          </div>
         </div>
         <div className="msg online">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Jordan Smith</div>
           <div className="msg-content">
            <span className="msg-message">Snackwave craft beer raclette, beard kombucha </span>
            <span className="msg-date">2h</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Jared Jackson</div>
           <div className="msg-content">
            <span className="msg-message">Tattooed brooklyn typewriter gastropub</span>
            <span className="msg-date">18m</span>
           </div>
          </div>
         </div>
         <div className="msg online">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Henry Clark</div>
           <div className="msg-content">
            <span className="msg-message">Ethical typewriter williamsburg lo-fi street art</span>
            <span className="msg-date">2h</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/qs6F3dgm.png"
               alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Jason Mraz</div>
           <div className="msg-content">
            <span className="msg-message">I'm lucky I'm in love with my best friend</span>
            <span className="msg-date">4h</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Chiwa Lauren</div>
           <div className="msg-content">
            <span className="msg-message">Pabst af 3 wolf moon</span>
            <span className="msg-date">28m</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Caroline Orange</div>
           <div className="msg-content">
            <span className="msg-message">Bespoke aesthetic lyft woke cornhole</span>
            <span className="msg-date">35m</span>
           </div>
          </div>
         </div>
         <div className="msg">
          <img className="msg-profile"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png" alt=""/>
          <div className="msg-detail">
           <div className="msg-username">Lina Ashma</div>
           <div className="msg-content">
            <span className="msg-message">Migas food truck crucifix vexi</span>
            <span className="msg-date">42m</span>
           </div>
          </div>
         </div>
         <button className="add"></button>
         <div className="overlay"></div>
        </div>

*/