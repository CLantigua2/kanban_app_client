import { useState } from "react";
import css from "./create-new-task.module.css";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const CreateNewTask = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

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
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="cancel"
                className="btn btn-secondary"
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewTask;
