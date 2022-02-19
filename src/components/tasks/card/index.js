import React from "react";

import { Alarm, PersonCircle, Tag, Paperclip } from "react-bootstrap-icons";

const Cards = ({ showDesktopView, viewOption }) => {
  const shouldShowFullTags = showDesktopView && viewOption !== "grid";

  return (
    <button className="tasks-cards__item tasks__btn">
      <div className="tasks-cards__checkbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        </svg>
      </div>
      <div className="tasks-cards__content">
        <div className="tasks-cards__section--top">
          <div className="tasks-cards__subsection--left">
            <div className="tasks-cards__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="tasks-cards__subsection--right">
            <div className="tasks-cards__priority tasks-cards__priority--urgent">
              Urgent
            </div>
          </div>
        </div>
        <div className="tasks-cards__section--middle">
          <div className="tasks-cards__description">Some Description Text</div>
        </div>
        <div className="tasks-cards__section--bottom">
          <div className="tasks-cards__subsection--left">
            <div className="tasks-cards__duedate">
              <Alarm />
              <span>12-17-2021</span>
            </div>
            <div className="tasks-cards__patient">
              <PersonCircle />
              <span>Daniel Choi</span>
            </div>
          </div>
          <div className="tasks-cards__subsection--right">
            {shouldShowFullTags ? (
              <>
                <div className="tasks-cards__tag">Form Submission</div>
                <div className="tasks-cards__tag">Doc Review</div>
                <div className="tasks-cards__tag">+2</div>
              </>
            ) : (
              <div className="tasks-cards__tag tasks-cards__tag--mobile">
                <Tag />
                <span>+3</span>
              </div>
            )}
            <div className="tasks-cards__attachment">
              <Paperclip />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
