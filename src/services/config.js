import production from "./production";
import development from "./development";

const env = process.env.NODE_ENV || 'development'

const configs = {
    production,
    development
}

export default configs[env]