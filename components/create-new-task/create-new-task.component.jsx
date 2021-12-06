import { useState, useRef } from "react";
import css from "./create-new-task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
import useOnClickOutside from "../../hooks/";
import Card from "../card";

const CreateNewTask = ({ createTask, status }) => {
  const formRef = useRef(null);
  const [isCreating, setCreating] = useState(false);
  const [taskName, setTaskName] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    createTask({
      taskId: v4(),
      title: taskName,
      createdDate: new Date(), // delete this later
      status: status,
    });

    setCreating(false);
  };

  useOnClickOutside(formRef, () => setCreating(false));

  return !isCreating ? (
    <div className={css.open_button}>
      <button onClick={() => setCreating(true)} className={css.open_button}>
        <FontAwesomeIcon icon={faPlus} /> Add A Card
      </button>
    </div>
  ) : (
    <>
      <div className={css.modal_body}>
        <form>
          <Card ref={formRef}>
            <textarea
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              className={css.form_control}
              id="task-name"
              placeholder="Enter task name"
            />
          </Card>
          <div className={css.button_group}>
            <button
              type="submit"
              className={`${css.btn} ${css.btn_primary}`}
              onClick={(e) => onSubmitForm(e)}
              disabled={!taskName}
            >
              Add Card
            </button>
            <button
              type="cancel"
              className={`${css.btn} ${css.btn_secondary}`}
              onClick={() => setCreating(false)}
            >
              <p class={css.close}></p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNewTask;
