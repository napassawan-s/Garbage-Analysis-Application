export default class APIServices{
    static Predict(items){
        console.log("photos " + items)
        return fetch(`http://172.20.10.8:5000/predict`,{
            'method':'POST',
             headers : {
            'Accept': 'application/json',
            'Content-Type':'application/json'
      },
      body:JSON.stringify(items)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}