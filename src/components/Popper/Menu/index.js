import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles);

function Menu({ children }) {
  return (
    <Tippy
      interactive
      // visible
      placement="bottom-end"
      render={(attrs) => (
        // menu-items
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h2>Menu Items</h2>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
