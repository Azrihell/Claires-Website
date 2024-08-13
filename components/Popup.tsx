import React, { useEffect, useState } from 'react';



const StickyPopup = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Control visibility
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Track screen size
  const [headerHeight, setHeaderHeight] = useState(0); // Track header height

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1068); // Adjust this breakpoint as needed
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const offset = 350;

      if (scrollY + windowHeight + offset >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    if (isLargeScreen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isLargeScreen) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLargeScreen]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isLargeScreen || !isVisible) return null; // Don't render if on a small screen or not visible

  return (
    <div className={`popup ${isAtBottom ? 'atBottom' : ''}`}>
      <div className="popup">
      <div className="popuptext"> About The Author </div>
        <div className="abouttext"> <br/> Claire K. Zada's love for fantasy has been instilled in her since childhood. She was equipped with pocket knives; carving sticks into spears, climbing trees, putting blades of grass and toothpaste into vials to make "potions", and playing dress up to escape from the world we live in.
        The stories of Mune are inspired by many things she saw whilst growing up, mixed with the things she'd love to see in the future.
          Claire K. Zada has been writing since the 3rd grade, but it wasn't until her mid 20s that she became a published author. She hopes to make writing her long term life goal, and to create an enthralling escape for fantasy readers everywhere within her books.
          </div>
          <button className="closeButton" onClick={handleClose}>
        &times;
      </button>
      </div>
    </div>
  );

};


export default StickyPopup;
