import cardCss from "./MainCard.module.css";

function MainCard({ title }) {
  return (
    <div className={cardCss.card}>
      <div></div>
      <h3>{ title }</h3>
      <p>Education City is initiative of our Qatar Foundation for Education, Science and Community Development.</p>
    </div>
  );
}

export default MainCard;