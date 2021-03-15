function aulaSplice() {
  const arraySplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // primeiro parametro do splice voce indica a partir de que index do array
  // voce quer remover um item, e o segundo parametro voce indicar quantos intem voce quer 
  // remover do array...
  arraySplice.splice(2, 4);

  // console.log(arraySplice);
}
aulaSplice();

// Sobre Filter!

  // filter t medeiro
{
  const clientes = [
    { name: "Fulano", lastName: "Da Silva", age: 14 },
    { name: "Santos", lastName: "Henrique", age: 12 },
    { name: "Moreira", lastName: "Siqueira", age: 13 },
    { name: "Ciclano", lastName: "Santos", age: 18 },
    { name: "Beltrano", lastName: "Moreira", age: 20 },
  ];

  const clientesMaiores = clientes.filter((client) => {
    // return client.name === "Santos";
    return client.age >= 18;
  });
  // console.log(clientesMaiores);
}

  // filter progrmbr
{
  function novoAluno(nome, idade) {
    return { nome, idade }
  }

  const alunos = [
    novoAluno("Leandro", 19),
    novoAluno("Bruno", 24),
    novoAluno("Edemir", 30),
    novoAluno("Maria", 45)
  ];

  // for(let aluno of alunos) {
  //   if (aluno.idade < 30) {
  //     console.log(aluno);
  //   }
  // }

  // console.log(alunos.filter((aluno) => {
  //   return aluno.idade < 30;
  // }));
  
  function temMenosDeTrinta(aluno) {
    return aluno.idade < 30;
  }

  function temMaisDeTrinta(aluno) {
    return aluno.idade >= 30;
  }

  function filtro(callback) {
    const alunosFiltrados = [];

    for (let aluno of alunos) {
      if (callback(aluno)) {
        alunosFiltrados.push(aluno);
      }
    } 

    return alunosFiltrados;
  }

  // console.log(filtro(temMenosDeTrinta));
  // console.log(filtro(temMaisDeTrinta));

  // const alunosMenosDeTrinta = alunos.filter(temMaisDeTrinta);
  // console.log(alunosMenosDeTrinta);
}

  // filter udemy
{
  const produtos = [
    { name: "Notebook", preco: 2499, fragil: true },
    { name: "iPad Pro", preco: 4199, fragil: true },
    { name: "Copo de Vidro", preco: 12.49, fragil: true },
    { name: "Copo de Plástico", preco: 18.99, fragil: false },
  ];

  // produtos fragil & produtos com preço maiores que R$500,00

  function validate(product) {
    let status = false;
    if (product.preco > 500 && product.fragil) {
      return status = true;
    }    

    return status;
  }

  // console.log(produtos.filter((validate)));

}

// ========================================================= // ===============================

// sobre Map!

  // map t medeiro
{
  const clientesMap = [
    { name: "Fulano", lastName: "Da Silva", age: 14 },
    { name: "Santos", lastName: "Henrique", age: 12 },
    { name: "Moreira", lastName: "Siqueira", age: 13 }
  ];

  const clientesFinal = [];

  clientesMap.forEach((cliente) => {
    clientesFinal.push(cliente.name + ' ' + cliente.lastName);
  });

  // o metodo Map, te retorna um novo array

  const clientesFinalMap = clientesMap.map((cliente) => {
    
    return { "name": `${cliente.name} ${cliente.lastName}` };
  });

  console.log(clientesFinalMap);
}