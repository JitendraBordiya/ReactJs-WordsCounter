import React ,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick =()=>
    {
        
        //console.log("UpperCase was Clicked " + text);
        let newText =text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleLoClick =()=>
    {
        //console.log("UpperCase was Clicked " + text);
        let newText =text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleonChange =(event)=>
    {
        console.log("on change");
        settext(event.target.value);
    }

    const handleToReset =(event)=>
    {
        let newText =""
        settext(newText);
        props.showAlert("Text Cleared","success")

    }

     const [text,settext]=useState('');
  return (
   
     <>
    <div className="container" style={{color : props.mode === 'light' ? '#042743' : 'white'} }>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="8" value={text} onChange={handleonChange} style={{backgroundColor : props.mode === 'light' ? 'white' : 'grey'} }
        ></textarea>
       <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
       <button className="btn btn-primary mx-2 my-1=1201" onClick={handleToReset}>Reset</button>
       </div>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light' ? '#042743' : 'white'} }>
        <h1>Your text summary</h1>
        <p><strong>{text.length<=0? 0 : text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : 'Enter Text in above Text area to preview someting'}</p>
    </div>
    </>
  );
}
