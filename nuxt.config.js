require('dotenv').config()

export default {
    loading: false,
    modules: [
        'nuxt-client-init-module',
        'nuxt-clipboard2',

        '@nuxtjs/axios'
    ],
    env: {
        /**
         * Brand
         */
        BRAND_NAME: process.env.BRAND_NAME,
        BRAND_LANDING_VIDEO_ID: process.env.BRAND_LANDING_VIDEO_ID,
        BRAND_GA_TRACKING_ID: process.env.BRAND_GA_TRACKING_ID,

        /**
         * URLs
         */
        WS_URL: process.env.API_WS_URL,
        BASE_WEB_URL: process.env.WEB_BASE_URL,
        JANUS_PORT: process.env.JANUS_PORT,
        JANUS_URL: process.env.JANUS_URL,


        /**
         * Other Config
         */
        ENABLE_JANUS: (process.env.ENABLE_JANUS == 'true'),
        SHOW_PLAYER_DEVTOOLS: (process.env.SHOW_PLAYER_DEVTOOLS === 'true' ||
                                process.env.NODE_ENV === 'development'),
        AUDIO_BITRATE: process.env.AUDIO_BITRATE,
        VIDEO_BITRATE: process.env.VIDEO_BITRATE
    },
    axios: {
        baseURL: process.env.API_BASE_URL
    },
    build: {
        extractCSS: true
    }
}
