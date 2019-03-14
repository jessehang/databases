var MessageView = {

  render: _.template(
      `<div class="chat">
        <div class="username">'<%- username %></div>
        <div> <%- text %></div>
      </div>`
  ),

  renderMessage: function(message){
    var template =
    `<div class="chat">
    <div class="username">${_.escape(message.username)}</div>
    <div> ${_.escape(message.text)}</div>
    <div name=${_.escape(message.roomname)}>${_.escape(message.roomname)}</div>
    </div>`
    return template;
  }
  
    

};