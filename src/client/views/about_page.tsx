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
                        <div>Hello, I'm Mohammad. I come from Istanbul, Turkey. A place where you should definetely try drinking a cup of tea facing Boshphorus view
                            I've started Computer Science as a high school student. It was mostly to explore something I've been interested for a long time, but it didn't
                            go further than some mini-games. However, it was a fondly experience, which made me take that first CS course in Freshman year.
                            I haven't looked back ever since. My favorite experiences through coursework, reasearch and projects have included systems projects in C, 2D game
                            development in Java, number of full-stack applications with Javascript and Typescript / React clients served by Node and Java (Spark) servers, as well as
                            Computer Vision projects in Tensorflow. In future, I hope to explore projects in industry setting, and am always looking forward to take part in iniatives
                            that are meaningul to community and culture. I'm a huge sports fan, I can talk about NBA or soccer for hours. In my free time, I like to gym or play pick-up
                            basketball. I'll never say no to delicious desserts, so I'm always in hunt for places.                        
                        </div>
                        <br/>
                        <div>Brown University, Sc.B. Computer Science, B.A Economics</div>
                        <div>mohammad_amoush@brown.edu | muhammedamoush@gmail.com</div>
                        <br/>
                        <a className="profile_link" href="https://www.linkedin.com/in/mohammad-amoush/" target="_blank">https://www.linkedin.com/in/mohammad-amoush/</a>
                        <a className="profile_link"href="https://github.com/mamoush34" target="_blank">https://github.com/mamoush34</a>


                    </div>
                </div>
            </div>
        );
    }

}