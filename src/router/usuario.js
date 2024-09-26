const express = require('express');
const router = express.Router();
const ParticipantController = require('../controller/UserController');
const { validateUsuario, validateUsuarioId } = require('../middlewares/usuarioValidator');

// Listar todos os participantes
router.get('/', ParticipantController.getAll);

// Criar um novo participante com validação
router.post('/', validateUsuario, ParticipantController.create);

// Buscar um participante específico
router.get('/:id', validateUsuarioId, ParticipantController.getOne);

// Atualizar um participante com validação
router.put('/:id', validateUsuarioId, validateUsuario, ParticipantController.update);

// Excluir um participante
router.delete('/:id', validateUsuarioId, ParticipantController.delete);

router.get('/por-evento/:eventoId', ParticipantController.getParticipantes);

module.exports = router;