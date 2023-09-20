import React from "react";
import { Icon } from '@iconify/react';

const Frontend = () => {
  

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>CSS</h3>
            </div>
          </div>

          <div className="skills__data">
          <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Bootstrap</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>ReactJS</h3>
            </div>
          </div>

          <div className="skills__data">
           <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
