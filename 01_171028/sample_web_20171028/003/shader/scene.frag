precision mediump float;
// 頂点シェーダから渡されてきた頂点カラー @@@
varying vec4 vColor;

void main(){
    // シェーダから出力する色（RGBA を 0.0 ～ 1.0 で出力） @@@
    // 最後に画面に出力する色
    gl_FragColor = vColor;
}
