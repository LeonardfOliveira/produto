// Adicionando um produto usando o método simples
const produtosDiv = document.getElementById('produtos');

// Criar um produto simples
const produtoSimples = document.createElement('div');
produtoSimples.innerHTML = `
    <h2>Produto A</h2>
    <p>Descrição do Produto A: Este é um excelente produto.</p>
    <p>Preço: R$ 99,90</p>
`;
produtosDiv.appendChild(produtoSimples);

// Adicionando um produto usando o método complexo
const produtoComplexo = document.createElement('div');
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto B';
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição do Produto B: Um produto de alta qualidade.';
const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 149,90';
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150'; // Placeholder para imagem
imagemProduto.alt = 'Imagem do Produto B';

produtoComplexo.appendChild(nomeProduto);
produtoComplexo.appendChild(descricaoProduto);
produtoComplexo.appendChild(precoProduto);
produtoComplexo.appendChild(imagemProduto);
produtosDiv.appendChild(produtoComplexo);
