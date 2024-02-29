import Forms from "../layouts/components/Forms";

import Styles from "../styles/CreateTimePage.module.css";

import addTime from "../assets/public/images/AddTime.svg";
import backIcon from "../assets/public/images/back-icon.png";

function CreateTimePage() {
  return (
    <div className={Styles.mainCreatePage}>
      <div className={Styles.leftCreateTime}>
        <img src={addTime} alt="add time image" />
      </div>
      <div className={Styles.forms}>
        <Forms />
      </div>
      <div className={Styles.rightCreateTime}>
        <img src={backIcon} alt="back ico image" className={Styles.img1} />
        <img src={backIcon} alt="back ico image" className={Styles.img2} />
        <img src={backIcon} alt="back ico image" className={Styles.img3} />
        <img src={backIcon} alt="back ico image" className={Styles.img4} />
        <img src={backIcon} alt="back ico image" className={Styles.img5} />
      </div>
    </div>
  );
}

export default CreateTimePage;
