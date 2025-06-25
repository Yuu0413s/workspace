const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://api.syosetu.com/novelapi/api/?out=json&lim=200&of=t-w-s';

fetch(url)
.then(res => {
    if (!res.ok) throw new Error(`HTTPエラー: ${res.status}`);
    return res.json();
})

.then(data => {
    fs.writeFileSync('OC_2025/novel_info.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ 200件の情報をjsonに保存しました。');
})
.catch(err => {
    console.error('❌ エラー:', err);
});