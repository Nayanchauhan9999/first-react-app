import React from "react";
import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const InputField = ({ label, rows }) => {
  return (
    <>
      <TextField sx={{ my: 1, width: 1 }} label={label} rows={rows} multiline />
    </>
  );
};

InputField.defaultProps = {
  rows: 1,
};

const FormHeading = ({ text, variant }) => {
  return (
    <Typography variant={variant} component={variant} sx={{ color: "grey" }}>
      {text}
    </Typography>
  );
};

const GenricBtn = ({variant,btnName})=>{
    return (
      <>
        <Button variant={variant} sx={{m:1}}>{btnName}</Button>
      </>
    )
}

function FormChallenge() {
  return (
    <Box sx={{ width: "50%", mx: "auto" }}>
      <FormHeading variant="h3" text="Form 1" />
      <Box>
        <InputField label="Team Name" />
        <InputField label="Description" rows={5} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormHeading variant="h3" text="Form 2" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: 1,
            borderRadius: 1,
            px: 1,
            cursor: "pointer",
          }}
        >
          <AddCircleIcon sx={{ m: 1, fontSize: 35 }} />
          <FormHeading variant="h5" text="ADD MEMBER" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "4fr 4fr 1fr",
          gridGap: 10,
        }}
      >
        <InputField label="Full Name" />
        <InputField label="Email" />
        <Box sx={{display:"flex",alignItems: "center", justifyContent:"center"}}>
        <RemoveCircleIcon sx={{fontSize:35, cursor:"pointer"}}/>
        </Box>
      </Box>
      <Box>
        <GenricBtn variant="contained" btnName="Submit"/>
        <GenricBtn variant="outlined" btnName="Reset"/>
      </Box>
    </Box>
  );
}
export default FormChallenge;
