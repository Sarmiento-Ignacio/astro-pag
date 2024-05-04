import { type Datum, type APIIdlesalbums } from "../types/api";

export const getAlbumby = async ({id}: { id: string}) => {

    const res = await fetch(`https://api.deezer.com/artist/482539/albums?limit=9/${id}`); {
        const album   = (await res.json()) as Datum
        console.log(album)
        
        return album
    }
}



export const getIdlesAlbums = async () => {

    const res = await fetch(`https://api.deezer.com/artist/482539/albums?limit=9`); {

        const { data:albums }  = (await res.json()) as APIIdlesalbums

        
        return albums
    }
}