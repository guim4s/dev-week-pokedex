/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon
precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon'); 

listaSelecaoPokemons.forEach(pokemon => {
// vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        // ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value;        

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado);
        cartaoPokemonParaAbrir.classList.add('aberto');


        const removerPokemonAtivo = document.querySelector('.ativo');
        removerPokemonAtivo.classList.remove('ativo');

        const pokemonSelecionado = document.getElementById(idPokemonSelecionado);
        pokemonSelecionado.classList.add('ativo');        

    })
})