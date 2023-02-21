// function hide()
// {
// 	var text=document.getElementById('filter-1');
// 	text.style.display="none";

// }
// active tag
var checkboxes = document.querySelectorAll(".checkbox");


let filtersSection = document.querySelector(".filters-section");

var listArray = [];

var filterList = document.querySelector(".filter-list");

var len = listArray.length;

for (var checkbox of checkboxes) {
    checkbox.addEventListener("click", function () {
        if (this.checked == true) {
            addElement(this, this.value);
        }
        else {

            removeElement(this.value);
            console.log("unchecked");
        }
    })
}


function addElement(current, value) {
    let filtersSection = document.querySelector(".filters-section");

    let createdTag = document.createElement('span');
    createdTag.classList.add('filter-list');
    createdTag.classList.add('ps-3');
    createdTag.classList.add('pe-1');
    createdTag.classList.add('me-2');
    createdTag.innerHTML = value;

    createdTag.setAttribute('id', value);
    let crossButton = document.createElement('button');
    crossButton.classList.add("filter-close-button");
    let cross = '&times;'



    crossButton.addEventListener('click', function () {
        let elementToBeRemoved = document.getElementById(value);

        console.log(elementToBeRemoved);
        console.log(current);
        elementToBeRemoved.remove();

        current.checked = false;




    })

    crossButton.innerHTML = cross;


    // let crossButton = '&times;'

    createdTag.appendChild(crossButton);
    filtersSection.appendChild(createdTag);

}

function removeElement(value) {

    let filtersSection = document.querySelector(".filters-section");

    let elementToBeRemoved = document.getElementById(value);
    filtersSection.removeChild(elementToBeRemoved);

}


// function checkbox(){
 
// 	var checkboxes = document.getElementsByName('vehicle');
// 	var checkboxesChecked = [];
// 	// loop over them all
// 	for (var i=0; i<checkboxes.length; i++) {
// 	   // And stick the checked ones onto an array...
// 	   if (checkboxes[i].checked) {
// 		  checkboxesChecked.push(checkboxes[i].value);
// 	   }
// 	}
// 	document.getElementById("show").value = checkboxesChecked;
  
//   } 
  // active tag

// star rating
	jQuery(document).ready(function($){
	    
	$(".btnrating").on('click',(function(e) {
	
	var previous_value = $("#selected_rating").val();
	
	var selected_value = $(this).attr("data-attr");
	$("#selected_rating").val(selected_value);
	
	$(".selected-rating").empty();
	$(".selected-rating").html(selected_value);
	
	for (i = 1; i <= selected_value; ++i) {
	$("#rating-star-"+i).toggleClass('btn-warning');
	$("#rating-star-"+i).toggleClass('btn-default');
	}
	
	for (ix = 1; ix <= previous_value; ++ix) {
	$("#rating-star-"+ix).toggleClass('btn-warning');
	$("#rating-star-"+ix).toggleClass('btn-default');
	}
	
	}));
	
		
});
// star rating 

function showList(e) {
    var $gridCont = $('.grid-container');
    var $new_item=$('.new-items')
    e.preventDefault();
    $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
    $gridCont.hasClass('list-view') ? $new_item.removeClass('d-none') : $gridCont.addClass('d-block');
  }
  function gridList(e) {
    var $gridCont = $('.grid-container')
    var $new_item=$('.new-items')
    // e.preventDefault();
    $gridCont.removeClass('list-view');
    $new_item.addClass('d-none');

  }
  
  $(document).on('click', '.btn-grid', gridList);
  $(document).on('click', '.btn-list', showList);



// function grid(){
//    let card = document.querySelectorAll(".card");

//    let cardBody = document.querySelectorAll(".card-body");

//    let ratings = document.querySelector(".ratings");
//    let star = document.querySelector(".star");
//    let applyButton = document.querySelector(".apply-btn");

//    ratings.classList.add("justify-content-between");
//    ratings.classList.remove("ms-1");

//    star.classList.remove("ms-2");
//    applyButton.classList.remove("ms-2");

// }





// function list(){
//    let card = document.querySelectorAll(".card");

//    let cardBody = document.querySelectorAll(".card-body");

//    let ratings = document.querySelector(".ratings");
//    let star = document.querySelector(".star");
//    let applyButton = document.querySelector(".apply-btn");

//    ratings.classList.remove("justify-content-between");
//    ratings.classList.add("ms-1");

//    star.classList.add("ms-2");
//    applyButton.classList.add("ms-2");


// }