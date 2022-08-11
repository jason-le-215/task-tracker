import Button from "./Button";
const Header = ({ title, onAdd, onReset, _showAdd }) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
      <Button
        color={_showAdd ? "grey" : "green"}
        text={_showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      <Button color="red" text="Reset" onClick={onReset} />
    </header>
  );
};

export default Header;
