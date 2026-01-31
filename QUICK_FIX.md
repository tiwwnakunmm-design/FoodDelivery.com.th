# 🚀 วิธีแก้ปัญหา CSS ไม่แสดง - เวอร์ชันสั้น

## ปัญหา
เว็บแสดงแค่ HTML ธรรมดา ไม่มี CSS/JS

## สาเหตุ
Path ในไฟล์ HTML ไม่ตรงกับโครงสร้างโฟลเดอร์ใน GitHub

## วิธีแก้ (เลือก 1 ใน 2)

### วิธีที่ 1: จัดโครงสร้างโฟลเดอร์ (แนะนำ) ✅

**สร้างโครงสร้างนี้ใน GitHub:**
```
repository/
├── css/
│   └── main.css
├── js/
│   └── main.js
├── pages/
│   ├── index.html
│   ├── login.html
│   └── ... (ไฟล์ HTML อื่นๆ)
└── images/
    └── (รูปภาพ)
```

**ตั้งค่า GitHub Pages:**
- Settings → Pages
- Branch: main → /root
- Save

**URL ที่ใช้:**
```
https://username.github.io/repository/pages/index.html
```

---

### วิธีที่ 2: แก้ไข Path (ง่ายกว่า)

**วางไฟล์แบบนี้:**
```
repository/
├── index.html
├── login.html
├── menu.html
├── ... (ไฟล์ HTML อื่นๆ)
├── main.css       ← อยู่ที่ root
├── main.js        ← อยู่ที่ root
└── images/
```

**แก้ในทุกไฟล์ HTML:**

เปลี่ยน:
```html
<link rel="stylesheet" href="../css/main.css">
<script src="../js/main.js"></script>
<img src="../images/food.jpg">
```

เป็น:
```html
<link rel="stylesheet" href="main.css">
<script src="main.js"></script>
<img src="images/food.jpg">
```

**URL ที่ใช้:**
```
https://username.github.io/repository/
```

---

## ✅ ตรวจสอบความสำเร็จ

1. **กด F12 → Network tab**
   - main.css แสดง 200 (สีเขียว) ✅
   - ถ้า 404 (สีแดง) = path ผิด ❌

2. **ดูหน้าเว็บ**
   - มีสี มีการจัดรูปแบบสวย ✅
   - แสดงแค่ข้อความธรรมดา ❌

3. **ทดสอบฟีเจอร์**
   - กดปุ่มได้ ทำงาน ✅

---

## 🐛 แก้ปัญหาเพิ่ม

**ยังไม่เห็นผล?**
- รอ 1-2 นาที
- กด Ctrl+Shift+R (hard reload)
- เปิด Incognito mode

**Console error?**
- ดู F12 → Console
- ตรวจสอบ path ให้ตรงกับโฟลเดอร์

---

📖 **อ่านรายละเอียดเพิ่ม:** GITHUB_PAGES_FIX.md
