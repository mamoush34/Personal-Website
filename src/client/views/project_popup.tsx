import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../models/project';
import './project_popup.scss';

interface ProjectPopupProps {
    project: Project;
    onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = observer(({ project, onClose }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'easeIn',
            },
        },
    };

    const contentVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'easeIn',
            },
        },
    };

    return (
        <AnimatePresence>
            <motion.div
                className="project-popup"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={handleBackdropClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
            >
                <motion.div
                    className="popup-content"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <button
                        className="close-button"
                        onClick={onClose}
                        aria-label="Close project details"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <div className="popup-header">
                        <div className="project-image-container">
                            <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="project-image"
                            />
                        </div>
                    </div>

                    <div className="popup-body">
                        <h1 id="project-title" className="project-title">
                            {project.name}
                        </h1>

                        <div className="project-description">
                            <h2>
                                <FontAwesomeIcon icon={faCode} />
                                Project Description
                            </h2>
                            <p>{project.description}</p>
                        </div>

                        <div className="project-technologies">
                            <h2>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                Technologies Used
                            </h2>
                            <div className="tech-grid">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="popup-actions">
                            <button className="action-button secondary" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
});

export default ProjectPopup;
