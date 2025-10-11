import { makeObservable, observable, action } from 'mobx';
import { Project } from '../models/project';

export class UIStore {
    public selectedProject: Project | null = null;
    public isLoading: boolean = false;

    constructor() {
        makeObservable(this, {
            selectedProject: observable,
            isLoading: observable,
            setSelectedProject: action,
            clearSelectedProject: action,
            setLoading: action,
        });
    }

    setSelectedProject = (project: Project) => {
        this.selectedProject = project;
    };

    clearSelectedProject = () => {
        this.selectedProject = null;
    };

    setLoading = (loading: boolean) => {
        this.isLoading = loading;
    };
}
