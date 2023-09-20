import React from "react";
import Header from "../common/Header/Header";
import MainMenu from "../common/MainMenu/MainMenu";
import companyLogo from "../assets/images/logo.jpg";
import Footer from "../common/Footer/Footer";

const homeLayout = (ChildComponent) => {
  class HomeLayout extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      return (
        <>
          <div className="app-container">
            <div className="app-header">
              <Header />
            </div>
            <div>
              <img
                className="app-logo"
                src={companyLogo}
                width={400}
                height={70}
                alt="Company Logo"
              />
            </div>
            <div className="mb-5">
              <MainMenu />
            </div>
            <div className="app-child-content">
              <ChildComponent {...this.props} />
            </div>
            <div className="app-footer">
              <Footer />
            </div>
          </div>
        </>
      );
    }
  }

  return HomeLayout;
};

export default homeLayout;
