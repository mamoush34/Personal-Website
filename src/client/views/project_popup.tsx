import "./project_popup.scss"
import * as React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Project } from "../models/project";

interface PopUpInterface {
    deSelect: () => void;
    cur_project: Project;

}

@observer
export default class ProjectPopUp extends React.Component<PopUpInterface> {


    render() {
        const { cur_project } = this.props;
        return (
            <div className="popUp_container">
                <div className="content">
                    <div className="pop_image">
                        <img src={cur_project.imageUrl} alt={cur_project.name}/>
                    </div>
                    <div className="pop_desc">{cur_project.description}</div>
                </div>
                <button title="Close (Esc)" type="button" className="pop_close" onClick={this.props.deSelect}>×</button>
            </div>
        );
    }
}