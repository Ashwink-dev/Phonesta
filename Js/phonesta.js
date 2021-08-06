$("#accordion")
    .accordion({
        collapsible: false,
        active: false,
        heightStyle: "content",
        // beforeActivate: function(event, ui) {
        //     var oldInput = ui.oldHeader.find('input');
        //     oldInput.prop('checked', !oldInput.prop('checked')) // this bit unchecks when the accordion is closed

        //     var newInput = ui.newHeader.find('input'); // this bit checks when the accordion is opened
        //     newInput.prop('checked', !newInput.prop('checked'))
        // }
    });

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}