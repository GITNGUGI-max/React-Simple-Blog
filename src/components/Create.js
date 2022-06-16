
import {useState} from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
const Create = ()=>{

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Dan");
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e)=>{
		e.preventDefault();
		const newBlog = {title, body, author};

		setIsPending(true);
		fetch('http://localhost:8000/blogs',{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(newBlog)
		}).then(()=>{
			console.log("New blog added");
		setIsPending(false);
		navigate('/');

		}
		

		);
	}

	return(

		<div className="create-blog">
		<h2> Add New Blog</h2>
			<form onSubmit={handleSubmit}>
			<label>Blog title:</label><br/>
			<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/>
			<label>Blog body:</label><br/>
			<textarea value={body} onChange={(e)=>setBody(e.target.value)} required ></textarea><br/>
			<select vlaue={author} onChange={(e)=>setAuthor(e.target.value)}>
				<option value="Mario">Mario</option>
				<option value="Dan">Dan</option>
			</select><br/>
			{!isPending && <button >Add Blog</button>}
			{isPending && <button >Add Blog...</button>}
	
			</form>
		</div>
		)
}

export default Create;