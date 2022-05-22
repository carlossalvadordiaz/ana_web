<template>
 <div>


   <div v-if="!empezado" class="animales">
    <img class="img" alt="animales" src="../assets/zodiaco.jpg">
    <h1>Descubre de qué signo del zodiaco es tu pareja ideal</h1>
    <p style="cursor: pointer"  @click="empezado = true; preguntas[0].seleccionada = true">Comenzar el test</p>
  </div>
<div>
<div  v-for="(pregunta, id) in preguntas" :key="id" >
  <div v-if="pregunta.seleccionada != false">
    <img class="img" :src="require(`../assets/zodiaco2.jpg`)" alt="animales">
    <div style="max-width:900px; margin: 0 auto">
    <h1>{{pregunta.texto}}</h1>
    </div>
    <!-- <h1>{{pregunta.model}}</h1> -->
    <div style="display: inline-block"  v-for="(respuesta, id) in pregunta.respuestas" :key="id" >
      <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" :value="respuesta.value"> {{respuesta.texto}}
    </div>
<!--   <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="0">1
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="1">2
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="2">3
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="3">4
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="4">5
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="5">6
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="6">7 -->
<br>
<hr>
    <div class="next" v-if="!final">
      <button :disabled="!isCheck" @click="siguientePregunta(pregunta, pregunta.animal)">Siguiente pregunta</button>
    </div>
    
    <div class="final" v-else>
      <button @click="terminarTest()">Terminar test</button>
    </div>
  </div>
</div>

<div class="resultado" v-if="resultados">
  <h1>Resultados del test</h1>
  <h2>Tu signo del zodiaco más compatible es...</h2>
  <h1>{{animal.nombre.toUpperCase()}}</h1>
  <img class="img" :src="require(`../assets/zodiaco/${animal.nombre}.jpg`)">
  <div style="max-width: 900px; margin: 0 auto"><h3>{{animal.descripcion}}.</h3></div>
</div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      wp: "@/assets/wallp.jpg",
      empezado: false,
      primera: null,
      segunda: null,
      tercera: null,
      cuarta: null,
      final: false,
      resultados: false,
      animal: null,
      isCheck: false,
      animales: [
        {
          nombre: "aries",
          puntos: 0,
          foto: require("../assets/zodiaco/aries.jpg"),
          descripcion: "Aries es el signo solar más fiel cuando está de verdad enamorado. Eso sí, necesita un amor novelesco, por lo que hay que estar alerta, su promesa de total lealtad es sincera, pero puede llevarle a dejarte e ir en busca de otro amor si no mantienes vivas sus ilusiones."
        },
        {
          nombre: "tauro",
          puntos: 0,
          foto: require("../assets/zodiaco/tauro.jpg"),
          descripcion: " Lo mejor de Tauro es la lealtad, su dedicación perdurable y su corazón fiel. Tierno, suave y protector."
        },
        {
          nombre: "geminis",
          puntos: 0,
          foto: require("../assets/zodiaco/geminis.jpg"),
          descripcion: "La armonía perfecta con Géminis no va a existir. Debes tener alma de jugadora y saber que no siempre tendrás la jugada que quieres, pero debes apostar. Recuerda siempre que Géminis tiene la necesidad constante de disfrazar sus emociones y sus intenciones, por lo que siempre sus acciones serán duales. Buscarán confundirte."
        },
        {
          nombre: "cancer",
          puntos: 0,
          foto: require("../assets/zodiaco/cancer.jpg"),
          descripcion: "Su corazón es tierno y afectuoso, aunque se empeña en llevar una coraza. Posiblemente rebosa de sentimientos y se siente vulnerable. Recuerda: se meterá bajo su concha de cangrejo y deberás estar atenta para cuando asome de nuevo."
        },
        {
          nombre: "leo",
          puntos: 0,
          foto: require("../assets/zodiaco/leo.jpg"),
          descripcion: "Los Leo están tan inmersos en sí mismos que pueden ser de una franqueza y de una falta de tacto brutales, aunque la maldad no entra en su estructura, por lo que, aunque te cueste creerlo, no hay auténtica crueldad en sus actos. Tiene una enorme necesidad de mandar y de ser amado por aquellos a quienes manda."
        },
        {
          nombre: "virgo",
          puntos: 0,
          foto: require("../assets/zodiaco/virgo.jpg"),
          descripcion: "Virgo está dispuesto/a a estar solo/a. Sin demasiadas nostalgias ni traumas emocionales. Eso sí, cuando se pone, es experto/a en la seducción sutil. Su regla es un interés distante. Es crítico y minucioso para todo, por lo que se tomará un tiempo preciso en la búsqueda del amor."
        },
        {
          nombre: "libra",
          puntos: 0,
          foto: require("../assets/zodiaco/libra.jpg"),
          descripcion: "Su atracción es lógica y real. No tiene nada de magia, es el resultado del sentido común. Aunque hasta llegar a ese punto, le ha dado muchas vueltas a las cosas. Eso sí, cupido es un becario ante un Libra que innatamente lleva el talento de la seducción dentro: ellos inventaron el romance."
        },
        {
          nombre: "escorpio",
          puntos: 0,
          foto: require("../assets/zodiaco/escorpio.jpg"),
          descripcion: " Escorpio parece tranquilo y sereno. Exacto, parece. Su superficie puede ser impasible, pero por dentro es pura pasión. Y no sólo en el amor. Asegúrate y ve con cuidado. Su picadura puede ser difícil de curar."
        },
        {
          nombre: "sagitario",
          puntos: 0,
          foto: require("../assets/zodiaco/sagitario.jpg"),
          descripcion: "Su vida romántica la vive en un nivel superficial, pero lo plantea con sinceridad. Busca relaciones frívolas. No te sorprendas si le da por contarte las múltiples aventuras que ha tenido. Pero tranquilo/a, si tienes claro que es tu media naranja y le da por huir, recuerda: es torpe. Probablemente tropezará y puedas alcanzarle.."
        },
        {
          nombre: "capricornio",
          puntos: 0,
          foto: require("../assets/zodiaco/capricornio.jpg"),
          descripcion: "Sí, el signo Capricornio es un romántico incurable. Te cuesta creerlo porque su comportamiento tranquilo, sus acciones prácticas y la seriedad en sus intenciones harán que a veces sufras sus actitudes bruscas. Su humor irónico, en ocasiones te parecerá aburridísimo. Y no, no eres tú, es que ciertamente hace bromas secas y retorcidas que nosotras tampoco entenderíamos"
        },
        {
          nombre: "piscis",
          puntos: 0,
          foto: require("../assets/zodiaco/piscis.jpg"),
          descripcion: "A Piscis le encanta el romanticismo. Son una especie de esponja espiritual, pero eso puede ser psicológicamente agotador. Son capaces de meterse en los zapatos de todos, están todo el día escuchando a quienes están a su alrededor. Esto incluye lo alegre, lo triste, lo terrible, lo oscuro, lo luminoso..."
        },
        {
          nombre: "acuario",
          puntos: 0,
          foto: require("../assets/zodiaco/acuario.jpg"),
          descripcion: "Su pareja ideal es la que se convierte es su gran amigo/a. Esa es la base del amor para Acuario. A veces, puede que te sientes algo abandonado/a y es que, una vez que está estable en pareja, considera que ya puede concentrarse en otras cosas que en ese momento le parecen más importantes. Pero no hagas un drama, eso no significa que haya dejado de quererte. Si eres tú quien le rompe el corazón, Acuario procurará que se rompa en silencio. Que ni su familia ni sus amigos oigan ruido o hagan preguntas."
        },


      ],
      preguntas: [
        {
          numero: 1,
          texto: "¿En qué te fijas primero en una persona?",
          model: null,
          seleccionada: false,
          animal: "aries",
          respuestas: [
            {
              texto: "Personalidad",
              value: 3
            },
            {
              texto: "Fisico",
              value: 2
            }
          ]

        },
        {
          numero: 2,
          texto: "¿Podrías estar con alguien que no te atraiga físicamente, pero te encante su personalidad?",
          model: null,
          seleccionada: false,
          animal: "geminis",
          respuestas: [
            {
              texto: "Si",
              value: 0
            },
            {
              texto: "No",
              value: 1
            }
          ]
        },
        {
          numero: 3,
          texto: "¿Como eres de celoso?",
          model: null,
          seleccionada: false,
          animal: "leo",
          respuestas: [
            {
              texto: "1",
              value: 1
            },
            {
              texto: "2",
              value: 2
            },
            {
              texto: "3",
              value: 3
            },
            {
              texto: "4",
              value: 4
            },
            {
              texto: "5",
              value: 5
            },

          ]

        },
        {
          numero: 4,
          texto: "¿Qué prefieres en tu pareja?",
          model: null,
          seleccionada: false,
          animal: "virgo",
          respuestas: [
            {
              texto: "Sexo",
              value: 0
            },
            {
              texto: "Confianza",
              value: 1
            },
            {
              texto: "Respeto",
              value: 2
            }
          ]

        },
        {
          numero: 5,
          texto: "¿Te ilusionas con facilidad?",
          model: null,
          seleccionada: false,
          animal: "sagitario",
          respuestas: [
            {
              texto: "Si",
              value: 0
            },
            {
              texto: "No",
              value: 1
            },
          ]

        },
        {
          numero: 6,
          texto: "¿Te gustan las citas románticas o improvisadas?",
          model: null,
          seleccionada: false,
          animal: "acuario",
          respuestas: [
            {
              texto: "Citas románticas",
              value: 0
            },
            {
              texto: "Planes improvisados",
              value: 1
            }
          ]

        },
        {
          numero: 7,
          texto: "¿Eres orgulloso/a?",
          model: null,
          seleccionada: false,
          animal: "aries",
          respuestas: [
            {
              texto: "1",
              value: 1
            },
            {
              texto: "2",
              value: 2
            },
            {
              texto: "3",
              value: 3
            }
            ,
            {
              texto: "4",
              value: 4
            },
            {
              texto:"5",
              value: 5
            }
          ]

        },
        {
          numero: 8,
          texto: "¿Te consideras una persona fiel?",
          model: null,
          seleccionada: false,
          animal: "tauro",
          respuestas: [
            {
              texto: "1",
              value: 1
            },
            {
              texto: "2",
              value: 2
            },
            {
              texto: "3",
              value: 3
            },
            {
              texto: "4",
              value: 4
            },
            {
              texto: "5",
              value: 5
            }
          ]

        },
        {
          numero: 9,
          texto: "Si tienes un problema con tu pareja, ¿Cómo lo solucionas?",
          model: null,
          seleccionada: false,
          animal: "leo",
          respuestas: [
            {
              texto: "Discutiendo",
              value: 1
            },
            {
              texto: "Hablando y escuchando a tu pareja",
              value: 2
            },
            {
              texto: "Lo dejo pasar",
              value: 3
            }
          ]

        },
        {
          numero: 10,
          texto: "¿Necesitas innovar o te adaptas a las rutinas?",
          model: null,
          seleccionada: false,
          animal: "cancer",
          respuestas: [
            {
              texto: "Innovar siempre, si no me aburro",
              value: 1
            },
            {
              texto: "Prefiero una rutina",
              value: 2
            },
          ]

        },
        {
          numero: 11,
          texto: "¿Eres detallista?",
          model: null,
          seleccionada: false,
          animal: "libra",
          respuestas: [
            {
              texto: "1",
              value: 1
            },
            {
              texto: "2",
              value: 2
            },
            {
              texto: "3",
              value: 3
            },
            {
              texto: "4",
              value: 4
            },
            {
              texto: "5",
              value: 5
            }
          ]

        },
        {
          numero: 12,
          texto: "¿Podrías perdonas una infidelidad?",
          model: null,
          seleccionada: false,
          animal: "virgo",
          respuestas: [
            {
              texto: "Rotundamente no",
              value: 1
            },
            {
              texto: "Depende",
              value: 2
            },
            {
              texto: "Si",
              value: 3
            }
          ]

        },
        {
          numero: 13,
          texto: "¿Podrías tener una relación abierta?",
          model: null,
          seleccionada: false,
          animal: "geminis",
          respuestas: [
            {
              texto: "Sería incapaz",
              value: 1
            },
            {
              texto: "Podría llevarlo sin problema",
              value: 2
            },
            {
              texto: "Llegando a un acuerdo y hablando antes las cosas, podría llegar a estar de acuerdo",
              value: 3
            }
          ]

        },
        {
          numero: 14,
          texto: "Para tí la pareja ideal es alguien...",
          model: null,
          seleccionada: false,
          animal: "geminis",
          respuestas: [
            {
              texto: "Con quien poder contar siempre",
              value: 1
            },
            {
              texto: "Con quien poder vivir intensamente",
              value: 2
            },
            {
              texto: "Con quien poder ser tu mismo/a",
              value: 3
            },
            {
              texto: "Con quien poder entenderte a la perfección",
              value: 4
            },
            
          ]

        },
        {
          numero: 15,
          texto: "¿Qué defectos tolerarías en tu pareja?",
          model: null,
          seleccionada: false,
          animal: "cancer",
          respuestas: [
            {
              texto: "Falta de constancia",
              value: 1
            },
            {
              texto: "Facilidad de comerse la cabeza por todo",
              value: 2
            },
            {
              texto: "Tendencia a ser cabezota",
              value: 3
            },
            {
              texto: "Que sea desordenado/a",
              value: 4
            },

          ]

        },
      ],
    }
  },


  methods: {
 
    siguientePregunta(pregunta, animal) {

      let element = document.getElementsByName(pregunta.numero)
    
      for (let i = 0; i < element.length; i++) {
        if (element[i].type=="radio" && element[i].checked) {
          
          console.log(element[i], element[i].value);
          let cancer = this.animales.find(a => a.nombre == "cancer");
          let geminis = this.animales.find(a => a.nombre == "geminis");
          let tauro = this.animales.find(a => a.nombre == "tauro");
          let aries = this.animales.find(a => a.nombre == "aries");
          let escorpio = this.animales.find(a => a.nombre == "escorpio");
          let leo = this.animales.find(a => a.nombre == "leo");
          let libra = this.animales.find(a => a.nombre == "libra");
          let virgo = this.animales.find(a => a.nombre == "virgo");
          let sagitario = this.animales.find(a => a.nombre == "sagitario");
          let capricornio = this.animales.find(a => a.nombre == "capricornio");
          let acuario = this.animales.find(a => a.nombre == "acuario");
          let piscis = this.animales.find(a => a.nombre == "piscis");


          switch (animal) {
            case "cancer":
              cancer.puntos += parseInt(element[i].value)
              break;
            case "geminis":
              if (element[i].value == "0") {
                geminis.puntos += 3
              } else {
                cancer.puntos += 3
              }
              break;
            case "tauro":
              tauro.puntos += parseInt(element[i].value)
              break;
            case "aries":
              aries.puntos += parseInt(element[i].value)
              break;
            case "leo":
              leo.puntos += parseInt(element[i].value)
              break;
            case "virgo":
              if (element[i].value == "0") {
                console.log(element[i].value);
                virgo.puntos += 3;
              } else if (element[i].value == "1") {
                libra.puntos += 3
              } else {
                escorpio.puntos += 3
              }
              virgo.puntos += parseInt(element[i].value)
              break;
            case "libra":
              libra.puntos += parseInt(element[i].value)
              break;
            case "escorpio":
              escorpio.puntos += parseInt(element[i].value)
              cancer.puntos -= parseInt(element[i].value)
              break;
            case "sagitario":
              if (element[i].value == "0") {
                sagitario.puntos += 3
              } else {
                capricornio.puntos += 3
              }
              break;
            case "acuario":
              if (element[i].value == "0") {
                acuario.puntos += 3
              } else {
                piscis.puntos += 3
                cancer.puntos -= 1
              }
              break;
            case "capricornio":
              if (element[i].value == "0") {
                sagitario.puntos += 3
                tauro.puntos -=1
              } else {
                capricornio.puntos += 3
                piscis.puntos += Math.floor(Math.random() * 3);
              }
              break;
            case "piscis":
              if (element[i].value == "0") {
                sagitario.puntos += 3
              } else {
                capricornio.puntos += Math.floor(Math.random() * 3);
              }
              break;

          }
        }
      }

      const max = this.animales.reduce((prev, current) => (prev.y > current.y) ? prev : current)
      console.log(max);
    

      if (pregunta.numero <= this.preguntas.length - 1) {
            pregunta.seleccionada = false;
          this.preguntas[pregunta.numero].seleccionada = true;
      } else {
        this.final = true
      }

      this.isCheck = false;
    },

    getImage(numero) {
      let image = `@/assets/${numero}.jpg`
      console.log(image);
      return require(image)
    },
    terminarTest() {
      this.resultados = true
      this.preguntas[this.preguntas.length -1].seleccionada = false
      console.log(this.animales);
      
      this.animales.forEach(animal => {
        if (animal.nombre == "cancer") {
          animal.puntos -= Math.floor(Math.random() * 11);
        }
        animal.puntos += Math.floor(Math.random() * 6);
      });
            const max = this.animales.reduce((prev, current) => (prev.puntos > current.puntos) ? prev : current)
      console.log(max);
      this.animal = max
      
    }
  }
}
</script>

<style scoped>
.img {
  max-width: 100%;
  /* height: 50vh; */
}
</style>