var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    //fetches data
    //call App.fetch, passing in a callback
    //iterate over the data
    //pass each item into render
    // var passMsgToRender = function (messageArr){
    //   for (var i = 0; i < messageArr.length; i++){
    //     MessageView.render(messageArr[i]);
    //   }
    // };
    // App.fetch(passMsgToRender);
    //callback should: 
    MessagesView.$chats.on('click', '.username', function(e) {
      Friends.toggleStatus(e.target.innerHTML);
    });
  },

  renderMessage: function(message) {
    //show data 
    //add the message to the page
    //username, room, text 
    let newMessage = MessageView.renderMessage(message);
    // console.log(newMessage);
    // this.messageArr.push(newMessage);
    if (arguments[1]) {
      MessagesView.$chats.prepend(newMessage)
    } else {
      MessagesView.$chats.append(newMessage);
    }
  }

};


