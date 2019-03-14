var Friends = {


    toggleStatus: function (username) {

        $(`div:contains(${username})`).toggleClass('friend');
        //change between true and false
        //if !currentfriend.friendName
            //add key (friendName), value(true)
        //else currentfriend.friendName = !currentfriend.friendName;
    },



};