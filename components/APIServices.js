export default class APIServices{
    // Insert an article
    static InsertArticle(items){
        return fetch(`http://localhost:5000/predict`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(items)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}