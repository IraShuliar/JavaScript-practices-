$(function(){
	console.log("ready");
	var $button = $('#menu-button');

	$button.on('click',function(){
		var $menu = $('#main-list');
		var menuLeft = parseInt($menu.css('left'));
		console.log($button);
		var buttonWidth = $button.outerWidth();
		console.log(buttonWidth);
		if(menuLeft === 0){
				$(this).val('>');
				$menu.animate({
					paddingRight: buttonWidth,
					left: -200 + buttonWidth,
				});
			}else {
				$(this).val('<');
				$menu.animate({
					paddingRight: 10,
					left: 0,
				});
			}
	})




})


var wordToSearch = ['find', 'clouse', 'doctor', 'choose', 'time', 'life', 'love', 'job', 'work', 'lay'];
$(function(){
	console.log('readyTwo');
	var $search = $('#search');
	$search.on('input',function(e){
		console.log('done');
		var searchText = e.target.value;
		var $ul = $('#list-search');
		$ul.text('');
		if(searchText == ''){
			return;
		}

		for(i=0; i<wordToSearch.length; i++){
			if(wordToSearch[i].indexOf(searchText) !== -1){
				var $li = $('<li></li>');
				$li.text(wordToSearch[i]);
				$ul.append($li);				
			}
		}
	})
	var $buttonSearch = $('#submite');
	$buttonSearch.on('click', function(){
		console.log('work');
		var $list = $('#list-search');
		var $newEl = $('<li></li>');
		$newEl.text($('#search-form').val());
		$list.append($newEl);
	})

})
// ------------------new work


function fun1(){
	var checkbox;
	checkbox = document.getElementById('check');
	if(checkbox.checked){
		console.log('checked');
	}else{
		console.log('noncheck');
}
}

function fun2(){
	var radio;
	radio = document.getElementsByName('r1');
	for(i=0; i<radio.length; i++){
		if (radio[i].checked) {
			console.log('cheked eltment ' + i);
		};
	}
}

function fun3() {
	var sel; 
	sel = document.getElementsByTagName('select')[0].selectedIndex;
	var options = document.getElementById('one').options;
	console.log('selected option ' + options[sel].text);
}


function fun4() {
	var range = document.getElementById('range');
	var div1 = document.getElementById('test');
	div1.style.width = range.value+'px';
}

// begin CSS generetor


function fun5(){
	var rtl = document.getElementById('rtl').value;
	var rtr = document.getElementById('rtr').value;
	var rbr = document.getElementById('rbr').value;
	var rbl = document.getElementById('rbl').value;
	var ttl = document.getElementById('ttl');
	var ttr = document.getElementById('ttr');
	var tbr = document.getElementById('tbr');
	var tbl = document.getElementById('tbl');

	var block = document.getElementsByClassName('block')[0];

	ttl.value = rtl;
	ttr.value = rtr;
	tbr.value = rbr;
	tbl.value = rbl;

	block.style.borderRadius= rtl+'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}


document.getElementById('main-menu').onmouseover = function(event){
	var target = event.target;
	if(target.className == 'item-menu'){
		var dropDown = target.getElementsByTagName('ul');
		closeMenu();
		dropDown[0].style.display = 'block';
	}
}
document.onmouseover = function(enent){
	var target = event.target;
		console.log(target.parentNode.parentNode);
	if(target.className != 'item-menu' && target.parentNode.className != 'item-menu' 
		&& target.parentNode.parentNode && target.parentNode.parentNode.className != 'item-menu'){

		closeMenu();
	}
}
function closeMenu(){

	var menu = document.getElementsByClassName('item-menu');
	for (i=0; i<menu.length; i++){
		menu[i].getElementsByTagName('ul')[0].style.display = 'none';
	};

}

// beginTAB

var tab, tabContent;

window.onload = function(){
	tabContent = document.getElementsByClassName('tab-content');
	tab = document.getElementsByClassName('tab');
	hideTabsContents(1);
}

function hideTabsContents (a) {
	for(var i=a; i<tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('white-border');

	};
};
document.getElementById('tabs').onclick = function(event){
	var target = event.target;
	if (target.className == 'tab') {
		for(var i=0; i<tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	};
};
function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContents(0);
		tab[b].classList.add('white-border');
		tabContent[b].classList.remove('hide');	
		tabContent[b].classList.add('show');
	}
}


// begin MODAL WINDOW

var modal = document.getElementById('my-modal');
var btn = document.getElementById('my-btn');
var span = document.getElementsByClassName('close')[0];
 btn.onclick = function(){
 	modal.style.display = 'block';
 };
 span.onclick = function(){
 	modal.style.display = 'none';
 };

 window.onclick = function (event){
 	if(event.target == modal){
 		modal.style.display = 'none';
 	}
 }

 // begin ANIMATION

 function myMove(){
 	var elem = document.getElementById('my-animation');
 	var position = 0;
 	var id = setInterval(frame, 10);
 	function frame(){
 		if(position == 350){
 			clearInterval(id);
 		}else{
 			position++;
 			elem.style.top = position + 'px';
 			elem.style.left = position + 'px';
 		}
 	}
 }