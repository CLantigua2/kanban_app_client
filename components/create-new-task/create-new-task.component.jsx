import { useState } from "react";
import css from "./create-new-task.module.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#__next");

const CreateNewTask = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(taskName, taskDescription, taskPriority, taskStatus);
    setModalIsOpen(false);
  };

  const handleBlur = (e) => {
    if (e.target.value === "" && !e.target.classList.contains("input-error")) {
      e.target.classList.add("input_error");
    }
    if (e.target.value !== "" && e.target.classList.contains("input_error")) {
      e.target.classList.remove("input_error");
    }
  };

  return (
    <>
      <div className={css.open_button}>
        <button onClick={() => setModalIsOpen(true)}>Add</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={(e) => {
          e.stopPropagation();
          setModalIsOpen(false);
        }}
        contentLabel="Create new task"
        className={css.modal}
      >
        <div className={css.modal_content}>
          <div className={css.modal_header}>
            <h2>Create new task</h2>
          </div>
          <div className={css.modal_body}>
            <form>
              <div className={css.form_group}>
                <label className={css.form_label} htmlFor="task-name">
                  Task name
                </label>
                <input
                  onBlur={(e) => handleBlur(e)}
                  onChange={(e) => setTaskName(e.target.value)}
                  type="text"
                  className={css.form_control}
                  id="task-name"
                  placeholder="Enter task name"
                />
              </div>
              <div className={css.form_group}>
                <label className={css.form_label} htmlFor="task-description">
                  Task description
                </label>
                <textarea
                  onBlur={(e) => handleBlur(e)}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className={css.form_control}
                  id="task-description"
                  rows="3"
                  placeholder="Enter task description"
                ></textarea>
              </div>
              <div className={css.form_group}>
                <label className={css.form_label} htmlFor="task-priority">
                  Task priority
                </label>
                <select
                  className={css.form_control}
                  id="task-priority"
                  onChange={(e) => setTaskPriority(e.target.value)}
                  onBlur={(e) => handleBlur(e)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className={css.form_group}>
                <label className={css.form_label} htmlFor="task-status">
                  Task status
                </label>
                <select
                  onBlur={(e) => handleBlur(e)}
                  className={css.form_control}
                  id="task-status"
                  onChange={(e) => setTaskStatus(e.target.value)}
                >
                  <option>Not started</option>
                  <option>In progress</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className={css.form_group}>
                <label className={css.form_label} htmlFor="task-date">
                  Task date
                </label>
                <input
                  type="date"
                  className={css.form_control}
                  id="task-date"
                  onChange={(e) => e.target.value}
                  onBlur={(e) => handleBlur(e)}
                />
              </div>
              <div className={css.button_group}>
                <button
                  type="submit"
                  className={`${css.btn} ${css.btn_primary}`}
                  onClick={(e) => onSubmitForm(e)}
                >
                  Submit <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button
                  type="cancel"
                  className={`${css.btn} ${css.btn_secondary}`}
                  onClick={() => setModalIsOpen(false)}
                >
                  Cancel <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewTask;
