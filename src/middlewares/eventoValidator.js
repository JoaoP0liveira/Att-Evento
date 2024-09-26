const validateEvento = (req, res, next) => {
    const { nome, data, localizacao } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !data || !localizacao) {
        return res.status(400).json({
            msg: "Campos inválidos para evento. Por favor, preencha todos os campos obrigatórios.",
        });
    }

    // Pode avançar
    return next();
};

const validateEventoId = (req, res, next) => {
    const { id } = req.params;

    // Verifica se o ID foi fornecido
    if (!id) {
        return res.status(400).json({
            msg: "ID do evento faltando.",
        });
    }

    // Pode avançar
    return next();
};

module.exports = { validateEvento, validateEventoId };