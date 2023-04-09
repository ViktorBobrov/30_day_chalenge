function createButton(keyCode,keyDot,name){
const divKeys = document.querySelector('.keys')// нашли по селектору куда добавить
const newButton = document.createElement('div');// создали элемент
divKeys.appendChild(newButton);//добавили его внутрь элемента .keys
newButton.dataset.key =`'${keyCode}'`;//добавляем дата-ключ 
newButton.className ='key';//добавляем класс
//теперь во внутрь  нового дива добавим  новые элементы
const kbdItem = document.createElement('kbd');//ckbd создан
kbdItem.innerHTML =`'${keyDot}'`;
newButton.appendChild(kbdItem);//поместим kbd внутрь
const spanItem = document.createElement('span');
spanItem.innerHTML = `'${name}'`;
spanItem.className ='sound';
newButton.appendChild(spanItem);
}

// создание аудиоэлемента
function createAudio(keyCode,name){
	const wrapperBody =document.querySelector('body');
const audioItem = document.createElement('audio');
audioItem.dataset.key =`${keyCode}`;
audioItem.src = `sounds/${name}.wav`;
wrapperBody.appendChild(audioItem);
}

function createDigital(keyCode,keyDote,name){
	createButton(keyCode,keyDote,name);
	createAudio(keyCode,name);
}

createDigital(81,'Q','harder');
createDigital(87,'W','better');
createDigital(69,'E','faster');
createDigital(82,'R','stronger');
createDigital(84,'T','molen');
createDigital(89,'Y','power');
createDigital(85,'U','kover');
createDigital(73,'I','newer');
createDigital(90,'Z','ewer');
createDigital(88,'X','after');
createDigital(67,'C','work it');
createDigital(86,'V','ower');

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



