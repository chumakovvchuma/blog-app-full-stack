import { BlogModule } from 'src/modules/blog/blog.module';
import { ConfigModule } from 'src/modules/config/config.module';
import { DatabaseModule } from 'src/modules/database/database.module';
import { GraphQLModule } from 'src/modules/graphql/graphql.module';
export declare const modulesMapper: {
    blog: typeof BlogModule;
    config: typeof ConfigModule;
    database: typeof DatabaseModule;
    graphql: typeof GraphQLModule;
};