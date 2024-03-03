import React, { useState } from 'react';
import ArticleList from './components/ArticleList';

// App component
const App = () => {
    const [ articles, setArticles ] = useState([]);
    const [ formData, setFormData ] = useState({
        name: "Aison",
        content: "Apologies for this invalid example. I do not know what this space is and what it is for. My content is my content. -Aison",
        date: "27/2/24",
        author: "Billy Ngedwah Micah",
        imageURL: "blob:https://web.whatsapp.com/e46f30dd-eaf6-4da2-bf05-dd7f26509cb4"
    });
    const [ showForm, setShowForm ] = useState(false);

    // Note: We'll use this to demonstrate useEffect during class
    const showArticles = (e) => {
        e.preventDefault();

        const additionalArticles = [
            {
                name: "React Hooks",
                content: "Introduction to React Hooks",
                date: "2024-02-25",
                author: "Pepa Pig",
                imageURL: "https://cdn.pixabay.com/photo/2023/10/13/08/32/bird-8312424_1280.jpg"
            },
            {
                name: "State Management in React",
                content: "Using Redux for state management",
                date: "2024-02-24",
                author: "Peter Pan",
                imageURL: "https://cdn.pixabay.com/photo/2023/10/27/16/29/meerkat-8345747_1280.jpg"
            },
            {
                name: "React Native",
                content: "Building mobile apps with React Native",
                date: "2024-02-23",
                author: "Little Mermaid",
                imageURL: "https://cdn.pixabay.com/photo/2023/11/29/21/05/animal-8420313_1280.jpg"
            }
        ]

        setArticles([...articles, ...additionalArticles]);
    }

    const toggleForm = (event) => {
        event.preventDefault();

        setShowForm(!showForm);
    }

    const inputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        console.log(formData);
    }

    const handleArticleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)

        if (
            formData.name !== "" &&
            formData.content !== "" &&
            formData.author !== "" &&
            formData.date !== "" &&
            formData.imageURL !== ""
        ) {
            setArticles([...articles, formData]);
            alert("Added Successfully")

            // Reset the form
            setFormData({
                name: "",
                content: "",
                date: "",
                author: "",
                imageURL: ""
            })

        } else {
            alert("Please fill out the form entirely")
        }
    }

    return (
        <div className="container-fluid pt-5 mt-5">
            <h1 className='text-center'>Articles</h1>
            <hr/>

            <div className="d-flex justify-content-around">
                <button className='btn btn-primary' onClick={ showArticles } >Show Articles</button>
                <button className='btn btn-primary' onClick={ toggleForm } >Toggle Form</button>
            </div>

            {
                showForm
                ?
                    <div className="row mt-5 pt-5">
                        {/* Form Data */}
                        <div className="col-6">
                            <form className='px-3'>
                                {/* name */}
                                <div className='mb-3'>
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className='form-control' name='name' onChange={ inputChange } id='name' placeholder='name' />
                                </div>
                                
                                {/* content */}
                                <div className='mb-3'>
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <input type="text" className='form-control' name='content' onChange={ inputChange } id='content' placeholder="Here's an article on how to write Good quality React contentEditable..." />
                                </div>

                                {/* date */}
                                <div className='mb-3'>
                                    <label htmlFor="author" className="form-label">Date</label>
                                    <input type="date" className='form-control' name='date' onChange={ inputChange } id='date' />
                                </div>

                                {/* author */}
                                <div className='mb-3'>
                                    <label htmlFor="author" className="form-label">Author</label>
                                    <input type="text" className='form-control' name='author' onChange={ inputChange } id='author' placeholder='James Ling' />
                                </div>

                                {/* imageURL */}
                                <div className='mb-3'>
                                    <label htmlFor="imageURL" className="form-label">Image URL</label>
                                    <input type="url" className='form-control' name='imageURL' onChange={ inputChange } id='imageURL' placeholder='https://somewebiste.domain/imge.png' />
                                </div>

                                {/* Actions */}
                                <div className='mb-3 d-flex justify-content-between col-12'>
                                    <button type='submit' className='btn btn-warning' onClick={ toggleForm }> Cancel </button>
                                    <button type='submit' className='btn btn-primary' onClick={ handleArticleSubmit }> Add Article </button>
                                </div>

                            </form>
                        </div>
                        {/* Article List */}
                        <div className="col-6">
                            <ArticleList articles={articles} />
                        </div>
                    </div>
                :
                    <div className="row mt-5 pt-5 d-flex justify-content-center">
                        {/* Article List */}
                        <div className="col-6">
                            <ArticleList articles={articles} />
                        </div>
                    </div>
            }

        </div>
    );
};

export default App;
