import { FormConfigItem } from "./Forms";

// Sample Data
export const defaultFormData = {
  timeOfDay: {
    label: "Morning",
    value: "morning"
  },
  firstName: "John",
  tiles: "evening",
  tilesWithSelect: "no",
  colours: {
    label: "Orange",
    value: "orange",
    description: "An orange option"
  },
  textArea: "this is a sentance in the text area box",
  options: [
    {
      value: "pink",
      label: "Pink"
    },
    {
      value: "green",
      label: "Green"
    }
  ],
  surname: "Doe",
  radioNoYes: "no",
  datePicker: "2024-07-26"
}

// Sample Form Options
export const selectOptions = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Night", value: "night" },
]

export const multiSelectOptions = [
  { label: "Red", value: "red", description: "A red option" },
  { label: "Blue", value: "blue", description: "A blue option" },
  { label: "Green", value: "green", description: "A green option" },
  { label: "Yellow", value: "yellow", description: "A yellow option" },
  { label: "Purple", value: "purple", description: "A purple option" },
  { label: "Orange", value: "orange", description: "An orange option" },
  { label: "Pink", value: "pink", description: "A pink option" },
  { label: "Brown", value: "brown", description: "A brown option" },
  { label: "Black", value: "black", description: "A black option" },
]

export const simpledBinaryOption = [
  { label: "No", value: "no" },
  { label: "Yes", value: "yes" }  
]

export const detailedBinaryOption = [
  { label: "No", value: "no", description: "Disable dropdown" },
  { label: "Yes", value: "yes", description: "Enable dropdown" }  
]

// Solution forms
export const exampleForm: FormConfigItem[] = [
  {
    inputType: "SELECT",
    name: "timeOfDay",
    containerName: "Select - containerName",
    description: "description - This is a 'SELECT' example",
    label: "Example - label",
    options: selectOptions,
  },
  {
    inputType: "INPUT",
    type: "text",
    name: "firstName",
    containerName: "First Name",
    description: "This is a 'INPUT' example",
    label: "Label",
    helpPanelIndex: 0,
  },
  {
    inputType: "TILES",
    name: "tiles",
    containerName: "Tiles",
    description: "This is a 'TILES' example",
    label: "Example label",
    helpPanelIndex: 0,
    options: selectOptions
  },
  {
    inputType: "TILES_WITH_SELECT",
    name: "tilesWithSelect",
    containerName: "Tiles with Select",
    description: "This is a 'TILES_WITH_SELECT' example",
    label: "Example label",
    helpPanelIndex: 0,
    options: detailedBinaryOption,
    secondName: "colours",
    secondLabel: "Colours",
    secondOptions: multiSelectOptions,
  },
  {
    inputType: "TEXTAREA",
    name: "textArea",
    containerName: "Text Area",
    description: "This is a 'TEXTAREA' example",
    label: "Detail Label",
    helpPanelIndex: 0,
  },
  {
    containerName: "Additional Options",
    label: "Options",
    name: "options",
    inputType: "MULTISELECT",
    description: "Select some options",
    options: multiSelectOptions,
  },
  {
    inputType: "INPUT_WITH_RADIO",
    name: "surname",
    type: "text",
    containerName: "Surname",
    description: "Enter your surname",
    label: "Detail Label",
    helpPanelIndex: 0,
    secondName: "radioNoYes",
    secondLabel: "Can we contact you?",
    options: simpledBinaryOption,
  },
  {
    inputType: "DATE_PICKER",
    name: "datePicker",
    containerName: "Date Picker",
    description: "This is a 'DATE_PICKER' example",
    label: "Example label",
  },
];

export const basicForm: FormConfigItem[] = [
  {
    inputType: "INPUT",
    type: "text",
    name: "firstName",
    containerName: "First Name",
    description: "Enter your first name",
    label: "Label",
  },
  {
    inputType: "INPUT",
    type: "text",
    name: "surname",
    containerName: "Surname",
    description: "Enter your surname",
    label: "Detail Label",
  },
  {
    inputType: "DATE_INPUT",
    name: "birthday",
    containerName: "Date Input",
    description: "Enter your birthday",
    label: "Example Label",
  },
]; 