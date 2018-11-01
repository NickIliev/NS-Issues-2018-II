import 'globals';

declare const okhttp3: any;
declare const global;

global.onmessage = function(msg) {
  console.log('[WORKER] on message', msg);

  const client = new okhttp3.OkHttpClient();

  console.log('[WORKER] created auth', msg.data.auth);

  const request = new okhttp3.Request.Builder()
    .method(msg.data.method, null)
    .header('Authorization', `Basic ${msg.data.auth}`)
    .url(msg.data.url)
    .build();

    console.log('[WORKER] built request', msg.data.url);

  const response = client.newCall(request).execute();
  global.postMessage(response.body().string());
};