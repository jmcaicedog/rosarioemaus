import React from "react";
import { Typography, Box } from "@mui/material";

// Datos de misterios y citas por día
const misteriosData = {
  0: {
    // Domingo - Gloriosos
    tipo: "Misterios Gloriosos",
    misterios: [
      {
        nombre: "La Resurrección del Señor",
        cita: "El primer día de la semana, muy de madrugada, las mujeres fueron al sepulcro llevando los aromas que habían preparado... (Lc 24,1-12)",
      },
      {
        nombre: "La Ascensión del Señor",
        cita: "Después de hablarles, el Señor Jesús fue llevado al cielo y se sentó a la derecha de Dios. (Mc 16,19)",
      },
      {
        nombre: "La Venida del Espíritu Santo",
        cita: "Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar... (Hch 2,1-4)",
      },
      {
        nombre: "La Asunción de la Virgen María",
        cita: "Todas las generaciones me llamarán bienaventurada, porque el Poderoso ha hecho obras grandes por mí. (Lc 1,48-49)",
      },
      {
        nombre: "La Coronación de la Virgen María",
        cita: "Una gran señal apareció en el cielo: una mujer vestida del sol... (Ap 12,1)",
      },
    ],
  },
  1: {
    // Lunes - Gozosos
    tipo: "Misterios Gozosos",
    misterios: [
      {
        nombre: "La Anunciación del ángel a María",
        cita: "Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María. (Lc 1,26-27)",
      },
      {
        nombre: "La Visitación de María a su prima Isabel",
        cita: "En aquellos días, María se puso en camino y fue aprisa a la montaña, a una ciudad de Judá... (Lc 1,39-45)",
      },
      {
        nombre: "El Nacimiento de Jesús",
        cita: "Y María dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre... (Lc 2,1-7)",
      },
      {
        nombre: "La Presentación de Jesús en el Templo",
        cita: "Cuando se cumplieron los días de la purificación, llevaron al niño a Jerusalén para presentarlo al Señor... (Lc 2,22-38)",
      },
      {
        nombre: "El Niño Jesús perdido y hallado en el Templo",
        cita: "A los tres días lo encontraron en el templo, sentado en medio de los doctores, escuchándolos y haciéndoles preguntas... (Lc 2,41-52)",
      },
    ],
  },
  2: {
    // Martes - Dolorosos
    tipo: "Misterios Dolorosos",
    misterios: [
      {
        nombre: "La Oración de Jesús en el Huerto",
        cita: "Padre, si quieres, aparta de mí este cáliz; pero no se haga mi voluntad, sino la tuya. (Lc 22,42)",
      },
      {
        nombre: "La Flagelación de Jesús",
        cita: "Entonces Pilato tomó a Jesús y mandó azotarle. (Jn 19,1)",
      },
      {
        nombre: "La Coronación de espinas",
        cita: "Los soldados trenzaron una corona de espinas, se la pusieron en la cabeza... (Jn 19,2)",
      },
      {
        nombre: "Jesús con la cruz a cuestas",
        cita: "Jesús, cargando con la cruz, salió hacia el lugar llamado Calvario... (Jn 19,17)",
      },
      {
        nombre: "La Crucifixión y muerte de Jesús",
        cita: "Cuando llegaron al lugar llamado la Calavera, lo crucificaron allí... (Lc 23,33-46)",
      },
    ],
  },
  3: {
    // Miércoles - Gloriosos
    tipo: "Misterios Gloriosos",
    misterios: [
      {
        nombre: "La Resurrección del Señor",
        cita: "El primer día de la semana, muy de madrugada, las mujeres fueron al sepulcro llevando los aromas que habían preparado... (Lc 24,1-12)",
      },
      {
        nombre: "La Ascensión del Señor",
        cita: "Después de hablarles, el Señor Jesús fue llevado al cielo y se sentó a la derecha de Dios. (Mc 16,19)",
      },
      {
        nombre: "La Venida del Espíritu Santo",
        cita: "Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar... (Hch 2,1-4)",
      },
      {
        nombre: "La Asunción de la Virgen María",
        cita: "Todas las generaciones me llamarán bienaventurada, porque el Poderoso ha hecho obras grandes por mí. (Lc 1,48-49)",
      },
      {
        nombre: "La Coronación de la Virgen María",
        cita: "Una gran señal apareció en el cielo: una mujer vestida del sol... (Ap 12,1)",
      },
    ],
  },
  4: {
    // Jueves - Luminosos
    tipo: "Misterios Luminosos",
    misterios: [
      {
        nombre: "El Bautismo de Jesús en el Jordán",
        cita: "Apenas fue bautizado Jesús, salió del agua; y en esto se abrieron los cielos... (Mt 3,13-17)",
      },
      {
        nombre: "La autorrevelación de Jesús en las bodas de Caná",
        cita: "Jesús realizó en Caná de Galilea el primero de sus signos, y manifestó su gloria... (Jn 2,1-11)",
      },
      {
        nombre: "El anuncio del Reino de Dios invitando a la conversión",
        cita: "El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio. (Mc 1,15)",
      },
      {
        nombre: "La Transfiguración del Señor",
        cita: "Mientras oraba, el aspecto de su rostro cambió y sus vestidos brillaban de resplandor... (Lc 9,28-36)",
      },
      {
        nombre: "La institución de la Eucaristía",
        cita: "Tomad y comed todos de él, porque esto es mi cuerpo... (Mt 26,26-29)",
      },
    ],
  },
  5: {
    // Viernes - Dolorosos
    tipo: "Misterios Dolorosos",
    misterios: [
      {
        nombre: "La Oración de Jesús en el Huerto",
        cita: "Padre, si quieres, aparta de mí este cáliz; pero no se haga mi voluntad, sino la tuya. (Lc 22,42)",
      },
      {
        nombre: "La Flagelación de Jesús",
        cita: "Entonces Pilato tomó a Jesús y mandó azotarle. (Jn 19,1)",
      },
      {
        nombre: "La Coronación de espinas",
        cita: "Los soldados trenzaron una corona de espinas, se la pusieron en la cabeza... (Jn 19,2)",
      },
      {
        nombre: "Jesús con la cruz a cuestas",
        cita: "Jesús, cargando con la cruz, salió hacia el lugar llamado Calvario... (Jn 19,17)",
      },
      {
        nombre: "La Crucifixión y muerte de Jesús",
        cita: "Cuando llegaron al lugar llamado la Calavera, lo crucificaron allí... (Lc 23,33-46)",
      },
    ],
  },
  6: {
    // Sábado - Gozosos
    tipo: "Misterios Gozosos",
    misterios: [
      {
        nombre: "La Anunciación del ángel a María",
        cita: "Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María. (Lc 1,26-27)",
      },
      {
        nombre: "La Visitación de María a su prima Isabel",
        cita: "En aquellos días, María se puso en camino y fue aprisa a la montaña, a una ciudad de Judá... (Lc 1,39-45)",
      },
      {
        nombre: "El Nacimiento de Jesús",
        cita: "Y María dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre... (Lc 2,1-7)",
      },
      {
        nombre: "La Presentación de Jesús en el Templo",
        cita: "Cuando se cumplieron los días de la purificación, llevaron al niño a Jerusalén para presentarlo al Señor... (Lc 2,22-38)",
      },
      {
        nombre: "El Niño Jesús perdido y hallado en el Templo",
        cita: "A los tres días lo encontraron en el templo, sentado en medio de los doctores, escuchándolos y haciéndoles preguntas... (Lc 2,41-52)",
      },
    ],
  },
};

const MisterioTitulo = ({ misterioIndex = 0 }) => {
  const diaSemana = new Date().getDay();
  const data = misteriosData[diaSemana];
  const misterio = data.misterios[misterioIndex] || {};

  return (
    <Box sx={{ textAlign: "center", mt: 12, mb: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#A12330" }}>
        {data.tipo}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
        {misterio.nombre}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#555", mt: 1, whiteSpace: "pre-line", padding: 2 }}
      >
        {misterio.cita}
      </Typography>
    </Box>
  );
};

export default MisterioTitulo;
