const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ငွေသွင်းစာရင်းများကို Database မှ ဆွဲထုတ်ရန် API (လိုအပ်ပါက အသုံးပြုရန်)
// သို့မဟုတ် Admin Panel ကို Frontend ဘက်ကနေ Firebase SDK တိုက်ရိုက်ချိတ်ပြီး ဆွဲထုတ်ရပါမည်။

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
