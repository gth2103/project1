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

var Order = function(number, size)  {

	var order  = {
		number: number,
		size: size
	}
	return order;
}

var setDraggable  = function(id) {

	$(id).on("click", function(){
        $(this).draggable({
            addClasses: true,
            zIndex: 100,
            revert: "invalid"
        });
    });
}

var setDroppable  = function(id) {

	$(id).droppable({
        accept: '#small-cone,#medium-cone,#large-cone,#small-cup,#medium-cup,#large-cup',
        classes: {
            "ui-droppable":"highlight" 
        },
        drop: function( event, ui ) {

        	var id = $(ui.draggable).attr('id');

        	if(id === 'small-cone'){
        		$('.cone-1').html('<img id="small-cone" class="m-2" src="./assets/static/images/icecream.png">');
        		var new_order = Order(++order_number, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cone'){
        		$('.cone-2').html('<img id="medium-cone" class="m-2" src="./assets/static/images/icecream-cone-2.png">');
        		var new_order = Order(++order_number, 1);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cone'){
        		$('.cone-3').html('<img id="large-cone" class="m-2" src="./assets/static/images/icecream-cone-3.png">');
        		var new_order = Order(++order_number, 2);
        		orders.push(new_order);
        	}

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

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
           $('.title').css('top', '-50px')
           $('.footer').css('bottom', '-50px')
        } else {
        	$('.title').css('top', '20px')
        	$('.footer').css('bottom', '10px')
        }

        prevScrollpos = currentScrollPos;
    }
});
