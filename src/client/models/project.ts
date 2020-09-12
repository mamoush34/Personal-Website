import { observable } from "mobx";

export class Project {

    @observable public name: string;
    @observable public description: string;
    @observable public technologies: string[];
    @observable public imageUrl: string;

    constructor (name: string, description: string,  imageUrl: string, technologies: string[]) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.technologies = technologies;
    }

}