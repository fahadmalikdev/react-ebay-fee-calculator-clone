import React from "react";
import homeLayout from "../layouts/HomeLayout";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <h1 className="app-heading">{t('header.message')}</h1>
    </>
  );
}

export default homeLayout(HomePage);
