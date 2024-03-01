import Styles from "../../styles/Message.module.css";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Message({ text, type, time }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setVisible(false);
      return;
    }

    setVisible(true);
    if (time) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, time);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, time]);

  return (
    <>
      {visible && (
        <div className={`${Styles.message} ${Styles[type]}`}>{text}</div>
      )}
    </>
  );
}

export default Message;
