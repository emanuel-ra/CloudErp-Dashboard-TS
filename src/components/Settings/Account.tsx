import { Card, Title } from "@tremor/react";
import { useTranslation } from "react-i18next";
export const SettingAccount = () => {
  const { t } = useTranslation();
  return (
    <Card id="settingAccountSection">
      <Title>{t("settings.account")}</Title>
    </Card>
  );
};
