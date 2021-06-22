import Header from "layouts/header_layout.jsx";

const LayoutWrapper = (props) => {
  return (
    <>
      <Header />
      <main className={"wrapper"}>{props.children}</main>
    </>
  );
};

export default LayoutWrapper;
