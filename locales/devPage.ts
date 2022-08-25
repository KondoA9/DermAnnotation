export default {
  en: {
    devPage: {
      pythonPackage: {
        name: "Use DermAnnotation TIFF files in Python",
        sentences: [
          "Use ",
          " to read / write DermAnnotation TIFF files in Python.",
          "Or C++ library",
          "is also available.",
        ],
      },
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
              sentence: "The pen name and color are saved as the name of each page in the following format.",
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
              sentence: "DermAnnotation creates and reads annotation files in the following format.",
              list: [
                "The height and width of all pages are the same, and all pages should be 16384px or less.",
                "Images are saved by the scanline method.",
                "The ADOBE_DEFLATE method is used as the compression method.",
                "Planar Configuration uses the CONTIG method.",
                "Bits per sample is 8.",
                "Samples per pixel is set to 4, and RGBA is stored.",
              ],
            },
          ],
        },
      },
    },
  },
  ja: {
    devPage: {
      pythonPackage: {
        name: "PythonでDermAnnotation用TIFFファイルを扱う",
        sentences: [
          "PythonでDermAnnotation用TIFFファイルを読み書きする場合は",
          "パッケージをご利用ください。",
          "またはC++ライブラリ",
          "も利用できます。",
        ],
      },
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
              sentence: "元画像、レイヤー及びレイヤーのペン情報は、TIFFファイルの各ページに以下の形式で保存されます。",
              list: [],
            },
            {
              sentence: "1枚目は元画像、2枚目以降は各レイヤーになり、以下の形式で保存されます。",
              list: [
                "1枚目(元画像)は、元画像をそのまま保存する。",
                "2枚目以降(レイヤー)は、各ピクセルを、塗られている部分にはペンと同じ色をアルファ値255で、塗られていない場合はアルファ値0として保存する。",
              ],
            },
            {
              sentence: "ペン名及び色は各ページの名前として以下の形式で保存されます。",
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
              sentence: "DermAnnotationは以下の形式でアノテーションファイルを作成・読み込みしています。",
              list: [
                "全てのページの高さ・幅が同じで、いずれも16384px以下とする。",
                "画像の保存はスキャンライン法により行う。",
                "圧縮方法はADOBE_DEFLATE方式を用いる。",
                "PlanarConfigurationはCONTIG方式とする。",
                "Bits per sampleは8とする。",
                "Samples per pixelは4とし、RGBAを格納する。",
              ],
            },
          ],
        },
      },
    },
  },
}
