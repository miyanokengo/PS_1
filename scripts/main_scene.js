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
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png');
        this.load.image('hanako', 'assets/hanako.png');
    }
    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
         this.add.image(D_WIDTH/2, D_HEIGHT/2, 'background');
        // taroの画像を物理演算を持った画像にする
        const taro = this.physics.add.image(D_WIDTH/3, D_HEIGHT*4/5, 'taro');
        this.taro = taro
        this.taro.angle = 0
        const jiro = this.physics.add.image(D_WIDTH, D_HEIGHT, 'jiro');
        this.jiro = jiro
        this.jiro.angle = 0
        const hanako = this.physics.add.image(D_WIDTH, D_HEIGHT, 'hanako');
        this.hanako = hanako
        this.hanako.angle = 0
        this.keys = {};
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.text = this.add.text(600, 400, 'MyWorld').setFontSize(32).setColor('#ff0');
        this.Hello_text =this.add.text(100,50,'Hello!');
        this.Hello_text.setVisible(false);
        this.Hey_text =this.add.text(100,50,'Hey!');
        this.Hey_text.setVisible(false);
    }
    hanako_move(keys,object){
        if(keys.keyW.isDown){ //Wが押されている
            let x = Phaser.Math.Between(100, 400) ;
            object.setPosition(x, 100);
        }
    }
    //   毎フレーム実行される繰り返し処理
    update(time, delta) {
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            //console.log("Left!");
            this.taro.x -= 50;// 左方向に移動
            this.jiro.x -= 50;// 左方向に移動
            }
        else if (cursors.right.isDown) {
             //console.log("Right!");
            this.taro.x += 50;// 右方向に移動
            this.jiro.x += 50;// 右方向に移動
            }
        this.input.keyboard.on('keydown-A',function (event){
            this.Hello_text.setVisible(true);
        },this);
        this.input.keyboard.on('keydown-S',function (event){
            this.Hey_text.setVisible(true);
        },this);
        this.input.keyboard.on('keydown-D',function (event){
            this.Hello_text.setVisible(false);
            this.Hey_text.setVisible(false);
        },this);
         this.hanako_move(this.keys,this.hanako);
    //      // 回転角度を更新
    //      this.taro.angle += 5;
    // // プレイヤーの向きフラグを変更
    // if (this.taro.x >= D_WIDTH - 100) this.taro_direction = -1;
    // if (this.taro.x <= 100) this.taro_direction = 1;
    // // プレイヤーの移動
    // if (this.taro_direction == 1) {
    // this.taro.x += 5;// 横方向へ移動を設定
    // this.taro.y -= 5;// 縦方向へ移動を設定
    // } else {
    // this.taro.x -= 5;// 横方向へ移動を設定
    // this.taro.y += 5;// 縦方向へ移動を設定
    //     }
        // this.taro.setVelocityX(200);
        // this.taro.setVelocityY(-200);
   }
}