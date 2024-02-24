export interface Tale {
    id: string;
    title: string;
    age?: string | null;
    categories?: string[] | null;
    thumbnail_url: string;
} 