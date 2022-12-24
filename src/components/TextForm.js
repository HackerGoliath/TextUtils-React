import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCopy = () => {
        // console.log("Uppercase was clicked: " + text)
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text)
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change was clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "New Text"; // Wrong way to change the state
    // setText("New Text") // Correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#130852' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
