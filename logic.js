const Tweeter = function(){

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    const getPosts = function () {
        return _posts
    }
    
    const generateID = function () {
        _idCounter++
        let id = 'p' + _idCounter;
        return id;
    }

    const addPost = function (text) {
        _posts.push({
            id: generateID(),
            text: text,
            comments: []
        }
        )
    }
    
    _idCounter = 1
    
    const removePost = function (postID) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                _posts.splice(i, 1);
            }
        }
    }
    
    _CidCounter = 1
    const generateCommentID = function () {
        _CidCounter++
        let id = 'c' + _idCounter;
        return id
    }
    
    const addComment = function (postID, text) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                _posts[i].comments.push({
                    id: generateCommentID(),
                    text: text,
                });
            }
        }
    }
    
    const removeComment = function (postID, commentID) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                for (let j = 0; j < _posts[i].comments.length; j++)
                    if (_posts[i].comments[j] === _posts[i].commentID) {
                        _posts[i].comments.splice(j, 1);
                }
            }
        }
    }


    return {
        removeComment:removeComment,
        addComment:addComment,
        removePost:removePost,
        getPosts:getPosts,
        addPost: addPost,
    }
}