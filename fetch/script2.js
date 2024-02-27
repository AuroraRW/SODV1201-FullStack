async function getData(){
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts")
        if (response.ok){
            const jsonResponse = await response.json()
            console.log(jsonResponse)
        }else{
            throw new Error("Request Failed!")
        }
    }catch(error){
        console.log(error)
    }
    
}
getData()