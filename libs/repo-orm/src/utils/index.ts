import { GqlArangoParser } from './arango-parser.utils';
import { GqlMongoParser } from './mongo-parser.utils';

export * from './deferred';
export * from './database.util';
export * from './cursor-pagination.utils';
export * from './arango-parser.utils';
export * from './mongo-parser.utils';

export const RepoOrmUtils = {
  GqlMongoParser,
  GqlArangoParser,
};
