export default {
  en: {
    devPage: {
      annotatedFile: {
        name: "Annotated file",
        overview: {
          name: "Overview",
          contents: [
            "DermAnnotation manages annotated files as TIFF files.",
            "The original image information, layer information, and pen information are all saved in the TIFF file.",
          ],
        },
        tiffStructure: {
          name: "TIFF file structure",
          contents: [
            {
              sentence:
                "The original image, layer and layer pen information are saved in the following format on each page of the TIFF file.",
              list: [],
            },
            {
              sentence:
                "The first image is the original image, the second and subsequent images are each layer, and are saved in the following format.",
              list: [
                "For the first image (original image), the original image is saved as it is.",
                "For the second and subsequent pixels (layers), each pixel is saved with the same color as the pen in the painted part with an alpha value of 255, and if it is not painted, the alpha value is 0.",
              ],
            },
            {
              sentence:
                "The pen name and color are saved as the name of each page in the following format.",
              list: [
                "The first page name is blank.",
                "Save the second and subsequent page names in the format of 'pen name / (R, G, B, 255)'. The pen name is a character string that does not include '/', and RBG is an integer from 0 to 255.",
              ],
            },
          ],
        },
        saveFormat: {
          name: "Save format",
          contents: [
            {
              sentence:
                "In order to read / write TIFF files that can be used with DermAnnotation normally, it is necessary to create / read TIFF files according to the following restrictions.",
              list: [
                "The height and width of all pages are the same",
                "Images are saved by the scanline method",
                "Use the LZW method as the compression method",
                "The number of samples per pixel is 4, and 4 RGBA are stored.",
              ],
            },
          ],
        },
      },
    },
  },
  ja: {
    devPage: {
      annotatedFile: {
        name: "アノテーション済みファイル",
        overview: {
          name: "概要",
          contents: [
            "DermAnnotationでは、アノテーションされたファイルをTIFFファイルとして管理します。",
            "元画像情報・レイヤ情報・ペン情報は全てTIFFファイル内に保存されます。",
          ],
        },
        tiffStructure: {
          name: "TIFFファイル構造",
          contents: [
            {
              sentence:
                "元画像、レイヤー及びレイヤーのペン情報は、TIFFファイルの各ページに以下の形式で保存されます。",
              list: [],
            },
            {
              sentence:
                "1枚目は元画像、2枚目以降は各レイヤーになり、以下の形式で保存されます。",
              list: [
                "1枚目(元画像)は、元画像をそのまま保存する。",
                "2枚目以降(レイヤー)は、各ピクセルを、塗られている部分にはペンと同じ色をアルファ値255で、塗られていない場合はアルファ値0として保存する。",
              ],
            },
            {
              sentence:
                "ペン名及び色は各ページの名前として以下の形式で保存されます。",
              list: [
                "1枚目のページ名は空白とする。",
                "2枚目以降のページ名は「ペン名/(R, G, B, 255)」の形式で保存する。ペン名は「/」を含まない文字列、RBGは0 ~ 255の整数とする。",
              ],
            },
          ],
        },
        saveFormat: {
          name: "保存形式",
          contents: [
            {
              sentence:
                "DermAnnotationで使用可能なTIFFファイルを正常に読み込み・書き込みをするためには以下の制約に従ってTIFFファイルを作成・読み込みする必要があります。",
              list: [
                "全てのページの高さ・幅が同じである",
                "画像の保存はスキャンライン法により行う",
                "圧縮方法はLZW方式を用いる",
                "1ピクセルあたりのサンプル数は4とし、RGBAの4つを格納する。",
              ],
            },
          ],
        },
      },
    },
  },
}
