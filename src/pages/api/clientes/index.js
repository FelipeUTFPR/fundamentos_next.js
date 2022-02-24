//acessando a requisição via postman "http://localhost:3000/api/clientes"

export default function handler(req, res){
    if(res.mathod === "GET"){
        handlerGet(req, res)
    } else {
        res.status(405).send()
    }
    
   

    
}

function handleGet(req, res){
    res.status(200).json({
        id:3,
        nome:"Maria",
        email: "mariamariamaria@xcfmail.com"
    })
}