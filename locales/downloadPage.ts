export default {
  en: {
    downloadPage: {
      date: "Updated: August 19, 2021",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "Added the function to crop the image at any time",
        "The backup is automatically saved when the image is saved, and the function has been improved so that all the work contents are not erased even if the saving process fails",
        "Stabilize the operation when the application is closed",
        "Improved some UI design",
        "Fixed the problem that the setting is not saved when the application is closed without returning to the menu screen after changing the setting",
        "Fixed an issue where automatic updates would fail in certain Windows environments",
      ],
      bugs: [
        "App will crash when imported pencil settings with json of different format.",
        "Icons are not displayed on some windows environments.",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2021/08/19",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "任意のタイミングで画像をトリミングする機能を追加",
        "画像保存時に自動的にバックアップを保存し、その保存処理が失敗した場合でもすべての作業内容が消去されないように機能改善",
        "アプリ終了時の動作を安定化",
        "いくつかのUIのデザインを改善",
        "設定変更後、メニュー画面に戻らずにアプリを終了すると設定が保存されない問題を修正",
        "特定のWindows環境で自動更新が失敗する問題を修正",
      ],
      bugs: [
        "ペン設定のインポート時、異なるフォーマットのJSONファイルを読み込むとアプリケーションが強制終了する。",
        "特定のWindows環境でアイコンが表示されない場合がある。",
      ],
    },
  },
}
