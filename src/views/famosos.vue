<template>
 <div class="fondo">

<div class="imagen" v-if="this.terminado == true">
  <img style="width: 100%; height: 100%" alt="animales" src="@/assets/famosos_test.jpg">
</div>
   <div v-if="!empezado" class="animales">
    <!-- <img class="img" alt="animales" src="@/assets/animales_test.jpg"> -->
    <h1>Descubre qué famoso te representa</h1>
    <h2>Las respuestas van en escala del 1 al 7 donde 1 es nada/nunca y 7 es siempre/mucho</h2>
    <button @click="empezado = true ; preguntas[0].seleccionada = true" class="button-74" role="button">Comenzar el test</button>
  </div>
<div>
<div  v-for="(pregunta, id) in preguntas" :key="id" >
  <div v-if="pregunta.seleccionada != false">
    <!-- <img class="img todos" :src="require(`@/assets/todos.jpg`)" alt="animales"> -->
    <h3>1 - nada / nunca  |  7 - Mucho / siempre</h3>
    <div style="max-width:900px; margin: 0 auto">
    <h1>{{pregunta.texto}}</h1>
    </div>
    <!-- <h1>{{pregunta.model}}</h1> -->
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="0">1
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="1">2
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="2">3
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="3">4
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="4">5
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="5">6
  <input :id="pregunta.numero" type="radio" :name="pregunta.numero" @click="isCheck = true" :v-model="pregunta.model" value="6">7
<br>
<hr>
    <div class="next" v-if="!final">
      <button class="button-74" role="button" :disabled="!isCheck" @click="siguientePregunta(pregunta, pregunta.animal)">Siguiente pregunta</button>
    </div>
    
    <div class="final" v-else>
      <button class="button-74" role="button" @click="terminarTest()">Terminar test</button>
    </div>
  </div>
</div>

<div class="resultado" v-if="resultados">
  <h1>Resultados del test</h1>
  <h2>El/la famoso/a que te representa es ...</h2>
  <h1>{{animal.nombre.toUpperCase()}}</h1>
  <img class="img" :src="require(`@/assets/famosos/${animal.nombre}.jpg`)">
  <div style="max-width: 900px; margin: 0 auto"><h3>{{animal.descripcion}}.</h3></div>

  <!-- <router-link to="/">Volver al inicio</router-link> -->
      <button class="button-74" role="button" ><router-link to='/'>Volver al inicio</router-link> </button>

  
</div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      wp: "@/assets/famosos/wallp.jpg",
      empezado: false,
      terminado: true,
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
          nombre: "Zac Efron",
          puntos: 0,
          foto: require("@/assets/famosos/Zac Efron.jpg"),
          descripcion: " "
        },
        {
          nombre: "Lola Índigo",
          puntos: 0,
          foto: require("@/assets/famosos/Lola Índigo.jpg"),
          descripcion: " "
        },
        {
          nombre: "Miley Cyrus",
          puntos: 0,
          foto: require("@/assets/famosos/Miley Cyrus.jpg"),
          descripcion: ""
        },
        {
          nombre: "Will Smith",
          puntos: 0,
          foto: require("@/assets/famosos/Will Smith.jpg"),
          descripcion: " "
        },
        {
          nombre: "Johnny Depp",
          puntos: 0,
          foto: require("@/assets/famosos/Johnny Depp.jpg"),
          descripcion: " "
        },
        {
          nombre: "Rosalía",
          puntos: 0,
          foto: require("@/assets/famosos/Rosalía.jpg"),
          descripcion: " "
        },
        {
          nombre: "Zendaya",
          puntos: 0,
          foto: require("@/assets/famosos/Zendaya.jpg"),
          descripcion: ""
        },
        {
          nombre: "Bad Bunny",
          puntos: 0,
          foto: require("@/assets/famosos/Bad Bunny.jpg"),
          descripcion: " "
        },


      ],
      preguntas: [
        {
          numero: 1,
          texto: "¿Te gusta más comer en restaurantes que pedir comida a domicilio?",
          model: null,
          seleccionada: false,
          animal: "Rosalía",
          puntos: 0

        },
        {
          numero: 2,
          texto: "¿Te resulta fácil permanecer relajado y concentrado incluso cuando hay algo de presión?",
          model: null,
          seleccionada: false,
          animal: "Will Smith",
          puntos: 0
        },
        {
          numero: 3,
          texto: "¿Te sientes superior a otras personas?",
          model: null,
          seleccionada: false,
          animal: "Bad Bunny",
          puntos: 0

        },
        {
          numero: 4,
          texto: "¿Te importa o te incomoda ser el centro de atención?",
          model: null,
          seleccionada: false,
          animal: "Miley Cyrus"

        },
        {
          numero: 5,
          texto: "¿Te consideras una persona más práctica que creativa?",
          model: null,
          seleccionada: false,
          animal: "Lola Índigo"

        },
        {
          numero: 6,
          texto: "¿Tu estado de ánimo o humor puede cambiar muy rápidamente?",
          model: null,
          seleccionada: false,
          animal: "Johnny Depp"

        },
        {
          numero: 7,
          texto: "¿Es muy raro que te dejes llevar por fantasías o ideas?",
          model: null,
          seleccionada: false,
          animal: "Zendaya"

        },
        {
          numero: 8,
          texto: "Si alguien no responde con rapidez a un mensaje, ¿comienzas a preocuparte porque piensas que has podido decir algo incorrecto?",
          model: null,
          seleccionada: false,
          animal: "Zac Efron"

        },
        {
          numero: 9,
          texto: "¿Tus emociones te controlan más de lo que tú las controlas a ellas?",
          model: null,
          seleccionada: false,
          animal: "Zendaya",

        },
        {
          numero: 10,
          texto: "¿Prefieres improvisar a tener que dedicar tiempo a desarrollar un plan detallado?",
          model: null,
          seleccionada: false,
          animal: "Bad Bunny",

        },
        {
          numero: 11,
          texto: "¿Te consideras una persona con buen sentido del humor?",
          model: null,
          seleccionada: false,
          animal: "Lola Índigo",

        },
        {
          numero: 12,
          texto: "¿Te gusta viajar?",
          model: null,
          seleccionada: false,
          animal: "Miley Cyrus",

        },
        {
          numero: 13,
          texto: "¿Te consideras una persona activa?",
          model: null,
          seleccionada: false,
          animal: "Will Smith",

        },
        {
          numero: 14,
          texto: "¿Eres una persona muy familiar/ te gusta pasar tiempo con la familia?",
          model: null,
          seleccionada: false,
          animal: "Rosalía",

        },
        {
          numero: 15,
          texto: "¿Te consideras una persona con la mente abierta?",
          model: null,
          seleccionada: false,
          animal: "Johnny Depp",

        },
        {
          numero: 16,
          texto: "¿Hasta qué punto crees que el dinero da la felicidad?",
          model: null,
          seleccionada: false,
          animal: "Zac Efron",

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
          let BadBunny = this.animales.find(a => a.nombre == "Bad Bunny");
          let JohnnyDepp = this.animales.find(a => a.nombre == "Johnny Depp");
          let LolaIndigo = this.animales.find(a => a.nombre == "Lola Índigo");
          let MileyCyrus = this.animales.find(a => a.nombre == "Miley Cyrus");
          let Rosalia = this.animales.find(a => a.nombre == "Rosalía");
          let WillSmith = this.animales.find(a => a.nombre == "Will Smith");
          let ZacEfron = this.animales.find(a => a.nombre == "Zac Efron");
          let Zendaya = this.animales.find(a => a.nombre == "Zendaya");


          switch (animal) {
            case "Bad Bunny":
              BadBunny.puntos += parseInt(element[i].value)
              break;
            case "Johnny Depp":
              JohnnyDepp.puntos += parseInt(element[i].value)
              break;
            case "Lola Índigo":
              LolaIndigo.puntos += parseInt(element[i].value)
              break;
            case "Miley Cyrus":
              MileyCyrus.puntos += parseInt(element[i].value)
              break;
            case "Will Smith":
              WillSmith.puntos += parseInt(element[i].value)
              break;
            case "Zendaya":
              Zendaya.puntos += parseInt(element[i].value)
              break;
            case "Zac Efron":
              ZacEfron.puntos += parseInt(element[i].value)
              break;
            case "Rosalía":
              Rosalia.puntos += parseInt(element[i].value)
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
       this.terminado = !this.terminado
      this.preguntas[this.preguntas.length -1].seleccionada = false
      console.log(this.animales);
            const max = this.animales.reduce((prev, current) => (prev.puntos > current.puntos) ? prev : current)
      console.log(max);
      this.animal = max
      
    }
  }
}
</script>

<style scoped>
.fondo {
  /* background-image: url("@/assets/animales_test.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  */
  /* height: 50vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.imagen {
  width: 100%;
  height: 70vh;
}

.img {
  width: 50%;
  height: 50%;
}
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 5px;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}

</style>