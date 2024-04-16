//* API
export const ENVIRONMENT_MODE = import.meta.env.VITE_ENVIRONMENT_MODE
export const API_URL = import.meta.env.VITE_API_URL

export const ENDPOINT_LOGIN = '/Authentication/login'

export const ENDPOINT_PRODUCTS = '/Product'
export const ENDPOINT_PRODUCTS_STORE = '/Product/Create'
export const ENDPOINT_PRODUCTS_IMAGES = '/Product/Upload'

export const ENDPOINT_USOCFDI = '/Sat_UsoCfdi'
export const ENDPOINT_REGIMENFISCAL = '/Sat_RegimenFiscal'
export const ENDPOINT_PAISES = '/Sat_catPaises'
export const ENDPOINT_ESTADO = '/Sat_catEstados'

export const ENDPOINT_CATEGORIES = '/Category'

export const ENDPOINT_BRAND = '/Brand'

export const ENDPOINT_CUSTOMER = '/Customers'

export const ENDPOINT_USERS = '/User'

// * SESSIONS
export const PREFIX_STORAGE = '__CE'
