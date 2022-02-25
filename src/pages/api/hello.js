// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//passa os parâmetros via url
export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe",
    metodo: req.method,
    nome: req.query.idade,
    //mais transforma em um valor numérico
    idade: +req.query.idade,
  });
}
