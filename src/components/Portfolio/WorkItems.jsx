import React from "react";
import { Icon } from '@iconify/react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
        

      <a
        href={item.live}
        target="_blank"
        className="work__button "
      >
       
       <i className="services__modal-icon"><Icon icon="uil-caret-right" /></i> Live
      </a>

      
      <a
        href={item.repo}
        target="_blank"
        className="work__button "
      >
       
       <i className="services__modal-icon"><Icon icon="uil-arrow" /></i> Code
      </a>

      
    </div>
  );
};

export default WorkItems;
