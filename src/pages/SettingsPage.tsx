import { Card, Text } from "@tremor/react";
import { NavSettings } from "../components/Settings/NavSettings";
import { SettingLanguage } from "../components/Settings/Language";
import { SettingAccount } from "../components/Settings/Account";
export const SettingsPage = () => {
  return (
    <>
      <div className="flex gap-2">
        <Card className="w-1/4">
          <Text>Settings</Text>
          <NavSettings />
        </Card>
        <Card className="grow flex flex-col gap-y-4">
          <SettingAccount />
          <SettingLanguage />
        </Card>
      </div>
    </>
  );
};
