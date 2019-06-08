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
        		$('.cone-1').ready('#small-cone', setDraggable(scone));

        		var new_order = Order(++order_number, 0, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cone'){
        		$('.cone-2').html('<img id="medium-cone" class="m-2" src="./assets/static/images/icecream-cone-2.png">');
        		$('.cone-2').ready('#medium-cone', setDraggable(mcone));

        		var new_order = Order(++order_number, 1, 0);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cone'){
        		$('.cone-3').html('<img id="large-cone" class="m-2" src="./assets/static/images/icecream-cone-3.png">');
        		$('.cone-3').ready('#large-cone', setDraggable(lcone));

        		var new_order = Order(++order_number, 2, 0);
        		orders.push(new_order);
        	}
        	else if(id === 'small-cup'){
        		$('.cup-1').html('<img id="small-cup" class="m-2" src="./assets/static/images/bowl-1.tiff">');
        		$('.cup-1').ready('#small-cup', setDraggable(scup));

        		var new_order = Order(++order_number, 0, 1);
        		orders.push(new_order);
        	}
        	else if(id === 'medium-cup'){
        		$('.cup-2').html('<img id="medium-cup" class="m-2" src="./assets/static/images/bowl-2.tiff">');
        		$('.cup-2').ready('#medium-cup', setDraggable(mcup));

        		var new_order = Order(++order_number, 1, 1);
        		orders.push(new_order);

        	}
        	else if(id === 'large-cup'){
        		$('.cup-3').html('<img id="large-cup" class="m-2" src="./assets/static/images/bowl-3.tiff">');
        		$('.cup-3').ready('#large-cup', setDraggable(lcup));

        		var new_order = Order(++order_number, 2, 1);
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
