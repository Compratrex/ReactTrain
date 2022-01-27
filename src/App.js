import React, {useState} from 'react'
import './stylesheets/style.css'
import PostList from "./components/postList";
import MyButton from "./components/UI/buttons/Button";
import MyIInput from "./components/UI/inputs/MyIInput";
import {useRef} from "react";

function App() {
    const [posts, setPost] = useState([{id: 1, title: "kek", body: "excellent"},
                                                {id: 2, title: "kek", body: "excellent"},
                                                {id: 3, title: "kek", body: "excellent"},
                                                {id: 4, title: "kek", body: "excellent"},
                                                {id: 5, title: "kek", body: "excellent"}
                                                ])
    const [title, setTitle] = useState('')
    const input = useRef();
    const addNewPost = (e) =>{
        e.preventDefault()
    }
    return (
        <div className={"App"}>
            <form>
                <MyIInput type="text" placeholder={"Заголовок"} value={title} onChange={e => setTitle(e.target.value)} ref={input}/>
                <MyIInput type="text" placeholder={"Описание"}/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={"Список постов 1"}/>
        </div>
    )
}

export default App