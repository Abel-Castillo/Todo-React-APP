import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../../redux/actions";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ModalAddTodo = () => {
  const [date, setDate] = useState({ startDate: new Date() });

  const dispatch = useDispatch();
  const addTaskHandler = () => {
    const newTask = document.querySelector("#newTask");
    dispatch(newTodo(newTask.value, date.startDate));
  };
  const changeDate = event => {
    setDate({
      startDate: event
    });
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        New Todo
        <i className="fas fa-plus-circle" />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times-circle" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="newTask">Task</label>
              <input id="newTask" type="text" />
              <label htmlFor="dueDate">Task Due Date</label>
              <DatePicker
                id="dueDate"
                selected={date.startDate}
                onChange={e => changeDate(e)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={addTaskHandler}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTodo;
