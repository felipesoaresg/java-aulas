const corpotabela = document.getElementById ("corpotabela");

function PegarDados() {
    const url = 'http://10.0.3.132:1313/listar-alunos'

    fetch(url, {
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        method: 'GET'
    }).then((resultado) => {
        return resultado.json();
    })
    .then((dados) => {
        for (var num = 0; num < dados.length; num++) {
            const crialinha = document.createElement("tr");

            crialinha.innerHTML = `
            <tr>
            <th scope="row">${dados[num].id}</th>
            <td>${dados[num].nome}</td>
            <td>${dados[num].email}</td>
            <td>${dados[num].turma}</td>
            </tr> 
            `;                   
            corpotabela.appendChild(crialinha);

            console.log(dados[num]);
        }
    });
}