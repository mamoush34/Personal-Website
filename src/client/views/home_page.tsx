import * as React from "react";
import { observer } from "mobx-react";
import "./home_page.scss"
import { observable, action } from "mobx";


@observer
export default  class HomePage extends React.Component<{}> {

    @observable opacity: number = 0;

    componentDidMount() {
        setTimeout(action(() => this.opacity = 1), 10);
    }

    render() {
        return(
            <div className="home-page" style={{opacity: this.opacity}}>
                <div className="title">Mohammad Amoush</div>
                <div className="subtitle">
                    <span className="subtitle" style={{opacity: 0.8}} >I am a </span>
                    <span className="subtitle-part" style={{color: "orangered"}}>Student/Programmer/Economist</span>
                </div>
            </div>
        );
    }

}