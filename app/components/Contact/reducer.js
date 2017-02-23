/* -----------------    ACTIONS     ------------------ */

const SUBMIT 		= 'SUBMIT_CONTACT';
const ISEMAIL		= 'IS_EMAIL';

/* ------------   ACTION CREATORS     ------------------ */
const isEmail   = data => ({ type: SUBMIT, contact });




const initialState = {
	name: '',
	email: '',
	phone: '',
	text: ''
}

/* ------------       REDUCER     ------------------ */

export default function reducer (contact = initialState, action) {
  switch (action.type) {

    // case SUBMIT:
    //   return action.stories;

    // case CREATE:
    //   return [action.story, ...stories];

    // case REMOVE:
    //   return stories
    //     .filter(story => story.id !== action.id);

    // case UPDATE:
    //   return stories
    //     .map(story => (
    //       action.story.id === story.id ? action.story : story
    //     ));

    default:
      return contact;
  }
}

export const validateEmail = email => dispatch => {
	
	// run promise function to send given contact data to third party for emailing it to administrator
  
};