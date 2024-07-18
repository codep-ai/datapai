$(document).ready(function() {

  $('#btnSubmit').bind('click', function(e) {
    e.preventDefault();
    const payload = {
      suburb: $('#inputSuburb').val(),
      name: $('#inputName').val(),
      email: $('#inputEmail').val(),
      phone: $('#inputPhone').val(),
      message: $('#inputMessage').val()
    };
    let error = '2px solid red';
    let b = true;
    if (!payload.suburb) {
      b = false;
      $('#inputSuburb').css('border', error);
    }
    if (!payload.name) {
      b = false;
      $('#inputName').css('border', error);
    }
    if (!payload.email) {
      b = false;
      $('#inputEmail').css('border', error);
    }
    if (!payload.phone) {
      b = false;
      $('#inputPhone').css('border', error);
    }
    if (!payload.suburb) {
      b = false;
      $('#inputMessage').css('border', error);
    }
    if (!b) {
      return;
    }
    $.ajax({
      type: 'POST',
      url: '/contact',
      contentType: 'application/json',
      data: JSON.stringify(payload),
      success: function(e) {
        $('#message-success').show();
        $('#contact-form').hide();
      },
      error: function(e) {
        console.log(e);
      }
    });
  });


  $('#btnRegister').bind('click', function(e) {
    e.preventDefault();
    const payload = {
      name: $('#name').val(),
      year: $('#year').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      suburb: $('#suburb').val(),
      state: $('#state').val(),
      class: $('#class').val(),
      remark: $('#remark').val()
    };
    let error = '2px solid red';
    let b = true;
    if (!payload.suburb) {
      b = false;
      $('#suburb').css('border', error);
    }
    if (!payload.name) {
      b = false;
      $('#name').css('border', error);
    }
    if (!payload.email) {
      b = false;
      $('#email').css('border', error);
    }
    if (!payload.phone) {
      b = false;
      $('#phone').css('border', error);
    }
    if (!payload.state) {
      b = false;
      $('#state').css('border', error);
    }
    if (!payload.class) {
      b = false;
      $('#class').css('border', error);
    }
    if (!b) {
      return;
    }
    $.ajax({
      type: 'POST',
      url: '/register',
      contentType: 'application/json',
      data: JSON.stringify(payload),
      success: function(e) {
        $('#message-success').show();
        $('#register-form').hide();
      },
      error: function(e) {
        console.log(e);
      }
    });
  });

});
