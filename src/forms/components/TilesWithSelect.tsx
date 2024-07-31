import React, { useState } from "react";
// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Tiles, { TilesProps } from "@cloudscape-design/components/tiles";
import Select, { SelectProps } from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { FieldProps } from "../Forms";

type TilesWithSelectProps = FieldProps & {
  options: TilesProps.TilesDefinition[];
  secondLabel: string;
  secondValue: any;
  secondOptions: SelectProps.Options;
  onSecondChange: (any) => void;
};

const TilesWithSelect = ({
  label,
  value,
  readOnly,
  description,
  options,
  onChange,
  secondLabel,
  secondOptions,
  secondValue,
  containerName,
  onSecondChange,
}: TilesWithSelectProps) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <Container header={<Header variant="h2">{containerName}</Header>}>
      <SpaceBetween size="s">
        <FormField label={label} description={description} stretch={false}>
          <Tiles
            items={options}
            value={value}
            onChange={({ detail }) => {
              onChange(detail.value);
              setDropDown(!dropDown);
            }}
          />
        </FormField>
        {dropDown && (
          <FormField label={secondLabel}>
            <Select
              selectedOption={secondValue}
              onChange={({ detail }) => onSecondChange(detail.selectedOption)}
              options={secondOptions}
              placeholder="Select an option"
              disabled={readOnly}
            />
          </FormField>
        )}
      </SpaceBetween>
    </Container>
  );
};

export default TilesWithSelect;
