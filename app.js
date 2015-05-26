steal(
    'can',

    function(can) {

        // YOUR CODE HERE
        var CONTACTS = [
            {name:"Bob", email:"bob@example.net", phone:"123-456-7890"},
            {name:"John", email:"john@example.net", phone:"987-654-3210"},
        ];

        can.Component.extend({
            tag: 'intro-app',
            scope: {
                name:"",
                email:"",
                phone:"",
                contacts: CONTACTS,
                addContact: function(context, el, ev) {
                    var contact = $.extend({name: this.name}, {email:this.email}, {phone:this.phone});
                    this.contacts.push(contact);
                }
            },
            events: {
                'tr click': function(tr) {
                    var contacts = this.scope.contacts;
                    var index = contacts.indexOf(tr);
                    this.scope.contacts.splice(index,1);
                }
            }
        })
        /////////////////////////
    }
);
