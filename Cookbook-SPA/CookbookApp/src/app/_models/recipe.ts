export interface Recipe {
    id: number;
    name: string;
    description: string;
    time: number;
    portion: number;
    favourite: boolean;
    rating: number;

    categoryId: number;
    subcategoryId: number;

}
