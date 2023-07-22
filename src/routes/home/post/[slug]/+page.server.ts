import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.slug === '90dns') {
        return {
            title: 'why 90dns is bad',
            content: 'its a dns system which will break when you end up changing to a new network or the servers just.. go down. this can lead to a console ban. <br> see <a href="https://switchhub.vercel.app/home/posts/ban" class="underline">here</a> for more adequate options.'
        };
    } else if (params.slug === 'ban') {
        return {
            title: 'best ban protection',
            content: 'exosphere and dns mitm!! they blank prodinfo (without risk of messing everything up like incognito) and it blocks all nintendo servers without the use of a dns server.'
        }
    } else if (params.slug === 'links') {
        return {
            title: 'good links for homebrew!',
            content: `<ul>
            <li>forum: <a href="https://gbatemp.net" class="underline">gbatemp.net</a></li> 
            <li>appstore: <a href="https://apps.fortheusers.org/switch" class="underline">apps.fortheusers.org/switch</a></li>
            </ul>`
        }
    }

    throw error(404, 'Not found');
}