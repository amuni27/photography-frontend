export class PhotographerData {
  private id: string;
  private _name: string;
  private _date_of_birth: Date;
  private _picture_url: string;
  private _artworks: ArtworkData[]


  constructor(_id: string, name: string, date_of_birth: Date, picture_url: string, artworks: ArtworkData[]) {
    this.id = _id;
    this._name = name;
    this._date_of_birth = date_of_birth;
    this._picture_url = picture_url;
    this._artworks = artworks;
  }


  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date_of_birth(): Date {
    return this._date_of_birth;
  }

  set date_of_birth(value: Date) {
    this._date_of_birth = value;
  }

  get picture_url(): string {
    return this._picture_url;
  }

  set picture_url(value: string) {
    this._picture_url = value;
  }

  get artworks(): ArtworkData[] {
    return this._artworks;
  }

  set artworks(value: ArtworkData[]) {
    this._artworks = value;
  }
}

export class ArtworkData {
  private id: string;
  private _title: string;
  private _createdYear: number;
  private _picture_url: string;


  constructor(_id: string, title: string, createdYear: number, picture_url: string) {
    this.id = _id;
    this._title = title;
    this._createdYear = createdYear;
    this._picture_url = picture_url;
  }

  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  set title(title: string) {
    this._title = title;
  }

  set createdYear(createdYear: number) {
    this._createdYear = createdYear;
  }

  set picture_url(picture_url: string) {
    this._picture_url = picture_url;
  }


  get title(): string {
    return this._title
  }

  get createdYear(): number {
    return this._createdYear
  }

  get picture_url(): string {
    return this._picture_url
  }
}
