import React, { useState } from "react";
// Components
import FormElement from "../../../forms/FormElement";
import FormBuilder from "../../../forms/FormBuilder";
// UI Library
import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
// Data
import { defaultFormData, exampleForm } from "../../../forms/form-configs";

const FormContent = ({ helpPanelFn }) => {
  // State management
  const [formData, setFormData] = useState({ tilesWithSelect: "no" });
  const [editing, setEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("info");

  // Helper Functions
  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  // Form submission function
  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertType("success");
    setShowAlert(true);
    console.log(`Form from state:`, formData);
  };

  // Form submission function
  const updateForm = (e) => {
    e.preventDefault();
    setAlertType("success");
    setShowAlert(true);
    console.log(`Form from state:`, formData);
  };

  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          actions={
            <SpaceBetween size="xs" direction="horizontal">
              <Button onClick={toggleEditing} variant="normal">
                Edit
              </Button>
            </SpaceBetween>
          }
        >
          Example Form
        </Header>
      }
    >
      <SpaceBetween size="s">
        {editing ? (
          <FormElement
            formConfig={exampleForm}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            mutateFn={updateForm}
            cancelUrl="/entries"
            editing={editing}
            helpPanelFn={helpPanelFn}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            alertType={alertType}
          />
        ) : (
          <>
            <FormBuilder
              formConfig={exampleForm}
              formData={formData}
              setFormData={setFormData}
              editing={false}
              helpPanelFn={helpPanelFn}
            />
          </>
        )}
      </SpaceBetween>
    </ContentLayout>
  );
};

export default FormContent;
