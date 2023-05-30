// Array com dados fictícios
const data = [
    {title: 'Vendas', value: 500},
    {title: 'Gastos', value: 250},
    {title: 'Lucro', value: 250},
  ]
  
  // Seleciona o elemento onde o conteúdo será exibido
  const contentDiv = document.getElementById('content')
  
  // Cria uma card para cada item no array de dados
  data.forEach(item => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
  
    const title = document.createElement('h2')
    title.innerText = item.title
  
    const value = document.createElement('p')
    value.innerText = `R$ ${item.value}`
  
    cardDiv.appendChild(title)
    cardDiv.appendChild(value)
  
    contentDiv.appendChild(cardDiv)
  })
  