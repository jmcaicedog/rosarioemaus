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
    label: "Señal de la Cruz",
    description: `Por la señal de la Santa Cruz, \nde nuestros enemigos, \nlíbranos Señor, Dios Nuestro. \n\nEn el nombre del Padre, del Hijo y del Espíritu Santo.
      
      Amén.
      
      `,
  },
  {
    label: "Hora de María",
    description: `Si alguno de los asistentes tiene en sus manos La Hora de María, puede hacer la lectura correspondiente al día ${dia}
    
    `,
  },
  {
    label: "Oración de sellamiento con la Sangre de Cristo",
    description: `Señor, nos apropiamos de tu palabra que dice: 

    “Porque esta es mi sangre con la que se selló el pacto, 
    la cual es derramada a favor de muchos”.

    Hoy queremos que selles nuestra vida personal con todas nuestras pertenencias.

    Sellamos nuestra salvación con la sangre preciosa de Jesucristo, para que todos nuestros afectos sean cubiertos.  
    
    Sellamos nuestro corazón, para que no entre ningún espíritu de rencor, miedo, tristeza o amargura.  
    
    Sellamos nuestra voluntad, para que esté siempre dispuesta a hacer el bien que deseamos y evitar el mal que no queremos.  
    
    Sellamos nuestra mente, para que entren solo pensamientos que nos lleven al gozo y la paz, de modo que al cambiar nuestra manera de pensar cambie nuestra manera de vivir.  
    
    Sellamos, con la preciosa sangre de Jesucristo, nuestros cuerpos para que reciban salud y queden protegidos del pecado, de enfermedades, de adulterio y de accidentes.  
    
    Sellamos nuestro pasado, para que toda herida que cause daño sea sanada con tu sangre bendita.  
    
    Sellamos nuestro presente, para que todas nuestras actividades queden cubiertas con tu sangre preciosa.  
    
    Sellamos nuestro futuro, para que nuestros planes y proyectos sean preservados de toda influencia del mal.  
    
    Sellamos, con la preciosa sangre de Jesucristo, a nuestros hijos (menciona sus nombres) para que sean protegidos de todo mal y peligro.  
    
    Sellamos nuestra economía; enséñanos a dar para recibir.  
    
    Sellamos nuestra boca, para que nuestras palabras sean de bendición y no de maldición.  
    
    Sellamos nuestros oídos, para que solo escuchemos la voz de Dios y hagamos su santa voluntad.  
    
    Sellamos nuestras manos, para que trabajen en tu obra y en beneficio de los demás.

    Amén.
    
    `,
  },
  {
    label: "El Credo de los Apóstoles",
    description: `Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra.
    
    Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo.
    
    Nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado.
    
    Descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre Todopoderoso, y desde allí va a venir a juzgar a vivos y muertos.
    
    Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna.
    
    Amén.
    
    `,
  },
  {
    label: "Acto de Contrición",
    description: `Jesús, mi Señor y Redentor, yo me arrepiento de todos los pecados que he cometido hasta hoy y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.

    Propongo firmemente no volver a pecar y confío en que por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna.
    
    Amén.
    
    `,
  },
  {
    label: "Oración al Espíritu Santo",
    description: `Ven Espíritu Santo, envía tu luz desde el cielo. Padre amoroso del pobre; don, en tus dones espléndido; luz que penetra las almas; fuente del mayor consuelo.

    Ven, dulce huésped del alma, descanso de nuestro esfuerzo, tregua en el duro trabajo, brisa en las horas de fuego, gozo que enjuga las lágrimas y reconforta en los duelos.

    Entra hasta el fondo del alma, divina luz y enriquécenos. Mira el vacío del hombre si Tú le faltas por dentro; mira el poder del pecado cuando no envías tu aliento.

    Riega la tierra en sequía, sana el corazón enfermo, lava las manchas, infunde calor de vida en el hielo, doma el espíritu indómito, guía al que tuerce el sendero.

    Reparte tus Siete Dones según la fe de tus siervos. Por tu bondad y tu gracia dale al esfuerzo su mérito; salva al que busca salvarse y danos tu gozo eterno.

    Amén.
    
    `,
  },
  {
    label: "Ofrecimiento del Santo Rosario",
    description: `Señor, Dios nuestro, dirige y acepta todos nuestros pensamientos, palabras y obras.
    Te rogamos Santa Madre de Dios, que aceptes nuestras súplicas y alcances de tu Hijo Santísimo, las gracias que necesitamos cada uno de los que aquí estamos presentes y también de las personas que se han encomendado a nuestras oraciones.
    
    En este espacio compartamos nuestras intenciones...
    

    `,
  },
];

export default function OracionesPrimeraParte() {
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
    router.push("/rosario_misterios");
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
                  {index === steps.length - 1
                    ? "FIN DE LA PRIMERA PARTE"
                    : "Siguiente"}
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
            CONTINUAR A LOS MISTERIOS DEL DÍA
          </Button>
        </Paper>
      )}
    </Box>
  );
}
