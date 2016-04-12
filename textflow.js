// Text flow page
//
exports.View =
{
    title: "Text flow",
    elements:
    [
        { control: "stackpanel", orientation: "Vertical", width: "*", contents: [
            { control: "stackpanel", orientation: "Horizontal", contents: [
                { control: "text", value: "Size", fontsize: 10, verticalAlignment: "Center", width: 100 },
                { control: "slider", minimum: 10, maximum: 20, binding: "fontsize", width: 300 },
            ] },
            { control: "edit", fontsize: "{fontsize}", placeholder: "Single Line", width: 200, binding: "userText" },
            { control: "text", value: "{userText}", fontsize: 12, width: "*" },
            { control: "rectangle", height: "100", width: "*", fill: "Red", border: "Blue", borderThickness: 5 },
            { control: "edit", multiline: true, placeholder: "100 tall", width: 200, height: 100, fontsize: "{fontsize}", binding: "userMultilineText"},
            { control: "edit", multiline: true, placeholder: "3 lines tall", width: 200, lines: 3, fontsize: "{fontsize}", binding: "userMultilineText"},
            ]
        }
    ]
}

exports.InitializeViewModel = function (context, session) {
    var viewModel =
    {
        userText: "Sample Text",
        userMultilineText: "",
        fontsize: 14
    }
    return viewModel;
}
