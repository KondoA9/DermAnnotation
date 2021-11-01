export default {
  en: {
    manualPage: {
      basicUsage: {
        name: "Basic usage",
        contents: [
          "After launching the app, select the folder containing the image from 'New'.",
          "The opened folder is saved as a 'Recently opened folder' so that you can start working immediately next time.",
        ],
      },
      availableImage: {
        name: "Available image formats",
        contents: [
          "Common images such as jpg, png, bmp, gif",
          "Virtual slide images in ndpi, vms, vmu, svs, scn format",
          "Image annotated with DermAnnotation",
          "TIFF file according to the file format for DermAnnotation",
          "Images of 16384px or less in each of the vertical and horizontal directions",
        ],
      },
      pencilSettings: {
        name: "Pencil settings",
        contents: [
          "You can set the pen from the menu bar → Edit → Pen settings on the edit screen.",
          "The pen settings are stored for each image, and the pen settings of the currently open image can be saved, and the saved pen settings can be recalled when another image is opened.",
          "Pen settings can be exported as a file. You can import the exported file with another DermAnnotation and use the pen settings freely.",
          "When multiple people share the same pen settings, one person can set the pen and distribute / import the exported file so that the work can be started quickly.",
        ],
      },
      virtualSlide: {
        name: "Virtual Slide",
        contents: [
          "DermAnnotation supports virtual slide, but it is not completely compatible, and the reading of pathological images follows the specifications below.",
          "Search for the layer corresponding to 16384px or less in the vertical and horizontal directions in order from the highest layer in the virtual slide file, and load only the first layer found.",
          "Therefore, the resolution may be significantly reduced or the target image may not be read.",
        ],
      },
    },
  },
  ja: {
    manualPage: {
      basicUsage: {
        name: "基本的な使い方",
        contents: [
          "アプリ起動後、「新規」から画像の入ったフォルダを選択します。",
          "開いたフォルダは「最近開いたフォルダ」として保存され、次回以降すぐに作業に取り掛かることができます。",
        ],
      },
      availableImage: {
        name: "使用可能な画像形式",
        contents: [
          "jpg, png, bmp, gif 等の一般的な画像",
          "ndpi, vms, vmu, svs, scn 形式の病理画像",
          "DermAnnotationでアノテーション済みの画像",
          "DermAnnotation用ファイル形式に沿ったTIFFファイル",
          "縦横それぞれ16384px以下の画像（macOSの場合は8192px）",
        ],
      },
      pencilSettings: {
        name: "ペンの設定",
        contents: [
          "編集画面上のメニューバー → 編集 → ペンの設定から、ペンの設定ができます。",
          "ペン設定は画像毎に記憶されており、今開いている画像が持つペン設定を保存することができ、保存したペン設定は別の画像を開いた際に呼び出すことが出来ます。",
          "ペン設定はファイルとしてエクスポートすることができます。エクスポートしたファイルは別のDermAnnotationでインポートし、そのペン設定を自由に使うことが出来ます。",
          "複数人で同じペン設定を共有する際は、1人がペンの設定をし、エクスポートしたファイルを配布・インポートすることで素早く作業に取り掛かることが可能です。",
        ],
      },
      virtualSlide: {
        name: "病理画像",
        contents: [
          "DermAnnotationは病理画像に対応していますが、完全に対応はしきれておらず、病理画像の読み込みは以下の仕様に従います。",
          "病理画像のファイル内にある最も上位にあるレイヤーから順番に縦横16384px以下に該当するレイヤーを探し、最初に見つけたレイヤーただ1つを読み込む。",
          "そのため、解像度が著しく低下したり、目的の画像が読み込めない場合があります。",
        ],
      },
    },
  },
}
