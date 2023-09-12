//Criar variável para guardar todos os elementos que possuem a classe item-menu
var menuItem = document.querySelectorAll('.item-menu')

//seleção para sempre que clicar no item, ficar sleecionado
 //Essa função está removendo a classe "ativo" de um item que eu não clique e adicionando a classe "ativo" em um item que eu cliquei
function selectLink(){
    //vetor (forEach)
    //Item é parâmetro
    //Arrow function (=>) 
    menuItem.forEach((item)=>
        item.classList.remove('ativo') //remover dinamicamente uma classe de um item 
    )

    this.classList.add('ativo')
}

//escutador de evento: sempre "escute" quando o usuário clicar em algum item do menu 
menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//expandir menu

var bntExp = document.querySelector('#btn-exp')
var menuSite = document.querySelector('.menu-lateral')

bntExp.addEventListener('click', function(){
    menuSite.classList.toggle('expandir')
})