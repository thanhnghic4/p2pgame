import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Server is not crash', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('Authorization is enable', async () => {
    const result = await request(app.getHttpServer()).get('/users');
    expect(result.body.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Unauthorized');
  });

  it('Register', async () => {
    const userName = 'oktestabcd';
    const userEmail = 'oktestabcd@gmail.com';
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        userName,
        userEmail,
      });
    expect(result.body.statusCode).toEqual(200);
    expect(result.body.message).toEqual('register success');
  });
});
