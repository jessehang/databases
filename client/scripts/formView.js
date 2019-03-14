var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', function(event) {
      FormView.handleSubmit(event, true);

    })

  },

  currentRoom: 0,

  handleSubmit: function(event) {
    event.preventDefault();
    if ($('#message').val().length > 0) {
    var message = {
      username: App.username,
      text: _.escape($('#message').val()),
      roomname: $('#rooms select')[0][FormView.currentRoom].innerHTML
    };
    if (arguments[1]) {
      MessagesView.renderMessage(message, true);
    } else {
      MessagesView.renderMessage(message);
    }
    // console.log($('#message').val());

    Parse.create(message, function(){
      console.log ('Message Posted')
    });
    $('#message').val('')
    //refresh #cha
  }
  },
  
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};