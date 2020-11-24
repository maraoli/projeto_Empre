const produtos = require('../../api/produtos.json');

module.exports ={
    async index(req, res){
        produtos ? res.status(200).json(produtos) : res.status(400).json({error: 'Não entendi sua solicitação'})
    }
}
