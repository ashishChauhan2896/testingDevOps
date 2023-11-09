import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092'], // Replace with your Kafka broker(s) address
});

const consumer = kafka.consumer({ groupId: 'my-group' });

const consumeMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'my-topic' });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message on topic ${topic}, partition ${partition}: ${message.value}`);
    },
  });
};

consumeMessages().catch(console.error);
