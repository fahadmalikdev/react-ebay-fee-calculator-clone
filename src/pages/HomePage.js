import React from "react";
import homeLayout from "../layouts/HomeLayout";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <h1 className="app-heading">{t("HomePageheader.heading")}</h1>
      <p className="app-sub-heading">{t("HomePageheader.subHeading")}</p>
      <p className="app-sub-heading">{t("HomePageheader.subHeadingSecond")}</p>
    </>
  );
};

export default homeLayout(HomePage);
