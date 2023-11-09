import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'], // Replace with your Kafka broker(s) address
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: 'my-topic',
    messages: [
      { value: 'Message 1' },
      { value: 'Message 2' },
    ],
  });
  await producer.disconnect();
};

produceMessage().catch(console.error);
