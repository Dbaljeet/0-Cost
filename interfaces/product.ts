export interface IProduct {
  _id: string
  title: string
  category: ICategory
  description: string
  image: string
  price: number
}

export type ICategory = 'PROTECTOR SOLAR' | 'REPARADOR' | 'CREMA'
