import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button
                id="scrollToTopBtn"
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '50px',
                    height: '50px',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '24px',
                    opacity: '0.7',
                    transition: 'opacity 0.3s',
                    backgroundColor: isVisible ? 'pink' : '',
                }}
                onMouseOver={() => (document.getElementById("scrollToTopBtn").style.opacity = "1")}
                onMouseOut={() => (document.getElementById("scrollToTopBtn").style.opacity = "0.7")}
            >
                &#8679;
            </button>
        )
    );
}

export default ScrollToTopButton;
