const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = jsonServer.create();
const router = jsonServer.router("db.json");
app.db = router.db;
const rules = auth.rewriter({
    users: 600,
    dados_usuarios: "dados_usuarios",
    vinculo_medico_paciente: 640,
    consultas: 640,
    diagnosticos: 640,
    antecedentes: 640,
});
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);
console.log("Server is running on port:", port);
