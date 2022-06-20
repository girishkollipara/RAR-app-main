<template>
    <h3>PayrollExpenses</h3>
    <form class="pay">
    <table>
        <tr>
            
            <th>Employee Id</th>
            <th> No of Hours</th>
            <th>Pay Rate</th>
            <th> Gross Pay</th>
        </tr>
        
       <tr v-for="(employeedata,index) in responsedata" :key="index">
        <!-- <td >{{employeedata.id}}</td> -->
<td>{{employeedata.employeeid}}</td>
<td>{{employeedata.noofhours}}</td>
<td>{{employeedata.payrate}}</td>
<td>{{employeedata.grosspay}}</td>
<!-- <td>{{employeedata.role}}</td>
<td>{{employeedata.entity}}</td> -->

       </tr>
        <!-- <tr>
            <td> 1000 </td>
            <td> 48 </td>
            <td> 31.25</td>
            <td>1500</td>
        </tr>
        <tr>
            <td> 1001</td>
            <td> 160 </td>
            <td> 31.25</td>
            <td> 5000 </td>
         </tr>
         <tr>
            <td> 1002</td>
            <td> 168 </td>
            <td> 31.25</td>
            <td> 5250 </td>
         </tr>
         <tr>
            <td> 1003</td>
            <td> 184 </td>
            <td> 31.25</td>
            <td> 5750 </td>
         </tr>
         <tr>
            <td> 1004</td>
            <td> 160 </td>
            <td> 31.25</td>
            <td> 5000 </td>
         </tr> -->
         
    </table>
    </form>
</template>
<script>
 import payroll from '../services/payroll'
export default {

    name:'payrollData',
      data:function(){
   return {
//  name:'jack',
//       characters:['me','you','anand','nikhil'],
//       employeedata:[
        
//          { EmployeeNumber:'1000',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//            { EmployeeNumber:'1001',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//             { EmployeeNumber:'1002',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//              { EmployeeNumber:'1003',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//       ],
      responsedata:[]
      }
      },
        mounted() {

  this.fetch();

  },

    created () {

        this.fetch();

      },
      methods:{
  fetch() {

 payroll.getvalues().then(response=>{

this.responsedata=response.data;

//  console.log(response);
//  console.log("response" , this.responsedata)

 });
      }
        
        },
    
}

</script>
<style>
h3{
    font-family:sans-serif;
}
table {
border: 1px solid;
border-collapse: collapse;
border-radius:20px;
width:40%;
height: 30px;
font-size: 20px;
font-family:sans-serif;
}
th,td{
    text-align: left;
    padding: 15px;
    border-bottom:1px solid;

        font-family:sans-serif;
   }
   th {
    height: 50px;
    background-color: #f2f2f2;
}
</style>