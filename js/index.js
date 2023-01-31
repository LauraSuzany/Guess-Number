const form = document.getElementById('form');
//Quando o evento submit for escutando ele irá chamar a ação 'handleSubmit'
form.addEventListener('submit', handleSubmit);

let newStatus = document.getElementById("newStatus");
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');
let play = document.getElementById('play');
//Criação de bjeto
const Guess = {
  max: 10,
  attemptsNumber: 0,
  numeberDrawn: function RandomValue(){
    return Math.floor(Math.random() * 11);
    //Math.round é para trucar os valores gerados por Math.random
  }
}

let numeberDrawn = Guess.numeberDrawn();
function UpdatedAttempt(attempt, value) {
  attempt.innerHTML = 'tentativa ' + value
  return value;
  // innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento.
};

function handleSubmit(e){
  e.preventDefault();//Para ele não recarregr a página
  let kick = document.getElementById('kick').value;
  if(!kick){
    alert('Digite algum valor')
    return;
  };

  let maxTent = UpdatedAttempt(attempt, ++Guess.attemptsNumber);
  if(maxTent > 2) {
    DisableButton(); 
    play.style.backgroundColor = '#808080';
    PlayAgain();
    return newStatus.innerHTML = 'Você atingiu 3 tentativas';
  };

  if(numeberDrawn == kick){
    PlayAgain();
    newStatus.innerHTML = 'Parabéns vc acertou!';
    result.style.transition = '0.4s';
    result.style.backgroundColor = '#37c978';
    result.style.color = 'fff';
    newStatus.style.color = 'fff';
    Clear();
  }  
  else if (numeberDrawn > kick){
    newStatus.innerHTML = 'O número é maior';
    newStatus.style.color = '#ffa500';
    result.style.backgroundColor = '#de4251';
    Clear();
  }
  else {
    newStatus.innerHTML = 'O número é menor';
    newStatus.style.color = '#ffa500';
    result.style.backgroundColor = '#de4251';
    Clear();
  }
};

function PlayAgain() {
  document.getElementById('btn-restart').style.display = 'flex'
};

function DisableButton() {
  play.disabled = true;
};

function Restart(){
  //Quando clicar no botão ele irar recarregará a página e pode jogar de novo
  document.location.reload(true);
};

function Clear(){
  // Limpar o campo
  document.getElementById('kick').value =''
};