import s from "./notification.css";

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

export default Notification;
