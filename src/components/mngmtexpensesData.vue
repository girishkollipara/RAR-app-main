<template>
<h3>Management Expenses</h3>
<table>
    <tr>
            
            <th>Employeeid</th>
            <th>First Name</th>
            <th> Last Name</th>
            <th>Amount</th>
            <!-- <th> </th>
            <th>Approved By</th>
            <th>Payment Date</th>
            <th>Created By/Updated By </th> -->
</tr>
 <tr v-for="(employeedata,index) in responsedata" :key="index">
       
<td>{{employeedata.mgmtempid}}</td>
<td>{{employeedata.firstName}}</td>
<td>{{employeedata.lastname}}</td>
<td>{{employeedata.amt}}</td>
<!-- <td>{{employeedata.role}}</td>
<td>{{employeedata.entity}}</td> -->

       </tr>
        
</table>
</template>
<script>
import mgmtexp from '../services/mgmtexp'
// import empdata from '../services/empdata'
export default {
    name:'mngmtexpensesData',
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

mgmtexp.getvalues().then(response=>{

this.responsedata=response.data;

//  console.log(response);
//  console.log("response" , this.responsedata)

 });
//  empdata.getvalues().then(response=>{

// this.responsedata=response.data;

// //  console.log(response);
// //  console.log("response" , this.responsedata)

//  });
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