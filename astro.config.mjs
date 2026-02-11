import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
// import starlightUtils from 'starlight-utils';
// import starlightPluginIcons from 'starlight-plugin-icons';

export default defineConfig({
    output: 'static',
    integrations: [
        starlight({
            title: 'Weekend-to-Release',
            description: 'Build and Ship with AI',
            favicon: '/favicon.png',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en'
                }
            },
            // social: {
            //     github: 'https://github.com/ParkWardRR/weekend-to-release',
            // },
            customCss: [
                './src/styles/custom.css',
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Introduction', link: '/' },
                        { label: 'Contributors Landing', link: '/contributors/' },
                        { label: 'Cheatsheet', link: '/contributors/antigravity/cheatsheet/' },
                    ],
                },
                {
                    label: 'Contributors',
                    autogenerate: { directory: 'contributors' },
                },
            ],
            plugins: [
                starlightImageZoom(),
                // starlightLinksValidator(),
                // starlightUtils(),
                // starlightPluginIcons(),
            ],
        }),
    ],
});
