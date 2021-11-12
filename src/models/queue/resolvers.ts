import queueModel from './queue.model';

const { model: QueueModel } = queueModel;

const resolvers = {
  Query: {},
  Mutation: {
    createNewQueue: async (_: any, { queueName }: { queueName: string }): Promise<boolean> => {
      const newQueueModel = new QueueModel({
        name: queueName,
      });
      const newQueueRecord = await newQueueModel.save();
      return !!newQueueRecord;
    },
  },
};

export default resolvers;
