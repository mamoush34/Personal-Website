
import * as React from "react";
import "./home_view.scss";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { DynamicInteractiveMap, Comparators, Compare } from "dynamicinteractivemap";
import TopBar from "./top_bar";
import AboutPage from "./about_page";
import ProjectPage from "./project_page";
import HomePage from "./home_page";

export interface HomeViewProps {
    background: string;
}

@observer
export default class HomeView extends React.Component<HomeViewProps> {
    @observable aboutPageOpen: boolean = false;
    @observable projectPageOpen: boolean = false;

    @action
    renderAboutPage = () => {
        this.aboutPageOpen = true;
        if (this.projectPageOpen) this.projectPageOpen = false;
    }

    @action
    renderProjectPage = () => {
        this.projectPageOpen = true;
        if (this.aboutPageOpen) this.aboutPageOpen = false;
    }
    @action
    renderHomePage = () => {
        if (this.aboutPageOpen) this.aboutPageOpen = false;
        if (this.projectPageOpen) this.projectPageOpen = false;
    }

    fillPage = () => {
        if (this.projectPageOpen) {
            return <ProjectPage></ProjectPage>
        } else if (this.aboutPageOpen){
            return <AboutPage></AboutPage>;
        } else {
            return <HomePage></HomePage>
        }
    }
    

    @computed
    private get renderPage() {
        const { background } = this.props;
        return <div
            className="def-container"
            style={{ background }}
        >
            <TopBar renderHome={this.renderHomePage} renderAbout={this.renderAboutPage} renderProjects={this.renderProjectPage}></TopBar>
            {this.fillPage()}
        </div>     

    }

    render() {
        return this.renderPage;
    }

}