import moment from 'moment';
declare module 'moment' {
    interface Moment {
        _is29Day?: boolean;
    }
}
export default moment;
