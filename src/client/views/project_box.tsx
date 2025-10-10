import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../models/project';
import './project_box.scss';

interface ProjectBoxProps {
    project: Project;
    onSelect: () => void;
}

const ProjectBox: React.FC<ProjectBoxProps> = observer(({ project, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        onSelect();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
        }
    };

    return (
        <motion.div
            className="project-box"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.name} project`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <div className="project-image-container">
                <img
                    className="project-image"
                    src={project.imageUrl}
                    alt={project.name}
                    loading="lazy"
                />
                
                <motion.div
                    className="image-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="overlay-content">
                        <FontAwesomeIcon icon={faExpandAlt} size="2x" />
                        <span>View Details</span>
                    </div>
                </motion.div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                
                <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="tech-tag more">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>

                <motion.div
                    className="project-description"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 'auto' : 0 
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <p>{project.description.substring(0, 150)}...</p>
                </motion.div>

                <motion.div
                    className="project-actions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        y: isHovered ? 0 : 10 
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        className="action-button primary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect();
                        }}
                    >
                        <FontAwesomeIcon icon={faExpandAlt} />
                        View Details
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
});

export default ProjectBox;