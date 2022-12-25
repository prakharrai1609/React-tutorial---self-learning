import { useState } from "react"
import Comment from "./comment.js"

function AddComment() {

	const [myList, appendList] = useState([])

	const click = () => {
		let comment = document.getElementById('comment').value
		comment = comment ? comment : "Empty comment field"

		appendList((oldList) => [
			...oldList,
			<Comment name="Prakhar" comment={comment} />
		]);

		document.getElementById('comment').value = ""
	}

	return (
		<>
			<input type="text" name="comment" style={{ display: "block", marginBottom: 10 }} placeholder="Add your comment" id="comment" />
			<button className="btn btn-primary" type="submit" onClick={click}>
				Add comment
			</button>

			{
				<div>{myList}</div>
			}
		</>
	)
}

export default AddComment