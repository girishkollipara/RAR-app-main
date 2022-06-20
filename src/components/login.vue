<template>
<div class = "main-container"> 

  <div class="child-div1">
  <h1><b>ANALYZE</b></h1>
  <p>TODAY'S CHALLANGES</p>
  
  <h1><b>ENVISION</b></h1>
  <P>TOMMOROW'S INNOVATION</P>

  </div>
  
   <div class="child-div2">
   
    
 
  <form  class="loginhere">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h2>Login here </h2>
     <div class="forms">
       <div class="forms1">
      <label for="UserId"></label>
      <input type="text" class="user" placeholder="UserId" v-model="person.UserId"
            :class="
              v$.person.UserId.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.UserId.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
    <label for="Password"></label>
     <input type="password"   placeholder="Password"  class="user" 
      v-model="person.Password"
            :class="
              v$.person.Password.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
            <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Password.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>

   <br>
    <label for="Entity" placeholder="Entity" >
     <select  name="Entity" id="Entity" class="user"  v-model="person.Entity"
            :class="
              v$.person.Entity.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
     <option value="Entity">Slect Entity</option>
      <option value="Averon Solutions">Averon Solutions</option>
      <option value="SNAD">SNAD</option>
     </select>
        <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Entity.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
    </label>

    <div class="main-div">
      <div>
       <input type="checkbox" id="Remember me" value="Remember me" >
    <label for="remember me"> Remember me</label>
</div>
<div>
    <span>
      <router-link to = "/forgotpassword" font-family="red serifs" >
      <a>forgotpassword</a>
      </router-link>
    </span>
    </div>
    </div>
   
    <!-- <div class="FG">
     
    <nav> <router-link to = "/forgotpassword" font-family="red serifs" >
     
        
      forgotpassword
      </router-link>  
    </nav>
    </div>
   <br>
   <div class="remember">
    
    <input type="checkbox" id="Remember me" value="Remember me" >
    <label for="remember me"> Remember me</label>
    </div> -->
     
   <br>
    <!-- <router-link to="/launchpage"> -->
    <button  class= "button" @click.prevent="submit">Login </button>
    <!-- </router-link> -->
    <br>
    <br>

    <!-- <div class="regis"> -->
    <h3>New User?  <router-link to = "/registrationPage">Register Here</router-link> 

    </h3>
     <!-- <nav> -->
     <!-- <router-link to = "/registrationPage"><button  class= "button button1" @click="Register">Register </button></router-link>  -->
    <!-- </nav> -->
   <!-- </div> -->
   </div> 
   
      
  </form>  
</div>


</div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import loginapi from '../services/loginapi';
export default { 
    // eslint-disable-next-line vue/multi-word-component-names
     name: "login",

      data() {
    return {
      v$: useVuelidate(),
      person: {
        UserId: null,
        Password: null,
        Entity: null,
        rmemberMe: null,
        // errordata:"",
        meessage:""
        // message:""
        
      },
      //responsedata:[]
    };
  },
 
// setup(){
//     const getvalues= async()=>{
//             const response=await loginapi.getvalues();
//             console.log(response);
//         }
//          getvalues();
//         return{
//           getvalues,
//         }
       
//         },
  mounted() {
  this.fetch();
  },
    created () {
        this.fetch();
      },
  validations() {
    return {
      person: {
        UserId: {
          required: helpers.withMessage("UserId is required", required),
          $autoDirty: true,
        },
        Password: { required, $autoDirty: true },
        Entity: { required, $autoDirty: true },
        rmemberMe: {  $autoDirty: true },
      },
    };
  },
 methods: {
    // clearFields() {
    //   this.person = {
    //     UserId: null,
    //     Password: null,
    //     Entity: null,
    //     rmemberMe: null,
    //   };
    // },
      fetch() {
 loginapi.getvalues().then(response=>{
this.responsedata=response;
// console.log(response);
 });
            
    },
    submit() {
       this.v$.$touch();
       //console.log(this.person.UserId)
       //this.message="this is haripriya"
      // console.log(this.v$.person.UserId);
      //console.log(this.meessage)
      //console.log(e)
      // console.log(this.v$.$invalid);
// this.sendEmail(e)
       if(!this.v$.$invalid){
 this.responsedata=loginapi.getvalues().then(response=>{
//console.log(response,"response data");


if(response.data){
  //console.log("if condition")
        for (var i = 0; i < response.data.length; i++) {
         // console.log("for condition")
    //console.log(response.data[i].email,response.data[i].password,response.data[i].entity)
   // console.log(this.person.UserId,this.person.Password,this.person.Entity)
    if(response.status == 200){
     // this.errordata="";
    if(response.data[i].email == this.person.UserId && response.data[i].password == this.person.Password && response.data[i].entity == this.person.Entity){
    //     console.log(response.data[i].id,"id")
        // console.log("launch page")
     
         this.$router.push('launchpage');

       }
       else{
        // this.errordata="invalid";
       }
      
    }
}
}
  //  response.data.filter(function(item) {
  //       console.log(item);
  //         //console.log(this.v$.person.UserId);
  //      // console.log(person.UserId,person.Password,person.Entity)
  //      // if(item.firstName == this.person.UserId && item.Password == this.person.Password && item.entity == this.person.Entity){
  //        // console.log(item.id,"id")
  //      // }
  //     })

       //  return response.data
      
      // const response = getvalues();
       //console.log(response);
        
      //  this.$router.push('launchpage');
       })
//         console.log(this.responsedata)
// if(this.responsedata.data){
//         for (var i = 0; i < this.responsedata.data.length; i++) {
//     console.log(this.responsedata[i].email,this.responsedata[i].password,this.responsedata[i].entity)
//     console.log(this.person.UserId,this.person.Password,this.person.Entity)
//     if(this.responsedata[i].email == this.person.UserId && this.responsedata[i].password == this.person.Password && this.responsedata[i].entity == this.person.Entity){
//          console.log(this.responsedata[i].id,"id")
//          this.$router.push('launchpage');
//        }
// }
// }
      //   responsedata.filter(function(item) {
      //   console.log(item);
      //    // console.log(this.v$.person.UserId);
      //   console.log(this.person.UserId,this.person.Password,this.person.Entity)
      //   if(item.firstName == this.person.UserId && item.Password == this.person.Password && item.entity == this.person.Entity){
      //     console.log(item.id,"id")
      //   }
      // })
       }
 },
//  sendEmail(e) {
//      console.log("send mail")
//    console.log(e)
//    console.log(this.meessage)
      // try {
      //   emailjs.sendForm('service_6d3ojft', 'template_htjzpus', e.target, 'eqWuMXjFZYzAz8Iq6', {
      //     name: "Haripriya",
      //     email: "priyahari028@gmail.com",
      //     message: this.meessage,
      //   })

      // } catch (error) {
      //     console.log({error})
      // }
      // Reset form field
      // this.name = ''
      // this.email = ''
      // this.message = ''
  //  },
  }, 


    //  data:function () {
    //    return {
    //      UserId : '',
    //      Password:'',
    //      Entity:''

    //    }
    //  },
    //  validations:{
    //      // eslint-disable-next-line no-undef
    //      UserId:{
    //        required,
    //        minLength: minLength(8),
    //        maxLength: maxLength(16),

    //      },
    //      Password:{
    //        required,
    //        minLength: minLength(8),
    //        maxLength: maxLength(16),
    //      }
    //  },
    //  methods:{
    //        validationStatus: function(validation) {
    //          return typeof validation !="undefined" ? validation.$error : false;
    //        },

    //    Submit: function(){
    //      this.$v.$touch();
    //      if (this.$v.$pending || this.$v.$error) return;

    //      alert('Data Submit');


    //    },
    //  }  
}
</script> 

<style>
.font-thin{
  font-size: 14px;
  color: #c40b0b;
}
.main-container{
  display: flex;
  flex-direction: row;
}
.child-div1{
  width: 65%;
}
.child-div2{
  width: 35%;
}

div{
  text-align: center;
}
.backbtn{
    text-align: left;
}

input[type=text]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
}
input[type=password]{

    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
select{
    width: 28%;
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
input[type=button]{
    width: 10%; 
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color: rgb(119, 6, 6);
    color: white;
     font-family: sans-serif;
}
.button{
    
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #634ed8;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;
}
.button1{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
     font-family: sans-serif;
     transition: 0.5s;
}

 

.img{
  text-align: left 2px;
  margin-left:-10px ;
  margin-bottom: 10px;
}

.backbtn{
  align-items: baseline;
   font-family: sans-serif;
}
input[type="checkbox"] {
  -webkit-appearance: checkbox;
     -moz-appearance: checkbox;
          appearance: checkbox;
  display: inline-block;
  font-family: sans-serif;
 width: auto;
}
.FG{
   text-justify: auto;
   text-align: right;
}
body{
  background:-webkit-linear-gradient(left #bb8c9a) ;
  margin: 15px;
  margin-top: 50px;
  position: relative;
   font-family: sans-serif;

}  
.loginhere,
.loginhere * {
  box-sizing: border-box;
  font-family: sans-serif;
  margin:0px;


  
  

  
}


.loginhere{
  height: 97%;
   max-width: 400px;
   /* max-height: 5%; */
   margin: 10px auto;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);  
   
   margin-bottom: 0%;
   font-family: sans-serif;
   background-color:white;
   
}


.imgs{
  display: block;
  max-width: 125px;
  margin: 0 auto;
}
.forms{
  padding: 30px;


}





.user::placeholder{
  color: #aaaaaa;

}

.regis{
   box-sizing: border-box;
  font-family: sans-serif;
  margin-right: 75%;
  background: #eeee;
  margin-left: 5%;
  border-radius: 25px;


  
  
}
.form{
  background-color: #dddddd;
}


.main-div{
      display: flex;
    justify-content: space-around;
}
p{
  margin: 0px;
}
.child-div1{
  margin:0px !important
}




</style>
