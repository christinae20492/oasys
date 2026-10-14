import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PublisherModule } from './publisher/publisher.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AssignBookModule } from './assign-book/assign-book.module';

@Module({
  imports: [BookModule, UserModule, AuthorModule, PublisherModule, AssignBookModule],
  controllers: [AppController],
})
export class AppModule {}
