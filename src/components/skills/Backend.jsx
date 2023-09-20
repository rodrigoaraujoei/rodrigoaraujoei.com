import React from "react";
import { Icon } from '@iconify/react';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
           <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>PHP</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Laravel</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>Node Js</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>SQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>MySQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
            <div>
              <h3 className="skills__name" style={{margin:"7px"}}>API</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
