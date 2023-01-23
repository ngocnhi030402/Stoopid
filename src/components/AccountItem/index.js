import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ab00cd898135c96c14956733d864804~c5_100x100.jpeg?x-expires=1674633600&x-signature=CUW2ICVdB1TEmDgUbcnfMpaTfx4%3D"
        alt="Nhiii"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>Ngoc Nhi</h4>
        <span className={cx("username")}>nngocnhiii</span>
        <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
      </div>
    </div>
  );
}

export default AccountItem;
