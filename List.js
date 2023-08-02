/**
 * @for文
 * ４つの数字を配列で用意
 * 変数名:arry, newArry
 * for文で用意した数字を２倍にする
 * コンソールに出力する
 * 結果: [1] ●, 
 * https://camp.trainocate.co.jp/magazine/javascript-for-for-infor-of/
 */
const arry = [ 10, 20, 30, 40 ];
// const newArry = [];

// 初期値：繰り返す回数の初期値
// 条件式：繰り返しを継続する条件
// 増減値：「初期値」を増減する式

// for (初期値; 条件式; 増減値) {繰り返す処理}
/*
for (let i = 0; i < arry.length; i++) {
    newArry.push(arry[i] * 2)

    console.log(newArry);
}
*/


/**
 * @mapメソッド
 * 変数名:arryはfor文で使用したものを使い回す(この際for文で使わないコードはコメントアウトしておく)
 * mapメソッドで用意した数字を２倍にする
 * コンソールに出力する
 * 結果: [1] ●, 
 * https://camp.trainocate.co.jp/magazine/javascript-map/
 */

// const newArry2 = arry.map(val => val * 2)

/*
const newArry2 = arry.map(val => {
    // console.log(val);
    return val * 2
});

console.log(newArry2);
*/


/**
 * @filterメソッド
 * mapメソッドで２倍にした数字の中から、50以上の数字のみ新しい配列の要素として追加する
 * コンソールに出力する
 * https://camp.trainocate.co.jp/magazine/howto-javascript-filter/
 */


/*
const newArry3 = newArry2.filter(val => {
    console.log(val);
    return val > 50;
})

console.log(newArry3);
*/


/**
 * @mapとfilterメソッド
 * 別々に定義したmapとfilterを一つにまとめる(リファクタリング)
 * コンソールに出力する
 * https://nishinatoshiharu.com/js-operate-objects-methods/#map_filter_find:~:text=return%20%7B%20name%20%7D%0A%7D)-,map%2C%20filter%2C%20find%E3%82%92%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B%E3%81%9F%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%93%8D%E4%BD%9C%E3%81%AE%E5%85%B7%E4%BD%93%E4%BE%8B,-%E4%BB%8A%E5%9B%9E%E3%81%AE%E7%B4%B9%E4%BB%8B
 */
const newArry2 = arry.map(val => val * 2).filter(val => val > 50);

console.log(newArry2);