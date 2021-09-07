import React,{useState} from "react";

export default function TextForms(props) {
    const handleUpclick=()=>{
        // console.log('Uppercase was Clicked ' + text);
        let newText = text?.toUpperCase();
        setext(newText);
        props.Showalert("converted to uppercase! ","Sucessful")
    }

    const handleLoclick=()=>{
      // console.log('Uppercase was Clicked ' + text);
      let newText = text?.toLowerCase();
      setext(newText);
      props.Showalert("converted to lowercase!","Sucessful ")
  }

  const handleClear=()=>{
    // console.log('Uppercase was Clicked ' + text);
    let newText = ('');
    setext(newText);
    props.Showalert("Clear words!","Sucessful")
    
}

    const handleOnchange=(event)=>{
        // console.log('Onchange');
        setext(event.target.value);
    }
    const handlecopy=()=>{
      var text = document.getElementById('mybox')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.Showalert("Copied!","Sucessful")
    }

    const handleExtraspaces =()=>{
      let newText = text?.split(/[ ]+/);
      setext(newText.join(' '))
    }
    const [text, setext] = useState();
  return ( 
    <> 
    <div className="conatiner">
      <div className="mb-3">
          <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1"onClick={handleUpclick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1"onClick={handleLoclick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1"onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-1"onClick={handlecopy}>Copy</button>
      <button className="btn btn-primary mx-1"onClick={handleExtraspaces}>DeleteExtraSpace</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>

      <p>{text?.split(" ").filter((element)=>{return element.length!==0})?.length}
      words and {text?.length} characters
      </p>

      <p>{0.08*text?.split(/\s+/).filter((element)=>{return element.length!==0})?.length} Minutes Read</p>
      <h2>Preview</h2>

      <p>{text?.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  );
}
