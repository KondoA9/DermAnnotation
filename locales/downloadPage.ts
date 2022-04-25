export default {
  en: {
    downloadPage: {
      date: "Updated: April 25, 2022",
      noteForMac:
        'For macOS, a warning will be displayed at the first boot after the update. You can start it normally by right-clicking while pressing the control key from Finder and selecting "Open".',
      noteForLinux: "Please contact us if you would like to use the Linux version.",
      releaseLabel: "Changes in the latest version",
      bugLabel: "Known bugs",
      releases: [
        "Fixed an issue where the area would shift slightly when performing Back / Forward after filling a range",
        "Fixed an issue where some pens became inoperable when there were many pens on the pen edit screen (when there are many pens, you can edit all pens by scrolling)",
        'Fixed an issue where the "Default save destination" setting might not work properly',
      ],
      bugs: [
        "Notifications may be interrupted and invisible",
        "Increasing the window size on macOS makes the operation extremely heavy (reducing the window size improves the operation)",
      ],
    },
  },
  ja: {
    downloadPage: {
      date: "最終更新: 2022/04/25",
      noteForMac:
        "macOSの場合、アップデート後の初回起動時に警告が表示されます。Finderからcontrolキーを押下しながら右クリックし、「開く」を選択することで正常に起動できます。",
      noteForLinux: "Linux版をご希望の場合はお問い合わせください。",
      releaseLabel: "最新バージョンの変更点",
      bugLabel: "既知の不具合",
      releases: [
        "範囲塗りつぶし後に戻る / 進むを実行すると領域がわずかにずれる問題を修正",
        "ペン編集画面において、ペンが多数ある場合に一部のペンが操作不可能な状態になる問題を修正（ペンが多数ある場合はスクロールすることですべてのペンを編集可能です）",
        "「規定の保存先」設定が正常に働かない場合がある問題を修正",
      ],
      bugs: [
        "通知が途中で途切れて見えない場合がある",
        "macOSでウィンドウサイズを大きくすると動作が極端に重くなる (ウィンドウサイズを小さくすることで改善されます)",
      ],
    },
  },
}
