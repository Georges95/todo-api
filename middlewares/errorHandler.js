function errorHandler(error, req, res, next){

    if(error.name==="ValidationError"){

        const errors = Object.values(error.errors).map(err => err.message);

        return res.status(400).json({

            errors

        });

    }

    res.status(500).json({

        message:"Erreur interne du serveur."

    });

}