
$("#tscarf").on('click mouseover', function(){
$("#turquoise").slideToggle(1000)
})

$("#pscarf").on('click mouseover', function(){
$("#plum").slideToggle(1000)
})

$("#oscarf").on('click', function(){
$("#orange").slideToggle(1000)
})





// // it is2
$("#order").click(function () {
    if ($("#fname").val() =='') {
      $("#warning").show("slide", { direction: "down" }, 1000);
    } else {
      $("#warning").hide(1000);
	  $("body").css("background-color", "lightgreen");
var call = $("#fname").val()
     $("#resultsA").html(call).append(", thank you for entering your selection.");
     var em = $("#yahoo").val()
     $("#resultsB").html(em).prepend("Confirmation will be sent to ").append(". Click next to continue.");
     $("#gonext").show("slide", { direction: "down" }, 1000);     
    }
  });
// it is2

// // another
var calc5
var calc6
var calc7
var edge

$("input").change(function(){
 var calc4 = $("#turprice").val()
 calc5 = calc4 * 35
 $("#turtotal").html(calc5)
});

$("input").change(function(){
 var calc4 = $("#plumprice").val()
 calc6 = calc4 * 35
 $("#plumtotal").html(calc6)
});

$("input").change(function(){
 var calc4 = $("#orangeprice").val()
 calc7 = calc4 * 35
 $("#orangetotal").html(calc7)
});

 
$("#tassel").on('click mouseover', function(){
$("#turquoise").slideToggle(1000)
})



$("#edge2").on('click', function(){
 edge = $("#tassel").val()
 $("#addon").html(edge)
})


$("#allsumS").click(function () {
  var ttot = $("#turtotal").html()
  // console.log(tixtot)

  var ptot = $("#plumtotal").html()
  var otot = $("#orangetotal").html()
  var all = parseInt(calc5) + parseInt(calc6) + parseInt(calc7) + parseInt(edge)
  // console.log(all))

  $("#yourtotalS").html(all);
     });


const rollSound = new Audio("slideout.mp3");
$("#allsumS").click(e => rollSound.play());