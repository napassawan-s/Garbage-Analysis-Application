export default class APIServices{
    // Insert an article
    static InsertArticle(items){
        console.log("photos " + items)
        //console.log("base64 " + items[0]['base64'])
        return fetch(`http://172.20.10.8:5000/predict`,{
            'method':'POST',
             headers : {
            'Accept': 'application/json', // It can be used to overcome cors errors
            'Content-Type':'application/json'
      },
      body:JSON.stringify(items)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}