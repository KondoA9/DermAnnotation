export default {
  en: {
    downloadPage: {
      date: "Updated: November 22, 2021",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "Supports reading of grayscale and RGB TIFF images",
        "Improved operation when the application is closed",
        "Fixed a function to output an error when reading an unsupported TIFF image",
        "Fixed an issue where macOS could not read virtual slide images from 8192px to 16384px",
        "Other few fixes",
      ],
      bugs: [
        "Notifications may be interrupted and invisible",
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2021/11/22",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "グレースケール及びRGBのTIFF画像の読み込みに対応",
        "アプリケーション終了時の動作を改善",
        "対応していないTIFF画像を読み込んだ際にエラーを出力するように機能修正",
        "macOSで8192px以上16384px以下の病理画像を読み込めない問題を修正",
        "その他軽微な修正等",
      ],
      bugs: [
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
