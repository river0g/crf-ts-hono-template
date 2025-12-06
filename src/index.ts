import { getRequestListener } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

// 共通処理
app.get('/', (c) => {
  return c.text('Hello Hono on Cloud Run Functions!');
});

// エラーハンドリング
app.onError((err, c) => {
  console.error(err);
  return c.json({ message: 'Internal Server Error' }, 500);
});

export const entryPoint = getRequestListener(app.fetch);
