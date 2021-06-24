import Header from "layouts/header_layout.jsx";

const LayoutWrapper = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default LayoutWrapper;
