// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { FieldProps } from "../Forms";

type InputFieldProps = FieldProps & {};

const InputField = ({
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
        <Input
          onChange={({ detail }) => onChange(detail.value)}
          value={value}
          disabled={readOnly}
        />
      </FormField>
    </Container>
  );
};

export default InputField;
