// function loopThroughAndFind (record, finder) {
//     let result = null
//     for (let item of record){
//         if(item === 'W'){
//             result = item
//             break;
//         }   
//     }
//     return result
// }


function superbowlWin(record) {
    let year = record.find(findWinnerYear);
    if (year === undefined){
        return undefined;
    }
    else {
        return year.year;
    }
}

function findWinnerYear(record) {
    return record.result === 'W';
}

