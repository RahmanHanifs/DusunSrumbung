import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
    delay?: number;
    threshold?: number;
    repeat?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    animation = 'fadeInUp',
    delay = 0,
    threshold = 0.1,
    repeat = true
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (repeat) {
                    // For repeatable animations, trigger on both entering and leaving
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(false);
                    }
                } else {
                    // For one-time animations, only trigger when entering
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                    }
                }
            },
            { threshold, rootMargin: '0px 0px -100px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay, threshold, repeat]);

    const animationClass = isVisible ? `animate-${animation}` : 'initial-hidden';

    return (
        <div ref={ref} className={`${animationClass} ${className}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;