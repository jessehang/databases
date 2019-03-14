var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $(document).on('change', '#rooms select', function(e) {
      // console.log(this.options[e.target.selectedIndex]);
      FormView.currentRoom = e.target.selectedIndex;
      console.log(FormView.currentRoom)
  });
    Rooms.add();
  },

  handleAddRoom: function(event) {
    // Stop the browser from submitting the form
    //call the massage appending function
    event.preventDefault();
    
    RoomsView.renderRoom($('#message').val());
    $('#message').val('');
    // console.log('room click!');
  },

  renderRoom: function(room){
    var roomName = _.escape(room);
    return RoomsView.$select.append(`<option id=room name=${roomName}>${roomName}</option>`);
  }

};
