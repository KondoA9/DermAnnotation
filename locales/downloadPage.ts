export default {
  en: {
    downloadPage: {
      date: "Updated: October 06, 2021",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "File switching button installed at the bottom of the edit screen",
        "Improved design of UI",
        "Fixed the bug that app will crash when imported pencil settings with json of different format",
        "Fixed the bug that icons are not displayed on some windows environments",
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
      date: "最終更新: 2021/10/06",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "ファイル切り替えボタンを編集画面の下部に設置",
        "UIデザインを改善",
        "ペン設定のインポート時、異なるフォーマットのJSONファイルを読み込むとアプリケーションが強制終了する問題を修正",
        "特定のWindows環境でアイコンが表示されない場合がある問題を修正",
        "その他軽微な修正等",
      ],
      bugs: [
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
