
$("#bday1").on('click mouseover', function(){
$("#bday2").slideToggle(1000)
})

$("#special1").on('click mouseover', function(){
$("#special2").slideToggle(1000)
})

$("#hol1").on('click', function(){
$("#hol2").slideToggle(1000)
})





// // it is2
$("#order").click(function () {
    if ($("#fname").val() =='') {
      $("#warning").show("slide", { direction: "down" }, 1000);
    } else {
      $("#warning").hide(1000);
	  $("body").css("background-color", "lightgreen");
var call = $("#fname").val()
     $("#resultscard").html(call).append(", thank you for entering your selection.");
     var em = $("#yahoo").val()
     $("#resultscard2").html(em).prepend("Confirmation will be sent to ").append(". Click next to continue.");
     $("#gonext").show("slide", { direction: "down" }, 1000);     
    }
  });
// it is2

// // another
var calcb
var calcc
var calcd


$("input").change(function(){
 var calca = $("#bprice").val()
 calcb = calca * 20
 $("#btotal").html(calcb)
});

$("input").change(function(){
 var calca = $("#sprice").val()
 calcc = calca * 20
 $("#stotal").html(calcc)
});

$("input").change(function(){
 var calca = $("#hprice").val()
 calcd = calca * 20
 $("#htotal").html(calcd)
});

 
// $("#tassel").on('click mouseover', function(){
// $("#turquoise").slideToggle(1000)
// })



// $("#edge2").on('click', function(){
//  edge = $("#tassel").val()
//  $("#addon").html(edge)
// })/


$("#allsumS").click(function () {
  var btot = $("#btotal").html()
  // console.log(tixtot)

  var sot = $("#stotal").html()
  var htot = $("#htotal").html()
  var all = parseInt(calcb) + parseInt(calcc) + parseInt(calcd) 
  // + parseInt(edge)
  // console.log(all))

  $("#yourtotalS").html(all);
     });


const rollSound = new Audio("slideout.mp3");
$("#allsumS").click(e => rollSound.play());