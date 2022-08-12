export default {
  en: {
    downloadPage: {
      date: "Updated: July 22, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      noteForLinux: "Please contact us if you would like to use the Linux version.",
      releaseLabel: "Latest version update information",
      bugLabel: "Known bugs",
      releases: [
        "[Feature] Added the function to delete the pen settings registered in the application",
        "[Feature] Added the ability to set the default pen for the workspace",
        "[Feature] Added the ability to rotate the image counterclockwise",
        "[Bug fix] Fixed an issue where when opening a workspace, the folder could not be opened if the last last opened file did not exist",
        "[Bug fix] Fixed an issue where the color of already painted areas would not change when changing the pen color",
        "[Bug fix] Fixed an issue that caused areas that could not be painted when the image was rotated",
        "[Performance] Reduces memory consumption and CPU load of the entire application",
        "[Other] Other minor operation improvements",
      ],
      bugs: [
        "The application crashes when the slider in the edit panel is operated when image loading fails",
        "Operation may become unstable when painting is interrupted by going out of the image range",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/07/22",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      noteForLinux: "Linux版をご希望の場合はお問い合わせください。",
      releaseLabel: "最新バージョンの更新情報",
      bugLabel: "既知の不具合",
      releases: [
        "[Feature] アプリに登録されているペン設定を削除する機能を追加",
        "[Feature] ワークスペースのデフォルトのペンを設定する機能を追加",
        "[Feature] 画像を反時計回りに回転する機能を追加",
        "[Bug fix] ワークスペースを開いた時、前回最後に開いたファイルが存在しない場合にフォルダを開けない問題を修正",
        "[Bug fix] ペン色変更時にすでに塗られた領域の色が変更されない問題を修正",
        "[Bug fix] 画像を回転した際に塗ることができない領域が生じる問題を修正",
        "[Performance] アプリケーション全体のメモリ消費、CPU負荷を低減",
        "[Other] その他軽微な動作改善",
      ],
      bugs: [
        "画像読み込み失敗時に編集パネルのスライダーを操作するとアプリケーションが強制終了する",
        "ペイント中に画像範囲外に出て中断された際に動作が不安定になる場合がある",
      ],
    },
  },
}
