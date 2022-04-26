$("button").click(function(){
       let name = $(".name").val();
    let week = $(".week").val();
    let expensive = $(".expensive").val();      
let moneySpent = (expensive + week);
 $(".fortune-display").append(name + ", you will spend " + moneySpent + " by the end of 2022.");

    
});
    
