import classes from "./ProgressBarItem.module.scss";

export default function ProgressBarItem({
  heading,
  children,
  icon,
  illustration,
}) {
  return (
    <div className={classes["progressBarItem"]}>
      <div className={classes["progressBarItem__middleIcon"]}>{icon}</div>
      <div className={classes["progressBarItem__textContent"]}>
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
      <div className={classes["progressBarItem__illustration"]}>
        {illustration}
      </div>
    </div>
  );
}
