import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sayGoodMorning,
  sayGoodEvening,
  sayGoodAfternoon
} from "../redux/messageCard/messageCardReducer";

let MessageCard = () => {
  let dispatch = useDispatch();

  let messageCardInfo = useSelector((state) => {
    return state.messageCardReducer; //here messageCardReducer is rootReducer
  });

  let clickGoodMorning = () => {
    dispatch(sayGoodMorning());
  };

  let clickGoodAfternoon = () => {
    dispatch(sayGoodAfternoon());
  };

  let clickGoodEvening = () => {
    dispatch(sayGoodEvening());
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <p className="h3">Message Card</p>
              </div>
              <div className="card-body">
                <p className="h3">{messageCardInfo.message}</p>

                <button
                  onClick={clickGoodMorning}
                  className="btn btn-sm bg-dark text-white"
                >
                  Good Morning
                </button>
                <button
                  onClick={clickGoodAfternoon}
                  className="btn btn-sm bg-warning text-white"
                >
                  Good AfterNoon
                </button>
                <button
                  onClick={clickGoodEvening}
                  className="btn btn-sm bg-danger text-white"
                >
                  Good Evening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessageCard;
