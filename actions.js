import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//kreator akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
//wysyłanie z kreatorem
dispatch(addComment('nowy komentarz!'));

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
dispatch(editComment('nowy tekst komentarza!', id));


function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
dispatch(removeComment(id));

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
dispatch(thumbUpComment(id));

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}
dispatch(thumbDownComment(id));


