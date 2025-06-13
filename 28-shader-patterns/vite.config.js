import glsl from 'vite-plugin-glsl';

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    plugins: [
        glsl({
            include: '**/*.glsl',
            defaultExtension: 'glsl'
        })
    ]
};
