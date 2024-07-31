// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import DateInput from "@cloudscape-design/components/date-input";
import FormField from "@cloudscape-design/components/form-field";
import { FieldProps } from "../Forms";

type InputFieldProps = FieldProps & {};

const DateInputField = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  containerName,
}: InputFieldProps) => {
  return (
    <Container header={<Header variant="h2">{containerName}</Header>}>
      <FormField label={label} description={description}>
        <DateInput
          onChange={({ detail }) => onChange(detail.value)}
          value={value}
          disabled={readOnly}
          placeholder="YYYY/MM/DD"
        />
      </FormField>
    </Container>
  );
};

export default DateInputField;
