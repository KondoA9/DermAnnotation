# DermAnnotation
Annotation supporting application for deep learning.

Developed by C++ / OpenSiv3D.

# What is DermAnnotation
ディープラーニングにおけるアノテーションを支援するためのアプリケーションです。

主に医療画像を対象として開発を進めています。

# Download

| Platform        | Version        | Date       |Remarks         |
|:---------------:|:---------------:|:-------------:|:-------------:|
| Windows         | [**1.5.3**](https://github.com/KondoA9/DermAnnotation/raw/master/DermAnnotation_Setup.msi) |08/24/2020 |v1.4.0以前に編集した画像を開く際はoutputImagesからアノテーション済画像の入ったフォルダを開いてください。<br>v1.3.4以前のフォルダ履歴がリセットされます。|

動作にはGPU搭載マシンを前提としています。Windowsで動作が重い場合、設定->ディスプレイ->グラフィックの設定から本アプリケーションを高パフォーマンスとして設定すると改善される場合があります。

##### *起動がブロックされる場合

Terminalで"sudo spctl --master-disable"と実行し、システム環境設定->セキュリティとプライバシー->一般->ダウンロードされたアプリケーションの実行許可で全てのアプリケーションを許可に設定してください。

##### *起動後に正常に実行されない場合

ダウンロードしたファイルをアプリケーションフォルダに移動した上で実行してください。

# Setting
datas/settingフォルダ内の各iniファイルをテキストエディタなどで編集することで、ペンの追加やウィンドウサイズ、最大拡大率などを設定することができます。

WindowsでNAS内のフォルダにアクセスする場合、エクスプローラー->PC右クリック->ネットワークドライブの割り当てからNASのフォルダをドライブに割り当てる必要があります。(例：\\\192.168.x.x\home)

# Issues

#### -アップデート通知が正常にされない場合がある。

#### -Surfaceでペンが使用できない場合がある。下記操作で改善される場合があります。
- 設定->デバイス->ペンとWindowsInk->一部のデスクトップアプリでペンをマウスとして使用できるようにするをOFFにする
- デバイスマネージャー->ヒューマンインターフェイスデバイスHID準拠ペンをアンインストールし、システムを再起動する
- [**Surface Diagnostic Toolkit**](https://www.microsoft.com/ja-jp/p/surface-diagnostic-toolkit/9nf1mr6c60zf?rtc=1&activetab=pivot:overviewtab)をダウンロードし、実行する

# Q&A
#### -画像が読み込めない、フォルダ/画像選択時にアプリがクラッシュする
画像ファイルが壊れている可能性があります。Windows標準ソフトのペイントなどで上書き保存することで問題が解消される場合があります。

#### -画像が保存されない
画像をドライブ直下におかず、フォルダの中に入れて読み込んでください。

# Release notes

### v1.5.3
* ホームページを変更

<details>
  <summary>
    以前のバージョン
  </summary>

  ### v1.5.2
  * 編集可能なTIFF画像の種類を拡大

  ### v1.5.1
  * 自由選択による塗りつぶしについて、選択完了時に自動で塗りつぶしを行うように変更
  * 透明度を一括で変更する機能を追加
  * 最近開いたフォルダの表示数制限を撤廃
  * その他不具合等の修正

  ### v1.5.0
  * ユーザーインターフェースの改善
  * 一部の処理を軽量化

  ### v1.4.2
  * 戻る/進む機能の修正が完了したため再実装しました。

  ### v1.4.1
  * ローカルで作成したものでないアノテーション済みTIFF画像が開けない場合がある問題を修正

  ### v1.4.0
  * 匿名化機能を削除
  * ローカルで作成したものでないアノテーション済みの画像を開けるように変更
  * 画像/フォルダ変更時に透明度などのパラメータをリセットするように変更

  ### v1.3.14
  * 戻る/進むを実行した場合にクラッシュする不具合が確認されたため、<br>
  データ紛失対策として修正完了まで戻る/進むを実行できないように変更しました。<br>
  ご迷惑をおかけします。

  ### v1.3.13
  * 輝度変更時にアプリケーションが強制終了する場合がある問題を修正
  * 環境によってUIが正常に表示されない場合がある問題を修正

  ### v1.3.12
  * 領域塗りつぶしが正常に行われない場合がある問題を修正

  ### v1.3.11
  * フォルダ内にリソースフォークが入っている際にクラッシュする問題を修正
  * 画像をドット表示するように変更
  * 画像編集中の負荷を低減

  ### v1.3.10
  * ペン使用時の安定性の向上
  * ペンが本来のレイヤに書けない場合がある問題を修正
  * オートセーブが不必要に行われ、本来保存されるべきでないファイルが保存されてしまう問題を修正

  ### v1.3.9
  * Windowsに設定されている拡大率に依存しないように変更(これにより拡大率によらず常に最高画質を維持できるようになります)

  ### v1.3.7-v1.3.8
  * UIを刷新し、ユーザビリティを向上しました

  ### v1.3.6
  * 一辺16384pxまでの画像に対応
  * Redo,Undoが正常に行われない不具合を修正

  ### v1.3.5
  * フォルダ履歴を削除する機能を追加
  * ファイルの暗号化を実装
  * 細かな不具合修正

  ### v1.3.4
  * ファイルの匿名化の安全性を向上

  ### v1.3.3
  * 初回起動時にクラッシュする問題を修正

  ### v1.3.2
  * インストール形式に変更
  * メモリ使用量を削減
  * 細かな機能改善と不具合修正

  ### v1.3.1
  * 正常に保存されない場合がある不具合を修正

  ### v1.3.0
  * 元画像とレイヤをまとめてTIFF形式で保存するように変更
  * 以前のアノテーション済み画像は使用できなくなります

  ### v1.2.1
  * 名称をDermAnnotationに変更
  * 読み込みを高速化
  * ディレクトリ移動ボタン使用時も開いたディレクトリを履歴に保存するように変更

  ### v1.2.0
  * 色ごとにレイヤを分割するように変更
  * これに伴い、annotetedフォルダ内の画像の保存名が変更されました
  * 以前のアノテーション済み画像は使用できなくなります

  ### v1.1.5
  * ディレクトリを前後に移動可能に変更
  * 現在操作中のディレクトリ名をタイトルバーに表示するように変更

  ### v1.1.4
  * ディレクトリの移動が正常に行われていなかった不具合を修正
  * ディレクトリの移動時に保存がされない不具合を修正

  ### v1.1.3
  * 起動の高速化
  * ファイル移動をより快適に行うためのボタンを追加
  * 画像の読み込み、保存の高速化
  * NAS内のフォルダを参照可能に
</details>
