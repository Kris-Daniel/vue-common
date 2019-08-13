export default {
    head: {
        titleTemplate: '%s - Nuxt.js',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },
    build: {
        vendor: ['aframe']
    },
    css: [
        '@/assets/css/loader.less'
    ],
    plugins: [
        { src: '~/plugins/bootstrap.js', mode: 'client' },
    ],
    modules: [
        // Using package name
        // '@nuxtjs/axios',

        // Relative to your project srcDir
        // '~/modules/awesome.js',
    ],
}