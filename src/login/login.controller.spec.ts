import { Test, TestingModule } from '@nestjs/testing';
import { loginController } from './login.controller';

describe('loginController', () => {
  let controller: loginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [loginController],
    }).compile();

    controller = module.get<loginController>(loginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
