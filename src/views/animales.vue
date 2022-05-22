<template>
 <div>


   <div v-if="!empezado" class="animales">
    <img class="img" alt="animales" src="../assets/animales_test.jpg">
    <h1>Descubre cual es tu animal de poder</h1>
    <h2>Las respuestas van en escala del 1 al 7 donde 1 es nada/nunca y 7 es siempre/mucho</h2>
    <p style="cursor: pointer"  @click="empezado = true; preguntas[0].seleccionada = true">Comenzar el test</p>
  </div>
<div>
<div  v-for="(pregunta, id) in preguntas" :key="id" >
  <div v-if="pregunta.seleccionada != false">
    <img class="img" :src="require(`../assets/todos.jpg`)" alt="animales">
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
      <button :disabled="!isCheck" @click="siguientePregunta(pregunta, pregunta.animal)">Siguiente pregunta</button>
    </div>
    
    <div class="final" v-else>
      <button @click="terminarTest()">Terminar test</button>
    </div>
  </div>
</div>

<div class="resultado" v-if="resultados">
  <h1>Resultados del test</h1>
  <h2>Tu animal de poder es ..</h2>
  <h1>{{animal.nombre.toUpperCase()}}</h1>
  <img class="img" :src="require(`../assets/${animal.nombre}.jpg`)">
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
          nombre: "oso",
          puntos: 0,
          foto: require("../assets/oso.jpg"),
          descripcion: "El oso es un animal que inspira fortaleza. Su apabullante envergadura puede resultar intimidatoria y siempre infunde respeto.  Nos llama a encontrar nuestra propia fuerza interior y a conectar con la fuente de poder que nos sustenta. Inspira a aquellas almas que necesitan reunir todo el valor y el coraje precisos para hacer frente a la adversidad. Les vincula directamente con el elemento tierra, ayudándoles a expresar su parte más salvaje y ancestral. Cuando te sientas débil o afligido, invoca la imagen del oso y conecta con su espíritu, te ayudará a despertar la valentía."
        },
        {
          nombre: "mariposa",
          puntos: 0,
          foto: require("../assets/mariposa.jpg"),
          descripcion: " Este animal de poder invita a aquellos que tienen un vínculo a aportar la alegría y felicidad en sus vidas. Las mariposas tienen a menudo colores vivos. Por extensión, están asociadas a la vivacidad y a la luminosidad. El mensaje de este animal tótem es el de aclarar y colorear tu vida. Posiblemente es hora de expresarte más plenamente y de mostrar tu personalidad coloreada."
        },
        {
          nombre: "lobo",
          puntos: 0,
          foto: require("../assets/lobo.jpg"),
          descripcion: "La fuerza del animal espiritual y tótem del lobo hace nacer el instinto, la inteligencia, el apetito de libertad y la consciencia de la importancia de los vínculos sociales. Este animal puede simbolizar también el miedo de ser amenazado y la falta de confianza."
        },
        {
          nombre: "koala",
          puntos: 0,
          foto: require("../assets/koala.jpg"),
          descripcion: "El koala como animal de poder, tiene un significado de conexión con la tierra, la protección, el recreamiento de la calma y la confianza que da la tranquilidad y la paz. Las personas con un tótem Koala son gente agradable, amigable y amistosa, les afectan tanto las emociones de los demás, con los que conectan mucho, que luego necesitan un hogar confortable y cómodo para despejar su cerebro de todo ello. Son animales que buscan la comodidad en su entorno."
        },
        {
          nombre: "araña",
          puntos: 0,
          foto: require("../assets/araña.jpg"),
          descripcion: " La araña como animal de poder significa sabiduría profunda, invita a ver la vida desde una perspectiva elevada y ver los ciclos que hemos pasado en ella con análisis positivo. La araña es un tótem de astucia, progresión cíclica, renacimiento y muerte, protección y poder sobre el destino."
        },
        {
          nombre: "tiburon",
          puntos: 0,
          foto: require("../assets/tiburon.jpg"),
          descripcion: "Las personas con el tótem del tiburón son extremadamente impulsadas y se mueven continuamente hacia adelante. Se encuentran con la vida en plenitud y prefieren experimentarlo todo con una exuberancia innegable. La gente con este espíritu animal está generalmente en un estado constante de renovación."
        },
        {
          nombre: "jaguar",
          puntos: 0,
          foto: require("../assets/jaguar.jpg"),
          descripcion: "Aquellos que tienen el jaguar como animal de poder son apasionados, confiados y poseen una comprensión más profunda de la vida. Son capaces de aceptar el cambio con gracia y dignidad, tienden a ser creativos, a ver más fácilmente la escena en su conjunto y a dejarse guiar por la intuición sin dudarlo"
        },
        {
          nombre: "aguila",
          puntos: 0,
          foto: require("../assets/aguila.jpg"),
          descripcion: "Aquellos que tengan al águila como animal de poder, tendrán una gran responsabilidad en su vida: andar por el camino de la iluminación para poder iluminar a otros. El águila es el símbolo de la altura y también de la conexión con lo divino por su proximidad con el sol.  Los que tienen el águila como animal de poder son valientes, fuertes y nobles."
        },


      ],
      preguntas: [
        {
          numero: 1,
          texto: "¿A menudo te quedas tan absorto en tus pensamientos que ignoras el entorno que te rodea o te olvidas de él?",
          model: null,
          seleccionada: false,
          animal: "oso",
          puntos: 0

        },
        {
          numero: 2,
          texto: "¿Sueles probar o hacer cosas solo por simple curiosidad?",
          model: null,
          seleccionada: false,
          animal: "aguila",
          puntos: 0
        },
        {
          numero: 3,
          texto: "¿Sueles iniciar las conversaciones?",
          model: null,
          seleccionada: false,
          animal: "jaguar",
          puntos: 0

        },
        {
          numero: 4,
          texto: "¿Luchas por tus sueños hasta el final?",
          model: null,
          seleccionada: false,
          animal: "mariposa"

        },
        {
          numero: 5,
          texto: "¿Prefieres conseguir las cosas por ti mismo a que te lo den todo hecho?",
          model: null,
          seleccionada: false,
          animal: "araña"

        },
        {
          numero: 6,
          texto: "¿Eres cotilla?",
          model: null,
          seleccionada: false,
          animal: "aguila"

        },
        {
          numero: 7,
          texto: "¿Prefieres quedarte en casa antes que salir de fiesta?",
          model: null,
          seleccionada: false,
          animal: "oso"

        },
        {
          numero: 8,
          texto: "¿Te consideras fiel?",
          model: null,
          seleccionada: false,
          animal: "tiburon"

        },
        {
          numero: 9,
          texto: "¿Sueles mentir?",
          model: null,
          seleccionada: false,
          animal: "araña",

        },
        {
          numero: 10,
          texto: "¿Lloras siempre que lo necesitas?",
          model: null,
          seleccionada: false,
          animal: "koala",

        },
        {
          numero: 11,
          texto: "Si tienes un examen, ¿cuánto te lo preparas?",
          model: null,
          seleccionada: false,
          animal: "jaguar",

        },
        {
          numero: 12,
          texto: "¿Cuál es tu capacidad de concentración?",
          model: null,
          seleccionada: false,
          animal: "tiburon",

        },
        {
          numero: 13,
          texto: "¿Te consideras protector de la gente a la que quieres?",
          model: null,
          seleccionada: false,
          animal: "lobo",

        },
        {
          numero: 14,
          texto: "¿Prefieres la compañia a estar solo?",
          model: null,
          seleccionada: false,
          animal: "lobo",

        },
        {
          numero: 15,
          texto: "¿Te consideras una persona perezosa?",
          model: null,
          seleccionada: false,
          animal: "koala",

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
          let koala = this.animales.find(a => a.nombre == "koala");
          let lobo = this.animales.find(a => a.nombre == "lobo");
          let mariposa = this.animales.find(a => a.nombre == "mariposa");
          let oso = this.animales.find(a => a.nombre == "oso");
          let aguila = this.animales.find(a => a.nombre == "aguila");
          let araña = this.animales.find(a => a.nombre == "araña");
          let jaguar = this.animales.find(a => a.nombre == "jaguar");
          let tiburon = this.animales.find(a => a.nombre == "tiburon");


          switch (animal) {
            case "koala":
              koala.puntos += parseInt(element[i].value)
              break;
            case "lobo":
              lobo.puntos += parseInt(element[i].value)
              break;
            case "mariposa":
              mariposa.puntos += parseInt(element[i].value)
              break;
            case "oso":
              oso.puntos += parseInt(element[i].value)
              break;
            case "araña":
              araña.puntos += parseInt(element[i].value)
              break;
            case "tiburon":
              tiburon.puntos += parseInt(element[i].value)
              break;
            case "jaguar":
              jaguar.puntos += parseInt(element[i].value)
              break;
            case "aguila":
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
.img {
  max-width: 100%;
  height: 50vh;
  opacity: 0.8;
}
</style>