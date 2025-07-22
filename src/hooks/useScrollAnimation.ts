import { useState, useEffect } from 'react';

export const useScrollAnimation = (threshold: number = 0.1, repeat: boolean = true) => {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        const observerOptions = {
            threshold,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (repeat) {
                    // For repeatable animations
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                    } else {
                        setVisibleSections(prev => {
                            const newSet = new Set(prev);
                            newSet.delete(entry.target.id);
                            return newSet;
                        });
                    }
                } else {
                    // For one-time animations
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [threshold, repeat]);

    const isVisible = (sectionId: string): boolean => visibleSections.has(sectionId);

    return { isVisible, visibleSections };
};

export default useScrollAnimation;