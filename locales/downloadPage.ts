export default {
  en: {
    downloadPage: {
      date: "Updated: February 25, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "Fixed an issue that could cause a crash when saving after adding / removing pens",
        "Fixed an issue where pen settings might not be saved properly",
        "Fixed the problem that the layout of the editor is broken when the operation panel is placed on the left side.",
        "Added tooltips to some UI",
        "Improved editor operability",
        "Improve performance",
        "Added Windows standalone version",
      ],
      bugs: [
        "On the pen editing screen, some pens become inoperable when there are many pens.",
        "Notifications may be interrupted and invisible",
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/02/25",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "ペンを追加 / 削除後に保存するとクラッシュする場合がある問題を修正",
        "ペン設定の保存が正常に行われない場合がある問題を修正",
        "操作パネルを左側に配置した際にエディタのレイアウトが崩れる問題を修正",
        "いくつかのUIにツールチップを追加",
        "エディタの操作性を改善",
        "パフォーマンスを向上",
        "Windowsスタンドアローン版を追加",
      ],
      bugs: [
        "ペン編集画面において、ペンが多数ある場合に一部のペンが操作不可能な状態になる",
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
