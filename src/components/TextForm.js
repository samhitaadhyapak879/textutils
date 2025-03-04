import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleclearclick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");

    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowclick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleclearclick}> Clear </button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy to Clipboard</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>



            </div>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}

                <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>

                {/* text.trim().length === 0 ? 0 → If the text is empty (or just spaces), return 0 words.
                    text.trim().split(/\s+/).length → This:
                    Trims leading & trailing spaces.
                    Splits based on one or more spaces (/\s+/ instead of " ").
                    Correctly counts words without considering extra spaces. */}

                {/* <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p> */}


                <p>{0.08 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox above to preview it here"}</p>

            </div>
        </>
    )
}
