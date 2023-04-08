
function playSound(e){
	
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!audio){
			return;
		}
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
	
}
function removeTransition(e){
if(e.propertyName !=='transform')return;
this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);


const divKeys = document.querySelector('.keys')// нашли по селектору куда добавить
const newButton = document.createElement('div');// создали элемент
divKeys.appendChild(newButton);//добавили его внутрь элемента .keys
newButton.dataset.key ='186';//добавляем дата-ключ 
newButton.className ='key';//добавляем класс
//теперь во внутрь  нового дива добавим  новые элементы
const kbdItem = document.createElement('kbd');//ckbd создан
kbdItem.innerHTML =';';
newButton.appendChild(kbdItem);//поместим kbd внутрь
const spanItem = document.createElement('span');
spanItem.innerHTML = 'Harder';
spanItem.className ='sound';
newButton.appendChild(spanItem);
// создание аудиоэлемента
const wrapperBody =document.querySelector('body');
const audioItem = document.createElement('audio');
audioItem.dataset.key ='186';
audioItem.src = 'sounds/harder.wav';
wrapperBody.appendChild(audioItem);

