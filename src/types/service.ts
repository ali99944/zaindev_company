export interface Discount {
  id: number
  name: string
  code: string
  amount: number
  logo: string

}

export interface ServiceCategory {
  id: 1,
  name: string,
  short: string,
  description: string,
  logo: string,
  created_at: string,
  updated_at: string
}

export interface ServiceCategoryFaq {
  id: number
  questions: string
  answer: string
  logo: string
  created_at: string
  updated_at: string
}

export interface ServiceCategoryBack {
  id: number
  client_name: string
  client_position: string
  client_message: string
  logo: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: number
  name: string
  short: string
  logo: string
  image: string
  price: string
}

