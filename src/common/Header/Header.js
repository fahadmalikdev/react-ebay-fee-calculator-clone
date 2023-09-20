import "./Header.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    const languageOptions = [
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
    ];

    React.useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="custom-select-container">
            <select
                id="languageSelect"
                onChange={(e) => handleChangeLanguage(e.target.value)}
                value={i18n.language}
                className="custom-select"
            >
                {languageOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Header;
