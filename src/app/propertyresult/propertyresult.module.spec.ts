import { PropertyresultModule } from './propertyresult.module';

describe('PropertyresultModule', () => {
  let propertyresultModule: PropertyresultModule;

  beforeEach(() => {
    propertyresultModule = new PropertyresultModule();
  });

  it('should create an instance', () => {
    expect(propertyresultModule).toBeTruthy();
  });
});
