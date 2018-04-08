/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IHotel {
  id: string;
  type: string;
  name: string;
  city: string;
  rate: {
    price: number;
    code: string;
  };
  amenities: {
    private_bath: boolean;
    shared_kitchen: boolean;
    bathtub: boolean;
    shower: boolean;
    elevator: boolean;
    non_smoking: boolean;
  };
  rooms: string[];
  thumbnail: string;
  cover_photo: string;
}
