const express =require('express');
const router = express.Router();
const estoqueController=require('../controllers/estoqueController');

router.get('/',estoqueController.get);
router.get('/:matricula',estoqueController.getByMatricula);
router.post('/',estoqueController.register);
router.put('/:idEstoque',estoqueController.update);
router.delete('/:idEstoque',estoqueController.delete);

module.exports = router;