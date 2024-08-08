import React, { useEffect, useState } from 'react';

const StickyPopup = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAtBottom(true);
        } else {
          setIsAtBottom(false);
        }
      },
      {
        root: null, 
        threshold: 0.1, 
      }
    );
  
    const footer = document.querySelector('footer');
  
    if (footer) {
      observer.observe(footer);
    }
  
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <div className={`popup ${isAtBottom ? 'atBottom' : ''}`}>
      <div className="popup">
      <div className="popuptext"> About The Author </div>
        <div className="abouttext"> <br/> Claire K. Zada’s love for fantasy has been instilled in her since childhood. She was equipped with pocket knives; carving sticks into spears, climbing trees, putting blades of grass and toothpaste into vials to make ‘potions’, and playing dress up to escape from the world we live in. 
        The stories of Mune are inspired by many things she saw whilst growing up, mixed with the things she'd love to see in the future. 
	        Claire K. Zada has been writing since the 3rd grade, but it wasn’t until her mid 20s that she became a published author. She hopes to make writing her long term life goal, and to create an enthralling escape for fantasy readers everywhere within her books.
          </div> 
      </div>
    </div>
  );
};

export default StickyPopup;
