// findNotes
//
// Returns an array of note IDs for a given query. Same query syntax as guiBrowse.
//
//     Sample request:
//
// {
//     "action": "findNotes",
//     "version": 6,
//     "params": {
//     "query": "deck:current"
// }
// }
// Sample result:
//
// {
//     "result": [1483959289817, 1483959291695],
//     "error": null
// }


import {AnkiConnectFetch} from '../AnkiConnectFetch';

/**
 *
 */
export class FindNotesClient {

    static async execute(query: string): Promise<number[]> {

        let body = {
            action: "findNotes",
            version: 6,
            params: {
                query
            }
        };

        let init = { method: 'POST', body: JSON.stringify(body) };

        return <number[]> await AnkiConnectFetch.fetch(init);

    }

}