import sessionService from "./storage.service";
// use dataService for single data named 'courseData'
// user sessionSerivce for multiple data
const paymentService = {
    get: () => {
        return sessionService.get('paymentData');
    },

    set: (obj: string | object) => {
        sessionService.set('paymentData', obj);
    }
};
export default paymentService;
    