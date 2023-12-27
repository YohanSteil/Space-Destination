const dataMapper = require('../dataMapper');

const mainController = {
    destinationPage: async (req, res) => {
        try {
          const destinations =  await dataMapper.getAllDestination();
          res.render('destination',{destinations : destinations})
        } catch (error) {
          console.error(error);
          res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
      },
      destinationName: async (req, res) => {
        try {
            const destinationName = req.params.name ; 
          const allDestinations =  await dataMapper.getAllDestination();
          const oneDestination = allDestinations.find(destination =>  destination.name.toLowerCase() === destinationName.toLowerCase());

          if (!oneDestination) {
            // Gérer le cas où la destination n'est pas trouvée
            res.status(404).send('Destination not found');
            return;
        }

          res.render('destinationName',{oneDestination : oneDestination})

        } catch (error) {

          console.error(error);
          res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
      }
      

}

module.exports=mainController;