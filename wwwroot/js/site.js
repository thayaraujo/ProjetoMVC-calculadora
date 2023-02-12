function somar() {
    let resultado = document.querySelector("#resultado");
    let valorUm = document.querySelector("#valorum");
    let valorDois = document.querySelector("#valordois");

    let item = {
        valorUm: parseInt(valorum.value),
        valorDois: parseInt(valordois.value),
        resultado: parseInt(resultado.value)
    };

    fetch('/primeiraversao/somar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            resultado.value = result.resultado;
            valorUm.value = result.valorUm;
            valorDois.value = result.valorDois;
        })
        .catch(error => console.error('Unable to add item.', error));
}

function subtrair() {
    let resultado = document.querySelector("#resultado");
    let valorUm = document.querySelector("#valorum");
    let valorDois = document.querySelector("#valordois");

    let item = {
        valorUm: parseInt(valorum.value),
        valorDois: parseInt(valordois.value),
        resultado: parseInt(resultado.value)
    };

    fetch('/primeiraversao/subtrair', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            resultado.value = result.resultado;
            valorUm.value = result.valorUm;
            valorDois.value = result.valorDois;
        })
        .catch(error => console.error('Unable to add item.', error));
}

function dividir() {
    let resultado = document.querySelector("#resultado");
    let valorUm = document.querySelector("#valorum");
    let valorDois = document.querySelector("#valordois");

    let item = {
        valorUm: parseInt(valorum.value),
        valorDois: parseInt(valordois.value),
        resultado: parseInt(resultado.value)
    };

    fetch('/primeiraversao/dividir', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            resultado.value = result.resultado;
            valorUm.value = result.valorUm;
            valorDois.value = result.valorDois;
        })
        .catch(error => console.error('Unable to add item.', error));
}

function multiplicar() {
    let resultado = document.querySelector("#resultado");
    let valorUm = document.querySelector("#valorum");
    let valorDois = document.querySelector("#valordois");

    let item = {
        valorUm: parseInt(valorum.value),
        valorDois: parseInt(valordois.value),
        resultado: parseInt(resultado.value)
    };

    fetch('/primeiraversao/multiplicar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            resultado.value = result.resultado;
            valorUm.value = result.valorUm;
            valorDois.value = result.valorDois;
        })
        .catch(error => console.error('Unable to add item.', error));
}

function limpar() {
    let resultado = document.querySelector("#resultado");
    let valorUm = document.querySelector("#valorum");
    let valorDois = document.querySelector("#valordois");


    let item = {
        valorUm: parseInt(valorum.value),
        valorDois: parseInt(valordois.value),
        resultado: parseInt(resultado.value)
    };

    fetch('/primeiraversao/limpar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            resultado.value = result.resultado;
            valorUm.value = result.valorUm;
            valorDois.value = result.valorDois;
        })
        .catch(error => console.error('Unable to add item.', error));
}

