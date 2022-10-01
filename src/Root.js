import logo from "./logo.svg";
import "./css/Root.css";

function Root() {
  return (
    <div className="Root">
      <div className="Root-container">
        <div className="Root-logo-name">
          <img src={logo} className="Root-logo" alt="logo" />
          <p className="Root-name">0xver</p>
          <p className="Root-name word-break">|</p>
          <p className="Root-name sub-word">Suite</p>
        </div>
        <div className="Root-content border top-bottom-padding">
          <p>
            For building decentralized programs with a toolkit for beginners to
            professionals
          </p>
        </div>
        <div className="Root-content border top-bottom-padding content-text">
          <div className="Root-row">
            <p>Node Packages</p>
            <p>Installation</p>
          </div>
          <div className="Root-packages">
            <div className="Root-row packages">
              <p>Shell</p>
              <code
                className="content-text click-box"
                onClick={() => {
                  navigator.clipboard.writeText("npm i @0xver/shell");
                }}
              >
                npm i @0xver/shell
              </code>
            </div>
          </div>
          <div className="Root-packages">
            <div className="Root-row packages">
              <p>Solver</p>
              <code
                className="content-text click-box"
                onClick={() => {
                  navigator.clipboard.writeText("npm i @0xver/solver");
                }}
              >
                npm i @0xver/solver
              </code>
            </div>
          </div>
        </div>
        <div className="Root-content border top-bottom-padding content-text">
          <div className="Root-row">
            <p>Python Packages</p>
            <p>Installation</p>
          </div>
          <div className="Root-packages">
            <div className="Root-row packages">
              <p>Ether</p>
              <code
                className="content-text click-box"
                onClick={() => {
                  navigator.clipboard.writeText("pip install ether-cli");
                }}
              >
                pip install ether-cli
              </code>
            </div>
          </div>
        </div>
        <div className="Root-content border top-bottom-padding">
          <a
            className="Root-link"
            href="https://github.com/0xver"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Root;
