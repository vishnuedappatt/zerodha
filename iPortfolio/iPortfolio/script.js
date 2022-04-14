
$(document).ready(function(){
    $("sub".validate({
      rule:{
        lettersonly:true,
        minlength:4,
      }
    }))
  })