import Forms from "../layouts/components/Forms";
import Styles from "../styles/CreateTimePage.module.css";

function CreateTimePage() {
  return (
    <div className={Styles.mainCreatePage}>
      <div className={Styles.leftCreateTime}></div>
      <div className={Styles.forms}>
        <Forms />
      </div>
      <div className={Styles.rightCreateTime}></div>
    </div>
  );
}

export default CreateTimePage;
