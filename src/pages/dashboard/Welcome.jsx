
import React from 'react';

const WelcomeScreen = ({ userName }) => {


  return (


    <div className="welcome-screen">
      <div className="welcome-screen-details">
        <div className='welcome-screen-header'>


          <span className="welcome-greeting-title">Hello <span className="username"> {userName} </span> !</span>

          <span className="welcome-greeting-line">Welcome to your dashboard, located here you will find recent project quick access, user preferences, account billing, and direct messages. </span>
          
        </div>


        <div className='dashboard-layout'>


          {/* Column 1 */}

          <div className="new-project-col1">


            <div className="dashboard-item new-project-budget">
              <span>Account</span>
              <span>+</span>
            </div>

            <div className="dashboard-item new-project-finish-line">
              <span>Messages</span>
              <span>+</span>
            </div>
          </div>

          {/* Column 2 */}

          <div className="new-project-col2">

            <div className="dashboard-item new-project-uploads">
              <span>Projects</span>
              <span>+</span>
            </div>


          </div>

        </div>


        <div className='dashboard-layout'>

          {/* Column 7*/}

        </div>


        <div className="column-7">
          <div className="dashboard-item notes">
            <span>Notes</span>
            <span>+</span>

          </div>

        </div>

      </div>

    </div>



  )}



export default WelcomeScreen;