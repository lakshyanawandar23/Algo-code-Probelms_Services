const SanitizeMarkdown = require("../utils/markdown");


class ProbelmService{
       constructor(ProbelmRepository){
              this.ProbelmRepository=ProbelmRepository;
       }
    async createProbelm(ProbelmData){
       console.log(ProbelmData);
       ProbelmData.description=SanitizeMarkdown(ProbelmData.description);
       const probelm=this.ProbelmRepository.createProbelm(ProbelmData);
       return probelm;
    }
    async getAllProbelms(){
      const probelms=this.ProbelmRepository.getProbelms();
      console.log(probelms,"service");
      return probelms;
    }
    async getProbelm(id){
      const probelm=this.ProbelmRepository.getProbelmbyId(id);
      return probelm;
    }
    async delete(id){
     const probelm= this.ProbelmRepository.DeleteProbelm(id);
      console.log("deleted probelm");
      return probelm;
    }
    async Update(id,newdata){
     const probelm= this.ProbelmRepository.UpdateProbelm(id,newdata);
     return probelm;
    }
}

module.exports=ProbelmService;