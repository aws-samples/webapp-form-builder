// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Tiles, { TilesProps } from "@cloudscape-design/components/tiles";
import { FieldProps } from "../Forms";

type TilesSelectProps = FieldProps & { options: TilesProps.TilesDefinition[] };

const TilesSelect = ({
  value,
  options,
  label,
  onChange,
  readOnly,
  description,
  containerName,
}: TilesSelectProps) => {
  if (readOnly) {
    return (
      <Container header={<Header variant="h2">{containerName}</Header>}>
        <FormField label={label} description={description} stretch={false}>
          <Tiles
            items={options}
            value={value}
            onChange={({ detail }) => {
              onChange(detail.value);
            }}
            readOnly
          />
        </FormField>
      </Container>
    );
  } else {
    return (
      <Container header={<Header variant="h2">{containerName}</Header>}>
        <FormField label={label} description={description} stretch={false}>
          <Tiles
            items={options}
            value={value}
            onChange={({ detail }) => {
              onChange(detail.value);
            }}
          />
        </FormField>
      </Container>
    );
  }

};

export default TilesSelect;
