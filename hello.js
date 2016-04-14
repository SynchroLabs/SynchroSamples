// Hello page
//
exports.View =
{
    title: "Hello World",
    elements:
    [
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "First name:", fontsize: 12, width: 200, textAlignment: "Right", margin: { top: 10, right: 10 } },
            { control: "edit", fontsize: 12, width: 200, binding: "firstName" },
        ] },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "Last name:", fontsize: 12, width: 200, textAlignment: "Right", margin: { top: 10, right: 10 } },
            { control: "edit", fontsize: 12, width: 200, binding: "lastName" },
        ] },

        { control: "text", value: "Hello {firstName} {lastName}", fontsize: 12 },
        // Print the sum of characters in first and last name fields plus space between
        { control: "text", value: "eval('Length: ' + ({firstName}.length + {lastName}.length + 1))", fontsize: 12 },
        // Pluralized based on length of string in first name
        { control: "text", value: "eval('First name is ' + {firstName}.length + ' ' + ({firstName}.length == 1 ? 'character' : 'characters'))", fontsize: 12 },
        // Enable button only if both first and last name contain value
        { control: "button", caption: "Submit", binding: "submit", enabled: "eval({firstName}.length && {lastName}.length)" },
    ]
}

exports.InitializeViewModel = function(context, session)
{
    var viewModel =
    {
        firstName: "Planet",
        lastName: "Earth",
    }
    return viewModel;
}

exports.Commands = 
{
    submit: function(context, session, viewModel)
    {
        var messageBox = 
        {
            message: "Hello {firstName} {lastName}",
        }
        return Synchro.showMessage(context, messageBox);
    }
}

