import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const DiaActual = () => {
  const getDiaDelAño = () => {
    const hoy = new Date();
    const inicioDelAño = new Date(hoy.getFullYear(), 0, 1);
    const diferencia = hoy - inicioDelAño;
    const unDia = 1000 * 60 * 60 * 24;
    return Math.floor(diferencia / unDia) + 1;
  };

  return getDiaDelAño();
};

const dia = DiaActual();

const steps = [
  {
    label: "Hora de María",
    description: `Si alguno de los asistentes tiene en sus manos La Hora de María, puede hacer la lectura correspondiente al día ${dia}`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 900, padding: 4, fontFamily: "inherit" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                ".MuiStepLabel-label": {
                  fontFamily: "inherit", // Hereda la tipografía del sitio
                  fontSize: "1rem", // Opcional: aseguras que el tamaño también sea consistente
                  color: "#A12330", // Hereda el color del contenedor o body
                  fontWeight: "bold",
                },
                ".Mui-active .MuiStepLabel-label": {
                  fontWeight: "bold", // Si quieres marcar la activa, también hereda tipografía
                },
                ".MuiStepIcon-root": {
                  color: "#bdbdbd", // color del disco (paso no activo, no completado)
                },
                ".MuiStepIcon-root.Mui-active": {
                  color: "#A12330", // color del disco del paso activo
                },
                ".MuiStepIcon-root.Mui-completed": {
                  color: "#26490f", // color del disco del paso completado
                },
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent sx={{ fontFamily: "inherit" }}>
              <h3>{step.description}</h3>
              <Box sx={{ mb: 2, typography: "inherit" }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, bgcolor: "#A12330" }}
                >
                  {index === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{
                    mt: 1,
                    mr: 1,
                    typography: "inherit",
                    color: "#A12330",
                    fontWeight: "bold",
                  }}
                >
                  ANTERIOR
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, fontFamily: "inherit" }}>
          <Typography sx={{ fontFamily: "inherit" }}>
            Ahora vamos a meditar los misterios del día
          </Typography>
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, typography: "inherit", bgcolor: "#A12330" }}
          >
            CONTINUAR
          </Button>
        </Paper>
      )}
    </Box>
  );
}
