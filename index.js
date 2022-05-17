function receivesAFunction(test){
    test()
};

function returnsANamedFunction() {
    return function test(){};
}

function returnsAnAnonymousFunction() {
    return test => {};
}