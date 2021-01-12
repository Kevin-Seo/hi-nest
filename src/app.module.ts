import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url을 가져오고, 함수를 실행하는 것
  providers: [],
})

// 오직 단 하나의 앱모듈만 존재!
export class AppModule {}
