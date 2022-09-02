function receivesAFunction(callback){
    callback()
}


function returnsANamedFunction(){
    return function namedFunction() {
        console.log("This is my name")
    };
}

function returnsAnAnonymousFunction(){
    return () => {}
}