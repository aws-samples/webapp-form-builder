// UI
import Container from "@cloudscape-design/components/container";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Select, { SelectProps } from "@cloudscape-design/components/select";
import { FieldProps } from "../Forms";

type SelectFieldProps = FieldProps & {
  options: SelectProps.Options;
};

const SelectField = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  options,
  containerName,
}: SelectFieldProps) => {
  return (
    <Container header={<Header variant="h2">{containerName}</Header>}>
      <FormField label={label} description={description}>
        <Select
          selectedOption={value}
          onChange={({ detail }) => onChange(detail.selectedOption)}
          options={options}
          placeholder="Select an option"
          disabled={readOnly}
        />
      </FormField>
    </Container>
  );
};

export default SelectField;
