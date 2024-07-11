$('.openNav').on('click',function(){
    $("#leftMenu").animate({ width:'250px'},100)
    $("#home-content").animate({marginLeft :'250px'},500)
});

$('.closebtn').on('click',function(){
    $("#leftMenu").animate({ width:'0'},100)
    $("#home-content").animate({marginLeft :'0'},500)
});




/*counte*/


window.onload = function() {
   
    countDownToTime("26 July 2024 9:00:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



$('#slideDown .get').on('click',function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});














$('textarea').keyup(function() {
    // 100 >>>> Max length 
    var AmountLeft = 100-$(this).val().length;
    if(AmountLeft==0)
              {
                $('#chars').text("your available character finished");
                $('textarea').removeClass('is-invalid');
                $('#submitBtn').removeClass('d-none');
              }
       else if (AmountLeft<=-1){
        $('#chars').text("you must write only 100 character");
        $('textarea').addClass('is-invalid');
        $('#submitBtn').addClass('d-none');
              }
          else{
          $("#chars").text(AmountLeft);
          $('#submitBtn').removeClass('d-none');
          $('#submitBtn').removeClass('d-none');
          }
  });