// Exercicio 1
{
  // pegar o array de alunos e concatenar o nome e sobrenome do aluno

  const alunos = [
    {
      name: "Leandro",
      lastName: "Siqueira"
    },
    {
      name: "Bruno",
      lastName: "Henrique"
    },
    {
      name: "Fernando",
      lastName: "Rodrigues"
    },
  ];

  const newArray = alunos.map((aluno) => {
      return `${aluno.name} ${aluno.lastName}`;
  });


  // console.log(newArray);
}

// Exercicio 2
{
  // filtrar alunos com notas acima ou igaul a media

  const media = 7

  const alunos2 = [
    {
      nome: 'Maria',
      sobrenome: 'da Silva',
      nota: 10,
    },
    {
      nome: 'José',
      sobrenome: 'Moreira',
      nota: 4,
    },
    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
      nota: 7,
    },
    {
      nome: 'Pedro',
      sobrenome: 'Souza',
      nota: 5,
    },

  ];

  const alunosFiltrados = alunos2.filter((aluno) => {
    return aluno.nota >= media;
  });

  // console.log(alunosFiltrados);
}

// Exercicio 3 
{
  // utilizar o reduce para somar as notas e fazer as medias dos alunos
  // formando uma string 
  const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
  }

  const totalBimestres = aluno.notas.length

  const somaNotas = aluno.notas.reduce((acc, curr) => {
    // console.log(acc, curr);
    return acc + curr
  }, 0);

  const media = Math.round(somaNotas / totalBimestres);

  // console.log(`A média da ${aluno.nome} foi ${media} para o total de ${totalBimestres} bimestres.`);

}

// Exercicio 4

{
  // criar um input que vai receber uma nota, e vai filtrar e mostrar no html apenas
  // os alunos que tem as notas que foi colocada no input

  const alunosFil = [
    {
      name: 'Maria',
      sobrenome: 'da Silva',
      nota: 10,
    },
    {
      name: 'José',
      sobrenome: 'Moreira',
      nota: 4,
    },
    {
      name: 'Paulo',
      sobrenome: 'Henrique',
      nota: 7,
    },
    {
      name: 'Sara',
      sobrenome: 'Souza',
      nota: 5,
    },
    {
      name: 'Clara',
      sobrenome: 'Barbosa',
      nota: 9,
    },
    {
      name: 'Rodrigo',
      sobrenome: 'Barros',
      nota: 4,
    },
    {
      name: 'Renato',
      sobrenome: 'Barros',
      nota: 7,
    },
    {
      name: 'Andrea',
      sobrenome: 'Batista',
      nota: 6,
    },
    {
      name: 'Carla',
      sobrenome: 'Campos',
      nota: 3,
    },
  ];

  const button = document.querySelector("#filter");
  button.addEventListener('click', filtrarNotas);

  function filtrarNotas() {
    const input = document.querySelector("#input");
    const lista = document.querySelector("#lista");
    const notaFiltro = Number(input.value);
    input.value = "";
    lista.innerHTML = "";

    const alunosFiltrados = alunosFil.filter((aluno) => {
      return aluno.nota === notaFiltro;
    });

    if (alunosFiltrados.length === 0) {
      lista.innerHTML = "<li>Nenhum aluno encontrado com essa nota!</li>";
    } else {
      alunosFiltrados.forEach((aluno) => {
        const li = document.createElement("li");
        li.innerText = `${aluno.name} | Nota: ${aluno.nota}`;
        lista.appendChild(li);
      });
    }

  }

}