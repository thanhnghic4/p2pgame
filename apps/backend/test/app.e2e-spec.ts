import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

function generateRandomString(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const id = generateRandomString(10);
const name = `name_test_${id}`;
const email = `email_test_${id}`;
const password = `test_password`;

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule.register('test')],
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

  it('Register with name', async () => {
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name,
        password,
      });

    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('register success');
  });

  it('Can not register with exists name', async () => {
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name,
        password,
      });

    expect(result.statusCode).toEqual(400);
    expect(JSON.parse(result.text).message).toEqual('username is exists');
  });

  it('Register with email', async () => {
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email,
        password,
      });

    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('register success');
  });

  it('Can not register with exists email', async () => {
    const result = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email,
        password,
      });

    expect(result.statusCode).toEqual(400);
    expect(JSON.parse(result.text).message).toEqual('email is exists');
  });

  afterAll(async () => {});
});
