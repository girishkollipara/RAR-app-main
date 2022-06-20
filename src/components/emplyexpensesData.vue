<template>
 <h3>Employee Expenses</h3>
 <table>  
 <tr>
            
            <th>Employeeid</th>
            <th>Organisation</th>
            <!-- <th>Period</th> -->
            <th> Expense code</th>
            <th>Expense Date</th>
            <th>Amount </th>
            <th>Payment Date</th>
            <th>Created By/Updated By </th>
            
        </tr> 
         <tr v-for="(employeedata,index) in responsedata" :key="index">
        
<td>{{employeedata.employeeid}}</td>
<td>{{employeedata.entity}}</td>
<td>{{employeedata.expensecode}}</td>
<td>{{employeedata.expensedate}}</td>
<td>{{employeedata.amount}}</td>
<td>{{employeedata.paymentdate}}</td>
<td>{{employeedata.createdby}}</td>

       </tr>
 </table>
</template>
<script>
import empexp from '../services/empexp'
export default {
 
    name:'emplyexpensesData',
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

 empexp.getvalues().then(response=>{

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
font-size: 15px;
font-family:sans-serif;
}
th,td{
    text-align: left;
    padding: 5px;
    border-bottom:1px solid;

        font-family:sans-serif;
   }
   th {
    height: 30px;
    background-color: #f2f2f2;
}
</style>