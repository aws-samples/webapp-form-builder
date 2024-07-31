// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Multiselect from "@cloudscape-design/components/multiselect";
import TokenGroup from "@cloudscape-design/components/token-group";
import { FieldProps } from "../Forms";
import { SelectProps } from "@cloudscape-design/components/select/interfaces";

type MultiSelectFieldProps = FieldProps & {
  options: SelectProps.Options;
};

const MultiSelectField = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  options,
  containerName,
}: MultiSelectFieldProps) => {
  const selectedOptions =
    Array.isArray(value) && !value.includes(undefined) ? value : [];

  if (readOnly) {
    const lockedOptions = selectedOptions.map((i) => {
      return {
        value: i.value,
        label: i.label,
        disabled: readOnly,
      };
    });
    return (
      <Container header={<Header variant="h2">{containerName}</Header>}>
        <TokenGroup items={lockedOptions} />
      </Container>
    );
  } else {
    return (
      <Container header={<Header variant="h2">{containerName}</Header>}>
        <FormField label={label} description={description}>
          <Multiselect
            selectedOptions={selectedOptions}
            onChange={({ detail }) => {
              const selectedValues = detail.selectedOptions.map((option) => ({
                value: option.value!,
                label: option.label!,
              }));
              onChange(selectedValues);
            }}
            options={options}
            placeholder="Select options"
            disabled={readOnly}
          />
        </FormField>
      </Container>
    );
  }
};

export default MultiSelectField;
