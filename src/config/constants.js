const ROUTE_CHANGED_EVENT = 'routeChanged'; // Define a constant for the event name

const APP_ENV = import.meta.env.VITE_APP_ENV || 'production';

const DB_PORT = import.meta.env.VITE_DB_PORT || '8080';
const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN || 'localhost';

export { APP_ENV, DB_PORT, DB_DOMAIN, ROUTE_CHANGED_EVENT };
