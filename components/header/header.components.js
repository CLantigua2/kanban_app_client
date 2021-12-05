import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.row}>
      <p className={css.page_header}>Trello Dashboard 🗂</p>
    </div>
  );
};

export default Header;
