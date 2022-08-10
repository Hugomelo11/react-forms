import {useState, useEffect} from 'react';
import "./../App.css";


export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({});
  
  
  
    useEffect(() => {
      // fetch stuff
      if ( form?.title?.length > 3 && form?.description?.length > 10) {
        setValidForm(true)
      } else {
        setValidForm(false);
      }
    }, [form])
  
    // console.log(title)'
  
    // const formSubmit = async (e) => {}
  
    async function formSubmit(e) {
      e.preventDefault();   /// stops the page refresh
  
      if (!validForm) {
        setErrorMsg("Not a valid form")
        return
      } 
  
      try {
        // console.log("form submitted")
  
        // const comment = {
        //   title:title,
        //   description:description,
        //   author:author,
        // }
        const comment = {form};
  
        console.log("form submitted with", comment);
  
        // really submit it to an api
        const results = await fetch("https://sql.bocacode.com/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        console.log(results);
        const data = await results.json();
        console.log(data);
  
        setFormSubmitted(true);
        setErrorMsg("")
        setValidForm(true)
        alert("Wow! submitted")
  
  
      } catch (error) {
        console.error(error);
        setErrorMsg("There was an error submitting your comment" + error.toString())
      }
    }
  
    console.log('this is form ', form)
  
    const updateForm = (event) => {
  
      setForm({...form, [event.target.name]: event.target.value })
    }
  
    return (
      <div className="App">
        
        <form onSubmit={formSubmit}>
          <h1>Comments</h1>
          
        
  
          {/* here goes the title */}
          <label>Title</label>
          <input
            type="text"
            name="title"
            // required
            value={form.title}
            onChange={updateForm}
            
          />
          <h3>{form.title}</h3>
  
          {/* this is the description */}
          <label>Description</label>
          <textarea
            value={form.description}
            name='description'
            required
            onChange={updateForm}
          ></textarea>
          <h3>{form.description}</h3>
  
          {/* THIS IS THE AUTHOR */}
  
          <label>Author</label>
          <select
            value={form.author}
            name='author'
            onChange={updateForm}
          >
            <option value="" selected>
              Choose One
            </option>
            <option value="Todd">Todd</option>
            <option value="Damian">Damian</option>
            <option value="Other">Other</option>
          </select>
          <h3>{form.author}</h3>
            {!formSubmitted &&
          <button>Submit Form</button>
            }
  
          {errorMsg &&
              <h1>There was an error:<br/>{errorMsg}</h1>
          }
        </form>
      </div>
    );
  }

