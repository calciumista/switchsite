import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.slug === '90dns') {
        return {
            title: 'why 90dns is bad',
            content: 'its a dns system with will break when you end up changing to a new network or the servers just.. go down.'
        };
    } else if (params.slug === 'ban') {
        return {
            title: 'best ban protection',
            content: 'exosphere and dns mitm!! they blank prodinfo (without risk of messing everything up like incognito) and it blocks all nintendo servers without the use of a dns server.'
        }
    } else if (params.slug === 'links') {
        return {
            title: 'good links for homebrew!',
            content: `forum: gbatemp.net <br> appstore: switch.fortheusers.org <br>`
        }
    }

    throw error(404, 'Not found');
}