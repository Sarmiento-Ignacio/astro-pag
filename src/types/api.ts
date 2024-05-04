export type APIIdlesalbums = {
    data:  Datum[];
    total: number;
    next:  string;
}

export type Datum = {
    id:              string;
    title:           string;
    link:            string;
    cover:           string;
    cover_small:     string;
    cover_medium:    string;
    cover_big:       string;
    cover_xl:        string;
    md5_image:       string;
    genre_id:        number;
    fans:            number;
    release_date:    Date;
    record_type:     Type;
    tracklist:       string;
    explicit_lyrics: boolean;
    type:            Type;
}

export enum Type {
    Album = "album",
    Ep = "ep",
    Single = "single",
}
