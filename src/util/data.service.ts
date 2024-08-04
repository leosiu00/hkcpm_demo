import sessionService from "./storage.service";
// use dataService for single data named 'data'
// user sessionSerivce for multiple data
const dataService = {
    get: () => {
        return sessionService.get('data');
    },

    set: (obj: string | object) => {
        sessionService.set('data', obj);
    }
};
export default dataService;
    