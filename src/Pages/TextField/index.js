import React from "react";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const InputTextField = ({
  id = "text-feild",
  InputProps = "",
  className = "",
  inputRef,
  name,
  label,
  value,
  onChange,
  helperText,
  onFocus,
  onBlur,
  error = false,
  autoComplete = "on",
  size = "medium",
  type = "text",
  disabled = false,
  placeholder = "",
  multiline = false,
  variant,
  rows = 1,
  rowsMax = 1,
  startAdornment = null,
  endAdornment = null,
  inputProps = {},
  fullWidth = true,
  inputLabelProps,
  color,
  sx,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      variant={variant}
      inputRef={inputRef}
      rowsMax={rowsMax}
      color={color}
      autoComplete={autoComplete}
      id={id}
      key={id}
      type={type}
      sx={sx}
      multiline={multiline}
      rows={rows}
      InputLabelProps={{
        shrink: true,
      }}
      className={`custom-text-field ${className}`}
      label={label}
      // disableUnderline={true}
      onFocus={onFocus && onFocus}
      onBlur={onBlur && onBlur}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      name={name}
      error={error}
      helperText={helperText}
      disabled={disabled}
      inputProps={inputProps}
      InputProps={{
        disableUnderline: true,
        startAdornment: startAdornment,
        endAdornment: endAdornment,
      }}
    />
  );
};

const RedditTextField = styled(InputTextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default RedditTextField;
