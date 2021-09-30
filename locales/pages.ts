interface Meta {
  title: string
  description: string
}

interface Page {
  en: Meta
  ja: Meta
}

const topPage: Page = {
  en: {
    title: "DermAnnotation - Annotation tool for semantic segmentation",
    description:
      "Derm Annotation is an image annotation tool for semantic segmentation. Various support functions enable efficient annotation work.",
  },
  ja: {
    title: "DermAnnotation - セグメンテーションツール",
    description:
      "DermAnnotationはセマンティックセグメンテーション用の画像アノテーションツールです。様々な支援機能により効率的なアノテーション作業が可能になります。",
  },
}

const downloadPage: Page = {
  en: {
    title: "Download",
    description: "DermAnnotation is free for all users on Windows / macOS",
  },
  ja: {
    title: "ダウンロード",
    description: "DermAnnotationを無料でWindows / macOS向けにダウンロード",
  },
}

const manualPage: Page = {
  en: {
    title: "User manual",
    description: "User manual of DermAnnotation",
  },
  ja: {
    title: "ユーザーマニュアル",
    description: "DermAnnotationのマニュアル",
  },
}

const devPage: Page = {
  en: {
    title: "Documentation for developers",
    description: "Documentation of DermAnnotation for developers",
  },
  ja: {
    title: "開発者向け",
    description: "DermAnnotationの開発者向けドキュメント",
  },
}

const contactPage: Page = {
  en: {
    title: "Contact",
    description: "Contact us about DermAnnotation",
  },
  ja: {
    title: "お問い合わせ",
    description: "DermAnnotationについて問い合わせる",
  },
}

export default {
  en: {
    pages: {
      top: topPage.en,
      download: downloadPage.en,
      manual: manualPage.en,
      dev: devPage.en,
      contact: contactPage.en,
    },
  },
  ja: {
    pages: {
      top: topPage.ja,
      download: downloadPage.ja,
      manual: manualPage.ja,
      dev: devPage.ja,
      contact: contactPage.ja,
    },
  },
}
