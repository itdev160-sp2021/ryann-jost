//Array to store messages
var messages = [];

//Message Type lookup object. Similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Seed data (optional)
var data = [
    {
        type: messageType.out,
        user: 'Meredith',
        message: 'Hey, you have plans after work?'
    },
    {
        type: messageType.in,
        user: 'Christina',
        message: 'Hey! No, how about Joes?'
    },
    {
        type: messageType.out,
        user: 'Meredith',
        message: 'Ok, lets go!'
    },
    {
        type: messageType.in,
        user: 'Christina',
        message: 'Meet at 8?'
    },
    {
        type: messageType.out,
        user: 'Meredith',
        message: 'Sounds good. Let me check that Derek can pick up the kids.'
    },
    {
        type: messageType.in,
        user: 'Christina',
        message: 'Let me know'
    },
    {
        type: messageType.out,
        user: 'Meredith',
        message: 'All set. See you at 8'
    },
    {
        type: messageType.in,
        user: 'Christina',
        message: 'See you then, Medusa'
    }
];

//Message constructor function
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message
function createMessageElement(message) {
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message 
    );

    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message tyep
    messageEl.className = message.type;
    
    return messageEl;
}

//Button click event handler to add a new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly
    switch(event.target.id) {
        case 'send-button':
            user = 'Mike';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message
    if (messageInput.value != '') {
        //Construct a message and it add to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create a message element
        var el = createMessageElement(message);

        //add the message element to the DOM
        messagesContainerEl.appendChild(el);

        //reset input
        messageInput.value = '';
    }
}

//Load seed data from data array above (optional)
function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load seed data from data array above(optional)
    loadSeedData();

};

init();