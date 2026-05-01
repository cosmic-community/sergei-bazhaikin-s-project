export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Brand extends CosmicObject {
  type: 'brands';
  metadata: {
    name?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    website?: string;
  };
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    sku?: string;
    short_description?: string;
    description?: string;
    price?: number;
    compare_at_price?: number;
    product_status?: string;
    main_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    specifications?: Record<string, any>;
    in_stock?: boolean;
    stock_quantity?: number;
    brand?: Brand;
    categories?: Category[];
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}