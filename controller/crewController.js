const dataMapper = require('../dataMapper');

const crewController = {
    crewPage: async (req, res) => {
        try { 
            const allRole = await dataMapper.getAllCrew();
            res.render('crew', {allRole : allRole})

        } catch (error) {
          console.error(error);
          res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    crewPageRole: async (req,res) => {
        try{

            const roleName = req.params.role.trim().toLowerCase() ; 
            const allRole = await dataMapper.getAllCrew();
            const oneRole = allRole.find(crew => crew.role.trim().toLowerCase()  === roleName) ;

            if(!oneRole){
                res.status(404).send('Destination non trouvé');
                return;
            }

            res.render('crewname', {oneRole : oneRole})
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = crewController ; 