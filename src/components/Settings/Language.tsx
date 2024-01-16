import { Card, Title } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { Languages } from "../../utils/languaje";
import { useLanguageStore } from "../../stores/language";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import i18n from "../../setup/i18next";

export const SettingLanguage = () => {
  const language = useLanguageStore((state) => state.lang);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Card id="settingLanguageSection">
      <Title className="capitalize ">{t("language")}</Title>
      <div className="space-y-6">
        <Select
          className="capitalize"
          defaultValue={language}
          onValueChange={(e) => {
            setLanguage(e);
          }}
        >
          {Languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              {t(language.name)}
            </SelectItem>
          ))}
        </Select>
      </div>
    </Card>
  );
};
