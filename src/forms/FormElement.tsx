import React from "react";
import useLink from "../helpers/UseLink";
// UI
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
// Components
import FormBuilder from "./FormBuilder";
import { FormConfigItem, HelpPanelFn } from "./Forms";
import { BannerAlert } from "./components/BannerAlert";

type FormElementProps = {
  formConfig: FormConfigItem[];
  formData: any;
  setFormData: any;
  handleSubmit: any;
  mutateFn: any;
  cancelUrl: string;
  editing: boolean;
  helpPanelFn: HelpPanelFn;
  showAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  alertType: string;
};

const FormElement = ({
  formConfig,
  formData,
  setFormData,
  handleSubmit,
  mutateFn,
  cancelUrl,
  editing,
  helpPanelFn,
  showAlert,
  setShowAlert,
  alertType,
}: FormElementProps) => {
  const { handleFollow } = useLink();
  return (
    <form onSubmit={handleSubmit}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button href={cancelUrl} variant="link" onFollow={handleFollow}>
              Cancel
            </Button>
            <Button formAction="submit" variant="primary" disabled={!editing}>
              {mutateFn.isPending ? "Saving..." : "Save"}
            </Button>
          </SpaceBetween>
        }
      >
        <SpaceBetween size="s">
          <FormBuilder
            formConfig={formConfig}
            formData={formData}
            setFormData={setFormData}
            editing={editing}
            helpPanelFn={helpPanelFn}
          />
          {showAlert && (
            <BannerAlert
              type={alertType}
              message={
                alertType === "success"
                  ? "Successfully saved data"
                  : "Error saving data"
              }
              setShowAlert={setShowAlert}
            />
          )}
        </SpaceBetween>
      </Form>
    </form>
  );
};

export default FormElement;
