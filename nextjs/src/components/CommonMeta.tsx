import Head from "next/head";

/**
 * ページのメタ情報のコンポーネントです。
 */
function CommonMeta({
  title = "サブスク計算アプリ",
  description = "月額制サービスを登録し、料金の合計を計算します。",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content={`${process.env.SITE_URL}/ogp_large.png`}
      />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
}
export default CommonMeta;
