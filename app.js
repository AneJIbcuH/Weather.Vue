const App = {
    data() {
        return {
          city: '',
          error: '',
          info: null
        }
      },
      computed: {
        cityName() {
          return '"' + this.city + '"'
        },
        showTemp() {
          return 'Температура:' + this.info.main.temp
        },
        showFeelsLike() {
          return 'Ощущается как:' + this.info.main.feels_like
        },
        showMinTemp() {
          return 'Минимальная температура:' + this.info.main.temp_min
        },
        showMaxTemp() {
          return 'Максимальная температура:' + this.info.main.temp_max
        }
      },
      methods: {
        getWeather () {
          if(this.city.trim().length < 2) {
            this.error = 'Нужно название более одного символа епсель мопсель'
            return false
          }
    
          this.error = ''
    
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=fe6a245b977754770c24f7fb45c3004f`)
               .then(res => (this.info = res.data)) 
        }
      }
}

Vue.createApp(App).mount('#app')