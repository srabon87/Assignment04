const info = {
    name: "Rajib", 
    testScore: 45,  
    schoolGrade: 25, 
    isFFamily : true  
}

function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return "invalid Input"
    } 
    let totalMarks = obj.testScore + obj.schoolGrade;
    if(info.isFFamily){
        totalMarks = totalMarks + 20
    }
    if(totalMarks >= 80){
        return true
    }
    else{
        return false
    }
}
console.log(calculateFinalScore(info))