import Styles from "../styles/ShowTimesPage.module.css";

import TimeCard from "../layouts/components/TimeCard";

function ShowTimesPage() {
  return (
    <div className={Styles.mainShowTimes}>
      <div className={Styles.cards}>
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
      </div>
      <div className={Styles.topShowTimes}></div>
    </div>
  );
}

export default ShowTimesPage;
