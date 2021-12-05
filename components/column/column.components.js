import css from "./column.module.css";

const Column = ({ isOver, children }) => {
  const className = isOver ? "highlight-region" : "";

  return <div className={`${css.col} ${css[className]}`}>{children}</div>;
};

export default Column;
