import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import './about_page.scss';

const AboutPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
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

    const skills = [
        { name: 'Computer Science', level: 90 },
        { name: 'Economics', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Full-Stack Development', level: 85 },
        { name: 'Systems Programming', level: 75 },
        { name: 'Data Analysis', level: 80 },
    ];

    return (
        <motion.div
            className="about-page"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <div className="about-container">
                <motion.div className="profile-section" variants={itemVariants}>
                    <motion.div
                        className="profile-image-container"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            className="profile-image"
                            alt="Mohammad Amoush Profile"
                            src="/images/profile.jpg"
                        />
                        <div className="image-overlay">
                            <span>Mohammad Amoush</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="content-section" variants={itemVariants}>
                    <motion.div className="intro-section" variants={itemVariants}>
                        <h1 className="page-title">About Me</h1>
                        <p className="intro-text">
                            Hello, I'm Mohammad. I am from Istanbul, Turkey and am happiest when drinking a cup of Turkish tea and looking upon a view of the Bosporus waterfront.
                        </p>
                    </motion.div>

                    <motion.div className="story-section" variants={itemVariants}>
                        <h2>My Journey</h2>
                        <p>
                            I was first introduced to Computer Science in high school. The field has always been of interest to me, but I only went as far as coding a few mini-games.
                            Despite the limited exposure, those experiences sparked my intellectual curiosity, prompting me to take that first, introductory CS course my Freshman year at Brown University.
                            I haven't looked back since.
                        </p>
                        <p>
                            Three years later I have had a series of experiences with the field through coursework, research, and independent projects.
                            Some of my favorites include systems projects in C, 2D game development in Java, data representation using D3, full-stack application development in JavaScript and TypeScript using
                            the React framework with clients served by Node and Java (Spark) including this website, as well as Computer Vision and Deep Learning projects in TensorFlow.
                        </p>
                    </motion.div>

                    <motion.div className="future-section" variants={itemVariants}>
                        <h2>Looking Forward</h2>
                        <p>
                            In the future, I hope to explore projects in an industry setting and am always looking forward to taking part in initiatives that are meaningful to the communities and cultures I am a part of.
                            Outside of my work in the Computer Science field, I am a student of Economics and am passionate about finding the intersections between the technical and the business facets of the industry.
                        </p>
                        <p>
                            In my free time, I love watching sports and can talk NBA or soccer for hours. You can always find me at the gym or playing pick-up basketball and will occasionally spot me at specialty dessert shops attempting to satisfy my sweet tooth.
                        </p>
                    </motion.div>

                    <motion.div className="skills-section" variants={itemVariants}>
                        <h2>Skills & Expertise</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="education-section" variants={itemVariants}>
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3>Brown University</h3>
                            <p>Ms.C. Computer Science, Sc.B. Computer Science, B.A Economics</p>
                        </div>
                    </motion.div>

                    <motion.div className="contact-section" variants={itemVariants}>
                        <h2>Get In Touch</h2>
                        <div className="contact-info">
                            <a href="mailto:mohammadamoush98@gmail.com" className="contact-link">
                                mohammadamoush98@gmail.com
                            </a>
                            <a href="mailto:muhammedamoush@gmail.com" className="contact-link">
                                muhammedamoush@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
});

export default AboutPage;