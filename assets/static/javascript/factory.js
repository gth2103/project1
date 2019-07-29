
var scone = '#small-cone'
var mcone = '#medium-cone'
var lcone = '#large-cone'

var scup = '#small-cup'
var mcup = '#medium-cup'
var lcup = '#large-cup'

var yellow = '.yellow'
var pink = '.pink'
var blue = '.blue'
var green = '.green'
var orange = '.orange'
var brown = '.brown'
var vanilla = '.vanilla'

var cart = '#cart'

var orders = [];
var order_number = 0;

var size;

// TODO: local storage, maintian items in session before saving order to database / use to populate dashboard

var items = [];
var item_number = 0;


let idleTimer = null;
let idleState = false;

function showTitle(time) {
  clearTimeout(idleTimer);
  if (idleState == true) {
    $(".title").removeClass("inactive-title");
    $(".footer").removeClass("inactive-footer");

  }
  idleState = false;
  idleTimer = setTimeout(function() {
  	$(".title").addClass("inactive-title");
    $(".footer").addClass("inactive-footer");
    idleState = true;
  }, time);
}

var setDatabaseOrders = function(){
	database.ref().set({
    	orders: orders
	})
}

var triggerTitle =  function(e) {

	if(e.clientY > 250){
		$(".title").addClass("inactive-title");
	}
	else{
		$(".title").removeClass("inactive-title");
	}
}

var triggerFooter =  function(e) {

	if(e.clientY < 850){
    	$(".footer").addClass("inactive-footer");
	}
	else{
    	$(".footer").removeClass("inactive-footer");
	}
}


var Order = function(number, size,  container)  {

	var order  = {
		number: number,
		size: size,
		container: container
	}
	return order;
}

var focusCart =  function(){

	$('.draggable').on('mouseover', function(){
		$('#cart').addClass('focus');
	});

	$('.draggable').on('mouseout', function(){
		$('#cart').removeClass('focus');
	});
}

var focusContainer =  function(){

	$('.flavor').on('mouseover', function(){
		$('.draggable').addClass('focus');
	});

	$('.flavor').on('mouseout', function(){
		$('.draggable').removeClass('focus');
	});
}



var setDraggable  = function(id) {

	$(id).on("click", function(){
        $(this).draggable({
            addClasses: true,
            zIndex: 500,
            revert: true
        });
        $('#cart').removeClass('focus');
    });
}

var setCounter = function(){
	$('.counter').html(orders.length)
	if(orders.length > 0){
		$('.counter').removeClass('inactive');
		$('.counter').addClass('active');

	}
	else{
		$('.counter').removeClass('active');
		$('.counter').addClass('inactive');
	}
}

var setNavigation = function () {
	if(orders.length > 0){
		$('.next').removeClass('next-inactive');
		$('.link').attr('href', './assets/templates/flavors.html');
		$('.next').addClass('next-active');
		$('.link').removeClass('next-link-inactive');
		$('.link').addClass('next-link-active');

	}
	else{
		$('.next').removeClass('next-active');
		$('.next').addClass('next-inactive');
		$('.link').attr('href', '#');
		$('.link').removeClass('next-link-active');
		$('.link').addClass('next-link-inactive');
	}
}

var setDroppable  = function(id) {

	$(id).droppable({
        accept: '#small-cone,#medium-cone,#large-cone,#small-cup,#medium-cup,#large-cup',
        classes: {
            "ui-droppable":"highlight" 
        },
        drop: function( event, ui ) {

        	var id = $(ui.draggable).attr('id');

        	$('#cart').addClass('cart-bounce');
        	$('#cart').addClass('bounce-4');
        	$('.counter').addClass('cart-bounce');
        	$('.counter').addClass('bounce-4');

        	if(id === 'small-cone'){
        		$('.cone-1').html('<img draggable="false" id="small-cone" title="Small Cone" class="m-2 draggable" src="./assets/static/images/icecream.png">');
        		$('.cone-1').ready('#small-cone', setDraggable(scone));
        		$('.cone-1').ready('#small-cone', focus());

        		var new_order = Order(++order_number, 0, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cone'){
        		$('.cone-2').html('<img draggable="false"  id="medium-cone" title="Medium Cone" class="m-2 draggable" src="./assets/static/images/icecream-cone-2.png">');
        		$('.cone-2').ready('#medium-cone', setDraggable(mcone));
        		$('.cone-2').ready('#medium-cone', focus());

        		var new_order = Order(++order_number, 1, 0);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cone'){
        		$('.cone-3').html('<img draggable="false" id="large-cone" title="Large Cone" class="m-2 draggable" src="./assets/static/images/icecream-cone-3.png">');
        		$('.cone-3').ready('#large-cone', setDraggable(lcone));
        		$('.cone-3').ready('#large-cone', focus());

        		var new_order = Order(++order_number, 2, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'small-cup'){
        		$('.cup-1').html('<img draggable="false" id="small-cup" title="Small Cup" class="m-2 draggable" src="./assets/static/images/bowl-1.tiff">');
        		$('.cup-1').ready('#small-cup', setDraggable(scup));
        		$('.cup-1').ready('#small-cup', focus());

        		var new_order = Order(++order_number, 0, 1);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cup'){
        		$('.cup-2').html('<img draggable="false" id="medium-cup" title="Medium Cup" class="m-2 draggable" src="./assets/static/images/bowl-2.tiff">');
        		$('.cup-2').ready('#medium-cup', setDraggable(mcup));
        		$('.cup-2').ready('#medium-cup', focus());

        		var new_order = Order(++order_number, 1, 1);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cup'){
        		$('.cup-3').html('<img draggable="false" id="large-cup" title="Large Cup" class="m-2 draggable" src="./assets/static/images/bowl-3.tiff">');
        		$('.cup-3').ready('#large-cup', setDraggable(lcup));
        		$('.cup-3').ready('#large-cup', focus());

        		var new_order = Order(++order_number, 2, 1);
        		orders.push(new_order);
        	}

        	setDatabaseOrders();
        	setCounter();
        	setNavigation();

        	setTimeout(function(){
				$('#cart').removeClass('cart-bounce');
				$('#cart').removeClass('bounce-4');
				$('.counter').removeClass('cart-bounce');
				$('.counter').removeClass('bounce-4');
			}, 1000);

           console.log(orders)
        }
    });
}

var setDroppableFlavor  = function(id) {

	$(id).droppable({
        accept: '.flavor',
        classes: {
            "ui-droppable":"highlight" 
        },
        drop: function( event, ui ) {

        	var id = $(ui.draggable).attr('id');

        	if(id === 'yellow'){
        		var div = '<div class="rounded-circle border rounded yellow flavor-selected d-inline-block"></div><label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>banana split</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'pink'){
        		var div = '<div class="rounded-circle border rounded pink flavor-selected d-inline-block"></div><label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>strawberry cheescake</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'blue'){
        		var div = '<div class="rounded-circle border rounded blue flavor-selected d-inline-block"></div><label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>lavender blueberry pie</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'green'){
        		var div = '<div class="rounded-circle border rounded green flavor-selected d-inline-block"></div> <label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>matcha green tea</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'orange'){
        		var div = '<div class="rounded-circle border rounded orange flavor-selected d-inline-block"></div><label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>peaches \'n cream</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'brown'){
        		var div = '<div class="rounded-circle border rounded brown flavor-selected d-inline-block"></div> <label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>mocha almond fudge</label><br>'

        		$(this).parent().prepend(div);

        	}
        	else if(id === 'vanilla'){
        		var div = '<div class="rounded-circle border rounded vanilla flavor-selected d-inline-block"></div> <label class="flavor-label align-text-top text-left ml-1 pl-2 pr-2"><span class="float-right remove">&times;</span>vanilla bean</label><br>'

        		$(this).parent().prepend(div);

        	}

        	removeFlavor();

        	setDatabaseOrders();

           console.log(orders)
        }
    });
}


var rotateImages   = function(){

	var indexFirst = Math.floor(Math.random() * 14 + 1);

	$('#img-home').css('background-image', 'url("./assets/static/images/ic'  + indexFirst + '.jpg")');

	setTimeout(function(){
			$('#img-home').addClass('img-home-animation-stop')
		}, 5000);

	prev = indexFirst;

	setInterval(function(){

		var index = Math.floor(Math.random() * 14 + 1);

		while(prev == index) {
			index = Math.floor(Math.random() * 14 + 1);
		}

		prev = index;

		$('#img-home').css('background-image', 'url("./assets/static/images/ic'  + index + '.jpg")');

		$('#img-home').addClass('img-home-animation');
		$('#img-home').removeClass('img-home-animation-stop')

		setTimeout(function(){
			$('#img-home').removeClass('img-home-animation');
			$('#img-home').addClass('img-home-animation-stop')
		}, 5000);
			
	}, 20000);
}

var removeFlavor = function(){

	$('.remove').on('click', function(){

		/*

		if(confirm("Are you sure you want to remove " + $(this).parent().first().text().substring(1, $(this).parent().first().text().length).trim() + "?")){

		*/
			$(this).parent().prev().remove();
			$(this).parent().next().remove();
			$(this).parent().remove();
		/*
		}
		*/
	}).on('mouseenter', function(){
		$(this).parent().css('text-shadow', '0px 0px 10px lightgray');
		$(this).parent().css('opacity', '0.5');

	}).on('mouseleave', function(){
		$(this).parent().css('text-shadow', '');
		$(this).parent().css('opacity', '1');
	});
}


var deleteItem = function() {

	$('.delete').on('click', function(){

		$(this).parent().remove();

	});
}

var addItem = function(){

	$('.small-container').on('click', function(){

		var container = $('.form-check-input:checked').val();

		var item = '<div class="m-5 ' + container + ' ' + container + '-1 text-center d-inline-block align-bottom"><span class="float-right delete">&times;</span><img draggable="false" id="small-' + container + '" title="Small Cone" class="m-2 mt-3 draggable" src="./assets/static/images/icecream.png"><br><div class="rounded-circle d-inline-block"></div><label class="align-text-top bottom">1 scoop left</label></div></div>'

		$('#selection').append(item);

		deleteItem();

		setDraggable(scone);

		setDroppableFlavor(scone)

		removeFlavor()

		setDroppable(cart)

		// TODO: get container info cup vs cone + set container type when creating item 
	});
}

$('document').ready(function(){

	var div = '<div class="rounded-circle border yellow flavor-selected mr-2 d-inline-block"></div> <label class="align-text-top text-left">banana split<span class="float-right remove">&times;</span></label><br>'

	$(scone).prepend(div)

	$('body').fadeIn(1000);

	rotateImages();

	setDraggable(yellow);
	setDraggable(pink);
	setDraggable(blue);
	setDraggable(green);
	setDraggable(orange);
	setDraggable(brown);
	setDraggable(vanilla);

	focus();
    setNavigation();

    addItem();
	
	showTitle(2000);

	$(window).mousemove(function(e){
    	triggerTitle(e);
    	triggerFooter(e);
	});
});
