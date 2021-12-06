import css from "./window.module.css";

const Window = ({ item }) => {
  return (
    <div className={css.window}>
      <h4>Description</h4>
      <p>{item.description}</p>
      <h4>Status</h4>
      <p>{item.status}</p>
    </div>
  );
};

export default Window;
