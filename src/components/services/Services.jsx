import React, { useState } from "react";
import "./services.css";
import { Icon } from '@iconify/react';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Front-End
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Frontend</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Buttons
                  </p>
                </li>

                <li className="services__modal-service">
                 <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">Layouts</p>
                </li>

                <li className="services__modal-service">
                
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>

                  <p className="services__modal-info">
                    Navigation
                  </p>

                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Images
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Graphics
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Animations
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Content organization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
            Back-End
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Backend</h3>
              <p className="services__modal-description">
                Service with more than 1 year of experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i><i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                  Building code
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i><i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">Troubleshooting web applications</p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i><i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">Debugging web applications</p>
                </li>

                <li className="services__modal-service">
                 <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i><i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                  Database management 
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i><i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                  Framework utilization 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Database
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Database</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    Design Flowchart
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">SQL</p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                    MySQL
                  </p>
                </li>
     
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
            Digital Marketer
            </h3>
          </div>

          <span onClick={() => toggleTab(4)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Digital Marketer</h3>
              <p className="services__modal-description">
                Service with 1 Happy Client.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                  Google Ads Consultant
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">SEO and Google Ads Analyst</p>
                </li>

                <li className="services__modal-service">
                  <i className="services__modal-icon"><Icon icon="ph:seal-check-fill" /></i>
                  <p className="services__modal-info">
                  Digital Marketing Manager
                  </p>
                </li>
     
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
