<template>
<h3> Outstanding Receivables Cost</h3>
<table>
        <tr>
            
            <th>Client Id</th>
            <th> Client Name</th>
            <th> Outstanding Receivables</th>
            <th>Total Amount</th>
            
            
        </tr>
        <tr>
            <td> 101 </td>
            <td> Infosys </td>
            <td> $7.905</td>
            <td> -</td>
            
        </tr>
        <tr>
            <td> 101 </td>
            <td> Infosys </td>
            <td>$6521.25</td>
            <td> -</td>
            
        </tr>
         <tr>
            <td> 101 </td>
            <td> Infosys </td>
            <td>$7461</td>
            <td>$13,990.15</td>
            
        </tr>
</table>
</template>
<script>
export default {
    name:'orcData'
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