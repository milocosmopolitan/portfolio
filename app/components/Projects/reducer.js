// import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_PROJECTS';
const CREATE     = 'CREATE_PROJECT';
const REMOVE     = 'REMOVE_PROJECT';
const UPDATE     = 'UPDATE_PROJECT';


/* ------------   ACTION CREATORS     ------------------ */

const init   = projects => ({ type: INITIALIZE, projects });
const create = project   => ({ type: CREATE, project });
const remove = id      => ({ type: REMOVE, id });
const update = project   => ({ type: UPDATE, project });


/* ------------       REDUCER     ------------------ */

export default function reducer (projects = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.projects;

    case CREATE:
      return [action.project, ...projects];

    case REMOVE:
      return projects
        .filter(project => project.id !== action.id);

    case UPDATE:
      return projects
        .map(project => (
          action.project.id === project.id ? action.project : project
        ));

    default:
      return projects;
  }
}


/* ------------       DISPATCHERS     ------------------ */

// export const fetchProjects = () => dispatch => {
//     axios.get('/api/projects')
//          .then(res => dispatch(init(res.data)))
//          .catch(err => console.error('Fetching projects unsuccesful', err));
// };

// // optimistic
// export const removeProject = id => dispatch => {
//     dispatch(remove(id));
//     axios.delete(`/api/projects/${id}`)
//          .catch(err => console.error(`Removing project: ${id} unsuccesful`, err));
// };

// export const addProject = project => dispatch => {
//     axios.post('/api/projects', project)
//          .then(res => dispatch(create(res.data)))
//          .catch(err => console.error(`Creating project: ${project} unsuccesful`, err));
// };

// export const updateProject = (id, project) => dispatch => {
//     axios.put(`/api/projects/${id}`, project)
//          .then(res => dispatch(update(res.data)))
//          .catch(err => console.error(`Updating project: ${project} unsuccesful`, err));
// };
