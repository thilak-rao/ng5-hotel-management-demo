/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IHotel {
  hotel_id: string;
  name: string;
  city: string;
  rate: number;
  amenities: [string];
  rooms: [string];
}
