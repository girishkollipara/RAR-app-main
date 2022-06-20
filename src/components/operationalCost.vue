<template>
    <h3>Operational Cost</h3>
    <table>
        <tr>
            <th>Emp Id</th>
            <th>Expensecode(INT,MOB) </th>
            <th></th>
        </tr>
        <tr>
            <td>1001</td>
            <td>MOB-008</td>
            <td></td>
        </tr>
        <tr> 
            <td>1002</td>
            <td>INT-009</td>
            <td></td>
        </tr>
        <tr>
            <th>Emp Id</th>
            <th>Organisation</th>
            <th>Type of Expenses(H1 Transfer)</th>
        </tr>
        <tr>
            <td>1000</td>
            <td> Averon Solutions</td>
            <td> H1 Transfer</td>
        </tr>
        <tr>
            <td>1002</td>
            <td> SNAD</td>
            <td> H1 Transfer</td>
        </tr>
        <tr>
            <th>Emp Id</th>
            <th>Organisation</th>
            <th>Type of Expenses(Travel)</th>
        </tr>
        <tr>
            <td>1000</td>
            <td> SNAD</td>
            <td> Trav-001</td>
        </tr>
        <tr>
            <td>1002</td>
            <td> AveronSolutions</td>
            <td> Trav-001</td>
        </tr>
    

    

    </table>
</template>
<script>
export default {
    name:'operationalCost'
    
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
    border-bottom:1px solid;
}

</style>