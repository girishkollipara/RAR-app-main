
<template>
<!-- <router-view> -->
<h2> Active Employee Data </h2>
    <table>

        <div id="customers">
        <tr>
            <td> Employee Number</td>
            <td> First Name </td>
            <td> Last Name </td>
            <td> Email </td>
            <td> Contact Number </td>
            <td> Role </td>
            <td> Client name </td>
            <td> Action </td>
        </tr>

       

     </div>  
    </table> 
    

    
   
<!-- </router-view> -->
<router-view/>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'employeedata',
        data () {
             return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
            
}
			
        }



    
    
      
</script>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}



</style>