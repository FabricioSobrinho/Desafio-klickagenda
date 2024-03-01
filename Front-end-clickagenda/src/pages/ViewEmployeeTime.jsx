import Styles from "../styles/ViewEmployeeTime.module.css";

import TimeCard from "../layouts/components/TimeCard";
import { useParams } from "react-router-dom";

function ViewEmployeeTime() {
  const { username } = useParams();

  console.log(username);
  return (
    <div className={Styles.mainViewTime}>
      <div className={Styles.times}>
        <TimeCard enableEdit />
      </div>
    </div>
  );
}

export default ViewEmployeeTime;
