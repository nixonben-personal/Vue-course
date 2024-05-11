const app = Vue.createApp({
    data() {
      return {
       name:'',
       secondName:'',
       secondNameToShow:''
      };
    },
    methods:{
      showAlert(){
        alert('Hey its vuse course')
      },
getValue(event){
this.secondName=event.target.value
},
      setValue(event){
this.name=event.target.value;
      },
      displayValue(){
        return this.secondNameToShow=this.secondName
      }
    }
  });
  
  app.mount('#assignment');
  