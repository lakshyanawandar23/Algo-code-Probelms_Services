const { Probelm } = require('../models');

class ProbelmRepository {
    async createProbelm(ProbelmData) {
        console.log(ProbelmData);
        try {
            const probelm = await Probelm.create({
                title: ProbelmData.title,
                stubus:ProbelmData.stubus,
                description: ProbelmData.description,
                testCases: ProbelmData.testCases ? ProbelmData.testCases : [],
                editorial:ProbelmData.editorial?ProbelmData.editorial:" "
            })
            return probelm;
        }
        catch (e) {
            console.log("error in probelm created");
        }
    }
    async getProbelms() {
        try {
            console.log("calling")
            const probelms = await Probelm.find({});
            console.log(probelms);
            return probelms;
        } catch (e) {
            console.log("error in probelmlist");
        }
    }
    async getProbelmbyId(id) {
        try {
            const probelm = await Probelm.findById(id);
            return probelm;
        } catch (e) {
            console.log("Not found Probelm");
        }
    }
    async DeleteProbelm(id) {
        try {
            const probelm = await Probelm.findByIdAndDelete(id);
            return probelm;
        } catch (error) {
            console.log("cannot deleted")
        }
    }
    async UpdateProbelm(id,data){
        try {
            const probelm =Probelm.findByIdAndUpdate(id,data,{
                new:true
            });
            return probelm;
        } catch (error) {
             console.log("cannot update probelm");
        }
    }
}

module.exports = ProbelmRepository;
