import moviesModel from "../../views/content/models/movies.js";

export function GetList(req,res,next){
    moviesModel.find((err, moviesCollection) =>{
        if(err){
            console.error(err);
            res.end(err);
      
        }
    
        res.json({success: true, msg: 'success!', movies: moviesCollection, user:req.user})
    

    })
}


export function Get(req,res,next){
    let id = req.params.id;

    moviesModel.findById(id,(err,movie)=>{
        if(err){
            console.error(err);
            res.end(err);
        }
    
        res.json({success: true, msg: 'succeeded', movie, user: req.user})

    });
}