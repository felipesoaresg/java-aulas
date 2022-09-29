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
        corpotabela.innerHTML = ''
        for (var num = 0; num < dados.length; num++) {
            const crialinha = document.createElement("tr");

            crialinha.innerHTML = `
            <tr>
            <th scope="row">${dados[num].id}</th>
            <td>${dados[num].nome}</td>
            <td>${dados[num].email}</td>
            <td>${dados[num].turma}</td>
            <td>${dados[num].avatar}</td>
            </tr> 
            `;                   
            corpotabela.appendChild(crialinha);

            console.log(dados[num]);
        }
    });
}

function EnviarDados() {
    const url = 'http://10.0.3.132:1313/save-data'

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var turma = document.getElementById('turma').value;
    var avatar = document.getElementById('avatar').value;

    var meusDados = {
        nome,
        telefone,
        email,
        turma,
        avatar,
    }
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })
}