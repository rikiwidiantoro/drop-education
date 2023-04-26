import Button from "../Button/Button.component";
import MainCard from "../MainCard/MainCard.component";
import BoxAdmission from "../BoxAdmission/BoxAdmission.component";

import mainCss from "./Main.module.css";

function Main() {
  return (
    <div className={mainCss.main}>
      {/* box admission */}
      <BoxAdmission />

      {/* quotes */}
      <section className={mainCss.main__quotes}>
        <div className={mainCss.main__quotes__text}>
          <p><em>"Before Coursecity, I was working two minimum wage jobs. Now, <br/> & new life!" I learned most of my programming skills and <br/> through self-study and the material available.</em></p>
          <p className={mainCss.main__quotes__text__author}>Stephanie Magion</p>
        </div>
      </section>

      {/* welcome1 */}
      <section className={mainCss.main__welcome1} id="services">
        <div className={mainCss.main__welcome1__image}>
          <h1>gambar</h1>
        </div>
        <div className={mainCss.main__welcome1__text}>
          <h1>Welcome to Eduin university, Constant self-improvement as an instructor.</h1>
          <p>Education City is initiative of our Qatar Foundation for Education, Science and Community Development. Education City is initiative of our Qatar Foundation for Education, Science and Community Development.</p>
          <p>Education City is initiative of our Qatar Foundation for Education, Science and Community Development. Education City is initiative of our Qatar Foundation for Education.</p>
          <Button
            textName="Get started"
          />
        </div>
      </section>

      {/* welcome2 */}
      <section className={mainCss.main__welcome2} id="product">
        <div className={mainCss.main__welcome2__text}>
          <h1>Welcome to Eduin university, Constant self-improvement as an instructor.</h1>
          <p>Education City is initiative of our Qatar Foundation for Education, Science and Community Development. Education City is initiative of our Qatar Foundation for Education, Science and Community Development.</p>
          <p>Education City is initiative of our Qatar Foundation for Education, Science and Community Development. Education City is initiative of our Qatar Foundation for Education.</p>
          <Button
            textName="Get started"
          />
        </div>
        <div className={mainCss.main__welcome2__image}>
          <h1>gambar</h1>
        </div>
      </section>

      {/* cards */}
      <section className={mainCss.main__cards}  id="contact">
        <MainCard
          title="Global Student"
        />
        <MainCard 
          title="Success Rate"
        />
        <MainCard
          title="Education Services"
        />
      </section>

      {/* footer */}
      <footer className={mainCss.main__footer}>
        <div>
          <p>&copy; 2019 <span>Roy Design</span> All Rights Reserved</p>
        </div>
        <div>
          <a href="#about">About Company</a>
          <a href="#about">Privacy Policy</a>
          <a href="#about">Help Center</a>
          <a href="#about">Terms</a>
          <a href="#about">Site Map</a>
        </div>
      </footer>
    </div>
  );
}

export default Main;