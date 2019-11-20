$(document).ready(function() { 


$(".comment-box").hide();
$(".hide-comments-btn").hide();

$(".show-comment-btn").on("click", function(event){
    event.preventDefault();

    var id = $(this).val()

    $(`#comments-${id}`).show();
    $(`#show-comment-${id}`).hide()
    $(`#hide-comment-${id}`).show();

})

$(".post-comment-btn").on("click", function(event) {

    event.preventDefault();
    var id = $(this).val()

    console.log("You've made a comment!")
    console.log("Saving to Comment Div: " + id)

})

$(".hide-comments-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).val()

    $(`#comments-${id}`).hide();
    $(`#show-comment-${id}`).show();
})





})