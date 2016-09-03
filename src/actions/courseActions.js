// import * as types from './actionTypes';

// export function createCourse(course){
//     return {type: types.CREATE_COURSE, course};
// }


import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

//Action Creator
export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};

export function loadCourses() {
    return function (dispatch) {
        // body of thunk
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}
