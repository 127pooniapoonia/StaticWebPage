 $(document).ready(function () {

     $('#customers,#growth,#connected_life,#experience,#lifestyle').on('click', function () {
         $.fancybox.open($('.learn_more_gallery'), {
             touch: false,
             infobar: false
         });
     });
     $('#continue_reading_img,#continue_reading_video').on('click', function () {
         $.fancybox.open($('.continue_reading'), {
             touch: false,
             infobar: false
         });
     });
     $('.truncate_word').each(function (f) {

         var newstr = $(this).text().substring(0, 250);
         $(this).text(newstr);

     });
 })