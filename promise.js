//const FoodOrder=new Promise((resolve, reject) => {
    //let foodReady=true;
  //  if(foodReady){
  //      resolve('Food is ready');
  //  }
   // else{
    //    reject('Food is not ready');
   // }
//})
//FoodOrder
//.then((result)=>console.log(result)) // it works if success
//.catch((error)=>console.log(error))  // failed



const getUsers=async()=>{
    console.log('Fetching users...');
const response=await fetch('https://jsonplaceholder.typicode.com/users');
const data=await response.json();
console.log(data);

const email=data.map((n)=>n.email);
console.log(email);
}
getUsers();