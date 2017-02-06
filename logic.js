$( document ).ready(function() {
	$('.home').on('click', function() {
		$("html, body").animate({ scrollTop: $('#home_section').offset().top }, 1000);
	})

	$('.about').on('click', function() {
		$("html, body").animate({ scrollTop: $('#about_section').offset().top }, 1000);
	})

	$('.projects').on('click', function() {
		$("html, body").animate({ scrollTop: $('#project_section').offset().top }, 1000);
	})

	$('.ux_projects').on('click', function() {
		$("html, body").animate({ scrollTop: $('#ux_project_section').offset().top }, 1000);
	})
});


// Get the modal
var pomaModal = document.getElementById('pomaModal');
var mondoUxModal = document.getElementById('mondoModal');
var mondoWebModal = document.getElementById('mondoWebModal');
var chessModal = document.getElementById('chessModal');
var capstoneModal = document.getElementById('capstoneModal');
// Get the button that opens the modal
var btn = document.getElementById("pomaUxBtn");
var btn2 = document.getElementById("mondoUxBtn");
var btn3 = document.getElementById("mondoWebBtn");
var btn4 = document.getElementById("chessBtn");
var btn5 = document.getElementById("capstoneBtn");
var btn6 = document.getElementById("breakrBtn");
var btn7 = document.getElementById("mertleBtn");
var btn8 = document.getElementById("mineBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    pomaModal.style.display = "block";
}

btn2.onclick = function() {
    mondoUxModal.style.display = "block";
}

btn3.onclick = function() {
    mondoWebModal.style.display = "block";
}

btn4.onclick = function() {
    chessModal.style.display = "block";
}

btn5.onclick = function() {
    capstoneModal.style.display = "block";
}

btn6.onclick = function() {
    breakrModal.style.display = "block";
}

btn7.onclick = function() {
    mertleModal.style.display = "block";
}

btn8.onclick = function() {
    mineModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    pomaModal.style.display = "none";
}

span2.onclick = function() {
    mondoUxModal.style.display = "none";
}

span3.onclick = function() {
    mondoWebModal.style.display = "none";
}

span4.onclick = function() {
    chessModal.style.display = "none";
}

span5.onclick = function() {
    capstoneModal.style.display = "none";
}

span6.onclick = function() {
    breakrModal.style.display = "none";
}

span7.onclick = function() {
    mertleModal.style.display = "none";
}

span8.onclick = function() {
    mineModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == pomaModal) {
        pomaModal.style.display = "none";
    }
    if (event.target == mondoUxModal) {
        mondoUxModal.style.display = "none";
    }
    if (event.target == mondoWebModal) {
        mondoWebModal.style.display = "none";
    }
     if (event.target == chessModal) {
        chessModal.style.display = "none";
    }
    if (event.target == capstoneModal) {
        capstoneModal.style.display = "none";
    }
    if (event.target == breakrModal) {
        breakrModal.style.display = "none";
    }
    if (event.target == mertleModal) {
        mertleModal.style.display = "none";
    }
    if (event.target == mineModal) {
        mineModal.style.display = "none";
    }
}
