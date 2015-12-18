function scoreTograde(input){
    var score_garde = ['d', 'c', 'b', 'a', 's'];
    var score_section = [0, 60, 70, 80, 90];
    var score = Number(input);
    var result;
    if(isNaN(score)){
        throw new Error ('invalid input');
    }
    else if(score >100 || score < 0){
        throw new Error ('param error');
    }
    else{
        score_section.forEach(function(item, i){
            if(score >= item){
                result = score_garde[i];
            }
        });
    }
    return result;
}
