import * as React from "react";
import './project_page.scss';
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Project } from "../models/project";
import ProjectBox from "./project_box";
import ProjectPopUp from "./project_popup";

@observer
export default class ProjectPage extends React.Component<{}> {

    @observable projects : Project[] = [];
    @observable selectedProject: Project | undefined;
    
    constructor(props: any) {
        super(props);
        this.projects.push(new Project("DoodleJump", "Great Project", "", ["Java"], "Nice project!"));
        this.projects.push(new Project("Tetris", "Great Project", "", ["Java"], "Nice project!"));
        this.projects.push(new Project("Pacman", "Great Project", "", ["Java"], "Nice project!"));
        this.projects.push(new Project("CShell", "Great Project", "", ["C"], "Nice project!"));
        this.projects.push(new Project("Malloc", "Great Project", "", ["C"], "Nice project!"));
        this.projects.push(new Project("Database Server", "Great Project", "", ["C"], "Nice project!"));
        this.projects.push(new Project("AutoCorrect", "Great Project", "", ["Java, Java Spark, Html/CSS, JavaScript, JQuery"], "Nice project!")); 
        this.projects.push(new Project("Maps", "Great Project", "", ["Java, Java Spark, Html/CSS, JavaScript, JQuery"], "Nice project!"));
        this.projects.push(new Project("UDDU", "Great Project", "", ["Java, TypeScript, React, NodeJS, Java Spark, Html/CSS, JavaScript, MobX"], "Nice project!"));
        this.projects.push(new Project("Feature Matcher", "Great Project", "", ["Python, NumPy, MatPlotLib"], "Nice project!"));
        this.projects.push(new Project("Scene Recognizer", "Great Project", "", ["Python, NumPy, MatPlotLib"], "Nice project!"));
        this.projects.push(new Project("Weenix", "Great Project", "", ["C"], "Nice project!"));
        this.projects.push(new Project("InTurn", "Great Project", "", ["React, Node Express, TypeScript"], "Nice project!"));
        this.projects.push(new Project("Search with Cam", "Great Project", "", ["Python, TensorFlow, NumPy, OpenCV"], "Nice project!"));
    }

    @action
    setSelectedProject = (clicked: Project) => {
        this.selectedProject = clicked;
    }

    renderPopUp = () => {
        if (this.selectedProject) {
            return <ProjectPopUp deSelect={this.deSelectProject} cur_project={this.selectedProject}></ProjectPopUp>;
        } else {
            return (null);
        }
    }

    @action
    deSelectProject = () => {
        if (this.selectedProject) {
            this.selectedProject = undefined;
        }
    }

    render() {
        return (
            <div className="project-page">
                <div className="project_container">
                    {this.projects.map(project => <ProjectBox curProject={project} setSelected={this.setSelectedProject}></ProjectBox>)}
                </div>
                {this.renderPopUp()}
            </div>
        );
    }
}