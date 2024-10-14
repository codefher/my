import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [ProjectsModule, TasksModule, AuthModule, UsersModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
