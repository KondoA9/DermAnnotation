export default {
  en: {
    downloadPage: {
      date: "Updated: August 25, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      noteForLinux: "Please contact us if you would like to use the Linux version.",
      releaseLabel: "Latest version update information",
      bugLabel: "Known bugs",
      releases: [
        "[Feature]: Added rectangle filling function",
        "[Bug fix]: Fixed the problem that the operation became unstable when performing certain operations while editing",
        "[Bug fix]: Fixed the problem that the application was forcibly terminated when performing certain operations when image loading failed",
        "[Bug fix]: Fixed an issue where borders were not displayed when the pen was not moved when filling an area",
        "[Bug fix]: Fixed an issue where some UI layouts were broken",
        "[Other]: Improved operability and error notifications",
        "[Other]: Change the compression format of saved TIFF files to ADOBE DEFLATE format (improved read/write speed and reduced file size)",
      ],
      bugs: [],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/08/25",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      noteForLinux: "Linux版をご希望の場合はお問い合わせください。",
      releaseLabel: "最新バージョンの更新情報",
      bugLabel: "既知の不具合",
      releases: [
        "[Feature]: 矩形塗りつぶし機能を追加",
        "[Bug fix]: 編集中特定の操作をすると動作が不安定になる問題を修正",
        "[Bug fix]: 画像読み込み失敗時に特定の操作をするとアプリケーションが強制終了する問題を修正",
        "[Bug fix]: 範囲塗りつぶし時、ペンを移動していない際に枠線が表示されない問題を修正",
        "[Bug fix]: 一部UIのレイアウトが崩れる問題を修正",
        "[Other]: 操作性及びエラー発生時の通知を改善",
        "[Other]: 保存されるTIFFファイルの圧縮形式をADOBE DEFLATE形式へ変更（読み書き速度の向上及びファイルサイズの縮小）",
      ],
      bugs: [],
    },
  },
}
