// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";

function Home(): JSX.Element {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t("common.hello")}</h1>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
            <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
        </div>
    );
}

export default Home;
