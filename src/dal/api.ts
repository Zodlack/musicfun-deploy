
type TrackDetailsAttributes = {
    title: string,
    lyrics: string | null
}

export type TrackDetailsResource = {
    id: string,
    attributes: TrackDetailsAttributes
}


const prepaerHeaders = ()=>{
    const apiKey = import.meta.env.VITE_API_KEY;

    if(!apiKey) return undefined;
    return {
        'api-key': apiKey
    };
}


export const getTrack = (trackId: string) => {
    const promise: Promise<{ data: TrackDetailsResource }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: prepaerHeaders()
    }).then(response => response.json())

    return promise;
}



type TrackAttachment = {
    url: string
}



export type TrackListItemResource = {
    id: string,
    attributes: {
        title: string,
        attachments: Array<TrackAttachment>
    }
}




export const getTracks = () => {
    const promise: Promise<{ data:Array<TrackListItemResource> }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: prepaerHeaders()
    })
        .then(response => response.json())

    return  promise
}