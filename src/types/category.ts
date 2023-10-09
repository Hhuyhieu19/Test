export type CategoryId =
  | "Services"
  | "Product"
  | "Therapy"
  | "Combo"
;

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}
