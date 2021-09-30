export default {
  en: {
    topPage: {
      summary: "A powerful annotation tool for semantic segmentation",
      note: "DermAnnotation currently available only for japanese. English version and some documentations are under construction.",
      advantages: [
        {
          summary:
            "DermAnnotation supports users by various function like followings, and make work more efficient.",
          points: [
            "Save automatically",
            "Memory working folder",
            "Able to change alpha rate",
            "Able to change image or folder smoothly",
            "Able to change operation panel to left or right side",
          ],
        },
        {
          summary:
            "DermAnnotation can load an image up to 16824px in height and width. We optimized application to be able to use such a large image, so you can work comfortably even if you need high resolution images.",
        },
        {
          summary:
            "Each pencil draw on a separate layer. You can annotate any object that overlaps with others.",
        },
        {
          summary:
            "DermAnnotation supports virtual slides. You need not to convert to jpeg or png",
        },
      ],
    },
  },
  ja: {
    topPage: {
      summary:
        "セマンティック・セグメンテーション用の学習データ作成のためのアノテーションツール",
      advantages: [
        {
          summary:
            "DermAnnotationは様々な形でユーザーをサポートし、効率的なアノテーションを可能にします。",
          points: [
            "自動保存",
            "作業フォルダを記憶",
            "透明度変更",
            "スムーズな画像 / フォルダ切り替え",
            "操作パネルの配置変更",
          ],
        },
        {
          summary:
            "DermAnnotationは、縦横最大16824pxの画像を編集することが出来ます。このような巨大な画像であってもスムーズに編集を行えるように最適化を施しているため、高解像度の学習データが必要な場合でも効率的なアノテーションが可能です。",
        },
        {
          summary:
            "各ペンはそれぞれ独自のレイヤに対して書き込みを行います。複数の要素が重なっている場合でも適切にアノテーションすることが可能です。",
        },
        {
          summary:
            "DermAnnotationは様々な形式の病理画像に対応しています。病理画像をjpegやpngに変換すること無く、そのままの状態で編集することが可能です。",
        },
      ],
    },
  },
}
