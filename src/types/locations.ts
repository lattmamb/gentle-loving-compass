
export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
  hoverImage: string;
  availableCars: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}
