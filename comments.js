import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
				
	case REMOVE_COMMENT:
		return comments: state.comments.filter(comment => comment.id !== action.id) ;
		
	case EDIT_COMMENT:
		return [{
			state.comments.map(comment => comment.id === action.id), 
               		 text: action.text,
               		 votes: votes
		}];
		
	case THUMB_UP_COMMENT:
		return [{
			state.comments.map(comment => comment.id === action.id),
			text: text,
			votes: votes + 1
		}];
		
	case THUMB_DOWN_COMMENT:
		return [{
			state.comments.map(comment => comment.id === action.id),
			text: text,
			votes: votes - 1
		}];
	default: 
		return state;
    }
};

export default comments;
