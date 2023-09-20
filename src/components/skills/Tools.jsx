import React from "react";
import { Icon } from '@iconify/react';

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Git</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Postman</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>XAMPP</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>phpMyAdmin</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>cmd</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx "></i>

            <div>
              <h3 className="skills__name"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
