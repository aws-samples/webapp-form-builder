export type GenericFormProps<T, VT> = {
  data: T;
  label: string;
  value: string;
  onChange: (value: VT) => void;
  readOnly: boolean;
  description: string;
  containerName: string;
  helpPanelIndex: number;
};
export type GenericForm<T, VT> = (
  props: GenericFormProps<T, VT>,
) => JSX.Element;

export type FieldProps = {
  label: string;
  value: any;
  onChange: (any) => void;
  readOnly: boolean;
  description: string;
  containerName: string;
};

// Types
// export type InputStatus = "INPUT" | "SELECT";

type Option = { value: string; label: string; description?: string };

export type FormConfigItem = {
  name: string;
  containerName: string;
  helpPanelIndex?: number;
  description: string;
  label: string;
} & (
  | {
      inputType: "TILES";
      options: Option[];
    }
  | {
      inputType: "TILES_WITH_SELECT";
      options: Option[];
      secondName: string;
      secondLabel: string;
      secondOptions: Option[];
    }
  | {
      inputType: "SELECT";
      options: Option[];
    }
  | {
      inputType: "INPUT_WITH_RADIO";
      type: "text";
      secondName: string;
      secondLabel: string;
      options: Option[];
    }
  | {
      inputType: "INPUT";
      type: "text";
    }
  | {
      inputType: "TEXTAREA";
      helpPanelIndex: number;
    }
  | {
      inputType: "MULTISELECT";
      options: Option[];
    }
  | {
      inputType: "DATE_PICKER";
    }
  | {
      inputType: "DATE_INPUT";
  }
);

export type HelpPanelFn = (index: number) => void;