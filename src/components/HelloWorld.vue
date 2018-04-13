 <template>
  <div id="app">
  <main>
  <h2>Actualizar las lista de nodos</h2>
  <button id="btn" class="" v-on:click="getJokes">Nodos</button>
  <div v-if="loading">
    Cargando...
  </div>
  <div class="wrapper">
    <div class="row">
      <div class="panel panel-default" v-for="post in posts" :key="post.id">
         <div class="panel-heading">
            <span><h3>{{ post.id }}</h3></span>
         </div>
         <div class="panel-body">
            <div class="row">
            <div class="col-md-6">Title:
              <strong>{{ post.title }}</strong>
            </div>
            <div class="col-md-6">Body:
              <strong>{{ post.body }}</strong>
            </div>
          </div>
        </div>
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
      API.get('posts')
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
