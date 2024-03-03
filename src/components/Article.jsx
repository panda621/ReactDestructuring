/* eslint-disable no-use-before-define */
import React from "react";

/**
 * TODO:
 * 1. Create a functional component (using arrow functions) called 'Article' that takes an input called 'article'.
 * - hint: const Article = ({ article }) => { ... }
 * 2. Perform object destructuring on the 'article' input to extract the following properties: 
 * - name, 
 * - content, 
 * - date, 
 * - author, 
 * - imageURL.
 *  - hint: use the const keyword to create variables for each property.
 * 3. Implement the reutrn statement for the Article component. It should return a div with the class 'card' and a div with the class 'card-body'.
 * 4. Display the 'name', 'content', 'date', 'author', and 'imageURL' properties inside the div with the class 'card-body'.
 * 
 * 
 * @param { object } article - This is a single article to be displayed. Should be passed
 * as an input to this component. 
 * @returns - JSX for displaying a single article.
 */
const Article = ({article}) => { 
    const {name, content, date, author, imageURL} = article;
    return(
        <div className="card p-0 m-3" style={{width: 18 + "rem"}} >
            <img src={imageURL} className="card-img-top" alt=" " />
            <h5 className="card-title">{name}</h5>
            <div className="card-body">
                <p className="card-text">{content}</p>     
            </div>
            <div class="card-footer d-flex justify-content-betwee">
                <p>{date}</p>
                <p>{author}</p>
            </div>
        </div>
    );
};

export default Article;