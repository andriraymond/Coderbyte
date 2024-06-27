function sortNumberedList(){
    const input = [-3, 6, 8, -5, -1, -4, 4, 7, 3];
    input.sort((a, b) => a - b);
    // console.log(input);   

    console.log('Min Number :', input.at(0));
    console.log("Max Number :", input.at(input.length - 1));


    let countNegatif = 0;
    let countPositive = 0;
    for (let i = 0 ; i < input.length; i++){
        if (input[i] < 0){
            countNegatif = countNegatif + 1;
        } if (input[i] > 0){
            countPositive = countPositive +  1;
        }
    }

    console.log('countNegatif : ' , countNegatif);
    console.log('countPositive : ', countPositive);

}
sortNumberedList();