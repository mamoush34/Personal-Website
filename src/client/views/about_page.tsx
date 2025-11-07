import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import './about_page.scss';

const AboutPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState(false);

    // Obfuscated email (base64 encoded)
    const obfuscatedEmail = 'bW9oYW1tYWRhbW91c2g5OEBnbWFpbC5jb20=';

    const handleSendEmail = () => {
        const email = atob(obfuscatedEmail);
        window.location.href = `mailto:${email}`;
    };

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
        { name: 'Recommender Systems & Ranking', level: 90 },
        { name: 'Feature Engineering & A/B Experimentation', level: 85 },
        { name: 'Full-Stack Development (React, Node, Java)', level: 80 },
        { name: 'Machine Learning (TensorFlow, PyTorch)', level: 80 },
        { name: 'Distributed Systems & Backend Architecture', level: 75 },
        { name: 'Data Processing (Python, SQL, Spark)', level: 75 },
        { name: 'Data Visualization (D3.js, Plotly)', level: 70 },
        { name: 'Cloud & DevOps (AWS, Docker)', level: 70 },
        { name: 'Economics & Business Analytics', level: 65 },
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
                            Hello, I'm Mohammad. I am from Istanbul, Turkey and am happiest when
                            drinking a cup of Turkish tea and looking upon a view of the Bosporus
                            waterfront.
                        </p>
                    </motion.div>

                    <motion.div className="story-section" variants={itemVariants}>
                        <h2>My Journey</h2>
                        <p>
                            I first got into Computer Science in high school, where coding small
                            games sparked my curiosity about how software systems work. That
                            curiosity led me to study Computer Science at Brown University, where I
                            built a foundation across systems programming, data visualization, web
                            development, and applied machine learning.
                            <br />
                            Some of my favorite projects included systems design in C, 2D game
                            development in Java, interactive data representation with D3, and
                            full-stack web development using React and Node. I also explored
                            Computer Vision and Deep Learning with TensorFlow, which shaped my
                            long-term interest in intelligent systems.
                        </p>
                        <p>
                            I'm currently a Software Engineer at Meta, working on large-scale
                            Recommendation and Ranking Systems for IG Feed Ranking. My focus areas
                            include feature authoring, contextual re-ranking, diversity
                            optimization, and infrastructure efficiency. I design and analyze A/B
                            experiments to evaluate new product ideas and algorithmic improvements,
                            driving measurable gains in user engagement and system performance.
                        </p>
                        <p>
                            I'm passionate about the technical and practical challenges of building
                            scalable, AI-driven systems—from feature design and model evaluation to
                            serving efficiency and real-world impact. I aim to keep growing as an
                            engineer specializing in machine learning systems and recommender
                            architectures that make intelligent, data-driven experiences more
                            effective and accessible.
                        </p>
                    </motion.div>

                    <motion.div className="future-section" variants={itemVariants}>
                        <h2>Looking Forward</h2>
                        <p>
                            I'm looking forward to continuing my journey in AI and large-scale
                            recommendation systems, with a focus on improving personalization,
                            ranking efficiency, and model interpretability. I'm particularly
                            interested in how advances in machine learning infrastructure and
                            experimentation platforms can accelerate innovation in recommender
                            systems.
                        </p>
                        <p>
                            I'm also fascinated by the intersection of technology, data, and
                            business, and how engineering decisions translate into measurable
                            product outcomes. My long-term goal is to build AI systems that are not
                            only technically sophisticated but also enhance real-world experiences
                            for millions of users.
                        </p>
                        <p>
                            Outside of work, I stay active through basketball and gym sessions, love
                            watching NBA and soccer, and have a well-documented weakness for
                            specialty desserts.
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
                            <button onClick={handleSendEmail} className="send-email-btn">
                                Send Email
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
});

export default AboutPage;
