import React from "react";
import homeLayout from "../layouts/HomeLayout";
import { useTranslation } from "react-i18next";
import usFlag from "../assets/images/flags/small-flag/american-small.svg";
import UsaEbayCalculator from "../components/UsaEbayCalculator";

const HomePage = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <h1 className="app-heading">
        <img
          className="app-logo"
          src={usFlag}
          width={55}
          height={55}
          alt="US Flag"
        />
        <span className="app-heading-cal">{t("UsaEbayCalculatorPageheader.heading")}</span>
      </h1>
      <p className="app-sub-heading one">
        {t("UsaEbayCalculatorPageheader.subHeading")}
      </p>
      <p className="app-sub-heading two">
        {t("UsaEbayCalculatorPageheader.subHeadingSecond")}
      </p>
      <div>
        <UsaEbayCalculator />
      </div>
    </>
  );
};

export default homeLayout(HomePage);
