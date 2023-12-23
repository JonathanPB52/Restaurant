export interface RestaurantInterface {
    id: string
    rating: number
    name: string
    contact: Contact
    address: Address
  }
  
  export interface Contact {
    site: string
    email: string
    phone: string
  }
  
  export interface Address {
    street: string
    city: string
    state: string
    location: Location
  }
  
  export interface Location {
    lat: number
    lng: number
  }