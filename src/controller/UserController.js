const Participante = require("../models/usuarios");

const ParticipantController = {
  // Criar um novo participante
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      // Verificar se o participante já está inscrito no evento
      const participanteExistente = await Participante.findOne({
        where: { email, eventoId },
      });

      if (participanteExistente) {
        return res.status(400).json({
          msg: "Usuario já registrado neste evento",
        });
      }

      const novoParticipante = await Participante.create({
        nome,
        email,
        eventoId,
      });

      return res.status(200).json({
        msg: "Usuario criado com sucesso",
        participante: novoParticipante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar o Usuario.",
      });
    }
  },

  // Buscar um participante específico
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const participante = await Participante.findByPk(id);

      if (!participante) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
      }

      return res.status(200).json({
        msg: "Usuario encontrado com sucesso",
        participante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar o Usuario." });
    }
  },

  // Buscar todos os participantes
  getAll: async (req, res) => {
    try {
      const participantes = await Participante.findAll();
      return res.status(200).json({
        msg: "Usuario encontrados com sucesso",
        participantes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar os Usuario." });
    }
  },

  // Atualizar um participante
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoId } = req.body;

      const participante = await Participante.findByPk(id);
      if (!participante) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
      }

      await participante.update({ nome, email, eventoId });

      return res.status(200).json({ msg: "Usuario atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao atualizar o Usuario." });
    }
  },

  // Excluir um participante
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const participante = await Participante.findByPk(id);
      if (!participante) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
      }

      await participante.destroy();
      return res.status(200).json({ msg: "Usuario excluído com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao excluir o Usuario." });
    }
  },

  getParticipantes: async (req, res) => {
    try {
      const { eventoId } = req.params;

      const participantes = await Participante.findAll({
        where: { eventoId: eventoId }
      });

      if (!participantes) {
        return res.status(404).json({
          msg: 'Erro ao buscar participantes por evento específico'
        })
      };

      return res.status(200).json({
        participantes
      })


    } catch (error) {
      return res.status(500).json({
        msg: 'Acione o suporte!'
      })
    }
  }
};

module.exports = ParticipantController;