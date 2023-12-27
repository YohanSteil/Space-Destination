const { Router } = require('express');
const router = Router();
const data = require('./starter-code/data.json');
const mainController = require('./controller/mainController');
const crewController = require('./controller/crewController');
const technoController = require('./controller/technoController');


router.get('/', (req,res)=>{
    res.render('index');
}) ;

router.get('/destination',mainController.destinationPage);
 
router.get('/destination/:name',mainController.destinationName) ;

router.get('/crew',crewController.crewPage) ;

router.get('/crew/:role', crewController.crewPageRole) ;

router.get('/technology', technoController.allTechno) ;

router.get('/technology/:name', technoController.oneTechno) ;



module.exports = router;