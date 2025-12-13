import type {TrackListItemResource} from "../dal/api"


type TrackitemProps={
    track: TrackListItemResource,
    isSelected: boolean,
    onSelect: (trackId:string) => void

}

export function Trackitem({track, isSelected, onSelect}:TrackitemProps) {

    const handleClick =() => onSelect?.(track.id)


    return (
        <li key={track.id} style={{ border: isSelected ? '1px solid orange' : 'none' }}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>

            <audio src={track.attributes.attachments[0].url} controls ></audio>
        </li>
    )
}