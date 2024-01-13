import { Card } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { CalculatorIcon } from "@heroicons/react/outline";
import { Languages } from "../../utils/languaje";

export const SettingLanguage = () => {
  return (
    <Card>
      <div className="max-w-sm mx-auto space-y-6">
        <Select className="capitalize">
          {Languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              {language.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    </Card>
  );
};
