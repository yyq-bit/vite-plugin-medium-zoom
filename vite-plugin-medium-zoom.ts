import type { Plugin } from 'vite'
function vitePluginMediumZoom(): Plugin {
    return {
        name: 'vite-plugin-medium-zoom',
        transformIndexHtml(html) {
            console.log(html)
            let map = {
                '</body>': `<script>mediumZoom('[data-zoomable]')</script></body>`,
                '<img': `<img data-zoomable`
            }
            let reStr = '(' + Object.keys(map).map(it => '\\' + it).join('|') + ')'
            let re = new RegExp(reStr, 'g')
            return html.replace(re, it => map[it])
        }
    }
}

export default vitePluginMediumZoom