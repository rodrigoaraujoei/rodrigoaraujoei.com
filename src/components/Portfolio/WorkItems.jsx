import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title}</h3>

      <div className="work__buttons">
        <a
          href={item.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          GitHub
        </a>

        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Live Demo
        </a>
        
      </div>
      
    </div>
  );
};

export default WorkItems;
