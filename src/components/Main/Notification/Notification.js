import classes from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={classes.section_wrapper}>
      <div className="container">
        <div className={classes.section_content}>
          <h2>Get notified on each updates.</h2>
          <div className={classes.input_box}>
            <input type="email" placeholder="Enter your email address" />
            <button>SUBSCRIBE</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            commodi veniam doloremque ducimus tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
