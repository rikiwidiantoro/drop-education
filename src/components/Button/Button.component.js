import buttonCss from "./Button.module.css";

function Button({ textName }) {
  return <button className={buttonCss.button}>{ textName }</button>;
}

export default Button;