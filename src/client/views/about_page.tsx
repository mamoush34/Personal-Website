import * as React from "react";
import { observer } from "mobx-react";
import "./about_page.scss"
import { observable, action } from "mobx";


@observer
export default  class AboutPage extends React.Component<{}> {

    @observable opacity: number = 0;

    componentDidMount() {
        setTimeout(action(() => this.opacity = 1), 10);
    }

    render() {
        return(
            <div className="about-page" style={{opacity : this.opacity}}>
                <div className="img-profile">
                    <img className="profile_image" alt="Profile" src="/images/profile.jpg"/>
                    <div className="profile_info">
                        <div>
                            <p>Hello, I’m Mohammad. I am from Istanbul, Turkey and am happiest when drinking a cup of Turkish tea and looking upon a view of the Bosporus waterfront. 
                            I was first introduced to Computer Science in high school. The field has always been of interest to me, but I only went as far as coding a few mini-games. 
                            Despite the limited exposure, those experiences sparked my intellectual curiosity, prompting me to take that first, introductory CS course my Freshman year at Brown University. 
                            I haven’t looked back since.</p>
                            <br/>
                            <p>Three years later I have had a series of experiences with the field through coursework, research, and independent projects. 
                            Some of my favorites include systems projects in C, 2D game development in Java, full-stack application development in JavaScript and TypeScript using 
                            the React framework with clients served by Node and Java (Spark) including this website, as well as Computer Vision projects in TensorFlow. </p>
                            <br/>
                            <p>In the future, I hope to explore projects in an industry setting and am always looking forward to taking part in initiatives that are meaningful to the communities and cultures I am a part of. 
                            Outside of my work in the Computer Science field, I am a student of Economics and am passionate about finding the intersections between the technical and the business facets of the industry. 
                            In my free time, I love watching sports and can talk NBA or soccer for hours. You can always find me at the gym or playing pick-up basketball and will occasionally spot me at specialty dessert shops attempting to satisfy my sweet tooth.  </p>                  
                        </div>
                        <br/>
                        <div>Brown University, Sc.B. Computer Science, B.A Economics</div>
                        <div>mohammad_amoush@brown.edu | muhammedamoush@gmail.com</div>    
                    </div>
                </div>
            </div>
        );
    }

}