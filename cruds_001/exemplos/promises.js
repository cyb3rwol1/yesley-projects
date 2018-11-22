var promiseCount = 0;



let buscaEstabelecimento = () => {
    return new Promise(function (fulfill, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://microservices-dev.integrati.solutions/api_rest/ms-incontre/estabelecimentos/552');

        req.onload = function () {
            if (req.status == 200) {
              fulfill(req.response)
            } else {
              reject(Error(req.statusText))
            }
          }
    })
}

buscaEstabelecimento();

// function testPromise() {
//     var thisPromiseCount = ++promiseCount;
//     console.log('Started (Sync code started)');

//     // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
//     var p1 = new Promise(
//         // a função resolve() é chamada com a capacidade para resolver ou rejeitar a promise
//         function (resolve, reject) {
//             console.log('Promise started (Async code started)');
            
//             resolve();
//         });

//     // definimos o que fazer quando a promise for realizada
//     p1.then(() => {
//             executandoWs();
//             console.log('Promise fulfilled (Async code terminated)');
//         })
//         .then(() => {
//             executandoWs();
//             console.log('Finalizou');
//         })
//         .catch((e) => {
//             console.log(`ERROR: ${e}`);
//         });
//     console.log('Promise made (Sync code terminated)');
// }

// testPromise();