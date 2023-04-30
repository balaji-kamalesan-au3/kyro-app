import { InputAdornment, TextField } from "@mui/material";

interface I_InputField {
    label: string;
    InputProps: JSX.Element
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value : string
  }
  
  export function ModuleInputField (props:I_InputField) {
    return (
      <TextField
        id="input-with-icon-textfield"
        label={props.label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.InputProps}
            </InputAdornment>
          ),
        }}
        onChange={props.onChange}
        value={props.value}
      />
    )
  }