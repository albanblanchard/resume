$(function () {
  //active les tooltips BS
  $('[data-toggle="tooltip"]').tooltip();

  // hack pour problème de height:100vh sur les navigateurs mobiles qui ne prennent pas en compte la présence de leur barre de menu ds le calcul
  function calcVH() {
    $('header').innerHeight( $(this).innerHeight() );
    $('#mask').innerHeight( $(this).innerHeight() );
  }
  calcVH();
  $(window).on('resize orientationchange', function() {
    calcVH();
  });

  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function(e) {
    // prevent default action and bubbling
    e.preventDefault();
   e.stopPropagation();
    // set target to anchor's "href" attribute
    var target = $(this).attr('href');
    // scroll to each target
    $(target).velocity('scroll', {
      duration: 1000,
      // offset: 0,
      easing: 'easeOutExpo'
    });
  });

  // destination par défaut du bouton "rewind"
  backToTarget = '#top';
  // enregistrement de la provenance du clic sur les liens vers #contact, pour ré-utilisation avec le bouton "rewind"
    $('a[href="#contact"]').on('click', function(){
      backToTarget = $(this).hasClass('last') ? '#top' : '#' + $(this).attr('id');
      console.log(backToTarget);
    });
    // fonction scroll du bouton rewind avec destination enregistrée ci-dessus
    $('#rewind').on('click', function(event) {
      // prevent default action and bubbling
  event.preventDefault();
   event.stopPropagation();
      $(backToTarget).velocity('scroll', {
        duration: 1000,
        easing: 'easeOutExpo'
      });
      backToTarget = '#top';
      console.log(backToTarget);
    });

});


// function submitContactForm(){
//     var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
//     var name = $('#inputName').val();
//     var email = $('#inputEmail').val();
//     var message = $('#inputMessage').val();
//     if(name.trim() == '' ){
//         alert('Please enter your name.');
//         $('#inputName').focus();
//         return false;
//     }else if(email.trim() == '' ){
//         alert('Please enter your email.');
//         $('#inputEmail').focus();
//         return false;
//     }else if(email.trim() != '' && !reg.test(email)){
//         alert('Please enter valid email.');
//         $('#inputEmail').focus();
//         return false;
//     }else if(message.trim() == '' ){
//         alert('Please enter your message.');
//         $('#inputMessage').focus();
//         return false;
//     }else{
//         $.ajax({
//             type:'POST',
//             url:'contact.php',
//             data:'contactFrmSubmit=1&name='+name+'&email='+email+'&message='+message,
//             beforeSend: function () {
//                 $('.submitBtn').attr("disabled","disabled");
//                 $('.modal-body').css('opacity', '.5');
//             },
//             success:function(msg){
//                 if(msg == 'ok'){
//                     $('#inputName').val('');
//                     $('#inputEmail').val('');
//                     $('#inputMessage').val('');
//                     $('.statusMsg').html('<span style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</p>');
//                 }else{
//                     $('.statusMsg').html('<span style="color:red;">Some problem occurred, please try again.</span>');
//                 }
//                 $('.submitBtn').removeAttr("disabled");
//                 $('.modal-body').css('opacity', '');
//             }
//         });
//     }
// }
