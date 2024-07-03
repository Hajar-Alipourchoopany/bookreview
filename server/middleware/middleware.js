import morgan from 'morgan';
import session from 'express-session';
import { SESSION_SECRET } from './config';

const middleware = (app) => {
   
    app.use(morgan('dev'));

    
    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));
};

export default middleware;
