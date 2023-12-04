// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {
    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }
    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('sky', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
    }
    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'sky');
        this.taro = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
        this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
        this.player_direction = 1;
    }
  // 毎フレーム実行される繰り返し処理
    update() {
        if(this.taro.y >= D_HEIGHT - 100) this.player_direction = -1
        if (this.taro.y <= 100) this.player_direction = 1;
        if(this.taro.x >= D_WIDTH - 100) this.player_direction = -1;
        if (this.taro.x <= 100) this.player_direction = 1;
        if (this.player_direction == 1) {
            this.taro.x += 5;
            this.taro.y += 5;
        } else {
            this.taro.x -= 5;
            this.taro.y -= 5;
        }
    }
}