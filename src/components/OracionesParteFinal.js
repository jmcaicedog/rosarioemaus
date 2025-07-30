import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

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
    label: "Salve",
    description: `Dios te salve, Reina y Madre, Madre de misericordia, vida, dulzura y esperanza nuestra.
    Dios te salve. A Ti clamamos los desterrados hijos de Eva,
    a Ti suspiramos, gimiendo y llorando en este valle de lágrimas.
    Ea, pues, Señora Abogada Nuestra, vuelve a nosotros tus ojos misericordiosos,
    y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre.
    Oh, clemente, oh piadosa, oh, dulce Virgen María. Ruega por nosotros, Santa Madre de Dios,
    para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.

    Amén.

    `,
  },
  {
    label: "Oraciones Complementarias",
    description: `Por las intenciones y la salud del Papa León XIV, por el eterno descanso del papa Francisco y Benedicto XVI, por la orden sacerdotal, religiosos, religiosas, laicos consagrados, movimientos y grupos parroquiales y por todos los que estamos haciendo este Santo Rosario y por nuestras familias:

    
    Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.

    
    Dios te salve María Santísima, hija de Dios Padre, intercede por nosotros para que aumentes nuestra fe, llena eres de gracias, el Señor es contigo, bendita Tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.
    
    Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

    
    Dios te salve María Santísima, hija de Dios Padre, intercede por nosotros para que aumentes nuestra fe, llena eres de gracias, el Señor es contigo, bendita Tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.
    
    Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

    
    Dios te salve María Santísima, esposa y templo del Espíritu Santo, intercede por nosotros para que practiquemos la caridad, llena eres de gracias, el Señor es contigo, bendita Tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.

    Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

    
    Gloria al Padre y al Hijo y al Espíritu Santo.

    Como era en el principio, ahora y siempre, por los siglos de los siglos.
    
    Amén.
    
    `,
  },
  {
    label: "Consagración a la Santísima Virgen María",
    description: `¡Oh Señora mía, oh Madre mía!, yo me ofrezco enteramente a Vos y, en prueba de mi filial afecto, os consagro en este día mis ojos, mis oídos, mi lengua, mi corazón. En una palabra, todo mi ser. Ya que soy todo vuestro, oh Madre de bondad, guardadme y protegedme como cosa y posesión vuestra.
    
    Amén.
    
    `,
  },
  {
    label: "Bajo tu amparo",
    description: `Bajo tu amparo nos acogemos, santa Madre de Dios; no deseches las oraciones que te dirigimos en nuestras necesidades, antes bien líbranos de todo peligro, ¡oh Virgen gloriosa y bendita!
    
    Amén.

    
    `,
  },
  {
    label: "Oración a San Miguel Arcángel",
    description: `San Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra las perversidad y asechanzas del demonio. Reprímale, Dios, te pedimos suplicantes, y tu príncipe de la milicia celestial arroja al infierno con el divino poder a Satanás y a los otros espíritus malignos que andan dispersos por el mundo para la perdición de las almas.
    
    Amén.
    
    `,
  },
  {
    label: "Petición por el fin de esta prueba",
    description: `Madre de Dios y Madre Nuestra, implora al Padre de Misericordia que esta dura prueba termine y que volvamos a encontrar un horizonte de esperanza y paz,
    
    Amén.
    

    `,
  },
  {
    label: "Bendición final.",
    description: `Para finalizar pedimos la bendición de Nuestra Madre diciendo:

    Dulce Madre, no te alejes,
    tu vista de nosotros no apartes,
    ven con nosotros a todas partes
    y solos nunca nos dejes
    y ya que nos amas tanto
    como verdadera Madre que eres,
    haz que en esta noche y siempre nos bendiga
    
    el Padre, el Hijo y Espíritu Santo,
    
    Amén.
    

    `,
  },
];

export default function OracionesParteFinal() {
  const router = useRouter();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    //setActiveStep(0);
    router.push("/");
  };

  return (
    <Box
      sx={{ maxWidth: 900, padding: 2, fontFamily: "inherit", marginTop: 12 }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                // Texto por defecto (pasos pendientes)
                ".MuiStepLabel-label": {
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  color: "#9e9e9e", // gris para pasos aún no completados
                  fontWeight: "bold",
                },
                // Texto paso activo
                ".MuiStepLabel-label.Mui-active": {
                  color: "#A12330",
                },
                // Texto paso completado
                ".MuiStepLabel-label.Mui-completed": {
                  color: "#26490f",
                },
                // Icono paso pendiente
                ".MuiStepIcon-root": {
                  color: "#bdbdbd",
                },
                // Icono paso activo
                ".MuiStepIcon-root.Mui-active": {
                  color: "#A12330",
                },
                // Icono paso completado
                ".MuiStepIcon-root.Mui-completed": {
                  color: "#26490f",
                },
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent sx={{ fontFamily: "inherit" }}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                  fontFamily: "inherit",
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ mb: 2, typography: "inherit" }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, bgcolor: "#A12330" }}
                >
                  {index === steps.length - 1 ? "FINALIZAR" : "Siguiente"}
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
            ¡FELIZ Y BENDECIDA NOCHE PARA TODOS!
          </Typography>
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, typography: "inherit", bgcolor: "#A12330" }}
          >
            VOLVER AL INICIO
          </Button>
        </Paper>
      )}
    </Box>
  );
}
