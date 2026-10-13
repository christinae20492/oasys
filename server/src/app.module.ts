import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { UserController } from './user/user.controller';
import { BookService } from './book/book.service';
import { UserService } from './user/user.service';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { PublisherModule } from './publisher/publisher.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule, UserModule, AuthorModule, PublisherModule],
  controllers: [AppController, BookController, UserController],
  providers: [AppService, BookService, UserService],
})
export class AppModule {}
