// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import RadioGroup, {
  RadioGroupProps,
} from "@cloudscape-design/components/radio-group";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { FieldProps } from "../Forms";

type InputFieldWithRadioProps = FieldProps & {
  options: RadioGroupProps.RadioButtonDefinition[];
  secondLabel: string;
  secondValue: any;
  onSecondChange: (any) => void;
};

const InputFieldWithRadio = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  containerName,
  options,
  secondLabel,
  secondValue,
  onSecondChange,
}: InputFieldWithRadioProps) => {
  return (
    <Container header={<Header variant="h2">{containerName}</Header>}>
      <SpaceBetween size="s">
        <FormField label={label} description={description}>
          <Input
            onChange={({ detail }) => onChange(detail.value)}
            value={value}
            disabled={readOnly}
          />
        </FormField>
        <FormField label={secondLabel}>
          <RadioGroup
            value={secondValue}
            onChange={({ detail }) => onSecondChange(detail.value)}
            items={options}
          />
        </FormField>
      </SpaceBetween>
    </Container>
  );
};

export default InputFieldWithRadio;
