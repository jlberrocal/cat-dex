export interface Cat {
    id?: number;
    name: string;
    breed: string;
    description: string;
    colors: string;
    gender: 'M' | 'F' | null;
    photo: string
}
