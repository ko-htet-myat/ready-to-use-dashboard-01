import { useTranslation } from "react-i18next";

export default function CreateEmployeePage() {
  const { t } = useTranslation();
  return (
    <div>
      CreateEmployeePage
      <p>{t("common.welcome")}</p>
    </div>
  );
}
