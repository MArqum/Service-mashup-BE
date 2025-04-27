import { Test, TestingModule } from '@nestjs/testing';
import { SavedApisController } from './saved-apis.controller';

describe('SavedApisController', () => {
  let controller: SavedApisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedApisController],
    }).compile();

    controller = module.get<SavedApisController>(SavedApisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
