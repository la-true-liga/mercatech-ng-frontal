import { Category } from './category'

export interface Item {
    itemId: number;
    name: string;
    category: Category;
}
