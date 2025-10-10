import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import './home_page.scss';

const HomePage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState(false);
    const [typewriterText, setTypewriterText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const roles = ['Student', 'Programmer', 'Economist', 'Problem Solver', 'Tech Enthusiast'];
    const fullText = `I am a ${roles.join('/')}`;

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypewriterText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="home-page"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <motion.div
                className="title"
                variants={titleVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
            >
                Mohammad Amoush
            </motion.div>
            
            <motion.div
                className="subtitle"
                variants={subtitleVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
            >
                <span className="typewriter-text">
                    {typewriterText}
                    <span className="cursor">|</span>
                </span>
            </motion.div>

            <motion.div
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <p>
                    Welcome to my digital space. I'm passionate about technology, economics, 
                    and solving complex problems through innovative solutions.
                </p>
            </motion.div>

            <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <motion.button
                    className="cta-button primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View My Work
                </motion.button>
                <motion.button
                    className="cta-button secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get In Touch
                </motion.button>
            </motion.div>
        </motion.div>
    );
});

export default HomePage;