import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="user-profile">
          <img src="/path/to/profile.jpg" alt="Arthur Minasyan" />
          <div>
            <h3>Arthur Minasyan</h3>
            <p>@arthur_minasyan</p>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li>
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            <span>News Feed</span>
          </li>
          <li>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <span>Messages</span>
            <span className="badge">2</span>
          </li>
          <li>
            <i className="fa fa-users" aria-hidden="true"></i>
            <span>Groups</span>
            <span className="badge">17</span>
          </li>
          <li>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <span>Events</span>
            <span className="badge">3</span>
          </li>
          <li>
            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
            <span>Saved</span>
            <span className="badge">8</span>
          </li>
          <li>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            <span>Find Friends</span>
            <span className="badge">1</span>
          </li>
          <li>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>Matches</span>
            <span className="badge">1</span>
          </li>
          <li>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <span>Argon For Teams</span>
            <span className="badge">1</span>
          </li>
          <li> <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the App</h1>
        <p>This is where the main content will go.</p>
      </div>
    </div>
  );
}

export default App;