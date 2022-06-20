
function somar() {
    var resultado = document.getElementById('resultado');
    var valorum = document.getElementById('valorum');
    var valordois = document.getElementById('valordois');

    var item = {
        valorum: parseInt(valorum.value),
        valordois: parseInt(valordois.value)
    };
 

    fetch('/home/somar', {
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
        })
        .catch(error => console.error('Unable to add item.', error));
}