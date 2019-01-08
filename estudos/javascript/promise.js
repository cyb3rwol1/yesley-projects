let funcaoStart = () => {
    return new Promise((resolve, reject) => {
        console.log('Start:' + getDateTimeNow());
        resolve();
    })
};


let funcaoA = () => {
    return new Promise((resolve, reject) => {

        // Aqui executa o rest A
        if (1 == 1) {
            setTimeout(function () {
                console.log('Executou A:' + getDateTimeNow());
                resolve();
            }, 3000);

        } else {
            reject();
        }
    })
};

let funcaoB = () => {
    return new Promise((resolve, reject) => {

        // Aqui executa o rest B
        if (1 == 1) {
            console.log('Executou B:' + getDateTimeNow());
            resolve('Retornou e Finalizou!');
        } else {
            reject('Erro simples');
        }
    })
};

let getDateTimeNow = () => {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds()+ ":" +
        currentdate.getMilliseconds();

    return datetime;
}

/*
Executa as funçoes em ondem e síncronas.
Resolve() encerra com sucesso 
Reject() cai direto no catch, tendo a possibilidade de retornar o erro
*/
funcaoStart()
    .then(() => funcaoA())
    .then(() => funcaoB())
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err);
    });