$(document).ready(deletableItem())

//add event listener 
$("#addItem").click(function(){
	var addBtn = $('#listName').val();
	$("ul").append('<li>' + addBtn + '</li>')
		
	var addBtn = $('#listName').val("");
});

//delete items
function deletableItem(){
	$("#list").on('click', 'li', function () {
		$(this).toggleClass('itemremove');

		setTimeout(() =>{
			$(this).remove();
			}, 1200);
	
	
})
}

