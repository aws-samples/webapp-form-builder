// UI
import SpaceBetween from "@cloudscape-design/components/space-between";
// Components
import InputField from "./components/InputField";
import InputFieldWithRadio from "./components/InputFieldWithRadio";
import InputTextArea from "./components/InputTextArea";
import MultiSelectField from "./components/MultiSelectField";
import SelectField from "./components/SelectField";
import TilesSelect from "./components/TilesSelect";
import TilesWithSelect from "./components/TilesWithSelect";
import DatePickerField from "./components/DatePicker";
import DateInputField from "./components/DateInput";
//import PlayerCardAttachEntries from "./components/PlayerCardAttachEntries";
import { FormConfigItem } from "./Forms";

/*
 * FormBuilder can be used:
 *  -in isolation to render read-only components for displaying data in a view.
 *  -in a form to capture input data for the backend. If you need to build a form - use the FormElement component. This will use the FormBuilder for you.
 */

type FormBuilderProps = {
  formConfig: FormConfigItem[];
  formData: any;
  setFormData: any;
  editing: boolean;
  helpPanelFn: (index: number) => void;
};

const FormBuilder = ({
  formConfig,
  formData,
  setFormData,
  editing,
  helpPanelFn,
}: FormBuilderProps) => {
  const handleFieldChange = (fieldName, fieldValue, extraField) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
      ...(extraField && { [extraField]: fieldValue }), // Add extra field if provided
    });
  };

  const renderField = (field: FormConfigItem) => {
    const commonProps = {
      containerName: field.containerName,
      key: field.name,
      value: formData[field.name] || "",
      onChange: (value) => handleFieldChange(field.name, value, null),
      readOnly: !editing,
    };

    switch (field.inputType) {
      case "SELECT":
        return <SelectField {...field} {...commonProps} />;
      case "INPUT":
        return <InputField {...field} {...commonProps} />;
      case "TILES":
        return <TilesSelect {...field} {...commonProps} />;
      case "TILES_WITH_SELECT":
        return (
          <TilesWithSelect
            {...commonProps}
            {...field}
            secondValue={formData[field.secondName] || ""}
            onSecondChange={(value) =>
              handleFieldChange(field.secondName, value, field.secondName)
            }
          />
        );
      case "TEXTAREA":
        return (
          <InputTextArea
            {...commonProps}
            {...field}
            helpPanelFn={helpPanelFn}
          />
        );
      case "MULTISELECT":
        return <MultiSelectField {...commonProps} {...field} />;
      case "INPUT_WITH_RADIO":
        return (
          <InputFieldWithRadio
            {...commonProps}
            {...field}
            secondValue={formData[field.secondName] || ""}
            onSecondChange={(value) =>
              handleFieldChange(field.secondName, value, field.secondName)
            }
          />
        );
      case "DATE_PICKER":
        return <DatePickerField {...commonProps} {...field} />;
      case "DATE_INPUT":
        return <DateInputField {...commonProps} {...field} />;
    }
  };

  return (
    <SpaceBetween size="s">
      {formConfig.map((field) => renderField(field))}
    </SpaceBetween>
  );
};

export default FormBuilder;
