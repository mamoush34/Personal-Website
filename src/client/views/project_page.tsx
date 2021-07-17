import * as React from "react";
import './project_page.scss';
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Project } from "../models/project";
import ProjectBox from "./project_box";
import ProjectPopUp from "./project_popup";
import * as Constants from "../models/constants";

@observer
export default class ProjectPage extends React.Component<{}> {

    @observable projects : Project[] = [];
    @observable selectedProject: Project | undefined;

    @observable opacity: number = 0;

    componentDidMount() {
        setTimeout(action(() => this.opacity = 1), 10);
    }
    
    constructor(props: any) {
        super(props);
        this.projects.push(new Project("Pandemic Deadline", Constants.pandemicDeadline, Constants.pandemicUrl, ["Python, NumPy, TypeScript, React, NodeJS, D3.Js"]));
        this.projects.push(new Project("DeepTrex", Constants.deepTrex, Constants.deepUrl, ["Python, TensorFlow, NumPy"]));
        this.projects.push(new Project("Search with Cam", Constants.camDesc, Constants.camUrl, ["Python, TensorFlow, NumPy, OpenCV"]));
        this.projects.push(new Project("InTurn", Constants.inTurnDesc, Constants.inTurnUrl, ["React, Node Express, TypeScript"]));
        this.projects.push(new Project("UDDU", Constants.UDDUDesc, Constants.UDDUUrl, ["Java, TypeScript, React, NodeJS, Java Spark, Html/CSS, JavaScript, MobX"]));
        this.projects.push(new Project("Weenix", Constants.weenixDesc, Constants.weenixUrl, ["C"]));
        this.projects.push(new Project("Maps", Constants.mapsDesc, Constants.mapsUrl, ["Java, Java Spark, Html/CSS, JavaScript, JQuery"]));
        this.projects.push(new Project("Scene Recognizer", Constants.sceneDesc, Constants.sceneUrl, ["Python, NumPy, MatPlotLib"]));
        this.projects.push(new Project("Decision Tree", Constants.decisionDesc, Constants.decisionUrl, ["Python, NumPy, MatPlotLib"]));
        this.projects.push(new Project("CShell", Constants.cShellDesc, Constants.cShellUrl, ["C"]));
        this.projects.push(new Project("Pacman", Constants.pacmanDesc, Constants.pacmanUrl, ["Java"]));
        this.projects.push(new Project("DoodleJump", Constants.doodleDesc, Constants.doodleUrl, ["Java"]));
        this.projects.push(new Project("Database Server", Constants.databaseDesc, Constants.databaseUrl, ["C"]));
        this.projects.push(new Project("Feature Matcher", Constants.featureDesc, Constants.featureUrl, ["Python, NumPy, MatPlotLib"]));
        this.projects.push(new Project("Malloc", Constants.mallocDesc, Constants.mallocUrl, ["C"]));
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

    fadeBackground = () => {
        if (this.selectedProject) {
            return 0.5;
        } else {
            return 0;
        }
    }

    render() {
        return (
            <div className="project-page" style={{opacity: this.opacity}}>
                <div className="project_container">
                    {this.projects.map(project => <ProjectBox curProject={project} setSelected={this.setSelectedProject}></ProjectBox>)}
                </div>
                <div className="fade-in" style={{opacity: this.fadeBackground()}}></div>
                {this.renderPopUp()}
            </div>
        );
    }
}