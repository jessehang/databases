var App = {

  $spinner: $('.spinner img'),

  username: 'rememberToPush',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var x = 0; x < 20; x ++) {
        if (data.results[x].username && data.results[x].text) {
          MessagesView.renderMessage(data.results[x]);
        }
        if (data.results[x].roomname !== undefined && data.results[x].roomname !== '') {
          if (!Rooms.roomList.includes(data.results[x].roomname)) {
            Rooms.roomList.push(data.results[x].roomname)
            RoomsView.renderRoom(data.results[x].roomname)
          }
        }
      }
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};