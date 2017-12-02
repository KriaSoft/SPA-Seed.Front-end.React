import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
} from 'graphql';

const MarkType = new ObjectType({
  name: 'MarkType',
  fields: {
    id: { type: new NonNull(StringType) },
    mark: { type: new NonNull(FloatType) },
    comment: { type: new NonNull(StringType) },
    createdAt: { type: StringType },
  },
});

export default MarkType;