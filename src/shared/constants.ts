import { ToastOptions } from 'react-toastify';

const Constant = {
    BASE_URL: 'http://localhost:9090/api',
    API_URL: {
        SIGN_UP: '/auth/signup',
        SIGN_IN: '/auth/signin',
        REFRESH_TOKEN: '/auth/refreshtoken',
        VERIFY: '/auth/verify',
        REQUEST_CODE: '/auth/request-code',
        RESET_PASSWORD: '/auth/reset-password',
        FIND_ALL_SHOW: '/movie/admin/find-all-show',
        ROOM_FIND: '/room/find',
        ROOM_FIND_ALL: '/room/find-all-room',
        ROOM_ADD_NEW: '/room/add-new-room',
        ROOM_FIND_ALL_BY_ROOM_SEAT: '/room/find-all',
        CREATE_MOVIE: '/movie/create-movie',
        MOVIE_DETAIL: '/movie/detail',
        MOVIE_FIND_ALL: '/movie/list-movie',
        MOVIE_FIND_ALL_ADMIN: '/movie/list-movie-admin',
        MOVIE_FIND_ALL_ADMIN_BY_NAME: '/movie/list-movie-admin-by-name',
        MOVIE_HAS_TICKET: '/movie/find-movie-has-ticket',
        SHOW_DATE_FIND_ALL: '/movie/find-all-show-date',
        SHOW_TIME_FIND_ALL: '/movie/find-all-show-time',
        SHOW_DATE_FIND: '/movie/find-show-date-by-movie',
        SHOW_TIME_FIND: '/movie/find-show-time-by-show-date',
        ADMIN_FIND_ALL_SHOW: '/movie/admin/find-all-show',
        FIND_LIST_SEAT_BY_DATE_TIME_TICKET: '/room/find',
        CREATE_PAYMENT: '/create-payment',
        ADD_BOOKING: '/booking/addNew',
        CREATE_TICKET: '/ticket/create-new',
        FIND_TICKET: '/movie/admin/find-all-show-by-movie',
        DELETE_TICKET: '/ticket/delete-ticket',
        CATEGORY_FIND_ALL: '/category/list-category',
        ACTOR_FIND_ALL: '/actor/list-actor',
        FIND_TRANS_BY_MAIL: '/transaction/get-trans-by-email',
        RATE_ADD: '/rate/add',
        RATE_FIND_BY_MOVIE: '/rate/find',
        GET_TRANSACTION_BY_MONTH: '/statis/get-transaction-by-month',
        GET_TRANSACTION_BY_DAY: '/statis/get-transaction-by-day',
        GET_MOVIE_STATICS: '/statis/get-movie-statics',
        GET_CHANGE_TRANSACTION_ONE_YEAR: '/statis/get-change-transaction-one-year',
        GET_CHANGE_TRANSACTION_ONE_WEEK: '/statis/get-change-transaction-one-week',
        GET_CHANGE_CATEGORY: '/statis/get-change-category',
        GET_ALL_RATE: '/rate/find-all',
        REACT_RATE: '/rate/react',
        DELETE_RATE: '/rate/delete',
        FIND_ALL_USER: '/users/find-all',
        USER_ADD_POINT: '/users/add-point',
        USER_SET_VISIBLE: '/users/set-visible',
    },
    SHOW: {
        ROOM_COLOR: {
            R01: '#e986b0',
            R02: '#E8187C',
            R03: '#41B3A3',
            R04: '#98a0ea',
            R05: '#c7c763',
        },
        ROOM_TAG_COLOR: {
            R01: 'magenta',
            R02: 'volcano',
            R03: 'geekblue',
            R04: 'gold',
            R05: 'red',
        },
    },
    TOAST_OPTION_DEFAULT: {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    } as ToastOptions<{}>,
    ERROR_CODE: {
        DUPLICATE_USERNAME: 4,
        DUPLICATE_EMAIL: 5,
    },
    PAYMENT_INFO: 'thanh toan tien ve',
};

export default Constant;
