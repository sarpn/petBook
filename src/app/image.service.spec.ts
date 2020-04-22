import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService;
  });

  it('deberia crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('#getImages', () => {
    it('deberia retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('#getImage(id)', ()=>{
    it('deberia retornar indefinido cuando se envia como id indefinido', () => {
      let id;
      let imagen = service.getImage(id);
      expect(imagen).toBeUndefined();
    });

    it('deberia retornar idendifinido cuando se envia un id no existente', () => {
      let id = 120;
      let imagen = service.getImage(id);
      expect(imagen).toBeUndefined();
    });

    it('deberia retornar un perro cuando se envia el id 1', () => {
      let id = 1;
      let imagen = service.getImage(id);
      expect(imagen.brand).toEqual('perro'); 
    });
  });
});
