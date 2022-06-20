<template>

<div class="main-box">
    <div class="child-part1">
    <!-- <input type="checkbox" id="check"> -->
    <!-- <label for="check">
      <i class="fas fa-bars" id="btn" style="margin-left:-642px"></i>
      <i class="fas fa-times" id="cancel" style="margin-left:-370px"></i>
    </label> -->
    <div class="sidebar">
      <div class="">
        <img alt="" src="../assets/snadicon.png" />
      </div>
        <router-link to="/Launchpage">  <a href="#" class="active" style="background-color:white" >
        <!-- <i class="fas fa-qrcode"></i> -->
   <span>Dashboard</span>
      </a>
      </router-link>
       <router-link to="/ldbpage">  
      <a href="#" style="background-color:white" class="active">
        <i class="fas fa-link"></i>
        <span >Load data </span>
      </a>
      </router-link>
<router-link to="/amdpage">
      <a href="#" style="background-color:white" class="active">
        <i class="fas fa-stream"></i>
        <span>Amend details</span>
      </a>
      </router-link>
      <a href="#" style="background-color:white" class="active">
         <i class="fas fa-calendar"></i>
        <span>Reporting portal</span>
      </a>
      <!-- <a href="#" style="background-color:white" class="active">
        <i class="far fa-question-circle"></i>
        <span>About</span>
      </a> -->

      <!-- <a href="#" style="background-color:white" class="active">
        <i class="fas fa-sliders-h"></i>
        <span>Services</span>
      </a>
      <a href="#">
        <i class="far fa-envelope"></i>
        <span>Contact</span>
      </a> -->
    </div>
    <div class="child-part2" style="margin-top:-382px" >
        <div>
<div class="Expenses" >
    <h3>Gross profit</h3>
    <h3>Before taxes</h3>
    <p>$ 180,000</p>
  <h6 style="color: yellow;">Acess data</h6>
   
</div>
</div>
<div>
             <div class="receive">
            <h3>Active Employees</h3>
            <p>222</p>
          <router-link to="/activeemplydata" > <button @click="() =>togglepopup"><h6 style="color: blue;">Acess data</h6></button></router-link>
        
</div>
    <div class="Expenses1">
            <h3> Employee Expenses</h3>
            <p>$5,803</p>
          <router-link to="/emplyexpensesData" ><h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
     <div class="Expenses2">
            <h3>Outstanding Receivables</h3>
            <p>$ 1.2 M</p>
             <h6 style="color: blue;">Acess data</h6>
        
    </div>
     <div class="Expenses3">
            <h3>Managment Expenses</h3>
            <p>$ 128 k</p>
           <router-link to="/mngmtexpensesData"> <h6 style="color: blue;">Acess data</h6>
           <slot/></router-link>
    </div>
      <div class="Expenses4">
            <h3>Payroll Expenses</h3>
            <p>$ 4.8 M</p>
           <router-link to="/payrollData"><h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
     <div class="Expenses5">
            <h3>Operational Costs</h3>
            <p>$ 68 k</p>
          <router-link to="/operationalCost">  <h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
    
</div>

    </div>
    
    </div>
</div>

  





</template>
<script>
// import { get } from 'http';

// import { } from 'process'



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'launchpage',

        
      }
//       setup() {
// const popuptriggers=ref({
//   buttontrigger:false,
//   buttonTrigger:false,
// });
      

      
        
      
    
    
  

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans:600&display=swap');
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
child-part1{
    width: 15%;
}
child-part2{
   max-width:24%;
    padding:21px;
    border-radius: 25px;
    margin-left:411px;
    margin-top:-382px;
    
}
.h6{
    color:blue;
}



   



.gros{
     box-sizing: border-box;
  font-family: sans-serif;
  
  background-color: blue;
margin-right:85px;
  
  padding: 20px;

}
.receive{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:18%;
border-radius:25px;
background-color:  white;
padding: 8px;
margin-left: 631px;
margin-left: 631px;
    margin-top: -123px;
    
  
  
}
.Expenses{
 box-sizing: border-box;
  font-family: sans-serif;
margin-left: 370px;
   

  
width:18%;
border-radius:25px;
background-color: blue;
padding: 20px;
}
.Expenses1{
 box-sizing: border-box;
  font-family: sans-serif;

  
width:18%;
border-radius:25px;
background-color: white;
padding: 20px;
margin-left: 623px;
    margin-top: 10px;

}
.Expenses2{
 box-sizing: border-box;
  font-family: sans-serif;

  
width:18%;
border-radius:25px;
background-color:  white;
padding: 8px;
margin-left: 875px;
    margin-top: -209px;
}
.Expenses3{
 box-sizing: border-box;
  font-family: sans-serif;

  
width:18%;
border-radius:25px;
background-color: white;
padding: 12px;
margin-left: 875px;
    margin-top: 19px;
}
.Expenses4{
 box-sizing: border-box;
  font-family: sans-serif;

  
width:16%;
border-radius:25px;
background-color:  white;
padding: 12px;
margin-top: -182px;
    margin-left: 1130px;
}
.Expenses5{
 box-sizing: border-box;
  font-family: sans-serif;

  
width:16%;
border-radius:25px;
background-color:  white;
padding: 12px;
margin-top: 12px;
    margin-left: 1130px;
}

  
.sidebar{
  width: 240px;
  left: -240px;
  height: 100%;
  
}
.sidebar header{
  font-size: 28px;
  color:black;
  line-height: 70px;
  text-align: center;
  background:white;
  user-select: none;
  font-family: 'Montserrat', sans-serif;
}
.sidebar a{
  display: block;
  height: 65px;
  width: 100%;
  color: white;
  line-height: 65px;
  /* padding-left: 30px; */
  box-sizing: border-box;
  border-bottom: 1px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.925);
  /* //border-left: 5px solid transparent; */
  font-family: 'Open Sans', sans-serif;

}
a.active,a:hover{
  /* border-left: 5px solid #b93632; */
  color:black;
    /* background-color: blue !important ; */
}
.sidebar a i{
  font-size: 23px;
  margin-right: 16px;
}
.sidebar a span{
  letter-spacing: 1px;
 
}
#check{
  display: none;
}
label #btn,label #cancel{
  position: absolute;
 
  color: white;
  border-radius: 5px;
  border: 1px solid #262626;
  margin: 15px 30px;
  font-size: 29px;
  background: #262626;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
 
}
label #cancel{
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ .sidebar{
  left: 0;
}
#check:checked ~ label #btn{
  margin-left: 245px;
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ label #cancel{
  margin-left: 245px;
  opacity: 1;
  visibility: visible;
}
@media(max-width : 860px){
  .sidebar{
    height: auto;
    width: 70px;
    left: 0;
    margin: 100px 0;
  }
  header,#btn,#cancel{
    display: none;
  }
  span{
    position: absolute;
    margin-left: 23px;
    opacity: 0;
    visibility: hidden;
  }
  .sidebar a{
    height: 60px;
  }
  .sidebar a i{
    margin-left: -10px;
  }
  /* a:hover {
    width: 200px;
    background: inherit; */
  /* } */
  .sidebar a:hover span{
    opacity: 1;
    visibility: visible;
  }
}
</style>