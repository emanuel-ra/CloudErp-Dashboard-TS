import { Card } from "../components/Card";
import { NavSettings } from "../components/Settings/NavSettings";
import { SettingLanguage } from "../components/Settings/Language";
import { SettingAccount } from "../components/Settings/Account";
export const SettingsPage = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Card css="w-1/5">
          <h1>Settings</h1>
          <NavSettings />
        </Card>
        <Card css="grow flex flex-col gap-y-4">
          <SettingAccount />
          <SettingLanguage />
        </Card>
      </div>
    </>
  );
};
