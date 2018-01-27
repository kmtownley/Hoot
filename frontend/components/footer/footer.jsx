import React from 'react';

class Footer extends React.Component {


  render() {
    return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list-content">
          <label className="footer-title"> VIEW THE CODE
            <a className="git-link" href="https://github.com/kmtownley/Hoot">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </label>
        </li>
        <li className="footer-list-content" >
          <label  className="footer-title"> MEET THE ENGINEER
            <a className="git-link" href="https://www.linkedin.com/in/kathleen-townley-83b039b8/">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
          </label>
        </li>
      </ul>
      <div className="footer-image">
      </div>
    </footer>
    );
  }
}

export default Footer;
