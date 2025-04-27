import { Test, TestingModule } from '@nestjs/testing';
import { SavedApisService } from './saved-apis.service';

describe('SavedApisService', () => {
  let service: SavedApisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedApisService],
    }).compile();

    service = module.get<SavedApisService>(SavedApisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
