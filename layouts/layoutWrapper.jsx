import Header from "layouts/header_layout.jsx";
import Top from "components/top"
const LayoutWrapper = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Top />
    </>
  );
};

export default LayoutWrapper;
