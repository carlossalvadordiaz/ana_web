<template>
 <div class="fondo">

<div class="imagen" v-if="this.terminado == true">
  <img style="width: 100%; height: 100%" alt="animales" src="../assets/animales_test.jpg">
</div>
   <div v-if="!empezado" class="animales">
    <!-- <img class="img" alt="animales" src="../assets/animales_test.jpg"> -->
    <h1>Descubre cuál es tu animal de poder</h1>
    <h2>Las respuestas van en escala del 1 al 7 donde 1 es nada/nunca y 7 es siempre/mucho</h2>
    <!-- <p style="cursor: pointer; "  @click="empezado = true ; preguntas[0].seleccionada = true"><span style="border: 1px solid black; padding: 3px; margin;">Comenzar el test</span></p> -->
    <button @click="empezado = true ; preguntas[0].seleccionada = true" class="button-74" role="button">Comenzar el test</button>
  </div>
<div>
<div class="preguntas"  v-for="(pregunta, id) in preguntas" :key="id" >
  <div v-if="pregunta.seleccionada != false">
    <!-- <img class="img todos" :src="require(`../assets/todos.jpg`)" alt="animales"> -->
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
  <h2>Tu animal de poder es ..</h2>
  <h1>{{animal.nombre.toUpperCase()}}</h1>
  <img class="img" :src="require(`../assets/${animal.nombre}.jpg`)">
  <div style="max-width: 50%; margin: 0 auto"><h3>{{animal.descripcion}}.</h3></div>

  <button class="button-74" role="button" ><router-link to='/'>Volver al inicio</router-link> </button>
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
          nombre: "Oso",
          puntos: 0,
          foto: require("../assets/Oso.jpg"),
          descripcion: "El oso es un animal que inspira fortaleza. Su apabullante envergadura puede resultar intimidatoria y siempre infunde respeto.  Nos llama a encontrar nuestra propia fuerza interior y a conectar con la fuente de poder que nos sustenta. Inspira a aquellas almas que necesitan reunir todo el valor y el coraje precisos para hacer frente a la adversidad. Les vincula directamente con el elemento tierra, ayudándoles a expresar su parte más salvaje y ancestral. Cuando te sientas débil o afligido, invoca la imagen del oso y conecta con su espíritu, te ayudará a despertar la valentía."
        },
        {
          nombre: "Mariposa",
          puntos: 0,
          foto: require("../assets/Mariposa.jpg"),
          descripcion: " Este animal de poder invita a aquellos que tienen un vínculo a aportar la alegría y felicidad en sus vidas. Las mariposas tienen a menudo colores vivos. Por extensión, están asociadas a la vivacidad y a la luminosidad. El mensaje de este animal tótem es el de aclarar y colorear tu vida. Posiblemente es hora de expresarte más plenamente y de mostrar tu personalidad coloreada."
        },
        {
          nombre: "Lobo",
          puntos: 0,
          foto: require("../assets/Lobo.jpg"),
          descripcion: "La fuerza del animal espiritual y tótem del lobo hace nacer el instinto, la inteligencia, el apetito de libertad y la consciencia de la importancia de los vínculos sociales. Este animal puede simbolizar también el miedo de ser amenazado y la falta de confianza."
        },
        {
          nombre: "Koala",
          puntos: 0,
          foto: require("../assets/Koala.jpg"),
          descripcion: "El koala como animal de poder, tiene un significado de conexión con la tierra, la protección, el recreamiento de la calma y la confianza que da la tranquilidad y la paz. Las personas con un tótem Koala son gente agradable, amigable y amistosa, les afectan tanto las emociones de los demás, con los que conectan mucho, que luego necesitan un hogar confortable y cómodo para despejar su cerebro de todo ello. Son animales que buscan la comodidad en su entorno."
        },
        {
          nombre: "Araña",
          puntos: 0,
          foto: require("../assets/Araña.jpg"),
          descripcion: " La araña como animal de poder significa sabiduría profunda, invita a ver la vida desde una perspectiva elevada y ver los ciclos que hemos pasado en ella con análisis positivo. La araña es un tótem de astucia, progresión cíclica, renacimiento y muerte, protección y poder sobre el destino."
        },
        {
          nombre: "Tiburón",
          puntos: 0,
          foto: require("../assets/Tiburón.jpg"),
          descripcion: "Las personas con el tótem del tiburón son extremadamente impulsadas y se mueven continuamente hacia adelante. Se encuentran con la vida en plenitud y prefieren experimentarlo todo con una exuberancia innegable. La gente con este espíritu animal está generalmente en un estado constante de renovación."
        },
        {
          nombre: "Jaguar",
          puntos: 0,
          foto: require("../assets/Jaguar.jpg"),
          descripcion: "Aquellos que tienen el jaguar como animal de poder son apasionados, confiados y poseen una comprensión más profunda de la vida. Son capaces de aceptar el cambio con gracia y dignidad, tienden a ser creativos, a ver más fácilmente la escena en su conjunto y a dejarse guiar por la intuición sin dudarlo"
        },
        {
          nombre: "Águila",
          puntos: 0,
          foto: require("../assets/Águila.jpg"),
          descripcion: "Aquellos que tengan al águila como animal de poder, tendrán una gran responsabilidad en su vida: andar por el camino de la iluminación para poder iluminar a otros. El águila es el símbolo de la altura y también de la conexión con lo divino por su proximidad con el sol.  Los que tienen el águila como animal de poder son valientes, fuertes y nobles."
        },


      ],
      preguntas: [
        {
          numero: 1,
          texto: "¿A menudo te quedas tan absorto en tus pensamientos que ignoras el entorno que te rodea o te olvidas de él?",
          model: null,
          seleccionada: false,
          animal: "Oso",
          puntos: 0

        },
        {
          numero: 2,
          texto: "¿Sueles probar o hacer cosas solo por simple curiosidad?",
          model: null,
          seleccionada: false,
          animal: "Águila",
          puntos: 0
        },
        {
          numero: 3,
          texto: "¿Sueles iniciar las conversaciones?",
          model: null,
          seleccionada: false,
          animal: "Jaguar",
          puntos: 0

        },
        {
          numero: 4,
          texto: "¿Luchas por tus sueños hasta el final?",
          model: null,
          seleccionada: false,
          animal: "Mariposa"

        },
        {
          numero: 5,
          texto: "¿Prefieres conseguir las cosas por tí mismo a que te lo den todo hecho?",
          model: null,
          seleccionada: false,
          animal: "Araña"

        },
        {
          numero: 6,
          texto: "¿Te consideras una persona cotilla?",
          model: null,
          seleccionada: false,
          animal: "Águila"

        },
        {
          numero: 7,
          texto: "¿Prefieres quedarte en casa antes que salir de fiesta?",
          model: null,
          seleccionada: false,
          animal: "Oso"

        },
        {
          numero: 8,
          texto: "¿Te consideras fiel?",
          model: null,
          seleccionada: false,
          animal: "Tiburón"

        },
        {
          numero: 9,
          texto: "¿Sueles mentir?",
          model: null,
          seleccionada: false,
          animal: "Araña",

        },
        {
          numero: 10,
          texto: "¿Lloras siempre que lo necesitas?",
          model: null,
          seleccionada: false,
          animal: "Koala",

        },
        {
          numero: 11,
          texto: "Si tienes un examen, ¿cuánto te lo preparas?",
          model: null,
          seleccionada: false,
          animal: "Jaguar",

        },
        {
          numero: 12,
          texto: "¿Cuál es tu capacidad de concentración?",
          model: null,
          seleccionada: false,
          animal: "Tiburón",

        },
        {
          numero: 13,
          texto: "¿Te consideras protector de la gente a la que quieres?",
          model: null,
          seleccionada: false,
          animal: "Lobo",

        },
        {
          numero: 14,
          texto: "¿Prefieres la compañía a estar solo?",
          model: null,
          seleccionada: false,
          animal: "Lobo",

        },
        {
          numero: 15,
          texto: "¿Te consideras una persona perezosa?",
          model: null,
          seleccionada: false,
          animal: "Koala",

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
          let koala = this.animales.find(a => a.nombre == "Koala");
          let lobo = this.animales.find(a => a.nombre == "Lobo");
          let mariposa = this.animales.find(a => a.nombre == "Mariposa");
          let oso = this.animales.find(a => a.nombre == "Oso");
          let aguila = this.animales.find(a => a.nombre == "Águila");
          let araña = this.animales.find(a => a.nombre == "Araña");
          let jaguar = this.animales.find(a => a.nombre == "Jaguar");
          let tiburon = this.animales.find(a => a.nombre == "Tiburón");


          switch (animal) {
            case "Koala":
              koala.puntos += parseInt(element[i].value)
              break;
            case "Lobo":
              lobo.puntos += parseInt(element[i].value)
              break;
            case "Mariposa":
              mariposa.puntos += parseInt(element[i].value)
              break;
            case "Oso":
              oso.puntos += parseInt(element[i].value)
              break;
            case "Araña":
              araña.puntos += parseInt(element[i].value)
              break;
            case "Tiburón":
              tiburon.puntos += parseInt(element[i].value)
              break;
            case "Jaguar":
              jaguar.puntos += parseInt(element[i].value)
              break;
            case "Águila":
              aguila.puntos += parseInt(element[i].value)
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
  /* background-image: url("../assets/animales_test.jpg");
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