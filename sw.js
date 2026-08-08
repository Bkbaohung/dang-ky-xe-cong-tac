// Service worker tối giản — chỉ để trình duyệt cho phép "Cài đặt" app.
// Không cache dữ liệu, luôn lấy bản mới nhất từ mạng (vì lịch công tác cần cập nhật real-time).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
