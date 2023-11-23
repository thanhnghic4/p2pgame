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
    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Unauthorized');
  });

  it('Register', async () => {
    const name = 'aaa';
    const email = 'oktestabcd@gmail.com';
    const password = 'mothaiba';
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name,
        password,
      });

    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('register success');
  });
});
