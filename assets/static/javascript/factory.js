var prevScrollpos = window.pageYOffset;

var scone = '#small-cone'
var mcone = '#medium-cone'
var lcone = '#large-cone'

var scup = '#small-cup'
var mcup = '#medium-cup'
var lcup = '#large-cup'

var cart = '#cart'

var orders = []
var order_number = 0;

var size;

var Order = function(number, size,  container)  {

	var order  = {
		number: number,
		size: size,
		container: container
	}
	return order;
}

var focus =  function(){

	$('.size').on('mouseover', function(){
		$('#cart').addClass('focus');
	});

	$('.size').on('mouseout', function(){
		$('#cart').removeClass('focus');
	});
}

var setDraggable  = function(id) {

	$(id).on("click", function(){
        $(this).draggable({
            addClasses: true,
            zIndex: 100,
            revert: "invalid"
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

        	if(id === 'small-cone'){
        		$('.cone-1').html('<img draggable="false" id="small-cone" title="Small Cone" class="m-2 size" src="./assets/static/images/icecream.png">');
        		$('.cone-1').ready('#small-cone', setDraggable(scone));
        		$('.cone-1').ready('#small-cone', focus());

        		var new_order = Order(++order_number, 0, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cone'){
        		$('.cone-2').html('<img draggable="false"  id="medium-cone" title="Medium Cone" class="m-2 size" src="./assets/static/images/icecream-cone-2.png">');
        		$('.cone-2').ready('#medium-cone', setDraggable(mcone));
        		$('.cone-2').ready('#medium-cone', focus());

        		var new_order = Order(++order_number, 1, 0);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cone'){
        		$('.cone-3').html('<img draggable="false" id="large-cone" title="Large Cone" class="m-2 size" src="./assets/static/images/icecream-cone-3.png">');
        		$('.cone-3').ready('#large-cone', setDraggable(lcone));
        		$('.cone-3').ready('#large-cone', focus());

        		var new_order = Order(++order_number, 2, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'small-cup'){
        		$('.cup-1').html('<img draggable="false" id="small-cup" title="Small Cup" class="m-2 size" src="./assets/static/images/bowl-1.tiff">');
        		$('.cup-1').ready('#small-cup', setDraggable(scup));
        		$('.cup-1').ready('#small-cup', focus());

        		var new_order = Order(++order_number, 0, 1);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cup'){
        		$('.cup-2').html('<img draggable="false" id="medium-cup" title="Medium Cup" class="m-2 size" src="./assets/static/images/bowl-2.tiff">');
        		$('.cup-2').ready('#medium-cup', setDraggable(mcup));
        		$('.cup-2').ready('#medium-cup', focus());

        		var new_order = Order(++order_number, 1, 1);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cup'){
        		$('.cup-3').html('<img draggable="false" id="large-cup" title="Large Cup" class="m-2 size" src="./assets/static/images/bowl-3.tiff">');
        		$('.cup-3').ready('#large-cup', setDraggable(lcup));
        		$('.cup-3').ready('#large-cup', focus());

        		var new_order = Order(++order_number, 2, 1);
        		orders.push(new_order);
        	}

        	setCounter();

        	setTimeout(function(){
				$('#cart').removeClass('cart-bounce');
				$('#cart').removeClass('bounce-4');
			}, 1000);

           console.log(orders)
        }
    });
}

$('document').ready(function(){

	setDraggable(scone);
	setDraggable(mcone);
	setDraggable(lcone);
	setDraggable(scup);
	setDraggable(mcup);
	setDraggable(lcup);

	setDroppable(cart);

	focus();
	
//   window.onscroll = function() {
//       var currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//           $('.title').css('top', '-50px')
//           $('.footer').css('bottom', '-50px')
//        } else {
//        	$('.title').css('top', '20px')
//        	$('.footer').css('bottom', '10px')
//        }
//
//        prevScrollpos = currentScrollPos;
//    }
});
