import boxCss from "./BoxAdmission.module.css";

function BoxAdmission() {
  return (
    <div className={boxCss.box}>
      <h3>Apply for Admission</h3>
      <hr/>
      <p>Make it more simple!</p>
      <input type="text" placeholder="Enter your email..." />
      <button>share</button>
    </div>
  );
}

export default BoxAdmission;