const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
// โหลดข้อมูล JSON
const jsonData = JSON.parse(fs.readFileSync('dataset_3.json', 'utf8'));

// เส้นทาง API สำหรับดึงข้อมูล JSON
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์เริ่มทำงานที่ http://localhost:${PORT}`);
});
