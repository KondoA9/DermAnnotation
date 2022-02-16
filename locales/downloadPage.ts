export default {
  en: {
    downloadPage: {
      date: "Updated: January 17, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "Added the feature to open image files directly",
        "Added the feature to open a file or folder by dragging and dropping on the startup screen",
        "Changed the icon",
        "Change the design of the startup screen",
        "Other few fixes",
      ],
      bugs: [
        "May crash when saving after adding / removing pens",
        "Pen settings may not be saved properly",
        "The layout of the editor is broken when the operation panel is placed on the left side",
        "Notifications may be interrupted and invisible",
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2021/01/17",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "画像ファイルを直接開く機能を追加",
        "起動画面においてドラッグ＆ドロップでファイルまたはフォルダを開く機能を追加",
        "アイコンを変更",
        "起動画面のデザインを変更",
        "その他軽微な修正等",
      ],
      bugs: [
        "ペンを追加 / 削除後に保存するとクラッシュする場合がある",
        "ペン設定の保存が正常に行われない場合がある",
        "操作パネルを左側に配置した際にエディタのレイアウトが崩れる",
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
