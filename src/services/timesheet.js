import API from './API'
// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
export default{
    
    getQuote(){
        return API('http://localhost:3000/').get('/timesheet')
    },
    createpost(data){
        return API('http://localhost:3000/').post('/timesheet',data)
    },
    getvalues(){
        return API('http://localhost:3000/').get('/timesheet')
    },

}