import Styles from "../styles/ViewEmployeeTime.module.css";

import TimeCard from "../layouts/components/TimeCard";

function ViewEmployeeTime() {
  return (
    <div className={Styles.mainViewTime}>
      <div className={Styles.times}>
        <TimeCard enableEdit />
        <TimeCard enableEdit />
        <TimeCard enableEdit />
      </div>
    </div>
  );
}

export default ViewEmployeeTime;
