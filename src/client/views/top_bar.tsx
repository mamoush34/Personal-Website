import { observer } from "mobx-react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./top_bar.scss";


library.add(faGithub, faLinkedin);

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
                <div className="buttons" id="home" title="Home" onClick={props.renderHome} style={{fontSize: 'large'}}>
                    Home
                </div>
                <div className="buttons" id="about" title="About Me!" onClick={props.renderAbout} style={{fontSize: 'large'}}>
                    About Me
                </div>
                <div className="buttons" id="projects" title="Projects" onClick={props.renderProjects} style={{fontSize: 'large'}}>
                    Portfolio
                </div>
                <a className="buttons" id="git" title="GitHub" href="https://github.com/mamoush34" target="_blank" style={{marginLeft: 'auto'}}>
                        <FontAwesomeIcon icon={faGithub} size={"2x"} ></FontAwesomeIcon>
                </a>
                <a className="buttons" id="linkedin" title="LinkedIn" href="https://www.linkedin.com/in/mohammad-amoush/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} ></FontAwesomeIcon>
                </a>  
            </div>
        );
    }
}