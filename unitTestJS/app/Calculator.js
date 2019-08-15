class Calculator{
    constructor(){

    };
    // This function summarizes all given parameters if they are numbers
    add(){
        let i, sumOfAllParameters = 0;
        for (i = 0; i < arguments.length; i++){
            if (isNaN(arguments[i])){
                throw new Error("Some of given parameters are not numbers!");
            }
            sumOfAllParameters = sumOfAllParameters + arguments[i];
        }
        return sumOfAllParameters;
    };

    // This function multiplies all given parameters if they are numbers
    multiply(){
        let i, multipleOfAllParameters = 1;
        for (i = 0; i < arguments.length; i++){
            if (isNaN(arguments[i])){
                throw new Error("Some of given parameters are not numbers!");
            }
            multipleOfAllParameters = multipleOfAllParameters * arguments[i];
        }
        return multipleOfAllParameters;
    };

};

module.exports = Calculator;