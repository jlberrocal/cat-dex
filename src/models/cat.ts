export interface Cat {
    id?: number;
    name: string;
    breed: string;
    description: string;
    gender: 'M' | 'F' | null;
    height: number;
    weight: number;
    photo: string
}
