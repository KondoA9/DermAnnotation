<template>
  <div>
    <Header />

    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container py-4">
        <h2 id="basic-usage">基本的な使い方</h2>
        <div class="container">
          アプリ起動後、「新規」から画像の入ったフォルダを選択します。<br />
          開いたフォルダは「最近開いたフォルダ」として保存され、次回以降すぐに作業に取り掛かることができます。<br />
        </div>
      </div>

      <div class="container py-4">
        <h2 id="available-images">使用可能な画像形式</h2>
        <div class="container">
          <ul>
            <li>jpg, png, bmp, gif 等の一般的な画像</li>
            <li>ndpi, vms, vmu, svs, scn 形式の病理画像</li>
            <li>DermAnnotationでアノテーション済みの画像</li>
            <li>
              <a href="../dev/">DermAnnotation用ファイル形式</a
              >に沿ったTIFFファイル
            </li>
            <li>縦横それぞれ16384px以下の画像（macOSの場合は8192px）</li>
          </ul>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="pencil-setting">ペンの設定</h2>
        <div class="container">
          編集画面上のメニューバー→Pencilから、ペンの設定ができます。<br />
          ペン設定は画像毎に記憶されており、今開いている画像が持つペン設定を保存することができ、保存したペン設定は別の画像を開いた際に呼び出すことが出来ます。<br />
          ペン設定はファイルとしてエクスポートすることができます。エクスポートしたファイルは別のDermAnnotationでインポートし、そのペン設定を自由に使うことが出来ます。<br />
          複数人で同じペン設定を共有する際は、1人がペンの設定をし、エクスポートしたファイルを配布・インポートすることで素早く作業に取り掛かることが可能です。<br />
        </div>
      </div>

      <div class="container py-4">
        <h2 id="virtual-slide">病理画像</h2>
        <div class="container">
          DermAnnotationは病理画像に対応していますが、完全に対応はしきれておらず、病理画像の読み込みは以下の仕様に従います。<br />
          <strong
            >病理画像のファイル内にある最も上位にあるレイヤーから順番に縦横16384px以下に該当するレイヤーを探し、最初に見つけたレイヤーただ1つを読み込む。</strong
          ><br />
          そのため、解像度が著しく低下したり、目的の画像が読み込めない場合があります。<br />
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
  mixins: [seoMixin("manual")],
})
</script>
