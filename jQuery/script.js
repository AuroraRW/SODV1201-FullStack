////////////////the order of script link//////////////////////
// $(document).ready(()=>{
//     console.log("ready")
// })

//////////////////selectors////////////////////////
// return array (convert to jQuery object)

// $(document).ready(()=>{
//     $("button").click(()=>{
//         // $("#no1").hide()
//         // $(".no2").hide()
//         // console.log($(".no2"))

//         // use JS
//         // console.log($("h1")[2])
//         // $("h1")[2].style.display = "none"

//         // use jQuery
//         // console.log($($("h1")[2]))
//         // $($("h1")[2]).hide()
//     })
// })

////////////////////$(this)//////////////////////////
// hide the button itself

// $(document).ready(()=>{
//     $("button").click((event)=>{
//         console.log($(event.target))
//         $(event.target).hide()
//     })
// })

// $(document).ready(()=>{
//     $("button").click(function(event){
//         console.log($(event.target))
//         $(event.target).hide()
//     })
// })

////////// do not use $(this) in arrow function
// $(document).ready(()=>{
//     $("button").click(function(){
//         console.log($(this))
//         $(this).hide()
//     })
// })

///////////////each////////////////////////
// $(document).ready(()=>{
//     $("button").click(()=>{
//         $("h1").each(function(){
//             console.log($(this))
//         })
//     })
// })

///////////////////CSS////////////////////////
// $(document).ready(()=>{
//     $("button").click(()=>{
//         // $($("h1")[1]).addClass("text-color")
//         // $($("h1")[1]).removeClass("no2")
//         // $($("h1")[1]).toggleClass("no2")
//         $($("h1")[1]).css({"background-color": "yellow", "font-size": "200px"});
//     })
// })

/////////////////////DOM///////////////////////////
////////Get Element / Update Element ///////////

// $(document).ready(()=>{
//     $("button").click(function(){
//         // console.log($("#no1").html())
//         // $("#no1").html("123")

//         // input property
//         // console.log($("input").val())
//         // $("input").val("000")

//         // input attribute
//         $("input").attr("value", "123")
//         $("input").val("000")
//     }) 
// })

/////////// Create Element  / Delete Element//////////

// $(document).ready(()=>{
//     $($("button")[0]).click(function(){
//         let textEle = $("<p></p>").text("This is P tag")
//         $("div").append(textEle)
//     })
//     $($("button")[1]).click(()=>{
//         // console.log($("p"))
//         // $("p").remove()
//         // $("p").empty()
//     })
// })


