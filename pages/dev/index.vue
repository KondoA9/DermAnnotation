<template>
  <div>
    <Header />

    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container col-lg-6">
        <h2>アノテーション済みファイル</h2>
        <div class="container py-3">
          <h4>概要</h4>
          <div class="container">
            <p>
              DermAnnotationでは、アノテーションされたファイルをTIFFファイルとして管理します。
            </p>
            <p>
              元画像情報・レイヤ情報・ペン情報は全てTIFFファイル内に保存されます。
            </p>
          </div>
        </div>

        <div class="container py-3">
          <h4>TIFFファイル構造</h4>
          <div class="container">
            <p>
              元画像、レイヤー及びレイヤーのペン情報は、TIFFファイルの各ページに以下の形式で保存されます。
            </p>
            <p>
              1枚目は元画像、2枚目以降は各レイヤーになり、以下の形式で保存されます。
            </p>
            <ul>
              <li>1枚目(元画像)は、元画像をそのまま保存する。</li>
              <li>
                2枚目以降(レイヤー)は、各ピクセルを、塗られている部分にはペンと同じ色をアルファ値255で、塗られていない場合はアルファ値0として保存する。
              </li>
            </ul>
            <p>ペン名及び色は各ページの名前として以下の形式で保存されます。</p>
            <ul>
              <li>1枚目のページ名は空白とする。</li>
              <li>
                2枚目以降のページ名は「ペン名/(R, G, B,
                255)」の形式で保存する。ペン名は「/」を含まない文字列、RBGは0 ~
                255の整数とする。
              </li>
            </ul>
          </div>
        </div>

        <div class="container py-3">
          <h4>保存形式</h4>
          <div class="container">
            <p>
              DermAnnotationで使用可能なTIFFファイルを正常に読み込み・書き込みをするためには以下の制約に従ってTIFFファイルを作成・読み込みする必要があります。
            </p>
            <ul>
              <li>全てのページの高さ・幅が同じである</li>
              <li>画像の保存はスキャンライン法により行う</li>
              <li>圧縮方法はLZW方式を用いる</li>
              <li>1ピクセルあたりのサンプル数は4とし、RGBAの4つを格納する。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { seoMixin } from "@/modules/mixins/seoMixin"

export default Vue.extend({
  mixins: [seoMixin("dev")],
})
</script>
