export default {
  en: {
    downloadPage: {
      date: "Updated: July 8, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      noteForLinux: "Please contact us if you would like to use the Linux version.",
      releaseLabel: "Latest version update information",
      bugLabel: "Known bugs",
      releases: [
        "[Feature] Added the function to set the default save destination of the root folder (parent folder of the open folder)",
        "[Performance] Improved performance when opening folders with large numbers of files",
        "[Change] Disable automatic updates in Linux version (because it is not generally available)",
        "[Bug fix] Fixed the problem that the operation may not be possible or the application may be forcibly terminated when switching images",
        "[Bug fix] Fixed an issue where the settings of an open folder could be inherited when opening another folder",
        "[Bug fix] Fixed an issue where the application crashes when reading a folder or file that you do not have access to",
        "[Bug fix] Fixed an issue where the edges of an image could be misaligned or the app could crash when editing edges in certain environments",
        "[Bug fix] Fixed an issue where notifications may be interrupted and invisible",
        "[Bug fix] Fixed an issue where expired log files were not deleted",
      ],
      bugs: [
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/07/08",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      noteForLinux: "Linux版をご希望の場合はお問い合わせください。",
      releaseLabel: "最新バージョンの更新情報",
      bugLabel: "既知の不具合",
      releases: [
        "[Feature] ルートフォルダ（開いているフォルダの親フォルダ）の規定の保存先を設定する機能を追加",
        "[Performance] 大量のファイルが存在するフォルダを開いた際のパフォーマンスを改善",
        "[Change] Linux版において自動更新を無効化（一般に提供していないため）",
        "[Bug fix] 画像切り替え時に操作不可能、またはアプリが強制終了する場合がある問題を修正",
        "[Bug fix] 開いているフォルダの設定が別のフォルダを開いた際に引き継がれてしまう場合がある問題を修正",
        "[Bug fix] アクセス権限のないフォルダやファイル読み込み時にアプリケーションが強制終了する問題を修正",
        "[Bug fix] 特定の環境で画像の端を編集した際に場所がずれる、またはアプリがクラッシュする場合がある問題を修正",
        "[Bug fix] 通知が途中で途切れて見えない場合がある問題を修正",
        "[Bug fix] 期限切れのログファイルが削除されていなかった問題を修正",
      ],
      bugs: [
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
