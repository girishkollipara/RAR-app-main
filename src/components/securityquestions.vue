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
    <h2>Security Questions </h2>
    <br>
    <h4>please select  as per your choice and answer the below questions</h4>
    <br>
    <div class="security-div">
    <label for="Select Questions">
     <select name="Select Questions" value="Select Questions" id="Select Questions" required style="width: 100%;">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
   <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">

      <label for="Select Questions">
     <select name="Select Questions" value="Select Questions" id="Select Questions" required style="width:100%" >
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
   <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">

      <label for="Select Questions">
     <select name="Select Questions" value="Select Questions" id="Select Questions" required style="width:100%">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
   <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">
    </div>
       <router-link to="resetpassword"><button  class= "button" @click="Continue">Continue</button></router-link>


</form>
</div>


</div>


</template>

<script>
// eslint-disable-next-line no-unused-vars
import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
export default { 
    // eslint-disable-next-line vue/multi-word-component-names
     name: "login",
     data:function () {
       return {
         UserId : '',
         Password:'',
         Entity:''

       }
     },
     validations:{
         // eslint-disable-next-line no-undef
         UserId:{
           required,
           minLength: minLength(8),
           maxLength: maxLength(16),

         },
         Password:{
           required,
           minLength: minLength(8),
           maxLength: maxLength(16),
         }
     },
     methods:{
           validationStatus: function(validation) {
             return typeof validation !="undefined" ? validation.$error : false;
           },

       Submit: function(){
         this.$v.$touch();
         if (this.$v.$pending || this.$v.$error) return;

         alert('Data Submit');


       },
     }  
}

</script> 

<style>
.security-div{
   display: flex;
    flex-direction: column;
}
.main-container{
  /* display: flex; */
  flex-direction: column;
}
.child-div1{
  
}
.child-div2{
  
}

div{
  text-align: center;
}
.backbtn{
    text-align: left;
}
h1{
  /* text-align: center; */
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
p{
  /* margin: 0px !important; */
}
h1{
  /* margin: 0px !important; */
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


.user{
  

}



.user::placeholder{
  color: #aaaaaa;

}
h1{
  /* font-family: sans-serif; */
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
h1{
  /* text-align: center  ;
  margin-left:-600px;
  font-size:50px;
  margin-top: 20px; */
  

}
p{
  /* text-align: center  ;
  margin-left:-600px;
  font-size: 30px; */
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