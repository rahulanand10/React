

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b
}
function div(a,b){
    let res= a/b;
    res=res.toFixed(2);
    return res;
}
export {add,sub,div,mult};
