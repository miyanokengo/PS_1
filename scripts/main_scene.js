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
        this.load.image('jiro', 'assets/jiro.png');
    }
    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'sky');
        // this.taro = this.physics.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
        this.taro = this.physics.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
        this.jiro = this.physics.add.image(D_WIDTH/2, D_HEIGHT/2, 'jiro');
        this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
        this.text2 = this.add.text(600, 400, 'MyWorld').setFontSize(20).setColor('#ff0');

        this.helloText = this.add.text(100, 50, '');
        this.heyText = this.add.text(100, 50, '');

        this.keys = {};
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // this.taro.angle = 0;
        // this.player_direction = 1;
    }
  // 毎フレーム実行される繰り返し処理
    update() {
        // if(this.taro.y >= D_HEIGHT - 100) this.player_direction = -1
        // if (this.taro.y <= 100) this.player_direction = 1;
        // if(this.taro.x >= D_WIDTH - 100) this.player_direction = -1;
        // if (this.taro.x <= 100) this.player_direction = 1;
        // if (this.player_direction == 1) {
        //     this.taro.x += 10;
        //     this.taro.y += 10;
        // } else {
        //     this.taro.x -= 10;
        //     this.taro.y -= 10;
        // }
        // this.taro.angle += 1;
        // this.taro.setAngle(this.taro.angle);
        // this.taro.setVelocityX(50);
        // this.taro.setVelocityY(50);
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.taro.x -= 50;
            this.jiro.x += 50;
        } else if (cursors.right.isDown) {
            this.taro.x += 50;
            this.jiro.x -= 50;
        }

        if(this.keys.keyA.isDown){
            this.helloText.setText('Hello!');
        }else if(this.keys.keyS.isDown){
            this.heyText.setText('Hey!');
        }else if(this.keys.keyD.isDown){
            this.helloText.setText('');
            this.heyText.setText('');
        }
    }

}