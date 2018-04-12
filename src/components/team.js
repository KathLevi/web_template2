import React from "react";
import default1 from "../assets/default3.jpg";
import default2 from "../assets/default3.jpg";
import default3 from "../assets/default3.jpg";

class Team extends React.Component {
  constructor() {
    super();
    this.data = {
      content: {
        people : [
          {
            name: "Person A",
            img: default1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            name: "Person B",
            img: default2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            name: "Person C",
            img: default3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          }
        ]
      }
    };
  }
  render() {
    var contentKeys = Object.keys(this.data.content);
    var team = contentKeys.map((t) => this.data.content[t].map((e) => 
    (<div className="teamImg"> 
        <img src={e.img} alt={e.name} />
    </div>)));

    return (
      <div align="center">
        <h1 className="pageHeader">
          Meet our <span>Team</span>
        </h1>
        <h3 className="pageSubheader">
          Click an image to learn more about one of our team members
        </h3>
        <div className="teamCard">
            {team}    
        </div> 
        {/* <div className="teamInfo" id="info">
            <div className="teamName">{team.name}</div>
            <div className="teamDesc">{team.desc}</div>
        </div> */}
      </div>
      );
  }
}

export default Team;
