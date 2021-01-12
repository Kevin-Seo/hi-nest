import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// contorller 의 이름 movies 가 url 의 엔트리포인트 역할을 한다.
// 따라서 MoviesController 의 url 은 localhost:3000/movies 가 됨.
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
    // return 'This will return all movies';
  }

  @Get('/:id') // @Get 의 :id 와 @Param 의 id 는 이름이 같아야 한다!
  getOne(@Param('id') movieId: Number): Movie {
    return this.moviesService.getOne(movieId);
    // return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
    // return movieData;
    // return 'This will create a movie';
  }

  @Delete('/:id') 
  remove(@Param('id') movieId: Number) {
    return this.moviesService.deleteOne(movieId);
    // return `This will delete a movie with the id: ${movieId}`;
  }

  // Put 은 리소스 전체 업데이트, Patch 은 리소스 일부 업데이트에 사용함
  @Patch('/:id')
  patch(@Param('id') movieId: Number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
    // return {
    //   updatedMovie: movieId,
    //   ...updateData,
    // }
    // return `This will patch a movie with the id: ${movieId}`;
  }
}
