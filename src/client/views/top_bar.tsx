import { observer } from "mobx-react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./top_bar.scss";


library.add(faHome, faUser, faProjectDiagram, faGithub, faLinkedin);

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
                <a className="buttons" id="git" title="Projects" href="https://github.com/mamoush34" target="_blank" style={{marginLeft: 'auto'}}>
                        <FontAwesomeIcon icon={faGithub} size={"2x"} ></FontAwesomeIcon>
                </a>
                <a className="buttons" id="linkedin" title="Projects" href="https://www.linkedin.com/in/mohammad-amoush/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} ></FontAwesomeIcon>
                </a>  
            </div>
        );
    }
}