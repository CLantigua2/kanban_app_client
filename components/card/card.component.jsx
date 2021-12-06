import css from "./card.module.css";

const Card = ({ children }) => {
  return <div className={css.card}>{children}</div>;
};

export default Card;
