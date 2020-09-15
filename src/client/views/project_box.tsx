import * as React from "react";
import './project_box.scss';
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Project } from "../models/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faExpandAlt);

interface ProjectBoxInterface {
    setSelected: (selected: Project) => void;
    curProject : Project;
}

@observer
export default class ProjectBox extends React.Component<ProjectBoxInterface> {

    @observable pointer_over: boolean = false;

    render() {
        const { curProject } = this.props;
        return(
            <div className="project_box" onClick={() => this.props.setSelected(curProject)}>
                <div 
                    className="header"
                >
                   <p className="title">{curProject.name}</p> 
                </div>
                <img
                    className="image"
                    src={curProject.imageUrl}
                    alt={curProject.name}
                />
                <div 
                    id="description"
                    className="image"
                    onPointerEnter={() => this.pointer_over = true}
                    onPointerLeave={() => this.pointer_over = false}
                    style={{
                        opacity : this.pointer_over ? 1 : 0,
                    }}
                >
                    <div><FontAwesomeIcon icon={faExpandAlt} size={"2x"}/></div>   
                </div>
            </div>
        );
    }

}