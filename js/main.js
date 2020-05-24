function clicou()
{
    //alert("Obrigado por clicar!!!!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!!</b>" // O método DOCUMENTbusca um dado pela propriedade
    // GETELEMTBYID e coloco o ID que usei no HTML e com o INNERHTML consigo injetar alguma informação.
}

function redirecionar()
{
    window.open("https://www.google.com.br/") // O método WINDOW trata de uma janela e a propriedade OPEN abre uma nova aba
    window.location.href = "https://www.google.com.br/" // Com LOCATION abre na mesma aba
}

function trocar()
{
    document.getElementById("mousemove").innerHTML = "Obrgado por passar o mouse"
    //alert("Trocar Texto")
}

function voltar()
{
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    //alert("Trocar Texto")
}

function trocar1(elemento) //Usando o THIS no HTML aqui uso um elemento nos parênteses e já vinculo no INNERHTML
{
    elemento.innerHTML = "Obrgado por passar o mouse"
    //alert("Trocar Texto")
}

function voltar1(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui agora"
    //alert("Trocar Texto")
}

function load()
{
    alert("Página carregada com sucesso!!!!!")
}

function funcaochange(elemento)
{
    alert(elemento.value)
}

/*
var nome = "Alex Leal"
var idade = 44
var idade2 = 10
var frase = "Japão é o melhor time do mundo."

//alert(nome + " tem " + idade + " anos.") // As duas barras servem para comentário.
//alert(idade + idade2) // A função ALERT exibe uma mensgame na tela e forma de JANELA (pop-up)
console.log(nome) // A função CONSOLE.LOG mostra no browser os dados da variável quando pressionamos F+12 e abrimos a aba CONSOLE
console.log(idade + idade2)
console.log(frase.replace("Japão","Brasil")) // A propriedade REPLACE troca uma informação da variável. Posso usar também no ALERT
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
*/
/* Aprendendo ARRAY *//*
var lista = ["maçã","pêra","laranja"]
console.log(lista)
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista.length) // A propriedade LENGTH mostra o tamanho do ARRAY

lista.push("uva") // A propriedade PUSH adiciona itens em uma ARRAY
console.log(lista)
console.log(lista.toString()) // A propriedade toString converte a ARRAY para String na exibição
console.log(lista.join(" - ")) // A propriedade JOIN converte para STRING e permite definir o separador dos elementos
console.log(lista[3])
console.log(lista.length)
console.log(lista.reverse()) // A propriedade REVERSE lista dos itens da ARRAY de forma inversa

lista.pop() // A propriedade POP remove o último item de um ARRAY
console.log(lista)
console.log(lista.length)
*/
/* Aprendendo sobre DICIONÁRIO *//*
var fruta = {nome: "maçã", cor: "vermelha"} // Colocando as CHAVES na declaração, criamos um dicionário parecido com JSON
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)

var fruta = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "verde"}]
console.log(fruta)
console.log(fruta[0].nome)
console.log(fruta[0].cor)
console.log(fruta[1].nome)
console.log(fruta[1].cor)
*/
/* Aprendendo Condicional */ /*
var idade = prompt("Qual sua idade:") // A função PROMPT coleta informações digitadas
if (idade >= 18)
{
    alert("Maior de idade.")
}
else
{
    alert("Menor de idade.")
}
*/
/* Aprendendo Laço de Repetição *//*
var count = 0

while (count < 5)
    {
        console.log(count)
        count++
    }

var count1

for (count1=0; count1 < 5; count1++)
    {
        console.log(count1)
    }
*/
/* Trabalhando com DATA *//*
var d = new Date()
alert(d)
alert(d.getDate())
alert(d.getDay()) // Retorna o número do dia da semana
alert(d.getMonth()+1) // Como a propriedade GETMONTH() conta a partir do 0 (zero), é necesário somar 1 no seu valor para trazer o mês certo
alert(d.getFullYear())
alert(d.getMinutes())
*/
/* Trabalhando com FUNÇÃO *//*
function soma(n1,n2)
{
    return n1 + n2
}*/
/*
alert(soma(5,10))

function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome,novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))


var validar = 0
function validaIdade(idade)
{
    //var validar
    if (idade >= 18)
    {
        validar = true
    }
    else
    {
        validar = false
    }

    return validar
}

var idade2 = prompt("Digite sua idade:")
validaIdade(idade2)
console.log(validar) // Como decalrei a VAR VALiDAR fora da função e não decalrei dentro, o JS pega a variável GLOBAL. Se eu declarar dentro,
                     // então o JS vai consumir a VAR LOCAL para a função, mas como usei CONSOLE para a VALIDAR apenas, ele trás o valor da
                     // GLOBAL e não da LOCAL. Nesse caso teria que usar CONSOLE.LOG(VALIDAEIDADE(IDADE2))

*/