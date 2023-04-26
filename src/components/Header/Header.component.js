import headerCss from "./Header.module.css";
import Button from "../Button/Button.component";

function Header() {
  return (
    <div className={headerCss.header} id="home">
      {/* navbar */}
      <nav className={headerCss.header__navbar}>
        <div className={headerCss.header__navbar__logo}>
          <h1>DROP</h1>
        </div>
        <div className={headerCss.header__navbar__link}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
          <Button 
            textName="Sign in"
          />
        </div>
      </nav>

      {/* header */}
      <header className={headerCss.header__header}>
        <div className={headerCss.header__header__text}>
          <h1>Education for all</h1>
          <p>A bank is a financial institution that accepts deposits from the <br/> public and creates credit. For all of your financial needs </p>
          <Button
            textName="Read More"
          />
        </div>
        <div className={headerCss.header__header__image}>
          <h1>gambar</h1>
        </div>
      </header>
    </div>
  );
}

export default Header