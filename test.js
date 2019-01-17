
// this text

$("#tour").on('click mouseover', function(){
$("#touris").slideToggle(1000)
})

$("#compdisc").on('click mouseover', function(){
$("#CDis").slideToggle(1000)
})

$("#combo").on('click', function(){
$("#combois").slideToggle(1000)
})

// this text

// it is
$("#order").click(function () {
    if ($("#fname").val() =='') {
      $("#warning").show("slide", { direction: "down" }, 1000);
    } else {
      $("#warning").hide(1000);
      $("body").css("background-color", "lightgreen");
     var call = $("#fname").val()
     $("#result").html(call).append(", thank you for entering your selection.");
     var em = $("#yahoo").val()
     $("#result2").html(em).prepend("Confirmation will be sent to ").append(". Click next to continue.");
     $("#gonext").show("slide", { direction: "down" }, 1000);     
    }
  });

// it is




// it is2
// $("#order").click(function () {
//     if ($("#fname").val() =='') {
//       $("#warning").show("slide", { direction: "down" }, 1000);
//     } else {
//       $("#warning").hide(1000);
//      var call = $("#fname").val()
//      $("#result").html(call).append(", thank you for entering your selection. Click next to continue.");
//      $("#gonext").show("slide", { direction: "down" }, 1000);     
//     }
//   }); 
// it is2

// another

var calc1
var calc2
var calc3


$("input").change(function(){
 var calc = $("#ball").val()
  calc1 = calc * 25
 $("#ttotal").html(calc1).prepend("$")
});

$("input").change(function(){
 var calc = $("#tall").val()
 calc2 = calc * 20
 $("#ctotal").html(calc2).prepend("$")
});

$("input").change(function(){
 var calc = $("#wall").val()
 calc3 = calc * 40
 $("#cttotal").html(calc3).prepend("$")
});

// another
// $("input").change(function(){
//  var calc = $("input").val()
// var calc2 = calc * 25
// }
//  if $("#tourcost").click(function(){
//   $("#ttotal").html(calc2);
// });
$("#allsum").click(function () {
  var tixtot = $("#ttotal").html()
  // console.log(tixtot)

  var cdtot = $("#ctotal").html()
  var tixcdtot = $("#cttotal").html()
  var all = calc1 + calc2 + calc3
  // console.log(all)

     $("#yourtotal").html(all);
     });


const rollSound = new Audio("slideout.mp3");
$("#allsum").click(e => rollSound.play());