// import { useState, useEffect } from "react";
import { Trackitem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
// import type {TrackListItemResource} from "../dal/api"
// import { getTracks } from "../dal/api";




type TrackListProps = {
    selectedTrackId: string | null,
    onTrackSelected: (id:string | null) => void
}



export function TrackList({ selectedTrackId, onTrackSelected } : TrackListProps) {
    // let [tracks, setTraks] = useState<Array<TrackListItemResource> | null>(null);

    const {tracks} = useTracks();

    // useEffect(() => {
    //     getTracks().then(tracks => setTraks(tracks.data))
    // }, [])




    if (tracks === null) {
        return <div>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <span>No tracks</span>
        </div>
    }

    const handleResetClick = () => {
        onTrackSelected?.(null);
    }

    const handleClick = (trackId: string) => {
        onTrackSelected?.(trackId);
    }


    return (
        <>
            <div>
                <button onClick={handleResetClick}>reset selection</button>
            </div>
            <div>
                <ul>
                    {tracks.map((track) => {
                        return (
                            <Trackitem
                                key={track.id}
                                track={track}
                                isSelected={track.id === selectedTrackId}
                                onSelect={handleClick}
                            />
                        )
                    })}
                </ul>
            </div>
        </>

    )
}
