$(document).ready(function(){

	'use strict';

	var $accordion = $('#accordion'),
		$accordionTitle1 = $('#accordion-title-1'),
		$accordionTitle2 = $('#accordion-title-2'),
		$accordionTitle3 = $('#accordion-title-3'),
		$accordionTitle4 = $('#accordion-title-4'),
		$accordionLinks = $('#accordion').children('h2');

	$accordionTitle1.on('click', function() {

		var $collapse1 = $('#collapse-1');

		if ($collapse1.hasClass('hidden')) {

			$accordion.children('div').addClass('hidden');

			$collapse1.removeClass('hidden');

		} else {

			$collapse1.addClass('hidden');

		}

	});

	$accordionTitle2.on('click', function() {

		var $collapse2 = $('#collapse-2');

		if ($collapse2.hasClass('hidden')) {

			$accordion.children('div').addClass('hidden');

			$collapse2.removeClass('hidden');

		} else {

			$collapse2.addClass('hidden');

		}

	});

	$accordionTitle3.on('click', function() {

		var $collapse3 = $('#collapse-3');

		if ($collapse3.hasClass('hidden')) {

			$accordion.children('div').addClass('hidden');

			$collapse3.removeClass('hidden');

		} else {

			$collapse3.addClass('hidden');

		}

	});

	$accordionTitle4.on('click', function() {

		var $collapse4 = $('#collapse-4');

		if ($collapse4.hasClass('hidden')) {

			$accordion.children('div').addClass('hidden');

			$collapse4.removeClass('hidden');

		} else {

			$collapse4.addClass('hidden');

		}

	});

	// Create on click functions for all accordion titles

	// Begin Shopping List Stuff
	var $totalPrice = $('#total-price'),
		shoppingList = [],
		total = 0.00;

	// Make total display initially
	$totalPrice.html('Your total grocery bill is: $' + total.toFixed(2));

	$('#add-groceries').on('click', function(){

		addGroceries();

	});

	// Target the form to add items, price, and their quantity
	function addGroceries(){

		var $growingFoodList = $('#growing-food-list'),
			$growingPriceList = $('#growing-price-list'),
			$totalPrice = $('#total-price'),
			newItem = $('#food-to-add').val(),
			newPrice = $('#price-to-add').val(),
			newQuantity = $('#quantity-to-add').val();

		// Validate that values are not null
		if (newItem === '' || newPrice === '' || newQuantity === '') {

			if (newItem === '') {

				alert('Please enter a name for the item you are buying');

			}

			if (newPrice === '') {

				alert('Please enter a price for the item you are buying');

			}

			if (newQuantity === '') {

				alert('Please enter a quantity for the item you are buying');

			}

		}

		if (newPrice < 0 || newQuantity < 0) {

			if (newPrice < 0) {

				alert('The price must be positive');

			}

			if (newQuantity < 0) {

				alert('The quantity must be positive');

			}

		} else if ($.isNumeric(newPrice) && $.isNumeric(newQuantity)) {

			// Add <li> to #growing-food-list
			$growingFoodList.append('<li>' + newItem + ' is</li>');

			// Add <li> to #growingPriceList
			$growingPriceList.append('<li>' + '$' + newPrice  * newQuantity + '</li>');

			// Continuously update the total everytime a new item is added
			total += parseFloat(newPrice * newQuantity);
			$totalPrice.html('Total price: $' + total.toFixed(2));

		} else {

			alert('You must enter a valid number for the price and quantity of your item.');

		}

	}

});
