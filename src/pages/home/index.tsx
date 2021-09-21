// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@components/shared/button";
import { ButtonColor } from "@components/shared/button/button.const";

function Home(): JSX.Element {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t("common.hello")}</h1>
            <Button color={ButtonColor.primary} onClick={() => i18n.changeLanguage("en")}>
                English
            </Button>
            <Button color={ButtonColor.tertiary} onClick={() => i18n.changeLanguage("es")}>
                Spanish
            </Button>
        </div>
    );
}

export default Home;
