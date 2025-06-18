import React from "react";
import { Typography, Box } from "@mui/material";

// Datos de misterios y citas por día
const misteriosData = {
  0: {
    // Domingo - Gloriosos
    tipo: "Misterios Gloriosos",
    misterios: [
      {
        nombre: "1. La resurrección del Hijo de Dios",
        cita: 'El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo del Señor Jesús. No sabían qué pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: "¿Por qué buscáis entre los muertos al que está vivo? No está aquí, ha resucitado \n(Lc 24,1-6)',
      },
      {
        nombre: "2. La Ascensión del Señor al cielo",
        cita: "El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios \n(Mc 16,19)",
      },
      {
        nombre: "3. La venida del Espíritu Santo",
        cita: "Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse \n(Hch 2,1-4)",
      },
      {
        nombre: "4. La Asunción de María al cielo",
        cita: "Todas las generaciones me llamarán bienaventurada porque el Señor ha hecho obras grandes en mí \n(Lc 1,48-49)",
      },
      {
        nombre:
          "5. La coronación de María como Reina y Señora de todo lo creado",
        cita: "Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza \n(Ap 12,1)",
      },
    ],
  },
  1: {
    // Lunes - Gozosos
    tipo: "Misterios Gozosos",
    misterios: [
      {
        nombre: "1. La Encarnación del Hijo de Dios",
        cita: "Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María \n(Lc 1,26-27)",
      },
      {
        nombre: "2. La Visitación de Nuestra Señora a su prima Santa Isabel",
        cita: 'En aquellos días María se puso en camino y fue aprisa a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel. Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: "Bendita tú entre las mujeres y bendito el fruto de tu seno \n(Lc 1, 39-42)',
      },
      {
        nombre:
          "3. El Nacimiento de JesúsEl Nacimiento del Hijo de Dios en el portal de Belén",
        cita: "Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad. Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre, porque no tenían sitio en el alojamiento \n(Lc 1,26-28)",
      },
      {
        nombre: "4. La presentación de Jesús en el Templo",
        cita: "Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús, como lo había llamado el ángel antes de ser concebido en el seno. Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice en la Ley del Señor \n(Lc 2,21-24)",
      },
      {
        nombre: "5. El Niño Jesús perdido y hallado en el Templo",
        cita: "Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo sus padres... Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles y preguntándoles; todos los que le oían, estaban estupefactos por su inteligencia y sus respuestas \n(Lc 2,41-47)",
      },
    ],
  },
  2: {
    // Martes - Dolorosos
    tipo: "Misterios Dolorosos",
    misterios: [
      {
        nombre: "1. La oración en el Huerto",
        cita: 'Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: "Sentaos aquí mientras voy a orar". Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces les dijo: "Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo". Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: "Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú. \n(Mt 26, 36-39)',
      },
      {
        nombre: "2. La flagelación de Jesús atado a la columna",
        cita: "Pilato puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado. \n(Mt 27, 26)",
      },
      {
        nombre: "3. La Coronación de espinas",
        cita: 'Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. Lo desnudaron y le echaron encima un manto de púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza, y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: "Salve, Rey de los judíos" \n(Mt 27, 27-29)',
      },
      {
        nombre: "4. Jesús con la Cruz a cuestas camino del Calvario",
        cita: 'Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la "Calavera" \n(Mc 15, 21-22)',
      },
      {
        nombre: "5. La Crucifixión y muerte de Jesús",
        cita: 'Llegados al lugar llamado "La Calavera", le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a la izquierda. Jesús decía: "Padre, perdónales, porque no saben lo que hacen"... Era ya eso de mediodía cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y Jesús, dando un fuerte grito dijo: "Padre, en tus manos pongo mi espíritu" y, dicho esto, expiró \n(Lc 23, 33-46)',
      },
    ],
  },
  3: {
    // Miércoles - Gloriosos
    tipo: "Misterios Gloriosos",
    misterios: [
      {
        nombre: "1. La resurrección del Hijo de Dios",
        cita: 'El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo del Señor Jesús. No sabían qué pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: "¿Por qué buscáis entre los muertos al que está vivo? No está aquí, ha resucitado \n(Lc 24,1-6)',
      },
      {
        nombre: "2. La Ascensión del Señor al cielo",
        cita: "El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios \n(Mc 16,19)",
      },
      {
        nombre: "3. La venida del Espíritu Santo",
        cita: "Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse \n(Hch 2,1-4)",
      },
      {
        nombre: "4. La Asunción de María al cielo",
        cita: "Todas las generaciones me llamarán bienaventurada porque el Señor ha hecho obras grandes en mí \n(Lc 1,48-49)",
      },
      {
        nombre:
          "5. La coronación de María como Reina y Señora de todo lo creado",
        cita: "Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza \n(Ap 12,1)",
      },
    ],
  },
  4: {
    // Jueves - Luminosos
    tipo: "Misterios Luminosos",
    misterios: [
      {
        nombre: "1. El Bautismo en el Jordán",
        cita: 'Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de Dios que bajaba en forma de paloma y venía sobre él. Y una voz que salía de los cielos decía: "Este es mi Hijo amado, en quien me complazco \n(Mt 3,16-17) ',
      },
      {
        nombre: "2. Las bodas de Caná",
        cita: 'Tres días después se celebraba una boda en Caná de Galilea y estaba allí la madre de Jesús. Fue invitado también a la boda Jesús con sus discípulos. Y, como faltara vino, porque se había acabado el vino de la boda, le dice a Jesús su madre: "No tienen vino". Jesús le responde: "¿Qué tengo yo contigo, mujer? Todavía no ha llegado mi hora". Dice su madre a los sirvientes: "Haced lo que él os diga \n(Jn 2,1-5)',
      },
      {
        nombre: "3. El anuncio del Reino de Dios",
        cita: "El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio \n(Mc 1,15)",
      },
      {
        nombre: "4. La Transfiguración",
        cita: "Seis días después, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y los llevó aparte, a un monte alto. Y se transfiguró delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz \n(Mt 17,1-2)",
      },
      {
        nombre: "5. La institución de la Eucaristía",
        cita: 'Mientras estaban comiendo, tomó Jesús pan y lo bendijo, lo partió y, dándoselo a sus discípulos, dijo: "Tomad, comed, éste es mi cuerpo \n(Mt 26,26)',
      },
    ],
  },
  5: {
    // Viernes - Dolorosos
    tipo: "Misterios Dolorosos",
    misterios: [
      {
        nombre: "1. La oración en el Huerto",
        cita: 'Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: "Sentaos aquí mientras voy a orar". Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces les dijo: "Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo". Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: "Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú. \n(Mt 26, 36-39)',
      },
      {
        nombre: "2. La flagelación de Jesús atado a la columna",
        cita: "Pilato puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado. \n(Mt 27, 26)",
      },
      {
        nombre: "3. La Coronación de espinas",
        cita: 'Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. Lo desnudaron y le echaron encima un manto de púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza, y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: "Salve, Rey de los judíos" \n(Mt 27, 27-29)',
      },
      {
        nombre: "4. Jesús con la Cruz a cuestas camino del Calvario",
        cita: 'Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la "Calavera" \n(Mc 15, 21-22)',
      },
      {
        nombre: "5. La Crucifixión y muerte de Jesús",
        cita: 'Llegados al lugar llamado "La Calavera", le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a la izquierda. Jesús decía: "Padre, perdónales, porque no saben lo que hacen"... Era ya eso de mediodía cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y Jesús, dando un fuerte grito dijo: "Padre, en tus manos pongo mi espíritu" y, dicho esto, expiró \n(Lc 23, 33-46)',
      },
    ],
  },
  6: {
    // Sábado - Gozosos
    tipo: "Misterios Gozosos",
    misterios: [
      {
        nombre: "1. La Encarnación del Hijo de Dios",
        cita: "Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María \n(Lc 1,26-27)",
      },
      {
        nombre: "2. La Visitación de Nuestra Señora a su prima Santa Isabel",
        cita: 'En aquellos días María se puso en camino y fue aprisa a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel. Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: "Bendita tú entre las mujeres y bendito el fruto de tu seno \n(Lc 1, 39-42)',
      },
      {
        nombre:
          "3. El Nacimiento de JesúsEl Nacimiento del Hijo de Dios en el portal de Belén",
        cita: "Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad. Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre, porque no tenían sitio en el alojamiento \n(Lc 1,26-28)",
      },
      {
        nombre: "4. La presentación de Jesús en el Templo",
        cita: "Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús, como lo había llamado el ángel antes de ser concebido en el seno. Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice en la Ley del Señor \n(Lc 2,21-24)",
      },
      {
        nombre: "5. El Niño Jesús perdido y hallado en el Templo",
        cita: "Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo sus padres... Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles y preguntándoles; todos los que le oían, estaban estupefactos por su inteligencia y sus respuestas \n(Lc 2,41-47)",
      },
    ],
  },
};

const MisterioTitulo = ({ misterioIndex = 0 }) => {
  const diaSemana = new Date().getDay();
  const data = misteriosData[diaSemana];
  const misterio = data.misterios[misterioIndex] || {};

  return (
    <Box sx={{ textAlign: "center", mt: 12, mb: 2, padding: 2 }}>
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
