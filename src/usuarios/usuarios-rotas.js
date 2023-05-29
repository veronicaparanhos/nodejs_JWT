const usuariosControlador = require("./usuarios-controlador");
const passaport = require("passport");

module.exports = (app) => {
	app
		.route("/usuario/login")
		.post(
			passaport.authenticate("local", { session: false }),
			usuariosControlador.login
		);

	app
		.route("/usuario")
		.post(usuariosControlador.adiciona)
		.get(usuariosControlador.lista);

	app.route("/usuario/:id").delete(usuariosControlador.deleta);
};
