import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { Project } from '../models/project';
import ProjectBox from './project_box';
import ProjectPopup from './project_popup';
import { projects } from '../data/projects';
import { uiStore } from '../stores';
import './project_page.scss';

const ProjectPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Machine Learning',
        'Web Development',
        'Systems',
        'Games',
        'Data Analysis',
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter(
                project =>
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.technologies.some(tech =>
                        tech.toLowerCase().includes(searchTerm.toLowerCase())
                    )
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(project =>
                project.technologies.some(tech => {
                    const techLower = tech.toLowerCase();
                    switch (selectedCategory) {
                        case 'Machine Learning':
                            return (
                                techLower.includes('tensorflow') ||
                                techLower.includes('python') ||
                                techLower.includes('numpy')
                            );
                        case 'Web Development':
                            return (
                                techLower.includes('react') ||
                                techLower.includes('javascript') ||
                                techLower.includes('typescript')
                            );
                        case 'Systems':
                            return techLower.includes('c') || techLower.includes('java');
                        case 'Games':
                            return (
                                techLower.includes('java') &&
                                (project.name.toLowerCase().includes('game') ||
                                    project.name.toLowerCase().includes('pacman') ||
                                    project.name.toLowerCase().includes('doodle'))
                            );
                        case 'Data Analysis':
                            return (
                                techLower.includes('d3') ||
                                techLower.includes('matplotlib') ||
                                techLower.includes('numpy')
                            );
                        default:
                            return true;
                    }
                })
            );
        }

        setFilteredProjects(filtered);
    }, [searchTerm, selectedCategory]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="project-page"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <div className="page-header">
                <motion.h1 className="page-title" variants={itemVariants}>
                    My Portfolio
                </motion.h1>
                <motion.p className="page-subtitle" variants={itemVariants}>
                    A collection of projects showcasing my skills and passion for technology
                </motion.p>
            </div>

            <motion.div className="filters-section" variants={itemVariants}>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            <motion.div className="project-container" variants={containerVariants}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${searchTerm}-${selectedCategory}`}
                        className="project-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProjectBox
                                    project={project}
                                    onSelect={() => uiStore.setSelectedProject(project)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <motion.div
                        className="no-projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p>No projects found matching your criteria.</p>
                    </motion.div>
                )}
            </motion.div>

            <AnimatePresence>
                {uiStore.selectedProject && (
                    <ProjectPopup
                        project={uiStore.selectedProject}
                        onClose={() => uiStore.clearSelectedProject()}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
});

export default ProjectPage;
