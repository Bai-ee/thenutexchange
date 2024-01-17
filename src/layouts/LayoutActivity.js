import Aos from "aos";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import HeaderActivity from "./HeaderActivity";
const LayoutActivity = ({ children, headerExtaClass }) => {
  useEffect(() => {
    Aos.init();
    niceSelect();
  }, []);
  return (
    <Fragment>
 
      <HeaderActivity extraClass={headerExtaClass} />
      {children}

    </Fragment>
  );
};
export default LayoutActivity;
