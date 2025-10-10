import { makeObservable, observable } from 'mobx';

export class Project {
    public name: string;
    public description: string;
    public technologies: string[];
    public imageUrl: string;

    constructor(name: string, description: string, imageUrl: string, technologies: string[]) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.technologies = technologies;

        makeObservable(this, {
            name: observable,
            description: observable,
            technologies: observable,
            imageUrl: observable,
        });
    }
}