import React from "react";
import Article from "./Article";
/**
 * TODO:
 * 1. Import the Article component from the Article.jsx file.
 * 2. Create a functional component (using arrow functions) called 'ArticleList' that takes an input called 'articles'.
 * 3. Implement the reutrn statement for the ArticleList component. It should return a div with the class 'container-fluid' and a div with the class 'row'.
 *  - bootstrap reference: https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works
 * 4. Inside the div with the class 'row', use the map function to iterate through the 'articles' input.
 *  - hint: articles.map((article, index) => { ... })
 * 
 * Reference (bootstrap style): https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works
 * Reference (map function): https://react.dev/reference/react/Children#children-map
 * Reference (arrow functions): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#syntax
 * Reference (passing objects as props): https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component
 * 
 * 
 * @param { object } articles - This is a list of articles to be displayed. Should be passed
 * as an input to this component. 
 * @returns - JSX for displaying a list of articles.
 */
function ArticleList({articles}){
    return(
        <div class="container-fluid">
           <div class="row">
            {
              articles.map( (article, idx) => (
                <Article article={article} key={idx}/>
              )
              )
              }
            </div>
        </div>
    );
};

export default ArticleList;