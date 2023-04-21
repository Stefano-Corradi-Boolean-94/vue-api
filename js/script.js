const {createApp} = Vue;


createApp({

  data(){

    return{
      messaggio : '',
      error: false,
      errore:'',
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/'
    }

  },

  methods: {
    getApi(query){

      axios.get(this.apiUrl + query)
        .then( (result) =>{
          // il corpo della risposta che a noi interessa è nella proprietà data 
          console.log(result.data);
          // in questa API mi serve la proprità response
          // e la savo in un mio data
          this.messaggio = result.data.response
    
        })  
        .catch( errore => {
          console.log(errore);
          this.error = true
          this.errore = errore
        })
    }
  },

  mounted(){
    this.getApi('sentence ');

  }

}).mount('#app')