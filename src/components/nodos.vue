 <template>
  <div id="app">
  <main>
  <h2>Actualizar las lista de nodos</h2>
  <button id="btn" class="" v-on:click="getJokes">Nodos</button>
  <div v-if="loading">
    <img src="../capart/giphy.gif">
  </div>
  <div class="wrapper">
    <div class="row">
      <div class="panel panel-default" v-for="post in posts" :key="post.id">
         <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Niveles</th>
                <th scope="col">Creación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ post.topic }}</td>
                <td>{{ post.numberLevels }}</td>
                <td>{{post.creationDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script>
import {API} from '../axios'
export default {
  name: 'App',
  data () {
    return {
      posts: [],
      loading: false
    }
  },
  methods: {
    getJokes: function () {
      this.loading = true
      API.get('graphs')
        .then((response) => {
          this.loading = false
          this.posts = response.data
        }, (error) => {
          console.log(error)
          this.loading = false
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

button {
  background: #51B767;
  color: #ffffff;
  padding: 15px;
  border-radius: 0;
  font-weight: bold;
  font-size: 15px;
  border: 0;
}

.cards {
  background: #F5F5F5;
  height:400px;
}
 .cards:hover {
  transform: translateY(-0.5em);
  background: #EBEBEB;
}

.cards {
   column-count: 1;
  column-gap: 1em;
    margin-top: 70px;
}
</style>
