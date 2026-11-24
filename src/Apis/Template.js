
const token=import.meta.env.VITE_MYAPI_KEY;
const author={
  'method':'GET',
  'headers':{
    'Authorization':`Bearer ${token}`,
    'accept':'application/json',
  }
};

  export const openserver=async(e)=>{
try{
const request=await fetch(e,author); //burdakı e dınamık olcak diyer kısımlarda ise custom hook ıle ypılacak

if(!request.ok){
throw new Error (`yanıt başarılı olamadı ${request.status}`);
}
if(request.status){

const response=await request.json();
return response;
}

}
catch(error){
 throw (error);
}
};

