import React from "react";
// UI
import Alert from "@cloudscape-design/components/alert";

type AlertType = "info" | "success" | "warning" | "error";

type BannerAlertProps = {
  type: AlertType;
  message: string;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BannerAlert = ({
  type,
  message,
  setShowAlert,
}: BannerAlertProps) => {
  return (
    <Alert
      dismissible
      statusIconAriaLabel={type}
      type={type}
      onDismiss={() => setShowAlert(false)}
    >
      {message}
    </Alert>
  );
};
