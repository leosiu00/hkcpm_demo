import sessionService from "./storage.service";
// use dataService for single data named 'courseData'
// user sessionSerivce for multiple data
const dataService = {
    get: () => {
        return sessionService.get('courseData');
    },

    set: (obj: string | object) => {
        sessionService.set('courseData', obj);
    }
};
export default dataService;
    