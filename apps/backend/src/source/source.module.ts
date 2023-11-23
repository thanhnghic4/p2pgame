import { DynamicModule, Module } from '@nestjs/common';
import { sourceCheck } from '../app.symbol';
@Module({})
export class SourceModule {
  static async register(source: string): Promise<DynamicModule> {
    return {
      module: SourceModule,
      imports: [],
      controllers: [],
      providers: [
        {
          provide: sourceCheck,
          useFactory: () => {
            from: source;
          },
        },
      ],
    };
  }
}
