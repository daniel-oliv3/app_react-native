const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const Home = require('./models/home');
const Orcamento = require('./models/Orcamento');


app.use(express.json());

 //http://localhost:8080/public/upload/home/topo_v2.jpg
 //public/upload = /files
 //http://localhost:8080/files/home/topo_v2.jpg
app.use('/files', express.static(path.resolve(__dirname, "public", "upload")));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});



//Visualizar  
app.get('/', async (req, res) => {
    await Home.findOne()
    .then((datahome) => {
        return res.json({
            erro: false,
            datahome,
            url: "http://localhost:8080/files/home/"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum valor encontrado para a página home!"
        });
    });
  });

//Cadastrar  
app.post('/cadastrar', async (req, res) => {
    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados para página home cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para página home não foi cadastrado!"
        });
    });
});

//Listar Orçamento
app.get("/listar-orcamento", async (req, res) => {
    await Orcamento.findAll({
        attributes: ['id', 'name', 'subject'],
        order: [['id', 'DESC']]
    })
    .then((orcamento) => {
        return res.json({
            erro: false,
            orcamento
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum orçamento encontrado!"
        });
    });
});



//Cadastrar Orçamento  
app.post('/cadastrar-orcamento', async (req, res) => {

    /*await sleep(3000);

    function sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }*/

    await Orcamento.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Orçamento enviado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Orçamento não foi enviado!"
        });
    });
});

//Visualizar orçamento "descrição"
app.get("/visualizar-orcamento/:id", async (req, res) => {
   const {id} = req.params;
   await Orcamento.findByPk(id)
   .then((orcamento) => {
       return res.json({
           erro: false,
           orcamento
       });
   }).catch(() => {
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Orçamento não foi enviado!"
    });
   }); 
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
  });

 