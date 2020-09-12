import * as React from "react";
import './project_page.scss';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Project } from "../models/project";

@observer
export default class ProjectPage extends React.Component<{}> {

    @observable project : Project[] = [];
    
    constructor(props: any) {
        super(props);
        this.project.push(new Project("DoodleJump", "Great Project", "", ["Java"]));
        this.project.push(new Project("Tetris", "Great Project", "", ["Java"]));
        this.project.push(new Project("Pacman", "Great Project", "", ["Java"]));
        this.project.push(new Project("CShell", "Great Project", "", ["C"]));
        this.project.push(new Project("Malloc", "Great Project", "", ["C"]));
        this.project.push(new Project("Database Server", "Great Project", "", ["C"]));
        this.project.push(new Project("AutoCorrect", "Great Project", "", ["Java, Java Spark, Html/CSS, JavaScript, JQuery"])); 
        this.project.push(new Project("Maps", "Great Project", "", ["Java, Java Spark, Html/CSS, JavaScript, JQuery"]));
        this.project.push(new Project("UDDU", "Great Project", "", ["Java, TypeScript, React, NodeJS, Java Spark, Html/CSS, JavaScript, MobX"]));
        this.project.push(new Project("Feature Matcher", "Great Project", "", ["Python, NumPy, MatPlotLib"]));
        this.project.push(new Project("Scene Recognizer", "Great Project", "", ["Python, NumPy, MatPlotLib"]));
        this.project.push(new Project("Weenix", "Great Project", "", ["C"]));
        this.project.push(new Project("InTurn", "Great Project", "", ["React, Node Express, TypeScript"]));
        this.project.push(new Project("Search with Cam", "Great Project", "", ["Python, TensorFlow, NumPy, OpenCV"]));
    }

    render() {
        return (
            <div className="project-page">
                <div className="image_container"></div>
                <div className="project_container"></div>
            </div>
        );
    }
}