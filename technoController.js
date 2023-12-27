const dataMapper = require('../dataMapper');

const technoController = {
    allTechno : async(req,res) =>{
        try{
            const allTechno = await dataMapper.getAllTechnology() ;
            res.render('technology', {allTechno : allTechno})
        }catch(error){
            
        }},
    oneTechno : async(req,res)=> {
        try{
            const oneTechno = req.params.name.trim().toLowerCase();
            const allTechnos = await dataMapper.getAllTechnology();
            
            const technology = allTechnos.find(techno => techno.name.trim().toLowerCase() === oneTechno) ; 

            if(!technology){
                res.status(404).send('Destination non trouvé');
                return;
            }

            res.render('oneTechnology',{technology : technology})



        }catch(error){

        }

    }
    }

module.exports=technoController;