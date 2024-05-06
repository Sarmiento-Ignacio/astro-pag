import { type Datum, type APIIdlesalbums } from "../types/api";

export const getAlbumById = async ({ id }: { id: string }) => {
    try {
        const res = await fetch(`https://api.deezer.com/album/${id}`);
        const album = await res.json();
        console.log(album);
        return album;
    } catch (error) {
        console.error("Error fetching album:", error);
        throw error;
    }
}

export const getIdlesAlbums = async () => {
    try {
        const res = await fetch(`https://api.deezer.com/artist/482539/albums?note=5`);
        const { data: albums } = await res.json();
        if (!Array.isArray(albums)) {
            throw new Error("Invalid response format: albums is not an array");
        }
        // Filtrar los álbumes por tipo "album" o "ep"
        const filteredAlbums = albums.filter((album: { record_type: string }) => album.record_type === "album" || album.record_type === "ep");
        return filteredAlbums;
    } catch (error) {
        console.error("Error fetching Idles albums:", error);
        throw error;
    }
}
