import { Category } from './category';

export interface Subcategory {
    id: number;
    subcategoryName: string;

    categoryId: number;
    category: Category;
}
