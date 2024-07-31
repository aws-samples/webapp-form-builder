// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import DatePicker from "@cloudscape-design/components/date-picker";
import { FieldProps } from "../Forms";

type DatePickerProps = FieldProps & {};

const DatePickerField = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  containerName,
}: DatePickerProps) => {
  return (
    <Container header={<Header variant="h2">{containerName}</Header>}>
      <FormField
        label={label}
        description={description}
      >
        <DatePicker
          onChange={({ detail }) => onChange(detail.value)}
          value={value}
          disabled={readOnly}
          openCalendarAriaLabel={(selectedDate) =>
            "Choose date" +
            (selectedDate ? `, selected date is ${selectedDate}` : "")
          }
          placeholder="YYYY/MM/DD"
        />
      </FormField>
    </Container>
  );
};

export default DatePickerField;
