// UI
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Textarea from "@cloudscape-design/components/textarea";
import TextContent from "@cloudscape-design/components/text-content";
import Link from "@cloudscape-design/components/link";
import { FieldProps } from "../Forms";

type InputTextAreaProps = FieldProps & {
  helpPanelFn: (index: number) => void;
  helpPanelIndex: number;
};

const InputTextArea = ({
  label,
  value,
  onChange,
  readOnly,
  description,
  containerName,
  helpPanelFn,
  helpPanelIndex,
}: InputTextAreaProps) => {
  if (readOnly) {
    return (
      <Container
        header={
          <Header
            variant="h2"
            info={
              <Link
                variant="info"
                onFollow={() => {
                  helpPanelFn(helpPanelIndex);
                }}
              >
                Info
              </Link>
            }
          >
            {containerName}
          </Header>
        }
      >
        <TextContent>{value}</TextContent>
      </Container>
    );
  } else {
    return (
      <Container
        header={
          <Header
            variant="h2"
            info={
              <Link
                variant="info"
                onFollow={() => {
                  helpPanelFn(helpPanelIndex);
                }}
              >
                Info
              </Link>
            }
          >
            {containerName}
          </Header>
        }
      >
        <FormField label={label} description={description}>
          <Textarea
            onChange={({ detail }) => onChange(detail.value)}
            value={value}
          />
        </FormField>
      </Container>
    );
  }
};

export default InputTextArea;
