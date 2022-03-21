// code your solution here
function saturdayFun(x ='roller-skate'){
return `This Saturday, I want to ${x}!`
}

function mondayWork(c='go to the office'){
    return `This Monday, I will ${ c }.`
}

function wrapAdjective(v){
    return function innerF(b="special"){
        return `You are ${v}${b}${v}!`
    }}