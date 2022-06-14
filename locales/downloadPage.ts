export default {
  en: {
    downloadPage: {
      date: "Updated: May 26, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      noteForLinux: "Please contact us if you would like to use the Linux version.",
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "In this version, the settings of the previous version and the history of recently opened folders are deleted",
        "Added the function that the output folder can be specified by the relative path to the input.",
        "Fixed a memory leak issue",
      ],
      bugs: [
        "Crashes when reading a folder or file that app does not have access to",
        "Notifications may be interrupted and invisible",
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/05/26",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      noteForLinux: "Linux版をご希望の場合はお問い合わせください。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "このバージョンでは、以前のバージョンの設定・最近開いたフォルダの履歴が削除されます",
        "出力フォルダを入力に対する相対パスで指定できる機能を追加",
        "メモリリークの問題を修正",
      ],
      bugs: [
        "アクセス権限のないフォルダやファイル読み込み時にアプリケーションが強制終了する",
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
