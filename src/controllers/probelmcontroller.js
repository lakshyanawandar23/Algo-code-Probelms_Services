function pingProbelm(req,res){
   return  res.send('Ping Probelms');
}

function addProbelm(req,res){
      return res.status(501).json("Not implemented");
}

function getProbelm(req,res){
   return res.status(501).json("Not implemented");
}

function getProbelms(req,res){
   return res.status(501).json("Not implemented");
}

function deleteProbelm(req,res){
   return res.status(501).json("Not implemented");
}


module.exports={addProbelm,getProbelm,getProbelms,deleteProbelm,pingProbelm};