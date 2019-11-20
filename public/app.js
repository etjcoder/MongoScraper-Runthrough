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
    console.log($("#comment").val())
    console.log("Saving to Comment Div: " + id)
    var text = $("#comment").val()

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/comment/" + id,
        data: {
            body: text,
            username: "unknown"
        }
    }).then(function(data) {
        console.log(data);
        console.log("Comment Saved!");
    })

})



$(".hide-comments-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).val()

    $(`#comments-${id}`).hide();
    $(`#show-comment-${id}`).show();
})





})