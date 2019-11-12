//backend
var arrayOfUserNUm=[];



//ui
$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    $("#result").show();
    var usersNumber = parseInt($("input#userinputtedNumber").val());
      console.log(usersNumber)
      var numtoword = function(){
      var usersnumchange = usersNumber
      for(i=1; i <= usersNumber; i++){
        arrayOfUserNUm.push(usersnumchange)

        usersnumchange -= 1;
        }
        for (i = 0; i < arrayOfUserNUm.length; i ++){
         if(arrayOfUserNUm[i].toString().includes(3))
         {
           arrayOfUserNUm[i] = 'im sorry';
         }
         else if (arrayOfUserNUm[i].toString().includes(2))
         {
           arrayOfUserNUm[i] = 'beep';
         }
         else if (arrayOfUserNUm[i].toString().includes(1))
         {
           arrayOfUserNUm[i] = 'boop';
         }
       }
       console.log((arrayOfUserNUm))
       var arrayforresult = arrayOfUserNUm.toString();
       $("#result").text(arrayforresult);
       $("#result").show();
       $("#formarea").show();
};
console.log(numtoword())
});
});
