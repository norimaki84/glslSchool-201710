precision mediump float;
uniform sampler2D texture;     // テクスチャ
varying vec2      vTexCoord;   // テクスチャ座標

const   float     focus = 0.5; // フォーカスする深度
const   float     PI    = 3.1415926;
const   float     PI2   = PI * 2.0;

void main(){
    // まずテクスチャ座標を原点中心に変換する @@@
    vec2 tex = vec2(vTexCoord.s * 2.0 - 1.0, -vTexCoord.t * 2.0 + 1.0);

    // 極座標変換 @@@
    vec2 polar = vec2((atan(tex.t, tex.s) + PI) / PI2, length(tex));
    polar = vec2(polar.s, max(1.0 - polar.t, 0.0));

    // 極座標を変換した座標を元にテクスチャを参照する
    gl_FragColor = texture2D(texture, polar);
}
