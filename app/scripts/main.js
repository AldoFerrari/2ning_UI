 console.log('\'Allo \'Allo!');
 
 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


 
$(function() { 
  
     
      if (!localStorage.getItem("popState")  ) {
        $("#staticBackdrop").delay(2000).modal('show');
           var currentTimestamp = Date.now(); 
 
  localStorage.setItem("cookieModal","seen at:"+currentTimestamp);

        $('#acceptCookieBtn').on('click', function(e) {
            console.log("accetto");
            localStorage.setItem("popState","accepted at:"+currentTimestamp);
            e.preventDefault();
            $('#staticBackdrop').modal("hide");
          });

          $('#rejectCookieBtn').on('click', function(e) {
            console.log("rifiuto");
            localStorage.setItem("popState","closed at:"+currentTimestamp);
            e.preventDefault();
            $('#staticBackdrop').modal("hide");
          });
  
      }else{
      
        
      } 
    
//-------------
    
 //   $('#staticBackdrop').modal('show');
 

 
    }); 




    /*
    $(document).ready(() => {
        console.log(window.localStorage.modal);
        if (window.localStorage.modal != "true") {
            setTimeout(function(){
                $("#exampleModalCenter").modal('show');
                window.localStorage.modal = true;
            }, 2000);
        }
})
*/


    /*

    if (localStorage.getItem("Supercookie") == "seen") {
  $('.cookies').hide();
}
else {
  $('.cookies').show();
}

$('.button').click(function() {
  localStorage.setItem("Supercookie","seen")
  $('.button').parent().fadeOut();
});
    */