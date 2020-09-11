import { observer } from "mobx-react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./top_bar.scss";


library.add(faHome, faUser, faProjectDiagram);

interface TopBarProps{
    renderHome : () => void;
    renderAbout : () => void;
    renderProjects : () => void;
}

@observer
export default class TopBar extends React.Component<TopBarProps> {
    
    render() {
        let props = this.props;
        return(
            <div className="top_container">
                <a className="buttons" id="home" title="Home" onClick={props.renderHome}>
                        <FontAwesomeIcon icon={faHome} size={"2x"} ></FontAwesomeIcon>
                </a>
                <a className="buttons" id="about" title="About Me!" onClick={props.renderAbout}>
                        <FontAwesomeIcon icon={faUser} size={"2x"} ></FontAwesomeIcon>
                </a>
                <a className="buttons" id="projects" title="Projects" onClick={props.renderProjects}>
                        <FontAwesomeIcon icon={faProjectDiagram} size={"2x"} ></FontAwesomeIcon>
                </a>
            </div>
        );
    }
}