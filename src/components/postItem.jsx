import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong className="strong">{props.post.id} {props.post.title}</strong>
                <div className="div">{props.post.body}</div>
            </div>
            <div className="post__buttons">
                <button>удалить</button>
            </div>
        </div>
    );
};

export default PostItem;