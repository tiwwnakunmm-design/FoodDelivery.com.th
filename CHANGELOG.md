# 🔧 สรุปการแก้ไขไฟล์ FoodDelivery

## ปัญหาที่พบและแก้ไข

### 1. ❌ main.js - บรรทัด 16
**ปัญหา:** HTML tag ไม่ปิด
```javascript
// เดิม (ผิด):
<span class="logo-text">FoodDelivery<span>

// แก้เป็น (ถูกต้อง):
<span class="logo-text">FoodDelivery</span>
```

### 2. ❌ cart.html - บรรทัด 6  
**ปัญหา:** Title tag ไม่ปิด ทำให้หน้าตะกร้าไม่แสดง
```html
<!-- เดิม (ผิด): -->
<title>ตะกร้าสินค้า - FoodDelivery<title>

<!-- แก้เป็น (ถูกต้อง): -->
<title>ตะกร้าสินค้า - FoodDelivery</title>
```

### 3. ✅ checkout.html
- ✅ ลบฟีเจอร์บัตรเครดิต/เดบิตออกแล้ว
- ✅ เพิ่มฟีเจอร์อัปโหลดหลักฐาน QR Code
- ✅ รองรับ JPG, PNG (ไม่เกิน 5MB)

### 4. ✅ เปลี่ยนชื่อทั้งหมด
จาก "FoodExpress" เป็น "FoodDelivery" ในทุกไฟล์

---

## 📦 ไฟล์ที่ต้องแทนที่

คัดลอกไฟล์เหล่านี้ไปแทนที่ในโปรเจกต์ของคุณ:

### ไฟล์ JavaScript (โฟลเดอร์ js/)
- ✅ **main.js** - แก้ bug header และเปลี่ยนชื่อ

### ไฟล์ HTML (โฟลเดอร์ pages/)
- ✅ **cart.html** - แก้ title tag
- ✅ **checkout.html** - ลบบัตรเครดิต + เพิ่ม QR upload
- ✅ **index.html** - เปลี่ยนชื่อเป็น FoodDelivery

---

## 🚀 วิธีใช้งาน

### แบบง่าย (แนะนำ):
1. ติดตั้ง **Live Server Extension** ใน VS Code
2. คลิกขวาที่ไฟล์ HTML → **"Open with Live Server"**
3. เว็บจะเปิดที่ http://127.0.0.1:5500

### แบบไม่ต้องติดตั้ง:
- ดับเบิลคลิกที่ `index.html` หรือ `login.html`

---

## ✨ ฟีเจอร์ที่แก้ไขแล้ว

### ระบบชำระเงิน (checkout.html)
- ❌ ลบ: บัตรเครดิต/เดบิต
- ✅ เหลือ: เงินสด และ QR Code
- 📱 QR Code มี:
  - แสดง QR Code placeholder
  - ช่องอัปโหลดรูปภาพ
  - ตรวจสอบขนาดไฟล์ (max 5MB)
  - แสดงตัวอย่างรูป
  - ปุ่มลบรูป
  - บังคับอัปโหลดก่อนยืนยัน

### ชื่อเว็บไซต์
- เปลี่ยนจาก "FoodExpress" → "FoodDelivery"
- แก้ใน: Header, Footer, Title ทุกหน้า

---

## 📋 โครงสร้างไฟล์ที่ถูกต้อง

```
food-delivery/
├── css/
│   └── main.css
├── js/
│   └── main.js          ← แก้แล้ว ✅
└── pages/
    ├── index.html       ← แก้แล้ว ✅
    ├── login.html
    ├── register.html
    ├── menu.html
    ├── cart.html        ← แก้แล้ว ✅
    ├── checkout.html    ← แก้แล้ว ✅
    ├── orders.html
    ├── tracking.html
    └── profile.html
```

---

## 🐛 ถ้ายังมีปัญหา

### ปัญหา: Header/Footer ไม่แสดง
**แก้:** ตรวจสอบ path ของ main.js ว่าถูกต้อง
```html
<script src="../js/main.js"></script>
```

### ปัญหา: CSS ไม่ทำงาน
**แก้:** ตรวจสอบ path ของ main.css
```html
<link rel="stylesheet" href="../css/main.css">
```

### ปัญหา: ตะกร้าสินค้าว่างเปล่า
**แก้:** localStorage อาจถูก block - ใช้ Live Server แทน

---

## 💡 Tips

1. ใช้ **Live Server** จะดีกว่าเปิดไฟล์โดยตรง
2. กด **Ctrl+Shift+I** (F12) เปิด Console ดู error
3. ล้าง cache ถ้าเห็นการเปลี่ยนแปลงไม่อัปเดต

---

**Updated:** 2026-01-31
**Version:** 2.0 - Fixed all bugs
