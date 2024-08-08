export class PhotographerData {
    private _name: string;
    private _date_of_birth: number;
    private _artwork: ArtWork[]

    constructor(name: string, date_of_birth: number, artwork: ArtWork[]) {
        this._name = name;
        this._date_of_birth = date_of_birth;
        this._artwork = artwork;
    }

    set name(name: string) {
        this._name = name;
    }

    set date_of_birth(birthdate: number) {
        this._date_of_birth = birthdate;
    }

    set artwork(artwork: ArtWork[]) {
        this._artwork = artwork;
    }

    get name(): string {
        return this._name
    }

    get date_of_birth(): number {
        return this._date_of_birth
    }

    get artwork(): ArtWork[] {
        return this._artwork
    }
}

class ArtWork {
    private _title: string;
    private _created: number;
    private _photoUrl: string;


    constructor(title: string, created: number, photoUrl: string) {
        this._title = title;
        this._created = created;
        this._photoUrl = photoUrl;
    }

    set title(title: string) {
        this._title = title;
    }

    set created(created: number) {
        this._created = created;
    }

    set photoUrl(photoUrl: string) {
        this._photoUrl = photoUrl;
    }


    get title(): string {
        return this._title
    }

    get created(): number {
        return this._created
    }

    get photoUrl(): string {
        return this._photoUrl
    }
}